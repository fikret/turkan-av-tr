# Tüfek & Türkan Hukuk Bürosu — turkan.av.tr

Kurumsal, mobil öncelikli ve iki dilli (TR/EN) avukatlık bürosu tanıtım sitesi.
**Astro** (statik) + **Tailwind CSS v4** ile geliştirildi, **Cloudflare Pages**’te yayınlanır.

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ üretir
npm run preview  # build çıktısını yerelde sunar
```

> Not: `package.json` içinde `overrides.vite` ile Vite, Astro 6’nın istediği 7.x
> sürümüne sabitlenmiştir (Tailwind eklentisinin Vite 8/rolldown ile uyumsuzluğu için).

## Proje yapısı

- `src/data/` — içerik kaynağı (TR+EN): `team.ts`, `practice-areas.ts`, `site.ts`, `about.ts`
- `src/i18n/` — `ui.ts` (arayüz çevirileri), `utils.ts` (dil yardımcıları, `routeMap`)
- `src/content/insights/{tr,en}/` — “Güncel” yazıları (Markdown). Her yazı `lang` + `slug` içerir.
- `src/components/`, `src/layouts/`, `src/pages/` — bileşenler, düzen ve sayfalar
- `src/assets/team/` — ekip fotoğrafları (`astro:assets` ile WebP/AVIF’e optimize edilir)

### Dil yapısı
- TR varsayılan dildir, kök dizinde sunulur: `/`, `/ekibimiz`, `/calisma-alanlari` …
- EN `/en/` altındadır: `/en/`, `/en/team`, `/en/practice-areas` …
- Sayfa eşleşmeleri `src/i18n/utils.ts > routeMap` içinde tutulur.

### Yeni “Güncel” yazısı ekleme
`src/content/insights/tr/<slug>.md` (ve istenirse `en/<slug>.md`) oluşturun:

```md
---
title: 'Başlık'
description: 'Kısa özet (liste ve meta açıklama).'
lang: 'tr'
slug: 'ornek-yazi'
pubDate: 2026-06-18
---

İçerik markdown…
```

TR ve EN sürümleri **aynı `slug`** ile eşleşir; dil değiştirici doğrudan eş yazıya gider.

## Cloudflare Pages’e dağıtım

### Yöntem 1 — Git entegrasyonu (önerilen)
1. Depoyu GitHub/GitLab’e gönderin.
2. Cloudflare Pages → **Create a project** → repoyu bağlayın.
3. Build ayarları: **Framework preset: Astro**, **Build command: `npm run build`**, **Output directory: `dist`**.
4. Push’ta otomatik dağıtım yapılır.

### Yöntem 2 — Doğrudan (wrangler)
```bash
npm run build
npx wrangler pages deploy dist --project-name turkan-av-tr
```

### Özel alan adı
Cloudflare Pages projesi → **Custom domains** → `turkan.av.tr` ekleyin ve DNS’i yönlendirin.

## Açık / bekleyen öğeler (müşteriden)
- **“we connect” üyelik logosu**: şu an metin rozet placeholder’ı (`Hero.astro`).
  Gerçek görsel gelince `public/we-connect.svg` ekleyip `Hero.astro`’da değiştirin.
- **Çalışma alanı görselleri**: şu an telifsiz soyut CSS gradyanları
  (`practice-areas.ts > gradient`). İstenirse satın alınan telifli fotoğraflarla değiştirilebilir.
- **OG görseli**: `public/og-image.jpg` ekleyin (sosyal paylaşım önizlemesi için).
- **Suna Adikti fotoğrafı**: yoksa monogram avatar gösterilir.
- **İngilizce metinler**: taslak çeviridir; müşteri onayından geçmelidir.
