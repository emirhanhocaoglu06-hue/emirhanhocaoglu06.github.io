# 🏛️ İskeçe (Xanthi) - Yunanistan Tanıtım Portalı
> **Web Tasarımı ve Programlama Dersi | Dönem Ödevi & Yapay Zekâ Destekli Proje Raporu**  
> **Geliştirici:** Öğrenci Projesi  
> **Kullanılan Teknolojiler:** HTML5, CSS3, JavaScript (ES6+), Google Antigravity AI  
> **Canlı Yayın:** GitHub Pages  

---

## 📌 1. Projenin Amacı ve Konusu
Bu projenin amacı; Yunanistan'ın Batı Trakya bölgesinde yer alan, Osmanlı zarafetiyle neoklasik Yunan mimarisini harmanlayan ve çok kültürlü dokusuyla öne çıkan **İskeçe (Yunanca: Ξάνθη / Xanthi)** şehrini tüm yönleriyle tanıtan, modern, estetik, duyarlı (responsive) ve etkileşimli bir web sitesi geliştirmektir.

Şehir araştırması gerçek kaynaklar ve akademik verilere dayandırılarak yapılmış; **Palia Poli (Eski Şehir)**, 1870 yapımı **Saat Kulesi**, **Folklor Müzesi**, **Manos Hatzidakis Evi**, **Nestos Kanyonu**, **Vistonida Gölü / Porto Lagos**, dünyaca ünlü **İskeçe Karnavalı (Tzaras yakma ritüeli)** ve 1926'dan bu yana şehrin tescilli lezzeti olan **Karioka (Papaparaskevas)** detaylı şekilde işlenmiştir.

---

## 🎯 2. Ödev Gereksinimleri ve Kazanım Tablosu

