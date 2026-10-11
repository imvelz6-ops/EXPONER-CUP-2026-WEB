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
