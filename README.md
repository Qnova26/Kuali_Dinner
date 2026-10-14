# 🍽️ KUALI — Authentic Indonesian Private Chef for Bali Villas

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

> **Bespoke Indonesian Private Dining in Your Bali Sanctuary.**  
> Zero hassle, impeccable 5-star hygiene, and thoughtfully tailored to your family's dietary needs.

---

## 📖 Tentang Project

**KUALI** adalah website *landing page* interaktif berstandar *luxury hospitality* untuk layanan *Private Chef* spesialis masakan autentik Nusantara yang datang langsung ke villa pelanggan di seluruh penjuru Bali.

Website ini dirancang khusus untuk wisatawan mancanegara (wisman) dan keluarga yang mendambakan hidangan tradisional Indonesia tanpa harus menghadapi kemacetan jalanan Bali, restoran ramai, atau kekhawatiran higienitas makanan.

Website ini mengintegrasikan **Direct WhatsApp Booking Generator** — pengunjung mengisi formulir reservasi yang secara otomatis merangkai draf pesan rapi dan mengarahkan langsung ke WhatsApp Admin UMKM tanpa perlu alur pembayaran yang rumit.

---

## ✨ Fitur Utama

- **Hero Section:** Desain fine-dining mewah dengan tipografi elegan (EB Garamond & Plus Jakarta Sans), *headline*, dan *Direct Action CTA*.
- **Island-Wide Coverage Banner:** Menampilkan area jangkauan seluruh Bali (Seminyak, Canggu, Ubud, Uluwatu, Sanur, dll) beserta ketentuan *travel fee*.
- **Dual Option Menu Catalog:**
  - **Set Menus:** Paket santapan lengkap (*Balinese Royal Megibung, Sumatran Heritage Feast, Archipelago Seafood BBQ*).
  - **À La Carte:** Pilihan hidangan satuan (*Bebek Betutu, Rendang Wagyu, Sate Lilit, dll.*).
  - **Dietary Badges:** Tag interaktif untuk *Vegan, Vegetarian, Gluten-Free, Halal,* dan *No Pork*.
- **The Experience (How Dining Unfolds & Chef Profile):**
  - Alur 3 langkah reservasi mudah.
  - Profil Head Culinary Director (*Chef Wayan Sudarmika*) dan standar 4 pilar gastronomi.
- **Guest Testimonials:** Ulasan nyata keluarga mancanegara yang menginap di villa Bali.
- **Coverage & Rates Matrix:** Matriks 4 zona pengantaran transparan serta akordeon FAQ interaktif.
- **WhatsApp Pre-Booking Form:**
  - Form interaktif (Nama, WhatsApp, Alamat Villa, Tanggal, Waktu Makan, Jumlah Tamu maks. 10 orang, Menu, Alergi).
  - **Live WhatsApp Message Preview** dengan indikator *typing pulse*.
  - Otomatis membuat tautan `https://wa.me/...` dengan format pesan rapi siap kirim.
- **Centralized Design Palette:** Semua warna latar belakang dapat disesuaikan hanya dari satu file CSS (`src/index.css`).

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) + Custom CSS Variables
- **Icons & Fonts:** Material Symbols Outlined, Google Fonts (EB Garamond, Plus Jakarta Sans)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Struktur Folder

```text
kuali-website/
├── public/                 # Static assets & SVG icons
├── src/
│   ├── assets/             # Gambar & ikon lokal
│   ├── components/         # Komponen modular halaman
│   │   ├── Navbar.jsx              # Navigasi atas + Book Button
│   │   ├── HeroSection.jsx         # Section sambutan & CTA
│   │   ├── CoverageAndFeatures.jsx # Banner pulau & 3 keunggulan
│   │   ├── MenuSection.jsx         # Katalog Set Menu & À La Carte
│   │   ├── ExperienceSection.jsx   # Alur reservasi & Profil Chef
│   │   ├── TestimonialsSection.jsx # Ulasan tamu
│   │   ├── CoverageRatesSection.jsx# Matriks ongkir & FAQ
│   │   ├── BookingSection.jsx      # Form booking → Redirect WhatsApp
│   │   └── Footer.jsx              # Footer informasi & kontak
│   ├── App.jsx             # Root layout komponen
│   ├── index.css           # Global styles & Sentralisasi Palet Warna
│   └── main.jsx            # Entry point React
├── index.html              # HTML shell & font definitions
├── vercel.json             # Konfigurasi routing rewrite untuk Vercel
├── vite.config.js          # Konfigurasi Vite
├── tailwind.config.js      # Konfigurasi token warna Tailwind
└── package.json            # Daftar dependensi & script project
```

---

## 🚀 Panduan Menjalankan Secara Lokal

### 1. Clone Repositori
```bash
git clone https://github.com/Qnova26/Kuali_Dinner.git
cd Kuali_Dinner
```

### 2. Install Dependensi
```bash
npm install
```

### 3. Jalankan Dev Server
```bash
npm run dev
```
Buka browser di `http://localhost:5173/` untuk melihat website secara *live*.

### 4. Build untuk Production
```bash
npm run build
```
Hasil build akan tersimpan di dalam folder `dist/`.

---

## 🎨 Kustomisasi Warna Background

Semua warna latar belakang setiap section telah dipusatkan pada file **`src/index.css`**.

Anda dapat mengubah variabel `:root` berikut:

```css
:root {
  --bg-coverage-banner:  linear-gradient(135deg, #f2ebd9 0%, #e6dcc7 50%, #eee4d0 100%);
  --bg-features:         linear-gradient(180deg, #f8f3e8 0%, #ede3d1 50%, #f6f0e4 100%);
  --bg-menu:             linear-gradient(180deg, #f3ebd9 0%, #e7dcbe 50%, #f1e7d4 100%);
  --bg-experience-steps: linear-gradient(180deg, #ede3d1 0%, #e2d4bd 50%, #ebe0cd 100%);
  --bg-experience-chef:  linear-gradient(180deg, #f7f1e5 0%, #ecdfcd 50%, #f6efe2 100%);
  --bg-testimonials:     linear-gradient(180deg, #eee3d1 0%, #e3d5be 50%, #ece0cd 100%);
  --bg-coverage-rates:   linear-gradient(180deg, #f5efe3 0%, #ebdcc8 50%, #f5efe3 100%);
  --bg-booking:          linear-gradient(180deg, #f4ecd8 0%, #e8ddc4 50%, #dfd0b4 100%);
}
```

---

## 🌐 Cara Deploy ke Vercel

Repositori ini telah dilengkapi dengan konfigurasi **`vercel.json`** sehingga siap langsung di-deploy:

### Metode 1: Melalui Dashboard Vercel (Paling Mudah)
1. Buka [Vercel Dashboard](https://vercel.com/) dan login dengan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari repositori **`Kuali_Dinner`** dan klik **"Import"**.
4. Pada bagian pengaturan proyek:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Klik **"Deploy"**. Dalam waktu ~1 menit, website Anda sudah aktif secara global!

### Metode 2: Menggunakan Vercel CLI
```bash
npm i -g vercel
vercel
```
Ikuti instruksi di terminal hingga selesai.

---

## 📄 Lisensi
Dibuat untuk keperluan komersial UMKM Private Dining Bali. Seluruh hak cipta dilindungi.
