import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Çıkma Motor',
    category: 'Motor Sistemi',
    description: 'Test edilmiş, garantili çıkma motorlar. Tüm marka ve modeller için uygun çözümler.',
    features: ['Test Edilmiş', 'Garantili', 'Tüm Markalar'],
    image: '/images/yedek-parca1.jpg',
    isProduct: true,
    detailUrl: '/urunler/motor'
  },
  {
    id: 2,
    name: 'Çıkma Şanzıman',
    category: 'Şanzıman Sistemi',
    description: 'Orijinal kalitede çıkma şanzımanlar. Manuel ve otomatik şanzıman çeşitleri.',
    features: ['Orijinal Kalite', 'Test Edilmiş', 'Hızlı Teslimat'],
    image: '/images/yedek-parca3.jpg',
    isProduct: true,
    detailUrl: '/urunler/sanziman'
  },
  {
    id: 3,
    name: 'Motor Beyni (ECU)',
    category: 'Elektronik Sistem',
    description: 'Kodlanmış ve test edilmiş motor beynleri. Teknik destek ile birlikte.',
    features: ['Kodlanmış', 'Test Edilmiş', 'Teknik Destek'],
    image: '/images/yedek-parca4.jpg',
    isProduct: true,
    detailUrl: '/urunler/ecu'
  },
  {
    id: 4,
    name: 'Tüm Araç Parçaları',
    category: 'Kapsamlı Hizmet',
    description: 'Hangi marka ve model araç olursa olsun, aradığınız parçayı bulup getiriyoruz.',
    features: ['12,000+ Parça Çeşidi', 'Türkiye Geneli Arama', 'Hızlı Temin'],
    image: '/images/yedek-parca2.jpg',
    isProduct: false,
    detailUrl: '/urunler/tum-parcalar'
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Ürün Portföyümüz
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kaliteli Yedek Parça 
            <span className="block text-blue-600">Çözümlerimiz</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            14 yıllık deneyimimizle, test edilmiş kaliteli çıkma ve orijinal parçalarla 
            araçlarınıza en uygun çözümleri sunuyoruz.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 flex flex-col h-full ${!product.isProduct ? 'ring-2 ring-blue-500 ring-opacity-20' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Special Badge for All Parts Card */}
              {!product.isProduct && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 animate-pulse">
                  HİZMET
                </div>
              )}

              {/* Product Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={`${product.name} - İnci Oto Yedek Parça`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="mb-3 flex-shrink-0">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    product.isProduct 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                  }`}>
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed flex-shrink-0">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6 flex-grow">
                  {product.features.map((feature, featureIndex) => (
                    <div 
                      key={feature} 
                      className="flex items-center text-sm text-gray-700"
                      style={{ animationDelay: `${(index * 100) + (featureIndex * 50)}ms` }}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                        product.isProduct ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        <span className={`text-xs font-bold ${
                          product.isProduct ? 'text-green-600' : 'text-blue-600'
                        }`}>
                          ✓
                        </span>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0">
                  {product.isProduct ? (
                    <Link
                      href={product.detailUrl}
                      className="group/btn relative w-full bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 hover:from-slate-700 hover:via-slate-800 hover:to-slate-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl overflow-hidden block"
                    >
                      {/* Glassmorphism overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      <div className="relative flex items-center justify-center space-x-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full group-hover/btn:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <span className="font-semibold tracking-wide">Detayları Gör</span>
                        <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:translate-x-1 transition-transform duration-300">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      href={product.detailUrl}
                      className="group/btn relative w-full bg-gradient-to-r from-red-500 via-red-600 to-red-500 hover:from-red-600 hover:via-red-700 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl overflow-hidden block"
                    >
                      {/* Glassmorphism overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      <div className="relative flex items-center justify-center space-x-3">
                        <div className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full group-hover/btn:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <span className="font-semibold tracking-wide">Detayları Gör</span>
                        <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:translate-x-1 transition-transform duration-300">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 