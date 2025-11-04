# **Modul: CSS Dasar**

## **Tujuan Pembelajaran**

Mahasiswa memahami fungsi dan sintaks CSS, mampu menerapkan CSS ke dalam elemen HTML menggunakan berbagai metode penempatan, serta dapat mengatur tampilan halaman melalui properti-properti dasar dan lanjutan termasuk box model, layout, dan posisi elemen.

---

## **1. Pengenalan CSS**

### **Penjelasan**

Cascading Style Sheets (CSS) adalah bahasa pemrograman yang digunakan untuk mengatur tampilan (*presentation layer*) dari halaman web. CSS memungkinkan pemisahan antara struktur konten (HTML) dan desain visual, sehingga halaman web menjadi lebih konsisten, fleksibel, dan mudah dipelihara.

### **Keuntungan Menggunakan CSS**

1. **Konsistensi tampilan** – Satu file CSS dapat digunakan oleh banyak halaman.
2. **Efisiensi waktu** – Perubahan gaya cukup dilakukan di satu tempat.
3. **Pemeliharaan mudah** – Struktur HTML tetap bersih.
4. **Responsif dan adaptif** – CSS mendukung desain dinamis melalui media queries.
5. **Peningkatan performa** – File CSS dapat di-*cache* oleh browser.

### **Latihan 1**

Buat dua file:

* `index.html`
* `style.css`
  Tambahkan teks paragraf di `index.html`, lalu ubah warna teks melalui file `style.css`.

---

## **2. Sintaks CSS**

### **Struktur Umum**

```css
selector {
  property: value;
}
```

**Contoh:**

```css
p {
  color: blue;
  font-size: 16px;
}
```

**Penjelasan:**

* *selector*: menentukan elemen HTML yang akan diberi gaya.
* *property*: atribut visual yang akan diubah.
* *value*: nilai yang diberikan pada properti.

### **Latihan 2**

Tambahkan gaya pada `h1`, `p`, dan `a` dengan warna dan ukuran huruf berbeda.

---

## **3. Menempatkan CSS**

CSS dapat ditempatkan di dalam dokumen HTML dengan tiga cara: **inline**, **internal**, dan **eksternal**.
Ketiganya menghasilkan efek yang sama pada tampilan, namun berbeda dalam cara penulisan, fleksibilitas, dan kemudahan pemeliharaan.

---

### 3.1. Inline CSS

Inline CSS ditulis langsung di dalam elemen HTML melalui atribut `style`.

**Contoh:**

```html
<p style="color: blue; font-size: 18px;">
  Ini paragraf dengan warna biru dan ukuran huruf 18 piksel.
</p>
```

**Kelebihan:**

* Cepat dan mudah untuk uji coba.
* Tidak memerlukan file tambahan.

**Kekurangan:**

* Sulit dikelola bila elemen banyak.
* Tidak dapat digunakan ulang di halaman lain.
* Tidak sesuai untuk proyek berskala besar.

---

### 3.2. Internal CSS

Internal CSS ditulis di dalam tag `<style>` yang diletakkan di bagian `<head>` dokumen HTML.
Cocok untuk halaman tunggal yang tidak membutuhkan file CSS terpisah.

**Contoh:**

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <title>Contoh Internal CSS</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
    }
    h1 {
      color: darkblue;
    }
  </style>
</head>
<body>
  <h1>Selamat Datang</h1>
  <p>Ini halaman dengan internal CSS.</p>
</body>
</html>
```

**Kelebihan:**

* Semua gaya tersimpan dalam satu file HTML.
* Praktis untuk proyek kecil atau latihan cepat.

**Kekurangan:**

* Tidak bisa digunakan ulang di halaman lain.
* Membesarkan ukuran file HTML bila gaya banyak.

---

### 3.3. Eksternal CSS

Eksternal CSS disimpan pada file terpisah dengan ekstensi `.css`, kemudian dihubungkan ke HTML menggunakan tag `<link>` di dalam `<head>`.
Cara ini paling direkomendasikan untuk proyek nyata karena memisahkan konten dan gaya dengan baik.

**Contoh:**

**File HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <title>Contoh Eksternal CSS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Halo Dunia!</h1>
  <p>Halaman ini menggunakan file CSS terpisah.</p>
</body>
</html>
```

**File CSS (`style.css`):**

```css
body {
  background-color: #fafafa;
  font-family: Verdana, sans-serif;
}

h1 {
  color: seagreen;
  text-align: center;
}
```

**Kelebihan:**

* File CSS bisa digunakan di banyak halaman.
* Lebih mudah dipelihara dan dikelola tim.
* File dapat di-*cache* oleh browser sehingga mempercepat pemuatan.

**Kekurangan:**

* Membutuhkan file tambahan.
* Butuh koneksi ke file CSS agar halaman tampil sempurna.

---

### 3.4. Ilustrasi Penempatan CSS

> **Gambar 1. Tiga Penempatan CSS**
>
> ``` text
> +-------------------------------------------+
> | HTML File                                 |
> |-------------------------------------------|
> | 1. Inline:  <p style="color:blue;">       |
> | 2. Internal: <style> di dalam <head>      |
> | 3. Eksternal: <link rel="stylesheet">     |
> +-------------------------------------------+
> ```
>
> *Gambar menunjukkan perbedaan lokasi CSS dalam dokumen.*

---

### 3.5. Latihan Praktikum

**Langkah-langkah:**

1. Buat folder `latihan-css/`.
2. Di dalamnya buat tiga file:

   * `inline.html`
   * `internal.html`
   * `external.html` (hubungkan ke file `style.css`)
3. Gunakan elemen `<h1>`, `<p>`, dan `<button>` pada setiap file.
4. Terapkan gaya yang sama (misalnya warna teks, ukuran font, dan warna latar belakang) dengan tiga cara berbeda.
5. Bandingkan hasil tampilannya di browser.
6. Catat perbedaan kemudahan dan waktu pengerjaan antara ketiganya.

---

### 3.6. Kesimpulan

