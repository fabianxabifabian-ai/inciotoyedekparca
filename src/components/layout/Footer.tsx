import Link from 'next/link';
import { useState } from 'react';

const footerNavigation = {
  solutions: [
    { name: 'Motor Parçaları', href: '/urunler/motor', icon: '🔧' },
    { name: 'Şanzıman', href: '/urunler/sanziman', icon: '⚙️' },
    { name: 'ECU (Motor Beyni)', href: '/urunler/ecu', icon: '💻' },
    { name: 'Tüm Parçalar', href: '/urunler/tum-parcalar', icon: '🔍' },
  ],
  support: [
    { name: 'Hakkımızda', href: '/#about', icon: '��' },
    { name: 'İletişim', href: '/#contact', icon: '📞' },
    { name: 'Hizmetlerimiz', href: '/#services', icon: '🛠️' },
    { name: 'SSS', href: '/sss', icon: '❓' },
  ],
  company: [
    { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi', icon: '🔒' },
  ],
};

const quickActions = [
  {
    title: 'Hızlı Arama',
    description: 'Parça ara',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
      </svg>
    ),
    action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  {
    title: 'Hemen Ara',
    description: '+90 553 844 86 53',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    action: () => window.open('tel:+905538448653')
  },
  {
    title: 'WhatsApp',
    description: 'Mesaj gönder',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
      </svg>
    ),
    action: () => window.open('https://wa.me/905538448653', '_blank')
  }
];

export default function Footer() {
  const [hoveredAction, setHoveredAction] = useState<number | null>(null);

  return (
    <footer className="relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"></div>
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="footer-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#footer-grid)" className="text-white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Quick Actions Bar */}
        <div className="py-8 border-b border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <button
                key={action.title}
                onClick={action.action}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 transform hover:scale-105 text-left"
                onMouseEnter={() => setHoveredAction(index)}
                onMouseLeave={() => setHoveredAction(null)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white transition-all duration-300 ${
                    hoveredAction === index ? 'scale-110 rotate-6' : ''
                  }`}>
                    {action.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                      {action.title}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {action.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="İnci Oto Yedek Parça Logo" 
                  className="w-16 h-16 object-contain filter brightness-200"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">İnci Oto</h3>
                <p className="text-blue-300 font-medium">Yedek Parça</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              <span className="text-blue-300 font-semibold">2010'dan beri</span> Çanakkale'de güvenilir oto yedek parça hizmeti. 
              Çıkma ve orijinal parçalarda <span className="text-white font-semibold">uzmanız</span>.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="tel:+905538448653" 
                className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg p-2 -m-2"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">+90 553 844 86 53</div>
                  <div className="text-sm text-gray-400">7/24 Destek Hattı</div>
                </div>
              </a>
              
              <div className="flex items-start space-x-3 text-gray-300 p-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Ayvacık Sanayi Sitesi</div>
                  <div className="text-sm text-gray-400">B Blok No: 18, 17860 Ayvacık, Çanakkale</div>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="text-2xl mr-2">🔧</span>
              Ürünlerimiz
            </h3>
            <ul className="space-y-3">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg p-2 -m-2"
                  >
                    <span className="text-lg group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="text-2xl mr-2">🤝</span>
              Destek
            </h3>
            <ul className="space-y-3">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg p-2 -m-2"
                  >
                    <span className="text-lg group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Business Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="text-2xl mr-2">📋</span>
              Kurumsal
            </h3>
            <ul className="space-y-3 mb-8">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg p-2 -m-2"
                  >
                    <span className="text-lg group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Business Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <span className="text-lg mr-2">🕒</span>
                Çalışma Saatleri
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Pzt - Cmt</span>
                  <span className="text-white font-medium">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pazar</span>
                  <span className="text-red-400 font-medium">Kapalı</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 <span className="text-white font-semibold">İnci Oto Yedek Parça</span>. Tüm hakları saklıdır.
              <br className="md:hidden" />
              <span className="text-blue-300">Güvenilir • Hızlı • Profesyonel</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm font-medium">Bizi Takip Edin:</span>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="group w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="group w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.303-3.342-.839-1.137-.681-1.711-1.753-1.711-3.196 0-1.297.574-2.369 1.711-3.05.894-.536 2.045-.839 3.342-.839 1.297 0 2.448.303 3.342.839 1.137.681 1.711 1.753 1.711 3.05 0 1.443-.574 2.515-1.711 3.196-.894.536-2.045.839-3.342.839zm7.718-3.196c0 2.369-1.918 4.287-4.287 4.287s-4.287-1.918-4.287-4.287 1.918-4.287 4.287-4.287 4.287 1.918 4.287 4.287zM18.718 6.109c-.574 0-1.041-.467-1.041-1.041s.467-1.041 1.041-1.041 1.041.467 1.041 1.041-.467 1.041-1.041 1.041z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-700/30 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>14+ Yıl Deneyim</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>12,000+ Parça Çeşidi</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>%95 Müşteri Memnuniyeti</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Türkiye Geneli Teslimat</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Güvenli Alışveriş</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 