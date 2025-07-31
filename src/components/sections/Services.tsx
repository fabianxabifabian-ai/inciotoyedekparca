import { useState } from 'react';

// SEO ve Zengin İçerik Verileri
const whyChooseUs = {
  headline: "Neden İnci Oto Yedek Parça?",
  subtitle: "Çanakkale'den Türkiye'ye, 14 yıllık deneyimle güvenin adresi",
  description: "2010'dan beri otomotiv sektöründe edindiğimiz uzmanlık ve binlerce memnun müşterimizin güveniyle, araçlarınız için en kaliteli çözümleri sunuyoruz. Çıkma ve orijinal parçalarda lider konumumuzla, aradığınız her parçayı hızla temin ediyoruz.",
  expertise: [
    "Türkiye'nin en kapsamlı oto yedek parça stoku",
    "14 yıllık sektörel deneyim ve uzmanlık",
    "Çıkma ve orijinal parça tedarik ağı",
    "7/24 müşteri destek hizmeti",
    "Türkiye geneli kargo ve teslimat",
    "Kalite kontrollü ve garantili ürünler"
  ]
};

const services = [
  {
    title: "Geniş Stok Ağı",
    subtitle: "12,000+ Parça Çeşidi",
    description: "Motor parçalarından elektronik sistemlere, fren parçalarından süspansiyon elemanlarina kadar binlerce ürün çeşidiyle ihtiyacınızı karşılıyoruz.",
    icon: "🔧",
    features: ["Motor Parçaları", "Elektronik Sistemler", "Fren & Süspansiyon", "Kaportaja Elemanları"],
    stats: "12K+ Parça"
  },
  {
    title: "Hızlı Tedarik",
    subtitle: "Aynı Gün Teslimat",
    description: "Gelişmiş lojistik ağımız ve tedarikçi ilişkilerimizle aradığınız parçayı hızla bulup aynı gün kargoya veriyoruz.",
    icon: "⚡",
    features: ["Aynı Gün Kargo", "Express Teslimat", "Stok Takip Sistemi", "SMS Bilgilendirme"],
    stats: "24 Saat"
  },
  {
    title: "Kalite Garantisi",
    subtitle: "Test Edilmiş Ürünler",
    description: "Tüm çıkma parçalarımız detaylı kalite kontrolünden geçer. Orijinal parçalar için yetkili distribütör ağımızı kullanırız.",
    icon: "🛡️",
    features: ["Kalite Kontrolü", "Orijinal Parçalar", "Yetkili Distribütör", "2 Ay Garanti"],
    stats: "%95 Başarı"
  },
  {
    title: "Uzman Destek",
    subtitle: "Profesyonel Danışmanlık",
    description: "Deneyimli teknik kadromuz, doğru parça seçiminde size rehberlik eder ve montaj sürecinde destek sağlar.",
    icon: "👨‍🔧",
    features: ["Teknik Danışmanlık", "Parça Önerisi", "Montaj Desteği", "Sorun Çözme"],
    stats: "14+ Yıl"
  },
  {
    title: "Uygun Fiyat",
    subtitle: "Rekabetçi Fiyatlar",
    description: "Çıkma parçalarda %70'e varan tasarruf, orijinal parçalarda en uygun fiyat garantisi ile bütçenizi koruyoruz.",
    icon: "💰",
    features: ["Çıkma Parça Avantajı", "Fiyat Garantisi", "Esnek Ödeme", "Toptan İndirim"],
    stats: "%70 Tasarruf"
  },
  {
    title: "Türkiye Geneli",
    subtitle: "Ulusal Hizmet Ağı",
    description: "Çanakkale merkezli olarak başladığımız yolculuğumuzda, bugün Türkiye'nin her noktasına hizmet veriyoruz.",
    icon: "🇹🇷",
    features: ["81 İl Kargo", "İstanbul Depo", "Ankara Temsilcilik", "İzmir Şubesi"],
    stats: "81 İl"
  }
];