| Jenis CSS | Lokasi Penulisan     | Cocok Untuk       | Kelebihan                    | Kelemahan                  |
| --------- | -------------------- | ----------------- | ---------------------------- | -------------------------- |
| Inline    | Di atribut elemen    | Uji cepat         | Praktis                      | Sulit dirawat              |
| Internal  | Dalam tag `<style>`  | Halaman tunggal   | Semua di satu tempat         | Tidak bisa digunakan ulang |
| Eksternal | File `.css` terpisah | Proyek sebenarnya | Fleksibel, reusable, efisien | Butuh file tambahan        |

> **Rekomendasi:** Gunakan **eksternal CSS** untuk semua proyek pengembangan web agar struktur file rapi dan mudah dikelola.

---

## **4. Selector Dasar**

Selector adalah pola yang digunakan CSS untuk memilih elemen HTML yang akan diberikan gaya.
Pada bagian ini dibahas tiga selector dasar yang paling sering digunakan: **selector tipe**, **selector class**, dan **selector ID**.

---

### 4.1. Selector Tipe (Type Selector)

Selector tipe digunakan untuk menargetkan elemen berdasarkan nama *tag* HTML.
Setiap elemen dengan nama tag yang sama akan menerima gaya yang sama.

**Contoh:**

```css
p {
  color: #333;
  line-height: 1.6;
}

h1 {
  color: seagreen;
  text-align: center;
}
```

**Penjelasan:**

* `p` akan memengaruhi semua elemen paragraf `<p>` di halaman.
* `h1` akan memengaruhi semua elemen judul tingkat 1.
* Cocok untuk memberikan gaya dasar yang bersifat umum seperti tipografi, warna teks, atau jarak antar elemen.

#### **Latihan 4A**

1. Buat halaman baru bernama `selector-type.html`.
2. Tambahkan beberapa elemen: `<h1>`, `<h2>`, `<p>`, dan `<a>`.
3. Gunakan selector tipe untuk memberi warna, ukuran font, dan *line-height* pada masing-masing tag.
4. Amati bagaimana semua elemen dengan tag yang sama otomatis mendapatkan gaya yang sama.

---

### 4.2. Selector Class (Class Selector)

Selector class digunakan untuk menargetkan satu atau lebih elemen yang memiliki atribut `class` tertentu.
Class dapat digunakan berulang pada banyak elemen yang berbeda.

**Sintaks:**

```css
.nama-class {
  properti: nilai;
}
```

**Contoh:**

```css
.highlight {
  background-color: #fff3cd;
  border-left: 4px solid #ffcc00;
  padding: 0.75rem;
}

.btn {
  background-color: #0a58ca;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
```

```html
<p class="highlight">Paragraf ini diberi penekanan.</p>
<button class="btn">Klik Saya</button>
```

**Penjelasan:**

* Selector diawali tanda titik (`.`).
* Satu elemen dapat memiliki lebih dari satu class, misalnya:

  ```html
  <button class="btn primary">Tombol Utama</button>
  ```
  
* Class adalah cara paling fleksibel untuk menerapkan gaya pada kelompok elemen yang sejenis.

#### **Latihan 4B**

1. Buat file `selector-class.html`.
2. Tambahkan beberapa elemen dengan class berbeda, misalnya `.judul`, `.teks`, `.catatan`.
3. Ubah warna, ukuran teks, dan jarak antar elemen menggunakan selector class.
4. Tambahkan dua class pada satu elemen dan amati hasil kombinasinya.

---

### 4.3. Selector ID (ID Selector)

Selector ID digunakan untuk menargetkan elemen dengan atribut `id` tertentu.
ID bersifat **unik**: hanya boleh digunakan satu kali dalam satu halaman.

**Sintaks:**

```css
#nama-id {
  properti: nilai;
}
```

**Contoh:**

```css
#header {
  background-color: #004085;
  color: white;
  padding: 1rem;
  text-align: center;
}

#footer {
  background-color: #f8f9fa;
  color: #555;
  text-align: center;
  padding: 0.5rem;
}
```

```html
<div id="header">Bagian Header</div>
<div id="footer">Bagian Footer</div>
```

**Penjelasan:**

* Selector diawali tanda pagar (`#`).
* Spesifisitas ID lebih tinggi dibanding selector class dan type, sehingga gaya ID akan mengalahkan gaya dari class bila keduanya diterapkan pada elemen yang sama.
* Disarankan hanya untuk elemen yang unik, seperti header, footer, atau navigasi utama.

#### **Latihan 4C**

1. Buat file `selector-id.html`.
2. Tambahkan elemen dengan ID `#header`, `#konten`, dan `#footer`.
3. Berikan gaya berbeda untuk tiap bagian (warna latar, teks, dan jarak).
4. Tambahkan juga class umum seperti `.blok` agar dapat dibandingkan efek prioritas antara ID dan class.

---

### 4.4. Prioritas dan Spesifisitas (Dasar)

Ketika sebuah elemen memiliki beberapa aturan CSS yang berbeda, browser akan memilih gaya dengan prioritas tertinggi:

| Urutan Kekuatan | Jenis Selector                 | Contoh                   | Catatan        |
| --------------- | ------------------------------ | ------------------------ | -------------- |
| 1               | Inline (dalam atribut `style`) | `<p style="color:red;">` | Tertinggi      |
| 2               | ID (`#id`)                     | `#footer`                | Sangat kuat    |
| 3               | Class (`.class`)               | `.highlight`             | Umum digunakan |
| 4               | Type (nama tag)                | `p`, `h1`                | Terlemah       |

**Contoh konflik:**

```html
<p id="pesan" class="highlight">Contoh teks</p>
```

```css
p { color: black; }
.highlight { color: green; }
#pesan { color: blue; } /* ini yang akan menang */
```

---

### 4.5. Latihan Gabungan

**Langkah-langkah:**

1. Buat file baru `selector-dasar.html`.
2. Tambahkan elemen berikut:

   ```html
   <h1 id="judul-utama" class="judul">Belajar Selector CSS</h1>
   <p class="teks">Ini paragraf pertama.</p>
   <p id="khusus" class="teks highlight">Ini paragraf dengan ID dan class.</p>
   <button class="btn">Tombol Biasa</button>
   ```