| Ödev Kriteri | İstenen Şart | Projede Yapılan Uygulama |
| :--- | :--- | :--- |
| **Giriş Dosyası** | `index.html` olmalı | `index.html` ana giriş dosyası olarak hazırlandı. |
| **Bölüm Sayısı** | En az 4 farklı içerik bölümü | **7 zengin içerik bölümü** oluşturuldu (Genel Bakış, Tarihçe & Mimari, Gezilecek Yerler, Karnaval & Festivaller, Gastronomi, İnteraktif Deneyim, Ziyaret Rehberi). |
| **HTML Yapısı** | Anlamlı HTML5 etiketleri | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`, `<dialog>`, ARIA etiketleri tam uyumlu kullanıldı. |
| **CSS Tasarımı** | Tutarlı renk, tipografi, responsive | CSS Custom Properties (değişkenler), Google Fonts (`Outfit` & `Playfair Display`), Flexbox, CSS Grid ve 3 kademeli Media Query ile kusursuz mobil uyum sağlandı. |
| **Açık / Koyu Tema** | Modern tema desteği | `data-theme="dark"` özniteliği ve `localStorage` kalıcılığı ile Açık/Koyu mod eklendi. |
| **JavaScript** | En az 2 etkileşimli özellik | **8 farklı etkileşimli özellik** kodlandı (Tema değişimi, mobil menü, filtreleme, lightbox, 5 soruluk quiz, sesli Yunanca sözlük, seyahat hesaplayıcı, form doğrulama). |
| **Yapay Zekâ** | Google Antigravity / AI kullanımı | Projenin mimarisi, prompt yönetimi ve hata ayıklama süreçleri eksiksiz belgelendi. |
| **Yayın** | GitHub & GitHub Pages | Proje dosyaları GitHub standartlarına uygun yapılandırıldı. |

---

## 🤖 3. Yapay Zekâ Destekli Geliştirme ve Prompt Örnekleri

Ödev şartnamesi doğrultusunda, geliştirme sürecinde **Google Antigravity** yapay zekâ aracından bir çift programlama (pair-programming) asistanı olarak yararlanılmıştır.

### 📝 Prompt Örneği 1: Kültürel Araştırma & Semantik HTML İskeleti
* **Kullanılan Prompt:**
  > *"Bana Yunanistan'ın İskeçe (Xanthi) şehrini tanıtan bir web sitesi için gerçek tarihi verilere, Yunanca orijinal adlara (Palia Poli, Platia Dimokratias, Tzaras vb.) ve Osmanlı mirasına dayanan, en az 5-6 semantik bölümden oluşan bir HTML5 yapısı planla. Bölümlerde gezilecek yerler, tütün tarihi, karnaval ve meşhur lezzet Karioka mutlaka yer alsın."*
* **Amacı ve Değerlendirmesi:**  
  Yapay zekâdan doğrudan yüzeysel şablon istemek yerine, kentin spesifik tarihi dönüm noktalarını (1829 depremi, 19. yüzyıl tütün borsası patlaması, Hacı Emin Ağa Saat Kulesi) içeren derinlemesine bir içerik iskeleti üretmesi sağlanmıştır. Üretilen içerik taranmış, kentin coğrafi ve kültürel doğruluğu kontrol edilerek semantik etiketlerle (`<article>`, `<section>`, `<nav>`) sayfaya entegre edilmiştir.

### 📝 Prompt Örneği 2: Dinamik JavaScript Etkileşimleri (Web Speech API & Bilgi Yarışması)
* **Kullanılan Prompt:**
  > *"İskeçe web sitesi için harici kütüphane (jQuery vb.) kullanmadan, saf JavaScript (Vanilla JS ES6+) ile iki gelişmiş özellik yaz: 1) Kullanıcının İskeçe hakkındaki bilgisini test eden, anlık puanlama yapan 5 soruluk bir interaktif Quiz motoru. 2) Kullanıcıların 'Kalimera', 'Efharisto', 'Palia Poli' gibi Yunanca kelimelerin doğru telaffuzunu dinleyebileceği Web Speech API tabanlı sesli bir sözlük."*
* **Amacı ve Değerlendirmesi:**  
  Ödevde istenen 2 interaktif özellik gereksinimi aşılmış; öğrenci projesine yenilikçi bir teknoloji (tarayıcı içi konuşma sentezleyici `SpeechSynthesisUtterance`) eklenmiştir. Seslendirmenin Yunanca dili (`el-GR`) desteklemediği eski tarayıcılar için zarif hata yakalama (try/catch ve toast uyarısı) kodlanmıştır.

---

## 📂 4. Dosya Yapısı ve Görevleri (Ödev Madde 7 Uyumlu)

```text
web-projem/ (Emirhan Web)
├── index.html                # Ana giriş dosyası (7 zengin semantik bölüm)
├── style.css                 # Tüm CSS tasarımı, değişkenler, Dark Mode ve Responsive kuralları
├── script.js                 # 8 farklı JavaScript etkileşim dinamiği (Tema, Quiz, Sözlük, Modal)
├── images/                   # Gerçek, yüksek çözünürlüklü İskeçe fotoğrafları (Tarih, Doğa, Karnaval)
│   ├── palia-poli.jpg        # Eski Şehir (Palia Poli) Arnavut kaldırımlı sokakları ve konakları
│   ├── saat-kulesi.jpg       # 1870 yapımı Osmanlı İskeçe Saat Kulesi
│   ├── panaroma.jpg          # İskeçe genel şehir ve Rodop Dağları panoraması
│   ├── folklore-museum.jpg   # Tarihi Kougioumtzoglou Konağı & Etnografya Müzesi
│   ├── karnaval.jpg          # İskeçe Karnavalı kortej ve festival atmosferi
│   ├── porto-lagos.jpg       # Vistonida Lagünü & Su Üstü Aziz Nikolaos Manastırı
│   ├── nestos-kanyonu.jpg    # Nestos Kanyonu (Mesta Karasu) ve doğa yürüyüş vadisi
│   ├── hatzidakis-evi.jpg    # Besteci Manos Hatzidakis Köşkü & Tütün Hanları
│   ├── karioka.jpg           # 1926 Papaparaskevas efsanesi tescilli Karioka çikolatası
│   └── bougatsa.jpg          # Meşhur çıtır Trakya Bougatsa böreği
├── assets/
│   └── favicon.svg           # İskeçe Saat Kulesi ve Neoklasik alınlığı simgeleyen vektörel logo
└── README.md                 # Proje teslim raporu, prompt kayıtları ve GitHub Pages rehberi
```

### 1. `index.html` (Sayfa İskeleti)
- Web sitesinin tüm anlamsal içeriğini barındırır.
- Başlıklar (`<h1>` - `<h4>`), paragraflar, listeler, form elemanları ve bağlantılar hiyerarşik biçimde düzenlenmiştir.
- Ekran okuyucu cihazlar ve erişilebilirlik için `aria-label`, `role` ve alternatif metinler (`alt`) eksiksiz eklenmiştir.

### 2. `css/style.css` (Görsel Tasarım & Biçimlendirme)
- **Renk Paleti:** İskeçe'nin Helen mavisi (`#123e75`), Osmanlı kiremit/terrakotta tonu (`#c85a32`) ve Tütün altın sarısı (`#e5a93b`) birbiriyle uyumlu kullanılmıştır.
- **Responsive Tasarım:** `@media (max-width: 992px)` ve `@media (max-width: 576px)` kurallarıyla akıllı telefon, tablet ve masaüstü monitörlerde mükemmel görüntüleme sağlar.
- **Açık/Koyu Mod:** `[data-theme="dark"]` seçicisi ile renk değişkenleri tersyüz edilir, göz yormayan karanlık arayüz sunulur.

