import { useState, useEffect } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Ana Sayfa', href: '#', section: 'hero' },
  { name: 'Ürünlerimiz', href: '#featured-products', section: 'featured-products' },
  { name: 'Hizmetlerimiz', href: '#services', section: 'services' },
  { name: 'Hakkımızda', href: '#about', section: 'about' },
  { name: 'İletişim', href: '#contact', section: 'contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll efekti için
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aktif section'ı takip et
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'featured-products', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = section === 'hero' 
          ? document.querySelector('section, main') 
          : document.getElementById(section);
        
        if (element) {
          const htmlElement = element as HTMLElement;
          const offsetTop = htmlElement.offsetTop;
          const offsetBottom = offsetTop + htmlElement.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Eğer ana sayfada değilsek, önce ana sayfaya git
    if (window.location.pathname !== '/') {
      window.location.href = sectionId === 'hero' ? '/' : `/#${sectionId}`;
      return;
    }
    
    // Ana sayfadaysak normal scroll yap
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 96; // h-24 = 96px
        const offsetTop = (element as HTMLElement).offsetTop - headerHeight;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24 py-3">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1"
          >
            <div className="w-18 h-18 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/images/logo.png" 
                alt="İnci Oto Yedek Parça Logo" 
                className="w-18 h-18 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">İnci Oto</h1>
              <p className="text-sm text-gray-600">Yedek Parça</p>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.section)}
              className={`relative px-4 py-2 text-sm font-semibold leading-6 rounded-lg transition-all duration-300 group ${
                activeSection === item.section
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
              {/* Aktif section için alt çizgi */}
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                activeSection === item.section 
                  ? 'w-8 bg-blue-600' 
                  : 'w-0 bg-transparent group-hover:w-8 group-hover:bg-blue-600'
              }`} />
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-3">
          <a
            href="tel:+905538448653"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 group"
          >
            <svg className="w-4 h-4 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>Hemen Ara</span>
          </a>
          
          <a
            href="https://wa.me/905538448653"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 group"
          >
            <svg className="w-4 h-4 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-lg p-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ana menüyü aç</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current mt-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current mt-1 transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-md">
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`block w-full text-left rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                  activeSection === item.section
                    ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent hover:border-gray-300'
                }`}
              >
                {item.name}
              </button>
            ))}
                         <div className="pt-4 border-t border-gray-200 mt-4 space-y-3">
               <a
                 href="tel:+905538448653"
                 className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center space-x-2 w-full shadow-lg"
               >
                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                 </svg>
                 <span>Hemen Ara</span>
               </a>
               
               <a
                 href="https://wa.me/905538448653"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-2 w-full shadow-lg"
               >
                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                 </svg>
                 <span>WhatsApp</span>
               </a>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
} 