3. Buat file `style.css` dan tambahkan aturan:

   ```css
   h1 { color: darkslategray; }
   .highlight { background-color: #fef3c7; }
   #khusus { color: crimson; }
   ```

4. Amati hasil di browser dan ubah urutan kode untuk melihat pengaruh prioritas selector.

---

### 4.6. Kesimpulan

| Jenis Selector | Simbol           | Cakupan                        | Dapat Digunakan Ulang | Prioritas |
| -------------- | ---------------- | ------------------------------ | --------------------- | --------- |
| **Type**       | `p`, `h1`, `div` | Semua elemen dengan tag sama   | Ya                    | Rendah    |
| **Class**      | `.namaClass`     | Semua elemen dengan class sama | Ya                    | Sedang    |
| **ID**         | `#namaId`        | Hanya satu elemen unik         | Tidak                 | Tinggi    |

> **Rekomendasi:**
>
> * Gunakan **class** untuk styling umum dan berulang.
> * Gunakan **ID** hanya untuk elemen unik seperti header, footer, atau container utama.
> * Hindari mengandalkan **type selector** saja, terutama pada proyek besar, karena mudah tertimpa oleh aturan lain.

---

## **5. Properti Umum**

Setiap selector akan diikuti oleh satu atau lebih **properti**, yaitu aturan visual yang mengatur tampilan elemen.
Bagian ini membahas properti-properti CSS yang paling sering digunakan untuk **teks**, **warna**, **ukuran**, dan **kotak elemen**.

---

### 5.1. Struktur Penulisan Properti CSS

Format dasar aturan CSS:

```css
selector {
  property: value;
}
```

Contoh:

```css
p {
  color: #333;
  font-size: 16px;
  text-align: justify;
}
```

> Setiap *property* diakhiri dengan titik koma (`;`).
> *Value* dapat berupa angka, warna, nama font, atau satuan ukuran (px, em, %, dsb).

---

### 5.2. Properti Warna dan Latar Belakang

#### a. **color**

Menentukan warna teks elemen.

```css
p {
  color: darkslategray;
}
```

#### b. **background-color**

Menentukan warna latar belakang.

```css
body {
  background-color: #fafafa;
}
```

#### c. **background-image**

Menambahkan gambar latar belakang.

```css
header {
  background-image: url('banner.jpg');
  background-size: cover;
  background-position: center;
}
```

> **Tips:** Gunakan warna kontras antara teks dan latar agar mudah dibaca.

---

### 5.3. Properti Teks (Typography)

| Properti          | Fungsi                     | Contoh                            |
| ----------------- | -------------------------- | --------------------------------- |
| `font-family`     | Menentukan jenis huruf     | `font-family: Arial, sans-serif;` |
| `font-size`       | Menentukan ukuran teks     | `font-size: 18px;`                |
| `font-weight`     | Menentukan ketebalan huruf | `font-weight: bold;`              |
| `text-align`      | Mengatur perataan teks     | `text-align: center;`             |
| `text-decoration` | Menambah garis pada teks   | `text-decoration: underline;`     |
| `line-height`     | Jarak antar baris teks     | `line-height: 1.6;`               |
| `letter-spacing`  | Jarak antar huruf          | `letter-spacing: 1px;`            |

**Contoh:**

```css
h1 {
  font-family: 'Segoe UI', sans-serif;
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}

p {
  line-height: 1.8;
  letter-spacing: 0.5px;
}
```

---

### 5.4. Properti Ukuran dan Tata Letak (Box Model)

Setiap elemen di HTML dianggap sebagai **kotak (box)** yang memiliki empat lapisan:
`content → padding → border → margin`.

| Lapisan     | Deskripsi                       | Properti                                  |
| ----------- | ------------------------------- | ----------------------------------------- |
| **Content** | Isi elemen (teks, gambar, dsb.) | `width`, `height`                         |
| **Padding** | Jarak antara isi dan batas      | `padding`, `padding-top`                  |
| **Border**  | Garis tepi elemen               | `border`, `border-width`, `border-radius` |
| **Margin**  | Jarak antar elemen              | `margin`, `margin-top`                    |

**Contoh:**

```css
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #ddd;
  margin: 15px auto;
  background-color: white;
  border-radius: 10px;
}
```

> **Catatan:**
>
> * `padding` menambah ruang di dalam elemen.
> * `margin` menambah ruang di luar elemen.
> * `border-radius` membuat sudut melengkung.

---

### 5.5. Properti Tampilan (Display)

Mengatur bagaimana elemen ditampilkan di halaman.

| Nilai          | Fungsi                                                   |
| -------------- | -------------------------------------------------------- |
| `block`        | Elemen memenuhi seluruh baris (mis. `<div>`, `<p>`)      |
| `inline`       | Elemen sebaris dengan elemen lain (mis. `<span>`, `<a>`) |
| `inline-block` | Gabungan block dan inline                                |
| `none`         | Menyembunyikan elemen dari tampilan                      |

**Contoh:**

```css
a {
  display: inline-block;
  padding: 8px 12px;
  background-color: #0a58ca;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}
```

---

### 5.6. Properti Posisi (Position)

Menentukan posisi elemen terhadap halaman atau elemen induknya.

| Nilai      | Deskripsi                                                               |
| ---------- | ----------------------------------------------------------------------- |
| `static`   | Posisi default                                                          |
| `relative` | Dapat digeser dari posisi normal                                        |
| `absolute` | Diposisikan terhadap elemen induk terdekat yang berposisi selain static |
| `fixed`    | Menempel di layar, tidak bergerak saat di-*scroll*                      |
| `sticky`   | Menempel di posisi tertentu saat discroll (kombinasi relative + fixed)  |

**Contoh:**

```css
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #0a58ca;
  color: white;
}
```

---

### 5.7. Properti Spasi Internal dan Eksternal

```css
section {
  padding: 20px;    /* jarak dalam elemen */
  margin: 30px 0;   /* jarak antar elemen */
}
```

> Urutan nilai shorthand `margin` dan `padding`:
>
> * Satu nilai: semua sisi.
> * Dua nilai: vertikal | horizontal.
> * Empat nilai: atas | kanan | bawah | kiri.

Contoh:

```css
.box { margin: 10px 20px 30px 40px; }
```