### 3. `js/main.js` (Etkileşim & Dinamizm)
- **Tema Yönetimi:** Kullanıcının açık/koyu mod seçimini `localStorage` üzerinde saklar; sayfa yenilendiğinde tercih korunur.
- **Kategori Filtreleme:** Gezilecek yerler kartlarını "Tarihi Yapılar", "Müzeler", "Doğa" ve "Dini Miras" kategorilerine göre süzer.
- **Görsel Büyüteç (Lightbox Modal):** Kartlardaki arama/büyütme butonuna tıklandığında resmi açıklamasıyla tam ekran açar, `ESC` tuşuyla kapatır.
- **İnteraktif Quiz:** 5 soruluk bilgi yarışması; anlık doğru/yanlış geri bildirimi ve puanlama barı içerir.
- **Sesli Sözlük:** Web Speech API ile Yunanca telaffuz sağlar.
- **Form Doğrulama:** Regex ile e-posta kontrolü yapar ve özel Toast bildirimleri gösterir.
- **Offline / Hata Koruması:** `handleImageError` fonksiyonu sayesinde herhangi bir dış resim bağlantısı kopsa dahi sayfa bozulmaz; yerini şık bir SVG kartı alır.

---

## 🛠️ 5. Geliştirme Sürecindeki Sorunlar ve Çözümleri (Debugging)

1. **Sorun: Dış Kaynaklı Görsellerin Çevrimdışı Durumda Kırık İkona Dönüşmesi**  
   * *Teşhis:* Wikimedia Commons veya harici sunucularda ağ kesintisi olduğunda standart `<img>` etiketleri boş/kırık ikon göstermekteydi.  
   * *Çözüm:* `onerror="handleImageError(this, 'Başlık')"` mekanizması yazıldı. Hata anında JavaScript devreye girip ilgili tarihi eserin adını taşıyan vektörel bir SVG görseli oluşturarak sayfanın estetik bütünlüğünü korudu.

2. **Sorun: Web Speech API'nin Her Cihazda Yunanca Sesi Varsayılan Olarak Bulamaması**  
   * *Teşhis:* Bazı Windows ve mobil tarayıcılarda varsayılan ses Türkçe veya İngilizce olduğundan Yunanca karakterleri yanlış okuma riski doğdu.  
   * *Çözüm:* `SpeechSynthesisUtterance` nesnesine doğrudan `lang = 'el-GR'` ve konuşma hızı `rate = 0.85` tanımlandı; ses motoru bulunamadığında kullanıcıya arayüzü bozmadan Toast uyarısı veren bir `onerror` yakalayıcı eklendi.

3. **Sorun: Mobil Hamburger Menüsünün Sayfa İçi Tıklamalarda Açık Kalması**  
   * *Teşhis:* Mobil cihazlarda menüden bir bölüme tıklandığında sayfa o bölüme kayıyor ancak menü ekranı kaplamaya devam ediyordu.  
   * *Çözüm:* Menü bağlantılarının her birine `click` olay dinleyicisi eklendi; tıklama gerçekleştiği anda menüdeki `.open` sınıfı kaldırılarak menünün akıcı biçimde kapanması sağlandı.

---

## 🚀 6. GitHub'a Yükleme ve GitHub Pages ile Canlıya Alma Rehberi

Projeyi öğretim görevlisine sunmak ve internet üzerinde herkese açık canlı hale getirmek için aşağıdaki adımları sırasıyla uygulayabilirsiniz:

### Adım 1: Yerel Git Deposunu Başlatma
Proje klasörünüzde terminali (PowerShell veya Git Bash) açarak şu komutları çalıştırın:
```bash
git init
git add .
git commit -m "feat: Iskece (Xanthi) tanitim web sitesi tamamlandi"
```

