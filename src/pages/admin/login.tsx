import { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Giriş bilgileri hatalı')
      } else {
        router.push('/admin')
      }
    } catch (error) {
      setError('Giriş sırasında bir hata oluştu')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Admin Paneli Giriş - İnci Oto Yedek Parça</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          {/* Logo ve Başlık */}
          <div className="text-center mb-8">
            <div className="mx-auto w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
              <Image
                src="/images/logo.png"
                alt="İnci Oto Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Admin Paneli
            </h1>
            <p className="text-blue-200">
              İnci Oto Yedek Parça Yönetim Sistemi
            </p>
          </div>

          {/* Giriş Formu */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-100 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  E-posta Adresi
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                  placeholder="admin@inciotoyedekparca.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                  Şifre
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Giriş yapılıyor...</span>
                  </div>
                ) : (
                  'Giriş Yap'
                )}
              </button>
            </form>

            {/* Güvenlik Bilgisi */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center space-x-2 text-blue-200 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Güvenli bağlantı ile korunan admin paneli</span>
              </div>
            </div>
          </div>

          {/* Alt Bilgi */}
          <div className="text-center mt-8">
            <p className="text-blue-200 text-sm">
              © 2024 İnci Oto Yedek Parça. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session?.user) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
} 