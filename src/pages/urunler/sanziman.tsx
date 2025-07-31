import { useState } from 'react';
import Layout from '@/components/layout/Layout';

const sanzimanFeatures = [
  {
    title: "Manuel & Otomatik",
    description: "Her türlü şanzıman çeşidi",
    icon: "⚙️"
  },
  {
    title: "Orijinal Kalite",
    description: "Test edilmiş orijinal parçalar",
    icon: "💎"
  },
  {
    title: "Hızlı Teslimat",
    description: "24 saat içinde kapınızda",
    icon: "🚚"
  },
  {
    title: "Uzman Montaj",
    description: "Profesyonel montaj desteği",
    icon: "🔧"
  }
];

const sanzimanGallery = [
  "/images/yedek-parca3.jpg",
  "/images/hero-yedek-parca2.jpg",
  "/images/hero-yedek-parca1.jpg",
  "/images/hero-yedek-parca3.jpg"
];

const sanzimanTypes = [
  "Manuel Şanzıman", "Otomatik Şanzıman", "CVT Şanzıman", 
  "DSG Şanzıman", "Hidrolik Şanzıman", "Yarı Otomatik"
];

export default function SanzimanPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedType, setSelectedType] = useState("Manuel Şanzıman");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[url('/images/yedek-parca3.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                Şanzıman Sistemi
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Çıkma Şanzıman
                <span className="block text-purple-400 mt-2">Orijinal Kalite</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Manuel ve otomatik şanzıman çeşitlerimizle araçlarınıza 
                güvenilir çözümler sunuyoruz. Test edilmiş, garantili parçalar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+905538448653"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Hemen Ara</span>
                </a>
                
                <a
                  href="https://wa.me/905538448653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <img 
                  src="/images/yedek-parca3.jpg" 
                  alt="Çıkma Şanzıman"
                  className="w-full h-80 object-cover rounded-xl"
                />
                
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-purple-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400">%90</div>
                    <div className="text-sm text-gray-300">Stok Oranı</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-400">3 Ay</div>
                    <div className="text-sm text-gray-300">Garanti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Şanzıman Avantajlarımız
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Her türlü şanzıman ihtiyacınız için uzman ekibimizle hizmetinizdeyiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sanzimanFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transmission Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Şanzıman Çeşitlerimiz
            </h2>
            <p className="text-lg text-gray-600">
              Tüm şanzıman türleri için geniş stok seçeneklerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sanzimanTypes.map((type, index) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  selectedType === type
                    ? 'border-purple-500 bg-purple-50 shadow-lg'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className={`text-lg font-bold mb-2 ${
                  selectedType === type ? 'text-purple-600' : 'text-gray-900'
                }`}>
                  {type}
                </h3>
                <p className="text-gray-600 text-sm">
                  Test edilmiş kaliteli parçalar
                </p>
              </button>
            ))}
          </div>

          {/* Selected Type Info */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedType} Hakkında
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Özellikler:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Test edilmiş kalite kontrolü</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>3 ay garanti süresi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Hızlı teslimat</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Montaj desteği</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Avantajlar:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">•</span>
                    <span>Orijinal kalite standartları</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">•</span>
                    <span>Ekonomik fiyat avantajı</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">•</span>
                    <span>Geniş marka uyumluluğu</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">•</span>
                    <span>Uzman teknik destek</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Şanzıman Galerisi
            </h2>
            <p className="text-lg text-gray-600">
              Kaliteli çıkma şanzımanlarımızdan örnekler
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Image */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-2xl overflow-hidden">
                <img 
                  src={sanzimanGallery[activeImage]}
                  alt={`Şanzıman Görsel ${activeImage + 1}`}
                  className="w-full h-96 object-cover transition-all duration-500"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {sanzimanGallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === index 
                        ? 'border-purple-500 scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Details */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Teknik Bilgiler
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Şanzıman Türü:</span>
                    <span className="text-gray-900">{selectedType}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Garanti Süresi:</span>
                    <span className="text-gray-900">3 Ay</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Test Durumu:</span>
                    <span className="text-gray-900">Kontrol Edildi</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Montaj:</span>
                    <span className="text-gray-900">Destek Mevcut</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="font-medium text-gray-700">Stok:</span>
                    <span className="text-green-600 font-semibold">Mevcut</span>
                  </div>
                </div>
              </div>

              {/* Process Steps */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  İşlem Süreci
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">İhtiyaç Belirleme</h4>
                      <p className="text-sm text-gray-600">Araç bilgilerinizi alıyoruz</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Stok Kontrolü</h4>
                      <p className="text-sm text-gray-600">Uygun parçayı buluyoruz</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Test & Kontrol</h4>
                      <p className="text-sm text-gray-600">Kalite kontrolünden geçiriyoruz</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Teslimat</h4>
                      <p className="text-sm text-gray-600">Hızlı ve güvenli gönderim</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Şanzıman İhtiyacınız Var mı?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Tüm marka ve model araçlar için şanzıman çözümlerimizi keşfedin
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905538448653"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Hemen Ara: +90 553 844 86 53</span>
            </a>
            
            <a
              href="https://wa.me/905538448653"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 