# İnci Oto Yedek Parça

🚗 Profesyonel ve modern bir oto yedek parça tanıtım sitesi  
🌐 **Canlı Site:** [https://inciotoyedekparca.vercel.app](https://inciotoyedekparca.vercel.app)

## ✨ Özellikler

- 🎨 **Modern UI/UX** - Responsive ve kullanıcı dostu tasarım
- ⚡ **Yüksek Performans** - Next.js ISR/SSG ile optimized
- 🔍 **SEO Optimized** - Dinamik meta tags, sitemap, structured data
- 📱 **Mobile First** - Tüm cihazlarda mükemmel görünüm
- 🧪 **Test Coverage** - Jest + Cypress ile %80+ coverage
- 🚀 **CI/CD** - Vercel ile otomatik deployment

## 📦 Teknoloji Stack

- **Framework:** Next.js 14 (React 18)
- **Styling:** Tailwind CSS 3.x
- **Language:** TypeScript
- **CMS:** Headless CMS (Strapi/Contentful)
- **Testing:** Jest + React Testing Library + Cypress
- **Deployment:** Vercel
- **Code Quality:** ESLint + Prettier + Husky

## 🚀 Hızlı Başlangıç

### Önkoşullar
- Node.js 18+ 
- npm 8+

### Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/ResulKorkmaz2/inciotoyedekparca.git
   cd inciotoyedekparca
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Çevre değişkenlerini ayarlayın:**
   ```bash
   cp .env.example .env.local
   # .env.local dosyasını düzenleyip gerekli değerleri ekleyin
   ```

4. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

5. **Tarayıcınızda açın:** [http://localhost:3000](http://localhost:3000)

## 📝 Kullanılabilir Komutlar

```bash
# Geliştirme
npm run dev                 # Geliştirme sunucusu
npm run build              # Production build
npm run start              # Production sunucu
npm run lint               # ESLint kontrolü
npm run lint:fix           # ESLint otomatik düzeltme
npm run format             # Prettier formatla
npm run type-check         # TypeScript kontrolü

# Test
npm run test               # Jest testler (watch mode)
npm run test:ci            # Jest testler (CI mode)
npm run test:e2e           # Cypress E2E testler
npm run test:e2e:open      # Cypress GUI

# SEO
npm run sitemap            # Sitemap oluştur
```

## 📁 Proje Yapısı

```
inciotoyedekparca/
├── src/
│   ├── components/        # Yeniden kullanılabilir bileşenler
│   │   ├── ui/           # Temel UI bileşenleri
│   │   ├── layout/       # Layout bileşenleri
│   │   └── common/       # Ortak bileşenler
│   ├── pages/            # Next.js sayfalar
│   │   ├── api/          # API rotaları
│   │   └── _app.tsx      # App bileşeni
│   ├── styles/           # Global stiller
│   ├── utils/            # Yardımcı fonksiyonlar
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript tipleri
│   └── config/           # Konfigürasyon dosyaları
├── public/               # Statik dosyalar
├── cypress/              # E2E testler
└── __tests__/            # Unit testler
```

## 🎨 Tasarım Sistemi

- **Renkler:** Primary (Mavi), Secondary (Gri), Accent (Kırmızı)
- **Typography:** Inter font family
- **Breakpoints:** Mobile-first responsive design
- **Components:** Headless UI + Custom Tailwind

## 🔧 Geliştirme Kuralları

- **Git Flow:** feature/fix branch'ler → develop → main
- **Commit:** Conventional Commits formatı
- **Code Style:** ESLint + Prettier (Airbnb config)
- **Testing:** Minimum %80 coverage
- **Review:** Her PR için code review zorunlu

## 🚀 Deployment

### Vercel (Otomatik)
- **Development:** Her push'ta preview deploy
- **Production:** `main` branch'e merge'de otomatik deploy

### Manuel Deploy
```bash
npm run build
npm run start
```

## 📞 İletişim

- **Website:** https://inciotoyedekparca.vercel.app
- **Email:** info@inciotoyedekparca.com
- **GitHub:** https://github.com/ResulKorkmaz2/inciotoyedekparca

## 📄 Lisans

Bu proje [MIT](LICENSE) lisansı altında lisanslanmıştır.

---

⚡ **İnci Oto Yedek Parça** ile güvenilir ve profesyonel hizmet.
# Deploy trigger
# Force redeploy - fix 404 issue
# Force deploy Mon Aug  4 15:24:47 +03 2025