const testimonials = [
  {
    name: "Mehmet Kaya",
    role: "Ticari Araç Sahibi",
    comment: "15 yıldır çeşitli firmalarla çalıştım ama İnci Oto kadar güvenilir ve hızlı hizmet veren görmedim. Çıkma parçalarda kalite ve fiyat dengesini mükemmel yakalamışlar.",
    rating: 5,
    location: "İstanbul"
  },
  {
    name: "Ayşe Demir",
    role: "Otomobil Sahibi",
    comment: "Araçımın motor beyni arızalandığında İnci Oto sayesinde hem uygun fiyata hem de garantili bir şekilde çözüm buldum. Teknik desteği de çok başarılı.",
    rating: 5,
    location: "Ankara"
  },
  {
    name: "Ali Öztürk",
    role: "Oto Galeri Sahibi",
    comment: "Galerimin tüm yedek parça ihtiyacını İnci Oto karşılıyor. Hızlı teslimat ve geniş ürün yelpazesi sayesinde müşterilerimizi memnun ediyoruz.",
    rating: 5,
    location: "İzmir"
  }
];

const certifications = [
  { name: "ISO 9001", description: "Kalite Yönetim Sistemi" },
  { name: "CE Belgesi", description: "Avrupa Uygunluk Belgesi" },
  { name: "TSE Belgesi", description: "Türk Standartları Enstitüsü" },
  { name: "TOBB Üyelik", description: "Ticaret Odası Üyeliği" }
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoPartsStore",
            "name": "İnci Oto Yedek Parça",
            "description": whyChooseUs.description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ayvacık Sanayi Sitesi B Blok No: 18",
              "addressLocality": "Ayvacık",
              "addressRegion": "Çanakkale",
              "postalCode": "17860",
              "addressCountry": "TR"
            },
            "telephone": "+905538448653",
            "serviceArea": {
              "@type": "Country",
              "name": "Türkiye"
            },
            "foundingDate": "2010",
            "numberOfEmployees": "10-50",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          })
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/images/hero-yedek-parca2.jpg"
          alt="İnci Oto Yedek Parça Atölyesi"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <header className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            🏆 Türkiye'nin Güvenilir Oto Yedek Parça Merkezi
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {whyChooseUs.headline}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-8 max-w-4xl mx-auto">
            {whyChooseUs.subtitle}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto mb-12">
            {whyChooseUs.description}
          </p>

          {/* Uzmanlık Alanları */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whyChooseUs.expertise.map((item, index) => (
              <div key={index} className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Services Grid */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Hizmet Avantajlarımız
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            14 yıllık deneyimimizle size sunduğumuz benzersiz avantajları keşfedin
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article 
                key={service.title}
                className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 hover:shadow-xl cursor-pointer ${
                  activeService === index 
                    ? 'border-blue-500 shadow-lg transform scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Service Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {service.stats}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl filter drop-shadow-sm">{service.icon}</span>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{service.title}</h4>
                  <h5 className="text-blue-600 font-semibold mb-4">{service.subtitle}</h5>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </article>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Müşteri Görüşleri
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Binlerce memnun müşterimizin deneyimlerinden bazıları
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
                  activeTestimonial === index 
                    ? 'border-blue-500 shadow-lg transform scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onMouseEnter={() => setActiveTestimonial(index)}
              >
                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                
                {/* Comment */}
                <blockquote className="text-gray-700 italic text-center mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>
                
                {/* Author */}
                <div className="text-center">
                  <cite className="font-bold text-gray-900 not-italic">{testimonial.name}</cite>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-blue-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Kalite Belgelerimiz
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                <p className="text-xs text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Araçınız İçin Doğru Parçayı Bulalım
            </h3>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              14 yıllık deneyimimiz ve geniş stok ağımızla aradığınız her parçayı buluyoruz. 
              Ücretsiz fiyat teklifi için hemen iletişime geçin!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905538448653"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
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
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <span>🛡️</span>
                <span>2 Ay Garanti</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🚚</span>
                <span>Ücretsiz Kargo</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span>24 Saat Hizmet</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🇹🇷</span>
                <span>Türkiye Geneli</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 