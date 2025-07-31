import { useState, useEffect } from 'react';

// Company Timeline Data
const timeline = [
  {
    year: '2010',
    title: 'Kuruluş Yılı',
    description: 'Çanakkale Ayvacık\'ta oto yedek parça sektörüne başladık.',
    icon: '🚀',
    milestone: 'İlk Adım'
  },
  {
    year: '2015',
    title: 'Büyüme Dönemi',
    description: 'Stok kapasitemizi artırarak 5000+ parça çeşidine ulaştık.',
    icon: '📈',
    milestone: 'Büyüme'
  },
  {
    year: '2018',
    title: 'Türkiye Geneli',
    description: 'Hizmet ağımızı genişleterek tüm Türkiye\'ye ulaştık.',
    icon: '🇹🇷',
    milestone: 'Ulusal'
  },
  {
    year: '2021',
    title: 'Digital Dönüşüm',
    description: 'Online stok takip sistemi ve dijital hizmetler başlattık.',
    icon: '💻',
    milestone: 'Dijital'
  },
  {
    year: '2024',
    title: 'Liderlik',
    description: 'Çanakkale\'nin en büyük oto yedek parça merkezi olduk.',
    icon: '👑',
    milestone: 'Lider'
  }
];

// Company Values
const values = [
  {
    icon: '🔍',
    title: 'Kalite Kontrolü',
    description: 'Her parçayı titizlikle test ederek müşterilerimize garantili ürünler sunuyoruz.',
    features: ['Detaylı Test', '2 Ay Garanti', 'Kalite Belgesi', 'İade Garantisi']
  },
  {
    icon: '⚡',
    title: 'Hızlı Hizmet',
    description: 'Aynı gün kargo, hızlı teslimat ve 7/24 müşteri desteği sağlıyoruz.',
    features: ['Aynı Gün Kargo', '24/7 Destek', 'SMS Takip', 'Express Teslimat']
  },
  {
    icon: '💰',
    title: 'Uygun Fiyat',
    description: 'Çıkma parçalarda %70\'e varan tasarruf ve şeffaf fiyatlandırma.',
    features: ['Net Fiyat', 'Gizli Ücret Yok', 'Esnek Ödeme', 'Toptan İndirim']
  },
  {
    icon: '🤝',
    title: 'Güvenilirlik',
    description: '14 yıllık deneyim ve binlerce memnun müşteri güvenciyle.',
    features: ['14+ Yıl', '3K+ Müşteri', 'Referans', 'Şeffaflık']
  }
];

// Statistics with animations
const stats = [
  { 
    label: 'Yıl Deneyim', 
    value: '14+',
    suffix: '',
    color: 'from-blue-500 to-cyan-500',
    icon: '📅'
  },
  { 
    label: 'Memnun Müşteri', 
    value: '3000+',
    suffix: '',
    color: 'from-green-500 to-emerald-500',
    icon: '😊'
  },
  { 
    label: 'Parça Çeşidi', 
    value: '12000+',
    suffix: '',
    color: 'from-purple-500 to-pink-500',
    icon: '🔧'
  },
  { 
    label: 'Başarı Oranı', 
    value: '95',
    suffix: '%',
    color: 'from-orange-500 to-red-500',
    icon: '🎯'
  }
];





export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeValue, setActiveValue] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);

  // Auto-rotate timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % timeline.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate values
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll trigger for stats animation
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-stats');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/images/hero-yedek-parca1.jpg"
          alt="İnci Oto Yedek Parça Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute top-40 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <header className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            🏢 2010'dan Bu Yana Güvenin Adresi
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Çanakkale'de 
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              14 Yıllık Güven
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            2010 yılından bu yana İnci Oto Yedek Parça olarak, Çanakkale'den başlayıp 
            tüm Türkiye'ye uzanan güvenilir hizmetimizle araçlarınıza yeni bir hayat veriyoruz.
          </p>
        </header>

        {/* Company Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Yolculuğumuz
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            14 yıllık serüvenimizde attığımız önemli adımlar ve başarılarımız
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl transition-all duration-500 ${
                    activeTimeline === index 
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 scale-125' 
                      : 'bg-gray-100'
                  }`}>
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}>
                    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border transition-all duration-500 hover:shadow-xl ${
                      activeTimeline === index 
                        ? 'border-blue-500 transform scale-105' 
                        : 'border-gray-200'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          activeTimeline === index 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}>
                          {item.milestone}
                        </span>
                        <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Değerlerimiz
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Müşterilerimize sunduğumuz hizmetin temelini oluşturan değerlerimiz
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 hover:shadow-xl cursor-pointer ${
                  activeValue === index 
                    ? 'border-blue-500 shadow-lg transform scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onMouseEnter={() => setActiveValue(index)}
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl filter drop-shadow-sm">{value.icon}</span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{value.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div id="about-stats" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Rakamlarla İnci Oto
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl group ${
                  visibleStats ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                {/* Value */}
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}{stat.suffix}
                </div>
                
                {/* Label */}
                <div className="text-gray-600 font-medium">{stat.label}</div>
                
                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-300 w-0 group-hover:w-16`}></div>
              </div>
            ))}
          </div>
        </div>





        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Güvenilir Ortağınızı Seçin
            </h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              14 yıllık deneyimimiz, binlerce memnun müşterimiz ve %95 başarı oranımızla 
              araçlarınız için güvenilir çözüm ortağınız olmaya devam ediyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905538448653"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>📞</span>
                <span>Hemen Ara</span>
              </a>
              
              <a
                href="#contact"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>✉️</span>
                <span>İletişime Geç</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <span>🏆</span>
                <span>Yılın Firması 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📜</span>
                <span>ISO 9001 Belgeli</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>4.8/5 Müşteri Puanı</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🛡️</span>
                <span>Güvenli Alışveriş</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
} 