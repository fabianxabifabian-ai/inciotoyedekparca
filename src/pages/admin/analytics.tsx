import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import prisma from '../../lib/prisma'

interface AnalyticsCode {
  id: string
  name: string
  type: string
  headCode: string | null
  bodyCode: string | null
  isActive: boolean
  priority: number
  description: string | null
  createdAt: string
}

interface AnalyticsPageProps {
  analyticsCodes: AnalyticsCode[]
}

const analyticsTypes = [
  { value: 'GOOGLE_TAG_MANAGER', label: 'Google Tag Manager', icon: '📊' },
  { value: 'GOOGLE_ANALYTICS', label: 'Google Analytics', icon: '📈' },
  { value: 'FACEBOOK_PIXEL', label: 'Facebook Pixel', icon: '👥' },
  { value: 'GOOGLE_ADS', label: 'Google Ads', icon: '🎯' },
  { value: 'LINKEDIN_INSIGHT', label: 'LinkedIn Insight', icon: '💼' },
  { value: 'TWITTER_PIXEL', label: 'Twitter Pixel', icon: '🐦' },
  { value: 'CUSTOM', label: 'Özel Kod', icon: '⚙️' },
]

export default function AnalyticsPage({ analyticsCodes }: AnalyticsPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCode, setEditingCode] = useState<AnalyticsCode | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    type: 'GOOGLE_TAG_MANAGER',
    headCode: '',
    bodyCode: '',
    isActive: true,
    priority: 1,
    description: '',
  })

  const handleOpenModal = (code?: AnalyticsCode) => {
    if (code) {
      setEditingCode(code)
      setFormData({
        name: code.name,
        type: code.type,
        headCode: code.headCode || '',
        bodyCode: code.bodyCode || '',
        isActive: code.isActive,
        priority: code.priority,
        description: code.description || '',
      })
    } else {
      setEditingCode(null)
      setFormData({
        name: '',
        type: 'GOOGLE_TAG_MANAGER',
        headCode: '',
        bodyCode: '',
        isActive: true,
        priority: 1,
        description: '',
      })
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingCode(null)
    setFormData({
      name: '',
      type: 'GOOGLE_TAG_MANAGER',
      headCode: '',
      bodyCode: '',
      isActive: true,
      priority: 1,
      description: '',
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = editingCode 
        ? `/api/admin/analytics/${editingCode.id}`
        : '/api/admin/analytics'
      
      const method = editingCode ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        handleCloseModal()
        router.reload()
      } else {
        const error = await response.json()
        alert(error.message || 'Bir hata oluştu')
      }
    } catch (error) {
      alert('Bir hata oluştu')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Bu analytics kodunu silmek istediğinizden emin misiniz?')) {
      return
    }

    try {
      const response = await fetch(`/api/admin/analytics/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        router.reload()
      } else {
        alert('Silme işlemi başarısız')
      }
    } catch (error) {
      alert('Bir hata oluştu')
    }
  }

  const handleToggleActive = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/admin/analytics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: !isActive }),
      })

      if (response.ok) {
        router.reload()
      } else {
        alert('Güncelleme başarısız')
      }
    } catch (error) {
      alert('Bir hata oluştu')
    }
  }

  const getTypeInfo = (type: string) => {
    return analyticsTypes.find(t => t.value === type) || { label: type, icon: '📊' }
  }

  return (
    <>
      <Head>
        <title>Analytics Yönetimi - İnci Oto Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Link href="/admin" className="text-gray-600 hover:text-gray-900">
                  ← Geri
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">
                  Analytics Yönetimi
                </h1>
              </div>
              
              <button
                onClick={() => handleOpenModal()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                + Yeni Kod Ekle
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Analytics Kodları Listesi */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-900">
                📊 Tracking Kodları
              </h2>
              <p className="text-gray-600 mt-1">
                Google Tag Manager, Google Analytics ve diğer tracking kodlarınızı yönetin
              </p>
            </div>

            {analyticsCodes.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {analyticsCodes.map((code) => {
                  const typeInfo = getTypeInfo(code.type)
                  return (
                    <div key={code.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">{typeInfo.icon}</div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {code.name}
                            </h3>
                            <p className="text-gray-600">{typeInfo.label}</p>
                            {code.description && (
                              <p className="text-sm text-gray-500 mt-1">
                                {code.description}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          {/* Durum */}
                          <div className="flex items-center space-x-2">
                            <span className={`w-3 h-3 rounded-full ${code.isActive ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                            <span className="text-sm text-gray-600">
                              {code.isActive ? 'Aktif' : 'Pasif'}
                            </span>
                          </div>

                          {/* Öncelik */}
                          <div className="text-sm text-gray-500">
                            Öncelik: {code.priority}
                          </div>

                          {/* Kod Türleri */}
                          <div className="flex space-x-2">
                            {code.headCode && (
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                HEAD
                              </span>
                            )}
                            {code.bodyCode && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                BODY
                              </span>
                            )}
                          </div>

                          {/* Eylemler */}
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleToggleActive(code.id, code.isActive)}
                              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                                code.isActive 
                                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                  : 'bg-green-100 text-green-700 hover:bg-green-200'
                              }`}
                            >
                              {code.isActive ? 'Deaktif Et' : 'Aktif Et'}
                            </button>
                            
                            <button
                              onClick={() => handleOpenModal(code)}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                              Düzenle
                            </button>
                            
                            <button
                              onClick={() => handleDelete(code.id)}
                              className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm font-medium hover:bg-red-200 transition-colors"
                            >
                              Sil
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Henüz analytics kodu eklenmemiş
                </h3>
                <p className="text-gray-600 mb-6">
                  Google Tag Manager, Analytics veya diğer tracking kodlarını ekleyerek başlayın
                </p>
                <button
                  onClick={() => handleOpenModal()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  İlk Kodu Ekle
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingCode ? 'Analytics Kodunu Düzenle' : 'Yeni Analytics Kodu Ekle'}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Temel Bilgiler */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kod Adı *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Google Tag Manager"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kod Türü *
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {analyticsTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.icon} {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Öncelik (1-10)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={formData.priority}
                      onChange={(e) => setFormData({...formData, priority: parseInt(e.target.value)})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isActive"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
                      Kodu aktif et
                    </label>
                  </div>
                </div>

                {/* Açıklama */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Açıklama
                  </label>
                  <input
                    type="text"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Bu kod hakkında kısa açıklama..."
                  />
                </div>

                {/* HEAD Kodu */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    HEAD Kodu
                    <span className="text-gray-500 text-xs ml-2">
                      (HTML &lt;head&gt; bölümüne eklenecek)
                    </span>
                  </label>
                  <textarea
                    value={formData.headCode}
                    onChange={(e) => setFormData({...formData, headCode: e.target.value})}
                    rows={8}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                    placeholder={`<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->`}
                  />
                </div>

                {/* BODY Kodu */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    BODY Kodu
                    <span className="text-gray-500 text-xs ml-2">
                      (HTML &lt;body&gt; başlangıcına eklenecek)
                    </span>
                  </label>
                  <textarea
                    value={formData.bodyCode}
                    onChange={(e) => setFormData({...formData, bodyCode: e.target.value})}
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                    placeholder={`<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`}
                  />
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end space-x-4 pt-6 border-t">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Kaydediliyor...' : (editingCode ? 'Güncelle' : 'Kaydet')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
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

  const analyticsCodes = await prisma.analyticsCode.findMany({
    orderBy: [
      { priority: 'asc' },
      { createdAt: 'desc' }
    ],
    select: {
      id: true,
      name: true,
      type: true,
      headCode: true,
      bodyCode: true,
      isActive: true,
      priority: true,
      description: true,
      createdAt: true,
    }
  })

  return {
    props: {
      analyticsCodes: analyticsCodes.map(code => ({
        ...code,
        createdAt: code.createdAt.toISOString(),
      })),
    },
  }
} 