---

### 5.8. Properti Perbatasan (Border)

```css
img {
  border: 3px solid #ccc;
  border-radius: 8px;
}
```

* `border-width`: ketebalan.
* `border-style`: solid, dashed, dotted, double.
* `border-color`: warna garis tepi.
* `border-radius`: membuat sudut melengkung.

---

### 5.9. Latihan Praktikum

**Langkah-langkah:**

1. Gunakan file `index.html` dari latihan sebelumnya (Latihan 9).
2. Tambahkan atau modifikasi gaya berikut dalam `style.css`:

   ```css
   body {
     background-color: #f4f4f4;
     font-family: Arial, sans-serif;
   }

   h1 {
     color: darkblue;
     text-align: center;
   }

   .card {
     width: 320px;
     background-color: white;
     padding: 16px;
     margin: 20px auto;
     border: 1px solid #ddd;
     border-radius: 8px;
   }

   .btn {
     display: inline-block;
     background-color: #0a58ca;
     color: white;
     padding: 8px 16px;
     border-radius: 4px;
     text-decoration: none;
   }

   .btn:hover {
     background-color: #004a9f;
   }
   ```

3. Uji hasil di browser.
4. Ubah nilai margin, padding, dan warna untuk memahami efek tiap properti.

---

### 5.10. Kesimpulan

| Kategori       | Properti Umum                            | Contoh                    |
| -------------- | ---------------------------------------- | ------------------------- |
| Warna          | `color`, `background-color`              | `color: red;`             |
| Teks           | `font-size`, `font-family`, `text-align` | `text-align: center;`     |
| Ukuran & Spasi | `width`, `margin`, `padding`             | `margin: 10px;`           |
| Border         | `border`, `border-radius`                | `border: 1px solid #ccc;` |
| Tampilan       | `display`, `position`                    | `position: fixed;`        |

> **Rekomendasi:**
>
> * Gunakan satuan **rem** atau **em** untuk desain responsif.
> * Gunakan warna netral dan kontras teks tinggi untuk keterbacaan.
> * Uji setiap perubahan dengan *Live Server* agar efek langsung terlihat.

---

## **6. Advanced Selector**

Selector tingkat lanjut digunakan untuk menargetkan elemen HTML dengan kondisi atau hubungan tertentu.
Pemahaman selector lanjutan memungkinkan penulisan kode CSS yang lebih efisien, terstruktur, dan mudah dipelihara tanpa harus menambah banyak class pada elemen HTML.

---

### 6.1. Selector Atribut

Selector atribut memilih elemen berdasarkan keberadaan atau nilai dari atribut HTML-nya.
Jenis ini sering digunakan pada elemen form, link, atau elemen yang memiliki pola nilai atribut tertentu.

| Bentuk Selector   | Fungsi                                      | Contoh                | Elemen yang Dipilih                    |
| ----------------- | ------------------------------------------- | --------------------- | -------------------------------------- |
| `[attr]`          | Elemen yang memiliki atribut tertentu       | `[disabled]`          | Semua elemen dengan atribut `disabled` |
| `[attr="nilai"]`  | Atribut memiliki nilai tertentu             | `input[type="email"]` | Input bertipe email                    |
| `[attr^="nilai"]` | Nilai atribut diawali dengan teks tertentu  | `a[href^="https://"]` | Tautan yang menggunakan HTTPS          |
| `[attr$="nilai"]` | Nilai atribut diakhiri dengan teks tertentu | `img[src$=".png"]`    | Gambar dengan ekstensi PNG             |
| `[attr*="nilai"]` | Nilai atribut mengandung teks tertentu      | `a[href*="stikom"]`   | Tautan yang mengandung kata “stikom”   |

**Contoh:**

```css
input[type="text"] {
  border: 1px solid #ccc;
  padding: 6px;
}

a[href^="https://"] {
  color: seagreen;
}

img[src$=".svg"] {
  background-color: #f9f9f9;
}
```

**Keterangan:**

* Selector atribut memudahkan styling tanpa menambah class.
* Hindari penggunaan yang terlalu umum agar tidak memengaruhi elemen yang tidak diinginkan.

---

### 6.2. Selector Kombinator

Selector kombinator menargetkan elemen berdasarkan **hubungan antar elemen** di dalam struktur HTML.
Terdapat empat jenis kombinator utama.

#### 1. Descendant Selector (spasi)

Menargetkan elemen yang berada **di dalam** elemen lain, pada level mana pun.

```css
nav a {
  text-decoration: none;
  color: darkslategray;
}
```

> Semua elemen `<a>` yang berada di dalam `<nav>` akan mendapatkan gaya tersebut.

---

#### 2. Child Selector (`>`)

Menargetkan elemen yang merupakan **anak langsung** dari elemen induknya.

```css
ul > li {
  list-style: square;
}
```

> Hanya `<li>` yang langsung berada di bawah `<ul>` yang dipengaruhi.

---

#### 3. Adjacent Sibling Selector (`+`)

Menargetkan elemen yang **tepat berada setelah** elemen tertentu.

```css
h2 + p {
  margin-top: 0.25rem;
  color: #444;
}
```

> Paragraf pertama setelah setiap `<h2>` akan diberi jarak atas kecil dan warna abu-abu tua.

---

#### 4. General Sibling Selector (`~`)

Menargetkan **semua saudara elemen** yang muncul setelah elemen tertentu.

```css
h2 ~ p {
  color: #555;
}
```

> Semua paragraf setelah `<h2>` (dalam induk yang sama) akan berubah warna.

---

### 6.3. Pseudo-Class

Pseudo-class memilih elemen berdasarkan **keadaan tertentu**, misalnya saat kursor diarahkan, saat fokus, atau berdasarkan urutan posisinya di dalam induk.

