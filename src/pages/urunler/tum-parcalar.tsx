import { useState } from 'react';
import Layout from '@/components/layout/Layout';

const serviceFeatures = [
  {
    title: "12,000+ Parça Çeşidi",
    description: "Geniş stok seçenekleri",
    icon: "🔧"
  },
  {
    title: "Türkiye Geneli Arama",
    description: "Ülke çapında parça bulma",
    icon: "🌍"
  },
  {
    title: "Hızlı Temin",
    description: "24-48 saat teslimat",
    icon: "⚡"
  },
  {
    title: "Olmayan Ürün Yok",
    description: "Her marka model için",
    icon: "🎯"
  }
];

const vehicleCategories = [
  {
    name: "Binek Araçlar",
    description: "Tüm binek araç markaları",
    brands: ["Volkswagen", "Ford", "Renault", "Fiat", "Opel", "Peugeot"],
    icon: "🚗"
  },
  {
    name: "Ticari Araçlar",
    description: "Hafif ve ağır ticari",
    brands: ["Mercedes", "Ford Transit", "Iveco", "MAN", "Scania", "Volvo"],
    icon: "🚛"
  },
  {
    name: "Premium Markalar",
    description: "Lüks araç segmenti",
    brands: ["BMW", "Mercedes", "Audi", "Volvo", "Land Rover", "Jaguar"],
    icon: "💎"
  },
  {
    name: "Asya Markaları",
    description: "Güvenilir Asya araçları",
    brands: ["Toyota", "Honda", "Hyundai", "Kia", "Nissan", "Mazda"],
    icon: "🏮"
  }
];

const partCategories = [
  "Motor Parçaları", "Şanzıman", "Fren Sistemi", "Süspansiyon",
  "Elektrik Sistemi", "Soğutma Sistemi", "Yakıt Sistemi", "Egzoz Sistemi",
  "Kaportaj Parçaları", "İç Aksesuar", "Cam ve Ayna", "Lastik ve Jant"
];

export default function TumParcalarPage() {
  const [selectedCategory, setSelectedCategory] = useState("Binek Araçlar");
  const [searchTerm, setSearchTerm] = useState("");

  const selectedCategoryData = vehicleCategories.find(cat => cat.name === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-red-800 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[url('/images/yedek-parca2.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-orange-600/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                Kapsamlı Hizmet
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Tüm Araç
                <span className="block text-orange-400 mt-2">Parçaları</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Türkiye'nin en zengin oto yedek parça stoğu ile aradığınız 
                her parçayı bulup getiriyoruz. Olmayan ürün yok!
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4">Hızlı Parça Arama</h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Araç markası, model veya parça adı..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <a
                    href="tel:+905538448653"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Ara</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/905538448653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                  </svg>
                  <span>WhatsApp ile Sor</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <img 
                  src="/images/yedek-parca2.jpg" 
                  alt="Tüm Araç Parçaları"
                  className="w-full h-80 object-cover rounded-xl"
                />
                
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-orange-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-400">12K+</div>
                    <div className="text-sm text-gray-300">Parça Çeşidi</div>
                  </div>
                  <div className="bg-red-500/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-red-400">%95</div>
                    <div className="text-sm text-gray-300">Bulabilme</div>
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
              Neden İnci Oto?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Türkiye'nin en kapsamlı oto yedek parça ağı ile hizmetinizdeyiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
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

      {/* Vehicle Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Araç Kategorileri
            </h2>
            <p className="text-lg text-gray-600">
              Tüm araç türleri için geniş parça seçeneklerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {vehicleCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-center ${
                  selectedCategory === category.name
                    ? 'border-orange-500 bg-orange-50 shadow-lg'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${
                  selectedCategory === category.name ? 'text-orange-600' : 'text-gray-900'
                }`}>
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </button>
            ))}
          </div>

          {/* Selected Category Details */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">{selectedCategoryData?.icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedCategory} Parçaları
                </h3>
                <p className="text-gray-600">{selectedCategoryData?.description}</p>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Desteklenen Markalar:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              {selectedCategoryData?.brands.map((brand, index) => (
                <div 
                  key={brand}
                  className="bg-white rounded-lg px-4 py-3 text-center border border-orange-200 hover:border-orange-400 transition-colors duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium text-gray-700">{brand}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Mevcut Parça Türleri:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {partCategories.slice(0, 6).map((part, index) => (
                    <div key={part} className="flex items-center space-x-2">
                      <span className="text-orange-500">•</span>
                      <span className="text-sm text-gray-600">{part}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Diğer Parçalar:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {partCategories.slice(6).map((part, index) => (
                    <div key={part} className="flex items-center space-x-2">
                      <span className="text-orange-500">•</span>
                      <span className="text-sm text-gray-600">{part}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-lg text-gray-600">
              Aradığınız parçaya ulaşmak çok kolay
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">İletişime Geçin</h3>
              <p className="text-gray-600">
                Telefon veya WhatsApp ile bizimle iletişime geçin
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bilgi Paylaşın</h3>
              <p className="text-gray-600">
                Araç marka, model, yıl ve ihtiyacınız olan parçayı belirtin
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Parça Bulma</h3>
              <p className="text-gray-600">
                Türkiye genelindeki ağımızdan parçanızı buluyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hızlı Teslimat</h3>
              <p className="text-gray-600">
                24-48 saat içinde parçanız elinizde
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Özel Durumlar İçin
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Çok nadir bulunan veya vintage araç parçaları için özel arama hizmetimiz
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔍</div>
                  <h4 className="font-semibold text-gray-900">Özel Arama</h4>
                  <p className="text-sm text-gray-600">Nadir parçalar için geniş ağ araması</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🏭</div>
                  <h4 className="font-semibold text-gray-900">Sanayi Bağlantıları</h4>
                  <p className="text-sm text-gray-600">Hurda ve sanayi sitesi ağımız</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚚</div>
                  <h4 className="font-semibold text-gray-900">Özel Kargo</h4>
                  <p className="text-sm text-gray-600">Hassas parçalar için özel taşıma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Aradığınız Parçayı Bulamadınız mı?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Bizimle iletişime geçin, size en uygun çözümü bulalım. Olmayan ürün yok!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905538448653"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
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