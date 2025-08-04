import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { getSession, signOut } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import prisma from '../../lib/prisma'

interface DashboardStats {
  totalAnalyticsCodes: number
  activeCodes: number
  totalSeoSettings: number
  totalUsers: number
}

interface AnalyticsCode {
  id: string
  name: string
  type: string
  isActive: boolean
  priority: number
  description: string | null
  createdAt: string
}

interface AdminDashboardProps {
  stats: DashboardStats
  recentCodes: AnalyticsCode[]
  session: any
}

export default function AdminDashboard({ stats, recentCodes, session }: AdminDashboardProps) {
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    setLoading(true)
    await signOut({ callbackUrl: '/admin/login' })
  }

  return (
    <>
      <Head>
        <title>Admin Paneli - İnci Oto Yedek Parça</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  İnci Oto Admin Paneli
                </h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  Hoşgeldin, {session?.user?.name || session?.user?.email || 'Admin'}
                </span>
                <button
                  onClick={handleSignOut}
                  disabled={loading}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Çıkılıyor...' : 'Çıkış Yap'}
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* İstatistik Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Toplam Kod
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stats.totalAnalyticsCodes}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-lg">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Aktif Kod
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stats.activeCodes}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    SEO Ayarları
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stats.totalSeoSettings}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Kullanıcılar
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stats.totalUsers}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ana İçerik Alanı */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hızlı Eylemler */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                🚀 Hızlı Eylemler
              </h2>
              
              <div className="space-y-4">
                <Link 
                  href="/admin/analytics"
                  className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group"
                >
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                      Google Tag Manager
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Analytics kodlarını yönet ve düzenle
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>

                <Link 
                  href="/admin/seo"
                  className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all duration-200 group"
                >
                  <div className="p-2 bg-green-500 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-600">
                      SEO Ayarları
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Meta tagları ve SEO optimizasyonu
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>

                <Link 
                  href="/admin/settings"
                  className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg hover:from-purple-100 hover:to-violet-100 transition-all duration-200 group"
                >
                  <div className="p-2 bg-purple-500 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">
                      Sistem Ayarları
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Genel ayarları ve konfigürasyonu yönet
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Son Analytics Kodları */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                📊 Son Analytics Kodları
              </h2>
              
              {recentCodes.length > 0 ? (
                <div className="space-y-4">
                  {recentCodes.map((code) => (
                    <div key={code.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${code.isActive ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div>
                          <h3 className="font-medium text-gray-900">{code.name}</h3>
                          <p className="text-sm text-gray-600">{code.type}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        Öncelik: {code.priority}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-500">Henüz analytics kodu eklenmemiş</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session?.user) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }

  // İstatistikleri al
  const [totalAnalyticsCodes, activeCodes, totalSeoSettings, totalUsers] = await Promise.all([
    prisma.analyticsCode.count(),
    prisma.analyticsCode.count({ where: { isActive: true } }),
    prisma.seoSettings.count(),
    prisma.user.count(),
  ])

  // Son analytics kodlarını al
  const recentCodes = await prisma.analyticsCode.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      type: true,
      isActive: true,
      priority: true,
      description: true,
      createdAt: true,
    }
  })

  return {
    props: {
      stats: {
        totalAnalyticsCodes,
        activeCodes,
        totalSeoSettings,
        totalUsers,
      },
      recentCodes: recentCodes.map(code => ({
        ...code,
        createdAt: code.createdAt.toISOString(),
      })),
      session,
    },
  }
} 