# 🌾 Agricultural Engineering Open Technology Innovation
### Sistem Presensi, Logbook Praktikum Mandiri & Multi-Admin Monitoring Real-Time
**Institut Pertanian STIPER (INSTIPER) Yogyakarta — Fakultas Teknologi Pertanian**

![INSTIPER Logo](./public/instiper_logo.png)

Aplikasi web dashboard interaktif, responsif, dan mobile-first untuk pencatatan kehadiran serta eksplorasi alat teknologi pertanian mahasiswa pada acara **"Agricultural Engineering Open Technology Innovation"** INSTIPER Yogyakarta.

Dibangun dengan arsitektur **Single Page Application (SPA)** modern siap deploy ke **GitHub Pages, Vercel, atau Netlify**, sehingga tautan dan **QR Code (Barcode) tetap aktif 24/7** dapat diakses oleh mahasiswa kapan pun meskipun laptop panitia dalam kondisi mati.

---

## 🎨 Identitas Visual & Tema INSTIPER
- **Warna Primer**: Hijau Tua Pertanian (`#008B45` / `#006400`) melambangkan pertanian modern dan perkebunan lestari.
- **Warna Aksen**: Kuning Emas (`#FFD700`) & Merah (`#D32F2F`) terinspirasi dari logo resmi INSTIPER Yogyakarta.
- **Latar Belakang**: Putih Bersih AgriTech (`#F8FAF9`).
- **Logo Resmi**: Ditampilkan pada navigasi utama, banner identitas, dan Kartu Bukti Kehadiran digital.

---

## 🚀 Alur Pengguna Bertahap (Locked Step-by-Step Workflow)
Sistem menerapkan penguncian ketat: tahap selanjutnya hanya terbuka setelah tahap sebelumnya selesai:

1. **Tahap 1: Halaman Identitas & Absensi Datang (Check-In)**
   - Formulir biodata: Nama Lengkap, NIM, Program Studi/Minat (Teknik Pertanian, Agroteknologi, Agribisnis, dll.), dan Kelompok Praktikum (Kelompok 1 - 8).
   - Tombol **"Absen Datang (Check-In)"** yang otomatis mencatat timestamp kehadiran (WIB) secara real-time ke database cloud.
   - Fitur tombol *Contoh Data Demo* untuk pengujian cepat.

2. **Tahap 2: Logbook Eksplorasi Alat (Selama Kegiatan)**
   - Terbuka otomatis setelah mahasiswa melakukan Check-In.
   - Menambahkan catatan alat yang dijumpai di stand/lapangan (Nama Alat, Kategori, dan Fungsi / Catatan Pengamatan).
   - Dilengkapi **8 Rekomendasi Alat Cepat (Quick Tags)**:
     - *Drone Sprayer DJI Agras T40* (Precision Agriculture / UAV)
     - *Traktor Roda 4 Kubota M7040* (Mekanisasi Pengolahan Lahan)
     - *Sensor Kelembaban Tanah IoT LoRa* (Smart Sensing)
     - *Smart Greenhouse Climate Controller ESP32* (Otomasi Lingkungan Tumbuh)
     - *Mesin Pengering Gabah Bed Dryer Biomassa* (Pascapanen)
     - *Spektrofotometer Portabel NPK Tanah* (Analisis Nutrisi)
     - *Pompa Irigasi Tetes Tenaga Surya* (Solar Drip System)
     - *Alat Pemipil Jagung Bermotor Listrik Mini* (Pascapanen)
   - Tombol **"Simpan & Lanjut ke Quiz"** (minimal 1 alat harus dicatat).

3. **Tahap 3: Evaluasi Akhir (Quiz Interaktif)**
   - Terbuka setelah logbook tersimpan.
   - Menampilkan soal pilihan ganda seputar prinsip mekanisasi pertanian dan teknologi smart farming.
   - Penghitung skor otomatis (skala 0 - 100), pembahasan materi praktikum, dan efek perayaan (*confetti*).

4. **Tahap 4: Absensi Pulang (Check-Out) & Bukti Kehadiran Digital**
   - Tombol **"Absen Pulang (Check-Out)"** aktif setelah menyelesaikan quiz.
   - Mencatat waktu kepulangan dan menghitung durasi kegiatan praktikum secara otomatis.
   - Menerbitkan **Kartu Bukti Kehadiran Resmi INSTIPER** (E-Certificate / Digital ID Card) dengan:
     - Logo resmi INSTIPER Yogyakarta
     - Biodata lengkap mahasiswa & kelompok
     - Waktu Datang, Waktu Pulang, dan Total Durasi (menit)
     - Skor Evaluasi Quiz
     - Ringkasan alat yang dieksplorasi
     - QR Code Verifikasi Dokumen & Cap Digital Asisten
     - Tombol **"Unduh Kartu (PNG)"** & **"Cetak / Print PDF"**.

---

## 🛡️ Panel Admin / Asisten Praktikum (Multi-User Dashboard)
- **Multi-Admin Login**: Mendukung login serentak beberapa asisten dari perangkat (laptop/HP) berbeda via username/passcode (default: `instiper2026`).
- **Generator QR Code (Barcode) Otomatis**:
  - Otomatis mengarah ke URL aplikasi mahasiswa.
  - Tombol **"Unduh QR Code Poster (PNG)"** beresolusi tinggi (1000x1200px) siap dicetak untuk standing banner atau proyektor.
  - Tombol **"Salin Link"** untuk dibagikan via grup WhatsApp praktikan.
