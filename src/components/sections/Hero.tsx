import { useState, useEffect } from 'react';

const heroSlides = [
  {
    id: 1,
    title: "Türkiye'nin En Zengin",
    subtitle: "Oto Yedek Parça Merkezi",
    description: "2010'dan beri tüm Türkiye'ye hizmet veren İnci Oto'da binlerce çeşit ürünümüzle araçlarınıza yeni bir hayat veriyoruz.",
    image: "/images/hero-yedek-parca1.jpg",
    cta: "Hemen Ara",
    features: ["Türkiye Geneli Hizmet", "14+ Yıl Tecrübe", "Binlerce Ürün Çeşidi", "Hızlı Teslimat"]
  },
  {
    id: 2,
    title: "Binlerce Ürün Çeşidi",
    subtitle: "Olmayan Ürün Yok",
    description: "Çok zengin ürün yelpazemizle aradığınız her parçayı bulup getiriyoruz. Türkiye'nin en kapsamlı oto yedek parça stoğu.",
    image: "/images/hero-yedek-parca2.jpg",
    cta: "Stok Sorgula",
    features: ["Sınırsız Çeşit", "Her Marka Model", "Çıkma & Orijinal", "Anında Temin"]
  },
  {
    id: 3,
    title: "Türkiye Geneli Hizmet",
    subtitle: "İletişime Geçin Yeter",
    description: "Bizimle iletişime geçmeniz yeterli! Türkiye'nin neresinde olursanız olun, aradığınız parçayı bulup size ulaştırıyoruz.",
    image: "/images/hero-yedek-parca3.jpg",
    cta: "İletişime Geç",
    features: ["Türkiye Geneli", "Hızlı Ulaşım", "Kolay İletişim", "Garantili Hizmet"]
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Otomatik slider geçişi
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5 saniyede bir geçiş

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`${slide.title} - İnci Oto Yedek Parça`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="transform transition-all duration-700 ease-out">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block animate-fade-in-up">{currentSlide.title}</span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mt-2">
                  {currentSlide.subtitle}
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                {currentSlide.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8 animate-fade-in-up animation-delay-400">
                {currentSlide.features.map((feature, index) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-200 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <a
                  href="tel:+905538448653"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <svg className="w-5 h-5 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Hemen Ara</span>
                </a>
                
                <a
                  href="https://wa.me/905538448653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <svg className="w-5 h-5 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up animation-delay-800">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">14+</div>
                <div className="text-blue-200 font-medium">Yıl Tecrübe</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">3K+</div>
                <div className="text-blue-200 font-medium">Memnun Müşteri</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">12K+</div>
                <div className="text-blue-200 font-medium">Parça Çeşidi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">%95</div>
                <div className="text-blue-200 font-medium">Stok Bulabilme</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-12 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide 
                  ? 'bg-white' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Slide ${index + 1} git`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 ease-linear"
          style={{ 
            width: `${((activeSlide + 1) / heroSlides.length) * 100}%` 
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block animate-bounce">
        <div className="text-white text-center">
          <div className="text-2xl mb-2">⬇</div>
          <div className="text-sm font-medium">Keşfet</div>
        </div>
      </div>
    </section>
  );
} 