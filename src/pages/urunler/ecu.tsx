import { useState } from 'react';
import Layout from '@/components/layout/Layout';

const ecuFeatures = [
  {
    title: "Kodlanmış Hazır",
    description: "Aracınıza uygun kodlanmış ECU",
    icon: "💻"
  },
  {
    title: "Test Edilmiş",
    description: "Kapsamlı testlerden geçmiş",
    icon: "🔍"
  },
  {
    title: "Teknik Destek",
    description: "Montaj sonrası tam destek",
    icon: "🛠️"
  },
  {
    title: "Hızlı Çözüm",
    description: "Aynı gün teslimat imkanı",
    icon: "⚡"
  }
];

const ecuGallery = [
  "/images/yedek-parca4.jpg",
  "/images/hero-yedek-parca1.jpg",
  "/images/hero-yedek-parca2.jpg",
  "/images/hero-yedek-parca3.jpg"
];

const ecuBrands = [
  { name: "Bosch", models: ["EDC15", "EDC16", "EDC17", "MED17"] },
  { name: "Continental", models: ["SID801", "SID803", "SID807", "PCR2.1"] },
  { name: "Delphi", models: ["DCM3.2", "DCM3.5", "DCM6.2", "DDCR"] },
  { name: "Siemens", models: ["SIM2K", "PCR2.1", "VDO", "MSA15"] }
];

export default function ECUPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("Bosch");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[url('/images/yedek-parca4.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                Elektronik Sistem
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Motor Beyni
                <span className="block text-green-400 mt-2">(ECU)</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Kodlanmış ve test edilmiş motor beynleri ile aracınızın elektronik 
                sistemlerini yenileyin. Teknik destek ile birlikte sunuyoruz.
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
                  src="/images/yedek-parca4.jpg" 
                  alt="Motor Beyni ECU"
                  className="w-full h-80 object-cover rounded-xl"
                />
                
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400">%85</div>
                    <div className="text-sm text-gray-300">Stok Oranı</div>
                  </div>
                  <div className="bg-teal-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-teal-400">2 Ay</div>
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
              ECU Servis Avantajları
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Motor beyni konusunda uzman ekibimizle en kapsamlı çözümleri sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecuFeatures.map((feature, index) => (
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

      {/* ECU Brands & Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ECU Marka ve Modelleri
            </h2>
            <p className="text-lg text-gray-600">
              Tüm popüler ECU markalarını ve modellerini stokta bulunduruyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ecuBrands.map((brand, index) => (
              <button
                key={brand.name}
                onClick={() => setSelectedBrand(brand.name)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-center ${
                  selectedBrand === brand.name
                    ? 'border-green-500 bg-green-50 shadow-lg'
                    : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className={`text-2xl font-bold mb-2 ${
                  selectedBrand === brand.name ? 'text-green-600' : 'text-gray-900'
                }`}>
                  {brand.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {brand.models.length} Model Mevcut
                </p>
              </button>
            ))}
          </div>

          {/* Selected Brand Details */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {selectedBrand} ECU Modelleri
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ecuBrands.find(brand => brand.name === selectedBrand)?.models.map((model, index) => (
                <div 
                  key={model}
                  className="bg-white rounded-xl p-4 border border-green-200 hover:border-green-400 transition-colors duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-bold text-gray-900 mb-2">{model}</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Stok:</span>
                      <span className="text-green-600 font-semibold">Var</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Kodlama:</span>
                      <span className="text-blue-600 font-semibold">Hazır</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border border-green-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                {selectedBrand} ECU Özellikleri:
              </h4>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Teknik Özellikler:</h5>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Test edilmiş kalite kontrolü</li>
                    <li>• Aracınıza özel kodlama</li>
                    <li>• 2 ay garanti süresi</li>
                    <li>• Montaj sonrası test</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Hizmet Kapsamı:</h5>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Ücretsiz kodlama hizmeti</li>
                    <li>• Teknik destek</li>
                    <li>• Montaj danışmanlığı</li>
                    <li>• Sorun çözme desteği</li>
                  </ul>
                </div>
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
              ECU Galerisi
            </h2>
            <p className="text-lg text-gray-600">
              Farklı marka ve model ECU'larımızdan örnekler
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Image */}
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-2xl overflow-hidden">
                <img 
                  src={ecuGallery[activeImage]}
                  alt={`ECU Görsel ${activeImage + 1}`}
                  className="w-full h-96 object-cover transition-all duration-500"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {ecuGallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === index 
                        ? 'border-green-500 scale-105' 
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

            {/* Service Process */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  ECU Servis Süreci
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Araç Bilgisi Alma</h4>
                      <p className="text-gray-600 text-sm">Marka, model, yıl ve motor kodunu belirleriz</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">ECU Temin</h4>
                      <p className="text-gray-600 text-sm">Stoktan uygun ECU'yu seçip test ederiz</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Kodlama İşlemi</h4>
                      <p className="text-gray-600 text-sm">Aracınıza özel kodlama yapılır</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Test & Teslimat</h4>
                      <p className="text-gray-600 text-sm">Final kontrolü yapılıp teslimat gerçekleşir</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-yellow-400 text-xl">⚠️</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Önemli Uyarı
                    </h3>
                    <p className="mt-2 text-sm text-yellow-700">
                      ECU değişimi teknik bir işlemdir. Montaj öncesi mutlaka 
                      uzman desteği alın ve araç bilgilerinizi doğru paylaşın.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ECU Sorununuz mu Var?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Uzman ekibimizle kodlanmış ECU çözümlerinizi hemen alın
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905538448653"
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
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