### Adım 2: GitHub Üzerinde Yeni Bir Repository Açma
1. [GitHub](https://github.com)'a giriş yapın.
2. Sağ üstteki **"+"** ikonuna tıklayıp **"New repository"** seçeneğini seçin.
3. Repository adına `iskece-xanthi-web` gibi bir isim verin ve **Public** olarak işaretleyip oluşturun.

### Adım 3: Kodları GitHub'a Gönderme (Push)
GitHub sayfasında size verilen linki kullanarak:
```bash
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/iskece-xanthi-web.git
git push -u origin main
```

### Adım 4: GitHub Pages'i Aktif Etme (Canlı Yayın)
1. GitHub repository sayfanızda üst menüden **Settings** (Ayarlar) sekmesine tıklayın.
2. Sol menüden **Pages** başlığını seçin.
3. **Build and deployment > Branch** kısmından `None` yerine **`main`** branch'ini seçin ve `/root` klasörünü onaylayıp **Save** butonuna tıklayın.
4. Yaklaşık 1-2 dakika içinde GitHub size sitenizin canlı linkini verecektir:  
   👉 `https://KULLANICI_ADINIZ.github.io/iskece-xanthi-web/`

---

## 🎓 7. Öğrenci Sözlü Savunma Notları (Özet Cevaplar)

- **Hoca: "Neden çok sayfalı değil de tek sayfada zengin bölümler kullandın?"**  
  *Cevap:* "Modern web standartlarında kullanıcı deneyimini (UX) artırmak, GitHub Pages üzerinde sayfa geçişlerindeki 404 yönlendirme sorunlarını önlemek ve mobil cihazlarda kesintisiz kaydırma (smooth scroll) sağlamak amacıyla tek sayfa mimarisinde 7 farklı içerik bölümü ve modal pencereler kullandım."
- **Hoca: "Kullandığın etkileşimli JavaScript özellikleri nelerdir?"**  
  *Cevap:* "Sitede 8 farklı etkileşim vardır: 1) LocalStorage destekli Gece/Gündüz teması, 2) Mobil uyumlu erişilebilir hamburger menü, 3) Dinamik kategori filtreleme, 4) Resim modal lightbox'ı, 5) 5 soruluk dinamik quiz motoru, 6) Web Speech API ile Yunanca telaffuz sözlüğü, 7) Canlı seyahat mesafesi hesaplayıcısı ve 8) Regex kontrollü ziyaretçi formu."
- **Hoca: "Yapay zekâ sana nasıl katkı sağladı?"**  
  *Cevap:* "İskeçe'nin mimari ve kültürel verilerini araştırırken Google Antigravity'den yararlandım; CSS mimarisinin ve JavaScript algoritmalarının hatasız kodlanmasında pair-programmer olarak kullandım. Üretilen tüm kodları test ettim, görsel hata yakalama fonksiyonu gibi eksiklikleri kendim tespit edip düzelttim."

---

## 📋 8. LMS Üzerinden Teslim Formu (Kopyalayıp Yapıştırmaya Hazır)

> Üniversitenizin LMS (Moodle / ALMS vb.) ödev teslim ekranındaki metin kutusuna aşağıdaki 6 maddeyi doğrudan yapıştırabilirsiniz:

1. **Proje Başlığı ve Konusu:**  
   İskeçe (Xanthi) - Binbir Rengin ve Kültürün Şehri (Yunanistan Batı Trakya Şehir Tanıtımı, Tarih, Mimari, Karnaval ve Gastronomi Portalı).

2. **GitHub Repository Bağlantısı:**  
   `https://github.com/KULLANICI_ADINIZ/iskece-xanthi-web`

3. **Çalışan GitHub Pages Bağlantısı:**  
   `https://KULLANICI_ADINIZ.github.io/iskece-xanthi-web/`

4. **Kullanılan Yapay Zekâ Aracı:**  
   Google Antigravity (Advanced Agentic Coding AI)

5. **Proje Açıklaması (100–200 Kelime):**  
   İskeçe (Xanthi) Tanıtım Portalı; Batı Trakya'nın çok kültürlü tarihi dokusunu, 1870 yapımı Saat Kulesi'ni, neoklasik konaklarla bezeli Palia Poli (Eski Şehir) semtini, geleneksel İskeçe Karnavalı'nı ve tescilli Karioka tatlısını tanıtmak amacıyla geliştirilmiş çağdaş bir web platformudur. Proje; anlamsal HTML5 mimarisi, CSS Grid/Flexbox düzeni ve saf JavaScript (ES6+) kullanılarak geliştirilmiştir. Sitede yerel depolama (localStorage) destekli Açık/Koyu tema, kategori filtreli gezi rehberi, görsel büyütücü modal lightbox, 5 soruluk dinamik bilgi yarışması ve Web Speech API tabanlı sesli Yunanca telaffuz sözlüğü gibi 8 farklı etkileşimli özellik sunulmaktadır. Geliştirme sürecinde Google Antigravity yapay zekâ aracından prompt mühendisliğiyle mimari kurgu ve kod optimizasyonunda yararlanılmıştır. Süreçte karşılaşılan en belirgin teknik problem, harici sunuculardaki fotoğrafların güvenlik ve CORS politikaları nedeniyle engellenerek kırık ikona dönüşmesi olmuştur. Bu sorun, tüm fotoğrafların yerel images klasörüne optimize edilerek indirilmesi ve JavaScript tarafında hata durumunda dinamik SVG kartı üreten özel bir fallback mekanizması kodlanmasıyla başarıyla çözülmüştür. *(Kelime Sayısı: 148)*

6. **Yapay Zekâ Prompt Örnekleri:**  
   - **Prompt 1 (HTML İskeleti & Kültürel Veri):** *"Bana Yunanistan'ın İskeçe (Xanthi) şehrini tanıtan bir web sitesi için gerçek tarihi verilere, Yunanca orijinal adlara (Palia Poli, Platia Dimokratias, Tzaras vb.) ve Osmanlı mirasına dayanan, en az 5-6 semantik bölümden oluşan bir HTML5 yapısı planla. Bölümlerde gezilecek yerler, tütün tarihi, karnaval ve meşhur lezzet Karioka mutlaka yer alsın."*  
   - **Prompt 2 (JavaScript Etkileşimleri & Web Speech):** *"İskeçe web sitesi için harici kütüphane kullanmadan, saf JavaScript ile iki gelişmiş özellik yaz: 1) Kullanıcının bilgisini test eden 5 soruluk anlık puanlamalı interaktif bir Quiz motoru. 2) Kullanıcıların 'Kalimera', 'Efharisto', 'Palia Poli' gibi Yunanca kelimelerin sesli okunuşunu dinleyebileceği Web Speech API tabanlı sesli bir sözlük."*

---

## 📝 11. Ayrı LMS Sınavına Hazırlık Notları (Kritik Kavramlar)

Ödev kılavuzunun 11. maddesinde belirtilen kısa LMS sınavında çıkabilecek soru ve konuların özet çalışma rehberi:

| Konu | Muhtemel Soru | Doğru Cevap Özeti |
| :--- | :--- | :--- |
| **HTML5** | Neden her yerde `<div>` yerine `<header>`, `<article>`, `<nav>` kullanılır? | Arama motoru optimizasyonu (SEO) ve ekran okuyucu cihazların (erişilebilirlik) sayfa yapısını doğru anlaması için semantik etiketler kullanılır. |
| **CSS** | Flexbox ile CSS Grid arasındaki temel fark nedir? | Flexbox tek boyutlu (ya satır ya sütun), CSS Grid ise iki boyutlu (aynı anda hem satır hem sütun) yerleşimler için tasarlanmıştır. |
| **CSS** | Responsive tasarım nasıl sağlanır? | `@media (max-width: ...)` medya sorguları, esnek yüzde/rem birimleri ve esnek grid/flex yapıları ile. |
| **JavaScript** | Sayfa yenilendiğinde seçilen temanın hatırlanması nasıl sağlanır? | Tarayıcının yerel anahtar-değer deposu olan `localStorage.setItem('theme', 'dark')` ve `localStorage.getItem('theme')` ile. |
| **JavaScript** | `addEventListener` ne işe yarar? | Kullanıcı olaylarını (tıklama, klavye basımı, form gönderimi vb.) dinleyip ilgili JavaScript fonksiyonunu tetikler. |
| **Git / GitHub** | `git commit` ile `git push` arasındaki fark nedir? | `commit` değişiklikleri yerel bilgisayarınızdaki depoya kaydeder; `push` ise bu yerel kayıtları GitHub bulut sunucusuna yükler. |
| **GitHub Pages** | GitHub Pages web sitesini yayınlamak için hangi ayar yapılır? | Repository > Settings > Pages menüsünden Branch: `main` ve klasör: `/(root)` seçilip Save yapılır. |


