import { useState, useEffect } from 'react';

// Contact Information
const contactInfo = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    title: 'Telefon',
    subtitle: 'Hemen Ara',
    details: ['+90 553 844 86 53'],
    description: '7/24 Destek Hattı',
    link: 'tel:+905538448653',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
      </svg>
    ),
    title: 'WhatsApp',
    subtitle: 'Mesaj Gönder',
    details: ['+90 553 844 86 53'],
    description: 'Anında İletişim',
    link: 'https://wa.me/905538448653',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Adres',
    subtitle: 'Ziyaret Et',
    details: ['Ayvacık Sanayi Sitesi', 'B Blok No: 18, Çanakkale'],
    description: 'Showroom & Depo',
    link: 'https://maps.google.com/search?q=Ayvacık+Sanayi+Sitesi+B+Blok+No+18+Çanakkale',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Çalışma Saatleri',
    subtitle: 'Açık Kapılar',
    details: ['Pzt-Cmt: 08:00-18:00', 'Pazar: Kapalı'],
    description: 'Hafta İçi Hizmet',
    link: null,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  }
];

// Features
const features = [
  {
    icon: '⚡',
    title: 'Hızlı Yanıt',
    description: '5 dakika içinde geri dönüş'
  },
  {
    icon: '🔍',
    title: 'Parça Bulma',
    description: '%95 bulma başarı oranı'
  },
  {
    icon: '💰',
    title: 'Uygun Fiyat',
    description: 'Rekabetçi fiyat garantisi'
  },
  {
    icon: '🚚',
    title: 'Hızlı Teslimat',
    description: 'Aynı gün kargo imkanı'
  }
];

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-red-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <span className="animate-bounce">📞</span>
            <span>İletişim & Destek</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Aradığınız Parça İçin
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Hemen Ulaşın
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Türkiye'nin en kapsamlı oto yedek parça stoku ile aradığınız her parçayı bulup getiriyoruz. 
            <span className="text-blue-600 font-semibold">14+ yıllık deneyim</span> ile hizmetinizdeyiz.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className={`group relative transform transition-all duration-500 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 hover:border-transparent transition-all duration-500 hover:shadow-2xl group">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
                <div className={`absolute inset-px bg-white rounded-3xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6`}>
                    <div className="group-hover:animate-pulse">
                      {info.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {info.title}
                  </h3>
                  <p className={`text-sm font-semibold ${info.textColor} mb-4 group-hover:scale-105 transition-transform`}>
                    {info.subtitle}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">
                        {info.link && idx === 0 ? (
                          <a
                            href={info.link}
                            className={`${info.textColor} hover:underline font-semibold transition-all duration-300 hover:scale-105 inline-block`}
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                    {info.description}
                  </p>

                  {/* Floating Badge */}
                  {hoveredCard === index && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                      Aktif
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group">
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="animate-pulse">🚀</span>
                <span>Hızlı & Güvenilir Hizmet</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Hangi Parça Olursa Olsun
                <br />
                <span className="text-yellow-300">Biz Bulup Getiriyoruz!</span>
              </h3>
              
              <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                <strong>14 yıllık deneyim</strong> ve <strong>12,000+ parça çeşidi</strong> ile aradığınız her parçayı buluyoruz. 
                Ücretsiz fiyat teklifi için hemen iletişime geçin!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="tel:+905538448653"
                  className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl hover:shadow-3xl"
                >
                  <svg className="w-6 h-6 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Hemen Ara: +90 553 844 86 53</span>
                </a>
                
                <a
                  href="https://wa.me/905538448653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl hover:shadow-3xl"
                >
                  <svg className="w-6 h-6 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                  </svg>
                  <span>WhatsApp Mesaj</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100 text-sm">
                <div className="flex items-center gap-2">
                  <span className="animate-bounce">⚡</span>
                  <span>5 Dakika Yanıt</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="animate-bounce delay-200">🏆</span>
                  <span>%95 Bulma Oranı</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="animate-bounce delay-400">🚚</span>
                  <span>Aynı Gün Teslimat</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="animate-bounce delay-600">💰</span>
                  <span>En Uygun Fiyat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
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

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </section>
  );
} 