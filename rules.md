# İnci Oto Yedek Parça – Proje Kuralları

## 1. Kodlama Standartları
- **Language:** Next.js + React + Tailwind CSS  
- **Lint:** ESLint (airbnb-base + Prettier)  
- **Commit Mesajı:** Conventional Commits  
  - feat, fix, chore, docs, refactor, test  

## 2. Branch Yönetimi
- `main` → her zaman production-ready  
- `develop` → bir sonraki sürüm için tüm feature branch’ler buraya merge edilir  
- `feature/<isim>` → yeni özellik geliştirmeleri  
- `hotfix/<isim>` → acil düzeltmeler  

## 3. SEO & İçerik
- Her sayfada dinamik `<title>` ve `<meta name="description">`  
- Open Graph ve Twitter Card meta etiketleri  
- URL yapısı: `/kategori/alt-kategori/ürün-ismi`  
- Sitemap ve robots.txt otomatik oluşturulacak  

## 4. Performans
- Resimler: Next.js Image bileşeni + CDN  
- Kod ayrıştırma (code splitting)  
- ISR/SSG tercihi: statik içerik için SSG, sık güncellenen içerik için ISR  

## 5. Güvenlik
- HTTPS zorunlu  
- HSTS, CSP header’ları  
- XSS/CSRF korumaları  
- Form doğrulamaları backend ve frontend’de  

## 6. Test
- **Birim Test:** Jest + React Testing Library  
- **E2E Test:** Cypress  
- Coverage en az %80  

## 7. Yayın Politikalari
- Her PR en az 1 code review  
- Merged PR’dan sonra Vercel’da otomatik preview  
- Production deploy onaylı PR’lar ile

