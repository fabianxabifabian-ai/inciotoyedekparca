import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import bcrypt from 'bcryptjs'
import prisma from '../../../lib/prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username/Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Kullanıcı adı ve şifre gerekli')
        }

        // Hem email hem username ile giriş yapabilmek için
        let user = null;
        
        // Önce email olarak ara
        if (credentials.username.includes('@')) {
          user = await prisma.user.findUnique({
            where: {
              email: credentials.username
            }
          })
        }
        
        // Email bulunamazsa veya username girilmişse, admin user kontrolü yap
        if (!user) {
          // rslkrkmz username'i için özel kontrol
          if (credentials.username === 'rslkrkmz') {
            user = await prisma.user.findUnique({
              where: {
                email: 'admin@inciotoyedekparca.com'
              }
            })
          }
        }

        if (!user || !user.isActive) {
          throw new Error('Kullanıcı bulunamadı veya aktif değil')
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          throw new Error('Geçersiz şifre')
        }

        // Son giriş zamanını güncelle
        await prisma.user.update({
          where: { id: user.id },
          data: { lastLogin: new Date() }
        })

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 saat
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
        token.name = user.name
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.role = token.role as string
        session.user.name = token.name as string
        session.user.email = token.email as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // Admin girişi sonrası admin paneline yönlendir
      if (url === '/admin/login' || url === '/api/auth/signin') {
        return `${baseUrl}/admin`
      }
      return url.startsWith(baseUrl) ? url : baseUrl
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  events: {
    async signIn(message) {
      console.log('Admin giriş:', message.user?.email, new Date().toISOString())
    }
  },
  debug: process.env.NODE_ENV === 'development',
}

export default NextAuth(authOptions) 