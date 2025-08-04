const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Admin user seed başlatılıyor...');

  try {
    // Admin user'ın var olup olmadığını kontrol et
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'admin@inciotoyedekparca.com' }
    });

    if (existingAdmin) {
      console.log('✅ Admin user zaten mevcut:', existingAdmin.email);
      
      // Password'u güncelle
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'Rr123456', 12);
      await prisma.user.update({
        where: { id: existingAdmin.id },
        data: {
          password: hashedPassword,
          name: 'Admin User',
          isActive: true
        }
      });
      console.log('🔄 Admin password güncellendi');
      return;
    }

    // Admin user oluştur
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'Rr123456', 12);
    
    const adminUser = await prisma.user.create({
      data: {
        email: 'admin@inciotoyedekparca.com',
        password: hashedPassword,
        name: 'Admin User',
        role: 'ADMIN',
        isActive: true
      }
    });

    console.log('🎉 Admin user başarıyla oluşturuldu!');
    console.log('📧 Email:', adminUser.email);
    console.log('👤 Username: rslkrkmz');
    console.log('🔑 Password:', process.env.ADMIN_PASSWORD || 'Rr123456');
    console.log('🆔 User ID:', adminUser.id);

    // Varsayılan sistem ayarları ekle
    await prisma.systemSettings.createMany({
      data: [
        {
          key: 'site_name',
          value: 'İnci Oto Yedek Parça',
          type: 'STRING',
          category: 'general',
          description: 'Site adı',
          isPublic: true
        },
        {
          key: 'contact_phone',
          value: '+90 532 295 37 95',
          type: 'STRING',
          category: 'general',
          description: 'İletişim telefonu',
          isPublic: true
        },
        {
          key: 'contact_address',
          value: 'Atakent Mahallesi, 221. Sokak No:18/B, 06980 Çankaya/Ankara',
          type: 'STRING',
          category: 'general',
          description: 'İşletme adresi',
          isPublic: true
        }
      ],
      skipDuplicates: true
    });

    console.log('⚙️ Varsayılan sistem ayarları eklendi');

  } catch (error) {
    console.error('❌ Seed hatası:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('💥 Fatal error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('🔌 Database connection kapatıldı');
  }); 