- **Statistik Real-time**: Total Mahasiswa, Sedang Praktikum, Selesai Quiz, Sudah Check-Out, dan Rata-rata Skor.
- **Tabel Rekapitulasi Lengkap**:
  - Live search Nama/NIM & Filter berdasarkan Status, Prodi, dan Kelompok.
  - Modal Detail untuk memeriksa seluruh logbook dan catatan pengamatan tiap mahasiswa.
  - Tombol **"Export CSV"** untuk download laporan rekapitulasi ke Excel.
- **Bank Soal Quiz**: Asisten dapat menambah, mengedit, atau menghapus pertanyaan evaluasi langsung dari UI.
- **Koneksi Database Cloud UI**: Konfigurasi Firebase API Keys dapat disetel langsung dari browser tanpa perlu rebuild.

---

## ⚡ Panduan Menghubungkan Database Cloud (Firebase Firestore)

Aplikasi memiliki fitur **Hybrid Realtime Sync**:
- **Secara default (Offline/Demo Mode)**: Aplikasi langsung berfungsi 100% menggunakan LocalStorage + BroadcastChannel sehingga tab admin dan tab mahasiswa langsung tersinkronisasi secara real-time di laptop/komputer yang sama tanpa setup apa pun!
- **Untuk akses online 24 jam antar-perangkat berbeda (Laptop Panitia + HP Mahasiswa)**:

### Langkah Setup Firebase:
1. Buka [Firebase Console](https://console.firebase.google.com/) dan buat project baru (misal: `agritech-instiper`).
2. Aktifkan **Cloud Firestore**:
   - Pilih menu **Build > Firestore Database** > Klik **Create Database**.
   - Pilih lokasi server terdekat (misal: `asia-southeast2` Jakarta).
   - Pada tab **Rules**, gunakan aturan baca-tulis untuk kegiatan praktikum:
     ```javascript
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /attendances/{document=**} {
           allow read, write: if true;
         }
       }
     }
     ```
3. Daftarkan Web App:
   - Masuk ke **Project Settings** (ikon gerigi) > bagian **Your apps** > klik ikon Web (`</>`).
   - Salin objek konfigurasi `firebaseConfig`.
4. Masukkan konfigurasi ke aplikasi:
   - **Cara 1 (Paling Mudah lewat Browser)**: Masuk ke Panel Admin > klik tombol **"Database"** di header > tempel snippet konfigurasi Firebase > klik **"Simpan & Refresh Koneksi"**.
   - **Cara 2 (File .env)**: Salin `.env.example` menjadi `.env` di root folder dan isi API key-nya:
     ```env
     VITE_FIREBASE_API_KEY=AIzaSy...
     VITE_FIREBASE_AUTH_DOMAIN=agritech-instiper.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=agritech-instiper
     VITE_FIREBASE_STORAGE_BUCKET=agritech-instiper.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=...
     VITE_FIREBASE_APP_ID=1:...
     ```

---

## 🌐 Panduan Push ke GitHub & Deploy Online 24 Jam

Aplikasi ini telah dilengkapi konfigurasi **Vercel** (`vercel.json`), **Netlify** (`netlify.toml`), dan **GitHub Actions** (`.github/workflows/deploy.yml`) untuk deployment otomatis 1-klik:

### 1. Inisialisasi Git & Push ke GitHub:
Buka terminal pada folder proyek:
```bash
git init
git add .
git commit -m "feat: Agricultural Engineering INSTIPER Attendance & Logbook System"
git branch -M main
git remote add origin https://github.com/USERNAME-ANDA/agritech-instiper-attendance.git
git push -u origin main
```

### 2. Pilihan Deploy Online:
- **Opsi A: Vercel (Sangat Direkomendasikan & Tercepat)**:
  1. Buka [vercel.com](https://vercel.com/) dan login dengan GitHub.
  2. Klik **"Add New Project"** > Impor repository `agritech-instiper-attendance`.
  3. Klik **"Deploy"** (Vite akan otomatis terdeteksi).
  4. Aplikasi langsung online dengan domain gratis seperti `https://agritech-instiper-attendance.vercel.app`.
  
- **Opsi B: GitHub Pages**:
  1. Di repository GitHub Anda, buka menu **Settings > Pages**.
  2. Pada bagian **Build and deployment > Source**, pilih **GitHub Actions**.
  3. File `.github/workflows/deploy.yml` yang sudah kami sertakan akan otomatis mem-build dan mempublikasikan situs ke `https://USERNAME-ANDA.github.io/agritech-instiper-attendance/`.

- **Opsi C: Netlify**:
  1. Buka [netlify.com](https://netlify.com/) > **Import from Git**.
  2. Pilih repository, build command: `npm run build`, publish directory: `dist`.
  3. Klik **Deploy Site**.

---

## 💻 Menjalankan di Lokal (Pengembangan)

```bash
# 1. Masuk ke direktori
cd agritech-instiper-attendance

# 2. Jalankan development server
npm run dev

# 3. Akses via browser
# http://localhost:5173
```

---

## 👥 Akun Akses Default Admin / Asisten:
- **Profil Asisten**: Asisten Lab Mekanisasi / Asisten Smart AgriTech / Dosen Supervisor
- **Passcode Default**: `instiper2026`

Laboratorium & Lapangan Praktikum Teknik Pertanian  
**Fakultas Teknologi Pertanian (FTP) — Institut Pertanian STIPER (INSTIPER) Yogyakarta**
