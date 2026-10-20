# Kısalar Yapım web sitesi

Astro ile yapılmış statik site. GitHub'a her push'ta Vercel otomatik yayınlar.

## Yerelde çalıştırma
Node 22 gerekir.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # çıktı: dist/
```

## İçeriği düzenleme
Tüm metinler `src/data/site.ts` dosyasında. `[DÜZENLE]` ile işaretli alanları doldurun.

## Yayın
- Vercel'de repo içe aktarılır; Astro otomatik tanınır (build: `npm run build`, çıktı: `dist`).
- `main` dalına her push canlıya çıkar, diğer dallar önizleme adresi alır.
- Alan adı bağlandığında `astro.config.mjs` içindeki `site` adresini güncelleyin.
