import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

const GizlilikPolitikasi: NextPage = () => {
  const sections = [
    {
      title: "1. Genel Bilgiler",
      content: `Bu gizlilik politikası, İnci Oto Yedek Parça olarak kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında bilgi vermektedir. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla hareket etmekteyiz.`
    },
    {
      title: "2. Toplanan Kişisel Veriler",
      content: `Hizmetlerimizden fararlanırken aşağıdaki kişisel verilerinizi toplayabiliriz:
      
      • Ad, soyad, telefon numarası, e-posta adresi
      • Araç bilgileri (marka, model, yıl)
      • İletişim tercihleri
      • İşlem geçmişi ve sipariş bilgileri
      • Web sitesi kullanım verileri`
    },
    {
      title: "3. Veri Toplama Yöntemleri",
      content: `Kişisel verileriniz aşağıdaki yollarla toplanmaktadır:
      
      • Web sitesi üzerinden yapılan başvurular
      • Telefon ile iletişim kurulması
      • WhatsApp mesajlaşma
      • Fiziksel mağaza ziyaretleri
      • E-posta yazışmaları`
    },
    {
      title: "4. Veri İşleme Amaçları",
      content: `Kişisel verilerinizi aşağıdaki amaçlarla işlemekteyiz:
      
      • Müşteri hizmetleri sunumu
      • Ürün ve hizmet önerilerinde bulunma
      • İletişim kurma ve bilgilendirme
      • Yasal yükümlülüklerin yerine getirilmesi
      • İş süreçlerinin yürütülmesi
      • Kalite kontrolü ve müşteri memnuniyeti`
    },
    {
      title: "5. Veri Paylaşımı",
      content: `Kişisel verileriniz, KVKK ve ilgili mevzuat uyarınca:
      
      • Kanunen yetkili kamu kurum ve kuruluşları ile
      • İş ortaklarımız ve tedarikçilerimizle (gerektiğinde)
      • Hukuki yükümlülükler çerçevesinde paylaşılabilir
      
      Verileriniz ticari amaçlarla üçüncü şahıslarla paylaşılmaz.`
    },
    {
      title: "6. Veri Güvenliği",
      content: `Kişisel verilerinizin güvenliği için:
      
      • Teknik ve idari güvenlik tedbirleri alınmıştır
      • Yetkisiz erişimlere karşı koruma sağlanmıştır
      • Düzenli güvenlik kontrolleri yapılmaktadır
      • Personel eğitimleri düzenlenmektedir`
    },
    {
      title: "7. Veri Saklama Süreleri",
      content: `Kişisel verileriniz:
      
      • İşleme amaçları için gerekli olan süre boyunca
      • Yasal saklama yükümlülükleri süresince
      • En fazla 10 yıl süreyle saklanmaktadır
      
      Bu sürelerin sonunda veriler güvenli şekilde silinmektedir.`
    },
    {
      title: "8. Haklarınız",
      content: `KVKK kapsamında sahip olduğunuz haklar:
      
      • Kişisel verilerinizin işlenip işlenmediğini öğrenme
      • İşlenen verilerinize ilişkin bilgi talep etme
      • İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme
      • Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
      • Eksik veya yanlış işlenen verilerin düzeltilmesini isteme
      • Verilerin silinmesini veya yok edilmesini isteme
      • Düzeltme, silme ve yok edilme işlemlerinin paylaşıldığı üçüncü kişilere bildirilmesini isteme
      • İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhte bir sonucun ortaya çıkmasına itiraz etme
      • Kanunsuz veri işleme nedeniyle zarara uğraması halinde zararın giderilmesini talep etme`
    },
    {
      title: "9. İletişim",
      content: `Gizlilik politikamız ile ilgili sorularınız veya haklarınızı kullanmak için:
      
      📧 E-posta: info@inciotoyedekparca.com
      📞 Telefon: +90 553 844 86 53
      📍 Adres: Ayvacık Sanayi Sitesi B Blok No: 18, 17860 Ayvacık, Çanakkale
      
      Başvurularınız en geç 30 gün içinde değerlendirilecektir.`
    },
    {
      title: "10. Politika Güncellemeleri",
      content: `Bu gizlilik politikası gerektiğinde güncellenebilir. Güncellemeler web sitemizde yayınlanacak ve önemli değişiklikler için size bilgi verilecektir. Son güncelleme tarihi: ${new Date().toLocaleDateString('tr-TR')}`
    }
  ];

  return (
    <>
      <Head>
        <title>Gizlilik Politikası | İnci Oto Yedek Parça</title>
        <meta 
          name="description" 
          content="İnci Oto Yedek Parça gizlilik politikası. Kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında detaylı bilgi."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://inciotoyedekparca.com/gizlilik-politikasi" />
      </Head>
      
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Gizlilik Politikası
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Kişisel verilerinizin güvenliği bizim için önemlidir. 
                  Bu politika, verilerinizi nasıl koruduğumuz hakkında tüm detayları içerir.
                </p>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-blue-200">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">🔒</span>
                    <span className="font-medium">KVKK Uyumlu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">🛡️</span>
                    <span className="font-medium">Güvenli Saklama</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✅</span>
                    <span className="font-medium">Şeffaf Süreç</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Last Updated Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Son Güncelleme</h3>
                  <p className="text-blue-700">{new Date().toLocaleDateString('tr-TR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl group"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center group-hover:text-blue-600 transition-colors">
                    <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-4 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Sorularınız mı var?</h2>
                <p className="text-blue-100 mb-6">
                  Gizlilik politikamız hakkında herhangi bir sorunuz varsa, 
                  bizimle iletişime geçmekten çekinmeyin.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+905538448653"
                    className="group bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="font-medium">Hemen Ara</span>
                  </a>
                  
                  <a
                    href="https://wa.me/905538448653"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-green-500 hover:bg-green-600 rounded-xl px-6 py-3 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                    </svg>
                    <span className="font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 text-center">
              <a
                href="/"
                className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Ana Sayfaya Dön</span>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GizlilikPolitikasi; 