| Pseudo-Class    | Fungsi                                            | Contoh                                        |
| --------------- | ------------------------------------------------- | --------------------------------------------- |
| `:hover`        | Saat kursor diarahkan ke elemen                   | `.btn:hover { background: #004a9f; }`         |
| `:focus`        | Saat elemen mendapat fokus (misalnya input aktif) | `input:focus { outline: 2px solid #0a58ca; }` |
| `:active`       | Saat elemen sedang diklik                         | `a:active { color: red; }`                    |
| `:first-child`  | Elemen pertama dalam induknya                     | `li:first-child { font-weight: bold; }`       |
| `:last-child`   | Elemen terakhir dalam induknya                    | `li:last-child { color: gray; }`              |
| `:nth-child(n)` | Elemen ke-n dalam urutan                          | `tr:nth-child(even) { background: #f7f7f7; }` |

**Contoh:**

```css
a:hover {
  text-decoration: underline;
}

input:focus {
  border-color: #0a58ca;
}

tr:nth-child(even) {
  background-color: #f8f8f8;
}
```

**Keterangan:**
Gunakan pseudo-class untuk menambah interaktivitas dan kenyamanan pengguna tanpa menulis JavaScript.

---

### 6.4. Pseudo-Element

Pseudo-element digunakan untuk menambahkan **konten semu** atau mengubah bagian tertentu dari elemen, tanpa menambah elemen baru di HTML.

| Pseudo-Element   | Fungsi                            | Contoh                                               |
| ---------------- | --------------------------------- | ---------------------------------------------------- |
| `::before`       | Menambahkan konten sebelum elemen | `.btn::before { content: "► "; }`                    |
| `::after`        | Menambahkan konten sesudah elemen | `.btn::after { content: " →"; }`                     |
| `::first-letter` | Gaya pada huruf pertama           | `p::first-letter { font-size: 2em; }`                |
| `::first-line`   | Gaya pada baris pertama           | `p::first-line { font-weight: bold; }`               |
| `::selection`    | Gaya teks saat disorot            | `::selection { background: #0a58ca; color: white; }` |

**Contoh:**

```css
h1::after {
  content: " •";
  color: #0a58ca;
}

p::first-letter {
  font-size: 1.8em;
  font-weight: bold;
}

::selection {
  background: #99ccff;
  color: #000;
}
```

**Keterangan:**
Pseudo-element membantu mempercantik tampilan (ornamental) atau menambah konteks tanpa mengubah struktur HTML.

---

### 6.5. Latihan Praktikum

#### Latihan 6A – Selector Atribut

1. Buka `index.html`.
2. Tambahkan kode berikut dalam `style.css`:

   ```css
   input[type="email"] {
     border: 1px solid #ccc;
     border-radius: 4px;
     padding: 6px 10px;
   }

   a[href^="https://"]::after {
     content: " (aman)";
     color: #0a58ca;
   }
   ```

3. Tambahkan beberapa link dengan `http://` dan `https://` lalu perhatikan hasilnya.

---

#### Latihan 6B – Kombinator

1. Tambahkan beberapa paragraf di dalam dan di luar container `.content`.
2. Tambahkan kode berikut:

   ```css
   .content p {
     color: #333;
   }

   .content > p {
     font-weight: bold;
   }

   h2 + p {
     color: #0a58ca;
   }
   ```

3. Amati perbedaan hasil antar kombinator.

---

#### Latihan 6C – Pseudo-Class dan Pseudo-Element

1. Tambahkan tombol berikut pada HTML:

   ```html
   <a href="#" class="btn">Selengkapnya</a>
   ```

2. Tambahkan CSS berikut:

   ```css
   .btn {
     display: inline-block;
     background: #0a58ca;
     color: white;
     padding: 10px 16px;
     border-radius: 6px;
     text-decoration: none;
   }

   .btn:hover {
     background: #004a9f;
   }

   .btn::after {
     content: " →";
   }
   ```

3. Tambahkan juga state `:focus` agar tombol tetap dapat diakses menggunakan keyboard.

---

### 6.6. Ringkasan

| Jenis Selector     | Contoh            | Fungsi Utama                                       |
| ------------------ | ----------------- | -------------------------------------------------- |
| **Atribut**        | `[attr=value]`    | Berdasarkan atribut dan nilainya                   |
| **Descendant**     | `A B`             | Elemen di dalam elemen lain                        |
| **Child**          | `A > B`           | Anak langsung dari elemen induk                    |
| **Sibling (+)**    | `A + B`           | Elemen yang tepat setelah elemen lain              |
| **Pseudo-Class**   | `a:hover`         | Berdasarkan kondisi atau interaksi                 |
| **Pseudo-Element** | `p::first-letter` | Menambah atau mengubah bagian tertentu dari elemen |

---

### 6.7. Kesimpulan

* Selector lanjutan membuat penulisan CSS lebih efisien dan fleksibel.
* Gunakan selector atribut atau kombinator untuk menjaga HTML tetap bersih dari banyak class.
* Pseudo-class digunakan untuk keadaan interaktif, sedangkan pseudo-element untuk menambah elemen visual atau konten semu.
* Uji selector dengan *DevTools* (tab *Elements* → *Matched CSS Rules*) untuk memahami prioritas dan efek masing-masing aturan.

---

## 7. Layout CSS (Box Model, Flexbox, dan Grid)

CSS Layout berfungsi mengatur posisi dan hubungan antar elemen dalam halaman web.
Tujuan utama layout adalah menghasilkan tampilan yang teratur, mudah dibaca, dan dapat beradaptasi dengan berbagai ukuran layar.

---

### 7.1. Konsep Box Model

Semua elemen HTML dianggap sebagai **kotak (box)** yang memiliki empat lapisan utama:
**content**, **padding**, **border**, dan **margin**.

```
+-----------------------------+
|         Margin              |
|  +-----------------------+  |
|  |       Border          |  |
|  |  +-----------------+  |  |
|  |  |    Padding      |  |  |
|  |  |  +-----------+  |  |  |
|  |  |  |  Content  |  |  |  |
|  |  |  +-----------+  |  |  |
|  |  +-----------------+  |  |
|  +-----------------------+  |
+-----------------------------+
```

#### **Properti utama:**

| Properti          | Fungsi                               |
| ----------------- | ------------------------------------ |
| `width`, `height` | Ukuran area konten                   |
| `padding`         | Ruang dalam antara konten dan border |
| `border`          | Garis tepi elemen                    |
| `margin`          | Ruang luar antar elemen              |

**Contoh:**

