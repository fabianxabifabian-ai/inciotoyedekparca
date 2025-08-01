import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Admin kullanıcısını oluştur
  const hashedPassword = await bcrypt.hash('Rr123456', 12);
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'rslkrkmz@inciotoyedekparca.com' },
    update: {},
    create: {
      email: 'rslkrkmz@inciotoyedekparca.com',
      name: 'Resul Korkmaz',
      password: hashedPassword,
      role: 'ADMIN',
      isActive: true,
    },
  });

  console.log('👤 Admin kullanıcısı oluşturuldu:', { 
    id: adminUser.id, 
    email: adminUser.email,
    name: adminUser.name 
  });

  // Default Google Tag Manager ayarı
  const gtmCode = await prisma.analyticsCode.upsert({
    where: { id: 'gtm-default' },
    update: {},
    create: {
      id: 'gtm-default',
      name: 'Google Tag Manager',
      type: 'GOOGLE_TAG_MANAGER',
      headCode: `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->`,
      bodyCode: `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`,
      isActive: false, // Başlangıçta pasif
      priority: 1,
      description: 'Google Tag Manager tracking kodu - GTM-XXXXXXX ile container ID\'yi değiştirin',
      createdById: adminUser.id,
    },
  });

  // Homepage SEO ayarları
  const existingHomepageSeo = await prisma.seoSettings.findFirst({
    where: { 
      pageType: 'homepage',
      pageIdentifier: null,
    }
  });

  if (!existingHomepageSeo) {
    await prisma.seoSettings.create({
      data: {
        pageType: 'homepage',
      title: 'İnci Oto Yedek Parça - Çanakkale\'nin En Güvenilir Oto Yedek Parça Merkezi',
      description: 'Çanakkale Ayvacık\'ta 14 yıllık deneyimle çıkma motor, şanzıman, ECU ve tüm araç yedek parçaları. Kaliteli, uygun fiyatlı ve garantili yedek parçalar.',
      keywords: 'çıkma motor, çıkma şanzıman, motor beyni, ecu, oto yedek parça, çanakkale, ayvacık, araç parçaları',
      ogTitle: 'İnci Oto Yedek Parça - Çanakkale Ayvacık',
      ogDescription: '14 yıllık deneyimle çıkma motor, şanzıman, ECU ve tüm araç yedek parçaları. Kaliteli ve garantili.',
      ogType: 'website',
      robots: 'index,follow',
      isActive: true,
      createdById: adminUser.id,
      },
    });
  }

  // Sistem ayarları
  const systemSettings = [
    {
      key: 'site_name',
      value: 'İnci Oto Yedek Parça',
      category: 'general',
      description: 'Site adı',
      isPublic: true,
    },
    {
      key: 'contact_phone',
      value: '+90 553 844 86 53',
      category: 'general',
      description: 'İletişim telefonu',
      isPublic: true,
    },
    {
      key: 'contact_address',
      value: 'Çanakkale Ayvacık Sanayi Sitesi B Blok No: 18',
      category: 'general',
      description: 'İş yeri adresi',
      isPublic: true,
    },
    {
      key: 'business_hours',
      value: 'Pazartesi - Cumartesi: 08:00 - 18:00',
      category: 'general',
      description: 'Çalışma saatleri',
      isPublic: true,
    },
    {
      key: 'gtm_container_id',
      value: 'GTM-XXXXXXX',
      category: 'analytics',
      description: 'Google Tag Manager Container ID',
      isPublic: false,
    },
  ];

  for (const setting of systemSettings) {
    await prisma.systemSettings.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    });
  }

  console.log('⚙️  Sistem ayarları oluşturuldu');

  // İçerik blokları
  const contentBlocks = [
    {
      key: 'hero_title',
      content: 'Türkiye\'nin En Zengin Oto Yedek Parça Stoku',
      contentType: 'TEXT' as const,
    },
    {
      key: 'hero_subtitle',
      content: '14 yıllık deneyimimizle araçlarınız için kaliteli ve garantili yedek parçalar sunuyoruz.',
      contentType: 'TEXT' as const,
    },
    {
      key: 'about_description',
      content: 'Çanakkale Ayvacık\'ta 14 yıldır hizmet veren İnci Oto Yedek Parça, geniş stok çeşitliliği ve kaliteli hizmet anlayışıyla müşterilerinin güvenini kazanmıştır.',
      contentType: 'TEXT' as const,
    },
  ];

  for (const block of contentBlocks) {
    await prisma.contentBlock.upsert({
      where: { key: block.key },
      update: { content: block.content },
      create: block,
    });
  }

  console.log('📝 İçerik blokları oluşturuldu');
  console.log('✅ Veritabanı seed işlemi tamamlandı!');
  
  console.log('\n🔐 Admin Giriş Bilgileri:');
  console.log('Email: rslkrkmz@inciotoyedekparca.com');
  console.log('Şifre: Rr123456');
  console.log('Panel: http://localhost:3000/admin');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seed error:', e);
    await prisma.$disconnect();
    process.exit(1);
  }); 