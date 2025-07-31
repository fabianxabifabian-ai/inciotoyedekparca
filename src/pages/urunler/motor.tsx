import { useState } from 'react';
import Layout from '@/components/layout/Layout';

const motorFeatures = [
  {
    title: "Test Edilmiş Kalite",
    description: "Her motor kapsamlı testlerden geçirilir",
    icon: "🔧"
  },
  {
    title: "6 Ay Garanti",
    description: "Güvenilir garanti sistemi",
    icon: "✅"
  },
  {
    title: "Hızlı Teslimat",
    description: "24 saat içinde kargo",
    icon: "🚚"
  },
  {
    title: "Profesyonel Destek",
    description: "Uzman ekip desteği",
    icon: "👨‍🔧"
  }
];

const motorGallery = [
  "/images/yedek-parca1.jpg",
  "/images/hero-yedek-parca1.jpg",
  "/images/hero-yedek-parca2.jpg",
  "/images/hero-yedek-parca3.jpg"
];

const compatibleBrands = [
  "Volkswagen", "BMW", "Mercedes", "Audi", "Ford", "Opel", 
  "Renault", "Peugeot", "Fiat", "Toyota", "Honda", "Hyundai"
];

export default function MotorPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[url('/images/yedek-parca1.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                Motor Sistemi
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Çıkma Motor
                <span className="block text-blue-400 mt-2">Test Edilmiş Kalite</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                14 yıllık deneyimimizle test edilmiş, garantili çıkma motorlar. 
                Tüm marka ve modeller için uygun çözümler sunuyoruz.
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
                
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Fiyat Teklifi Al
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <img 
                  src="/images/yedek-parca1.jpg" 
                  alt="Çıkma Motor"
                  className="w-full h-80 object-cover rounded-xl"
                />
                
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400">%95</div>
                    <div className="text-sm text-gray-300">Stok Oranı</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-400">6 Ay</div>
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
              Neden İnci Oto Motor?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kaliteli çıkma motorlar konusunda uzman ekibimizle size en iyi hizmeti sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {motorFeatures.map((feature, index) => (
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

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Motor Galerisi
            </h2>
            <p className="text-lg text-gray-600">
              Kaliteli çıkma motorlarımızdan örnekler
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Image */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-2xl overflow-hidden">
                <img 
                  src={motorGallery[activeImage]}
                  alt={`Motor Görsel ${activeImage + 1}`}
                  className="w-full h-96 object-cover transition-all duration-500"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {motorGallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === index 
                        ? 'border-blue-500 scale-105' 
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
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Teknik Özellikler
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Test Süreci:</span>
                    <span className="text-gray-900">Kapsamlı Kontrol</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Garanti Süresi:</span>
                    <span className="text-gray-900">6 Ay</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Teslimat:</span>
                    <span className="text-gray-900">24 Saat</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Montaj Desteği:</span>
                    <span className="text-gray-900">Mevcut</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="font-medium text-gray-700">Stok Durumu:</span>
                    <span className="text-green-600 font-semibold">Mevcut</span>
                  </div>
                </div>
              </div>

              {/* Compatible Brands */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Uyumlu Markalar
                </h3>
                
                <div className="grid grid-cols-3 gap-3">
                  {compatibleBrands.map((brand, index) => (
                    <div 
                      key={brand}
                      className="bg-gray-50 rounded-lg px-3 py-2 text-center text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Aradığınız Motoru Bulamadınız mı?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Bizimle iletişime geçin, size en uygun çıkma motoru bulalım
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905538448653"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
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