```css
.card {
  width: 300px;
  padding: 16px;
  border: 2px solid #ddd;
  margin: 20px auto;
  background-color: white;
  border-radius: 8px;
}
```

> **Catatan:** Gunakan `box-sizing: border-box;` agar lebar elemen mencakup padding dan border secara otomatis.

---

### 7.2. Display dan Flow Elemen

Setiap elemen HTML memiliki perilaku dasar dalam aliran dokumen (*document flow*).

| Nilai          | Deskripsi                                              | Contoh Elemen               |
| -------------- | ------------------------------------------------------ | --------------------------- |
| `block`        | Mengisi seluruh baris, dimulai dari baris baru         | `<div>`, `<p>`, `<section>` |
| `inline`       | Sejajar dalam satu baris, hanya selebar kontennya      | `<span>`, `<a>`, `<strong>` |
| `inline-block` | Seperti `inline`, tetapi dapat diberi lebar dan tinggi | tombol atau ikon            |
| `none`         | Tidak ditampilkan di halaman                           | elemen yang disembunyikan   |

**Contoh:**

```css
a {
  display: inline-block;
  padding: 8px 12px;
  background-color: #0a58ca;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}
```

---

### 7.3. Flexbox (Flexible Box Layout)

Flexbox digunakan untuk membuat layout satu dimensi (horizontal atau vertikal) yang fleksibel.
Elemen di dalam container dapat menyesuaikan ukuran dan posisi sesuai ruang yang tersedia.

#### **Struktur Dasar**

```html
<div class="flex-container">
  <div class="box">A</div>
  <div class="box">B</div>
  <div class="box">C</div>
</div>
```

```css
.flex-container {
  display: flex;
  gap: 10px;
}

.box {
  background: #0a58ca;
  color: white;
  padding: 20px;
  text-align: center;
  flex: 1;
}
```

#### **Properti pada Container**

| Properti          | Fungsi              | Nilai Contoh                            |
| ----------------- | ------------------- | --------------------------------------- |
| `display`         | Mengaktifkan flex   | `flex`                                  |
| `flex-direction`  | Arah utama          | `row`, `column`                         |
| `justify-content` | Perataan horizontal | `flex-start`, `center`, `space-between` |
| `align-items`     | Perataan vertikal   | `stretch`, `center`, `flex-end`         |
| `gap`             | Jarak antar item    | `10px`                                  |

#### **Properti pada Item**

| Properti     | Fungsi                                   | Nilai Contoh              |
| ------------ | ---------------------------------------- | ------------------------- |
| `flex`       | Mengatur proporsi ukuran                 | `1`, `2`, atau `0 1 auto` |
| `align-self` | Menimpa `align-items` pada item tertentu | `center`, `flex-end`      |
| `order`      | Mengubah urutan tampilan                 | `1`, `2`, `-1`            |

**Contoh lanjutan:**

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-container .box:nth-child(2) {
  flex: 2;
  background: seagreen;
}
```

---

### 7.4. Grid Layout

CSS Grid digunakan untuk membangun tata letak dua dimensi (baris dan kolom).
Berbeda dengan Flexbox yang fokus satu arah, Grid dapat mengatur struktur keseluruhan halaman.

#### **Struktur Dasar**

```html
<div class="grid-container">
  <div class="item item1">Header</div>
  <div class="item item2">Sidebar</div>
  <div class="item item3">Konten</div>
  <div class="item item4">Footer</div>
</div>
```

#### **CSS**

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
}

.item {
  background: #e9ecef;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
}

.item1 {
  grid-column: 1 / 3; /* melebar ke dua kolom */
  background: #0a58ca;
  color: white;
}
```

#### **Properti Penting Grid**

| Properti                  | Fungsi                             | Contoh Nilai          |
| ------------------------- | ---------------------------------- | --------------------- |
| `display`                 | Mengaktifkan grid                  | `grid`                |
| `grid-template-columns`   | Menentukan jumlah dan lebar kolom  | `1fr 1fr 1fr`         |
| `grid-template-rows`      | Menentukan jumlah dan tinggi baris | `auto 1fr auto`       |
| `gap`                     | Jarak antar sel grid               | `10px`                |
| `grid-column`, `grid-row` | Menentukan posisi item di grid     | `grid-column: 1 / 3;` |

> **Catatan:** Satuan `fr` (fractional unit) berarti proporsi ruang relatif terhadap total yang tersedia.

---

### 7.5. Layout Responsif dengan Media Query

**Media Query** memungkinkan perubahan gaya berdasarkan ukuran layar perangkat.
Biasanya digunakan bersama Flexbox atau Grid untuk tampilan yang menyesuaikan.

**Contoh:**

```css
.container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 48%;
  margin: 1%;
}

/* Tampilan pada layar kecil */
@media (max-width: 768px) {
  .card {
    width: 100%;
    margin-bottom: 10px;
  }
}
```

> **Penjelasan:**
>
> * Saat lebar layar di bawah 768 piksel, setiap `.card` akan memenuhi seluruh lebar layar.
> * Desain menjadi lebih nyaman untuk pengguna ponsel.

---

### 7.6. Latihan Praktikum

#### Latihan 7A – Box Model

1. Buat elemen `.box` dengan properti `width`, `padding`, `border`, dan `margin`.
2. Uji perbedaan efek antar nilai `padding` dan `margin`.
3. Tambahkan `box-sizing: border-box;` lalu perhatikan perbedaannya.

---

#### Latihan 7B – Flexbox

1. Buat tiga kotak di dalam container `.flex-container`.
2. Gunakan `display: flex;`, `justify-content`, dan `align-items` untuk mengatur posisi.
3. Tambahkan satu item dengan `flex: 2` untuk melihat proporsi perbedaan lebar.

---

#### Latihan 7C – Grid Layout

1. Buat layout dengan tiga kolom dan dua baris.
2. Gunakan `grid-template-columns: 1fr 2fr 1fr;`
3. Atur salah satu elemen agar melebar ke dua kolom menggunakan `grid-column: 1 / 3;`

---

#### Latihan 7D – Responsif

1. Gunakan Grid atau Flexbox dari latihan sebelumnya.
2. Tambahkan *media query* agar layout berubah menjadi satu kolom pada layar kecil.
3. Uji hasilnya pada mode ponsel di *browser DevTools*.

