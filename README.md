# Exponer Cup 2026

Website informasi lomba Exponer Cup 2026 Sekolah Prestasi Prima. Situs ini menggunakan HTML, CSS, dan JavaScript statis, sehingga dapat dijalankan melalui server statis atau dibuka dari `index.html`.

## Struktur proyek

```text
.
├── index.html
├── pages/
│   └── divisi/          # Halaman detail setiap lomba
├── assets/
│   ├── documents/       # Guidebook, juknis, formulir, dan surat undangan
│   ├── images/          # Foto lomba dan latar belakang
│   └── qr/              # Kode QR
├── css/
│   └── style.css
└── js/
    └── main.js           # Countdown dan data halaman divisi
```

## Menjalankan lokal

Buka `index.html` melalui server web lokal atau hosting statis. Gunakan server lokal agar semua tautan halaman, gambar, dan dokumen dapat diuji dengan perilaku yang sama seperti saat deploy.

## Memperbarui informasi lomba

- Ubah data divisi, tautan pendaftaran, kontak, dan dokumen pada `js/main.js`.
- Tambahkan gambar pada `assets/images/` dan dokumen PDF pada `assets/documents/`.
- Saat menambah halaman divisi, simpan di `pages/divisi/` dan pastikan nilai `window.PAGE_SLUG` cocok dengan key data divisi di `js/main.js`.

## Ukuran aset

- Optimalkan gambar besar sebelum ditambahkan; gunakan WebP jika memungkinkan dan sesuaikan dimensinya dengan kebutuhan tampilan.
- Kompres video MP4 atau simpan di layanan video, lalu gunakan embed atau tautan.
- Jangan masukkan ZIP, cadangan, atau file lain yang tidak digunakan website ke repositori.
- Untuk file penting berukuran besar, pertimbangkan penyimpanan eksternal atau CDN. Periksa batas aset pada platform hosting; Git LFS tidak menghindari batas ukuran file yang disajikan langsung oleh situs.
# Deploy ke Cloudflare Workers

Situs ini berupa HTML/CSS/JavaScript statis. Siapkan file deploy dengan:

```sh
npm run build
```

Isi pengaturan build Cloudflare seperti ini:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Preview command: `npx wrangler dev`

Build menyalin `index.html`, `css`, `js`, `pages`, dan `assets` ke `dist`, tanpa `node_modules`, metadata Git, atau pengaturan editor. `wrangler.jsonc` mengarahkan Workers Static Assets ke folder `dist`.

Untuk build dan deploy dari terminal lokal sekaligus, jalankan `npm run deploy`. Untuk preview lokal dengan Wrangler, jalankan `npm run preview`.
