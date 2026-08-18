# Portofolio — Narendra Dzaki Kuswara

Website portofolio pribadi. HTML, CSS, dan JavaScript murni — tanpa framework, tanpa dependensi, tanpa proses build.

**Live:** https://USERNAME.github.io/NAMA-REPO/

## Tech stack

HTML5 · CSS3 (custom properties, Grid, Flexbox) · JavaScript vanilla
Font: Plus Jakarta Sans, JetBrains Mono

## Struktur

```
.
├── index.html
├── style.css
├── script.js
├── assets/
│   └── foto.jpg
└── README.md
```

## Isi halaman

Hero · 01 Tentang · 02 Keahlian · 03 Proyek · 04 Sertifikat · 05 Pendidikan · 06 Kontak

## Fitur JavaScript

1. Fallback foto profil — inisial otomatis bila `assets/foto.jpg` tidak ada
2. Menu navigasi mobile dengan `aria-expanded`
3. Animasi masuk saat section terlihat (`IntersectionObserver`)
4. Penanda navigasi aktif mengikuti section yang dibaca
5. Tahun otomatis di footer

## Menjalankan lokal

```bash
python3 -m http.server 8000
```

## Deploy ke GitHub Pages

```bash
git init
git add .
git commit -m "Portofolio pribadi"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Lalu **Settings → Pages → Deploy from a branch → `main` / `root` → Save.**

## Aksesibilitas

Responsif · skip link · fokus keyboard terlihat · `prefers-reduced-motion` dihormati · struktur heading berurutan

---

© 2026 Narendra Dzaki Kuswara