---

### 7.7. Kesimpulan

| Teknik Layout   | Kegunaan                                     | Kelebihan                                    |
| --------------- | -------------------------------------------- | -------------------------------------------- |
| **Box Model**   | Menentukan ruang dan ukuran elemen           | Dasar semua layout                           |
| **Flexbox**     | Tata letak satu dimensi (baris atau kolom)   | Fleksibel, mudah digunakan                   |
| **Grid**        | Tata letak dua dimensi (baris dan kolom)     | Presisi tinggi, cocok untuk struktur halaman |
| **Media Query** | Desain responsif untuk berbagai ukuran layar | Mendukung semua perangkat                    |

> Gunakan **Flexbox** untuk tata letak komponen kecil,
> dan **Grid** untuk struktur utama halaman.

---

## **8. Latihan Akhir**

Gabungkan seluruh konsep di atas untuk membuat halaman profil sederhana yang memiliki:

* Header dan footer dengan warna berbeda.
* Bagian konten dengan dua kolom (`display: flex`).
* Elemen teks dengan font, warna, dan jarak yang serasi.
* Navigasi dengan efek *hover*.
* Gunakan kode `html` dan `css` di bawah ini untuk latihan.

---

## **File-file untuk Latihan 8**
Berikut satu berkas **`index.html`** yang kaya elemen untuk digunakan pada **Latihan 8 (gabungan konsep CSS)**. Struktur sudah disiapkan agar mudah dieksplorasi dengan selector dasar, kombinator, pseudo-class, pseudo-element, serta layout (Flex/Grid), box model, dan tipografi. Kaitkan file CSS eksternal bernama `style.css` sesuai kebutuhan.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Latihan 8 — Dasar CSS</title>
  <meta name="description" content="Dokumen latihan CSS sederhana untuk selector dasar, box model, layout, dan form." />
  <link rel="stylesheet" href="style.css" />
</head>
<body id="top">
  <header class="site-header" role="banner">
    <div class="brand">
      <h1 id="judul-utama" class="judul">Latihan 8: Dasar CSS</h1>
      <p class="tagline">Fokus: selector type, class, id; box model; layout dasar.</p>
    </div>

    <nav class="main-nav" aria-label="Navigasi utama">
      <ul class="menu">
        <li class="menu__item"><a class="menu__link is-active" href="#beranda">Beranda</a></li>
        <li class="menu__item"><a class="menu__link" href="#artikel">Artikel</a></li>
        <li class="menu__item"><a class="menu__link" href="#formulir">Form</a></li>
      </ul>
    </nav>
  </header>

  <main id="main" class="site-main" role="main">
    <!-- Hero ringkas -->
    <section id="beranda" class="hero">
      <h2 class="hero__title">Mulai dari Struktur Sederhana</h2>
      <p class="lead">Latihan ini menyiapkan elemen minimal agar mudah dipraktikkan dan diinspeksi.</p>
      <div class="actions">
        <a class="btn" href="#artikel">Baca Artikel</a>
        <a class="btn btn-ghost" href="#formulir">Isi Form</a>
      </div>
    </section>

    <!-- Layout dua kolom sederhana -->
    <div class="layout layout--content">
      <section id="artikel" class="content" aria-labelledby="judul-artikel">
        <h2 id="judul-artikel">Artikel Ringkas</h2>

        <article class="card" id="artikel-1">
          <header class="card__header">
            <h3 class="card__title">Pengantar Box Model</h3>
          </header>
          <p>
            Setiap elemen adalah kotak yang terdiri dari <strong>content</strong>, <strong>padding</strong>,
            <strong>border</strong>, dan <strong>margin</strong>. Atur jarak dan ukuran menggunakan properti tersebut.
          </p>
          <pre><code>.box { padding: 12px; border: 1px solid #ddd; margin: 12px 0; }</code></pre>
        </article>

        <article class="card" id="artikel-2">
          <header class="card__header">
            <h3 class="card__title">Selector Dasar</h3>
          </header>
          <p>
            Gunakan selector <em>type</em> (mis. <code>p</code>), <em>class</em> (mis. <code>.btn</code>), dan
            <em>id</em> (mis. <code>#judul-utama</code>) untuk menargetkan elemen.
          </p>
          <ul>
            <li><code>p { line-height: 1.6; }</code></li>
            <li><code>.highlight { background: #fff3cd; }</code></li>
            <li><code>#artikel-2 { border-color: #cce; }</code></li>
          </ul>
        </article>

        <!-- Tabel sederhana untuk zebra dan padding sel -->
        <figure>
          <figcaption>Contoh Tabel Sederhana</figcaption>
          <table class="data-table">
            <thead>
              <tr>
                <th>Properti</th>
                <th>Contoh Nilai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>margin</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>padding</td>
                <td>8px 12px</td>
              </tr>
              <tr>
                <td>border</td>
                <td>1px solid #ddd</td>
              </tr>
            </tbody>
          </table>
        </figure>
      </section>

      <aside class="sidebar" aria-label="Sampingan">
        <section class="widget">
          <h2 class="widget__title">Catatan</h2>
          <p class="highlight">Latih selector type, class, dan id pada elemen di halaman ini.</p>
        </section>

        <section class="widget">
          <h2 class="widget__title">Daftar Tugas</h2>
          <ol>
            <li>Ganti warna judul utama menggunakan <code>#judul-utama</code>.</li>
            <li>Atur jarak kartu artikel dengan class <code>.card</code>.</li>
            <li>Ubah tipografi paragraf melalui selector <code>p</code>.</li>
          </ol>
        </section>
      </aside>
    </div>

    <!-- Form minimal -->
    <section id="formulir" class="section" aria-labelledby="judul-form">
      <h2 id="judul-form">Form Umpan Balik</h2>
      <form class="form" action="#" method="post" novalidate>
        <div class="form-row">
          <label for="nama">Nama</label>
          <input id="nama" name="nama" type="text" placeholder="Nama lengkap" />
        </div>
        <div class="form-row">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="nama@contoh.com" />
        </div>
        <div class="form-actions">
          <button class="btn" type="submit">Kirim</button>
          <button class="btn btn-ghost" type="reset">Reset</button>
        </div>
      </form>
    </section>
  </main>

  <footer class="site-footer" role="contentinfo">
    <p><small>&copy; <time datetime="2025">2025</time> — Dokumen latihan CSS dasar.</small></p>
    <p class="back-to-top"><a href="#top">Kembali ke atas</a></p>
  </footer>
</body>
</html>
```

### Catatan pemanfaatan untuk latihan

* **Selector dasar & kombinator**: `.menu .submenu a`, `.card-grid > .card`, `nav > ul > li`.
* **Pseudo-class**: `a:hover`, `input:focus`, `:first-child`, `:last-child`, `:nth-child(even/odd)`, `:not()`.
* **Pseudo-element**: `::before`, `::after`, `::marker`, `::selection`.
* **Box model**: `.card`, `.feature-item`, `.demo` untuk uji `margin/padding/border`.
* **Layout**: `.layout--content` (2 kolom dengan Flex/Grid), `.card-grid[data-cols="3"]` (Grid responsif).
* **Tipografi**: `.prose`, `.lead`, heading `h1–h3`, `blockquote`, `code`, `kbd`, `abbr`.
* **Position**: `.announcement-bar` (uji `sticky/fixed`), ikon tombol.
* **State via attribute**: `[data-variant]`, `[data-rating]`, `[data-feature]`, `[data-state="active"]`.
* **Form**: validasi pseudo-class `:required`, `:invalid`, fokus, `:focus-within`.

---

Berikut template awal **`style.css`** yang dapat digunakan bersama berkas `index.html` pada Latihan 8.
Struktur ini sudah disiapkan agar mahasiswa dapat langsung menambahkan deklarasi CSS per bagian sambil mempraktikkan konsep dari modul (selector, box model, layout, tipografi, dsb).

---

```css
/* =========================================================
   STYLE.CSS – TEMPLATE LATIHAN 9
   Front-End Web Development – Modul CSS Dasar
   ========================================================= */

/* ---------------------------------------------------------
   1. RESET & VARIABEL DASAR
   --------------------------------------------------------- */
:root {
  /* Warna utama situs */
  --color-bg: #ffffff;
  --color-text: #222222;
  --color-accent: #0055cc;
  --color-accent-light: #e8f0ff;
  --color-border: #dddddd;

  /* Tipografi */
  --font-sans: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-mono: "Courier New", monospace;

  /* Ukuran umum */
  --container-width: 1200px;
  --radius: 6px;
  --shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

/* Reset dasar untuk konsistensi antar browser */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

/* Link */
a {
  color: var(--color-accent);
  text-decoration: none;
}
a:hover,
a:focus {
  text-decoration: underline;
}

/* ---------------------------------------------------------
   2. STRUKTUR UTAMA
   --------------------------------------------------------- */
header,
main,
footer {
  width: 100%;
}

.site-header {
  background: var(--color-accent-light);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow);
  padding: 1rem 2rem;
}

.site-main {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 2rem 1rem;
}

.site-footer {
  background: var(--color-accent-light);
  border-top: 1px solid var(--color-border);
  padding: 2rem;
  text-align: center;
}

/* ---------------------------------------------------------
   3. NAVIGASI
   --------------------------------------------------------- */
.main-nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.main-nav a {
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius);
  transition: background 0.3s;
}
.main-nav a:hover {
  background-color: var(--color-accent-light);
}
.menu__link.is-active {
  font-weight: bold;
  border-bottom: 2px solid var(--color-accent);
}

/* ---------------------------------------------------------
   4. TYPOGRAFI DASAR
   --------------------------------------------------------- */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.5rem;
}
p {
  margin-bottom: 1rem;
}
.lead {
  font-size: 1.1rem;
  color: #444;
}
code,
kbd {
  font-family: var(--font-mono);
  background: #f5f5f5;
  padding: 0.15em 0.4em;
  border-radius: var(--radius);
}

/* ---------------------------------------------------------
   5. LAYOUT & BOX MODEL
   --------------------------------------------------------- */
.layout--content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.content {
  flex: 3 1 60%;
}
.sidebar {
  flex: 1 1 30%;
}
.card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1rem;
  box-shadow: var(--shadow);
  background-color: #fff;
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-3px);
}

/* ---------------------------------------------------------
   6. FORM & INPUT
   --------------------------------------------------------- */
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
}
.form-row {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
label {
  font-weight: 500;
}
input,
select,
textarea {
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 0.5rem;
  font-size: 1rem;
}
input:focus,
select:focus,
textarea:focus {
  border-color: var(--color-accent);
  outline: none;
  box-shadow: 0 0 0 2px var(--color-accent-light);
}
button,
.btn {
  background-color: var(--color-accent);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background 0.3s;
}
button:hover,
.btn:hover {
  background-color: #0042a0;
}

/* ---------------------------------------------------------
   7. TABEL
   --------------------------------------------------------- */
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 1rem;
}
th,
td {
  border: 1px solid var(--color-border);
  padding: 0.5rem 0.75rem;
  text-align: left;
}
thead {
  background-color: var(--color-accent-light);
}
tbody tr:nth-child(even) {
  background-color: #f8f8f8;
}

/* ---------------------------------------------------------
   8. UTILITAS & RESPONSIVITAS
   --------------------------------------------------------- */
.section {
  margin-block: 3rem;
}
.text-center {
  text-align: center;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}

/* Media Query contoh */
@media (max-width: 768px) {
  .layout--content {
    flex-direction: column;
  }
  .main-nav ul {
    flex-direction: column;
  }
}

/* ---------------------------------------------------------
   9. AREA EKSPERIMEN
   Gunakan bagian ini untuk latihan selector lanjutan, pseudo-class,
   pseudo-element, transition, transform, dan lainnya.
   --------------------------------------------------------- */

/* Contoh pseudo-class */
a:hover::after {
  content: " ↗";
}

/* Contoh efek hover card */
.card-grid .card:hover {
  background-color: var(--color-accent-light);
}

/* ---------------------------------------------------------
   10. AKHIR FILE
   --------------------------------------------------------- */
```