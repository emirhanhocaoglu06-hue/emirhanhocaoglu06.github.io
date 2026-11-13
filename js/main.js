/**
 * İSKEÇE (XANTHI) WEB SİTESİ - JAVASCRIPT ETKİLEŞİM DOSYASI
 * Öğrenci Projesi | Gelişmiş Etkileşimli Özellikler
 * 
 * 1. Açık / Koyu Tema (Dark/Light Mode) & LocalStorage
 * 2. Responsive Mobil Menü (Hamburger Menu) & Klavye Erişilebilirliği
 * 3. Dinamik Gezi Kategorisi Filtreleme (Category Filter)
 * 4. Modal Lightbox (Görsel Büyüteç & Detay Penceresi)
 * 5. İnteraktif İskeçe Bilgi Yarışması (Mini Quiz)
 * 6. Yunanca - Türkçe Sesli Şehir Sözlüğü (Web Speech API)
 * 7. Canlı Seyahat & Mesafe Hesaplayıcı
 * 8. İletişim / Gezi Notu Formu Doğrulama & Toast Bildirim
 * 9. Scrollspy & Sayfa İçi Gezinme Takibi
 * 10. Görsel Hata Yakalama ve Güvenli Fallback Mekanizması
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initCategoryFilter();
  initLightbox();
  initInteractiveQuiz();
  initGreekVocabulary();
  initTravelCalculator();
  initContactForm();
  initScrollspy();
});

/* ==========================================================================
   1. AÇIK / KOYU TEMA YÖNETİMİ (DARK/LIGHT THEME)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  // Kayıtlı tercihi veya sistem tercihini kontrol et
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');

  applyTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    showToast(`Tema değiştirildi: ${newTheme === 'dark' ? 'Koyu Mod 🌙' : 'Açık Mod ☀️'}`);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggleBtn.innerHTML = '☀️';
      themeToggleBtn.setAttribute('title', 'Açık Temaya Geç');
      themeToggleBtn.setAttribute('aria-label', 'Açık Temaya Geç');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeToggleBtn.innerHTML = '🌙';
      themeToggleBtn.setAttribute('title', 'Koyu Temaya Geç');
      themeToggleBtn.setAttribute('aria-label', 'Koyu Temaya Geç');
      localStorage.setItem('theme', 'light');
    }
  }
}

/* ==========================================================================
   2. MOBİL HAMBURGER GEZİNME MENÜSÜ
   ========================================================================== */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburgerBtn || !navMenu) return;

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    hamburgerBtn.innerHTML = isOpen ? '✕' : '☰';
  });

  // Menüdeki bir bağlantıya tıklandığında menüyü kapat
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.innerHTML = '☰';
      }
    });
  });

  // ESC tuşuyla menüyü kapat
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.innerHTML = '☰';
    }
  });
}

/* ==========================================================================
   3. GEZİLECEK YERLER KATEGORİ FİLTRELEME
   ========================================================================== */
function initCategoryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const placeCards = document.querySelectorAll('.place-card');

  if (!filterBtns.length || !placeCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      placeCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   4. MODAL LIGHTBOX (GÖRSEL BÜYÜTEÇ & DETAY)
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalDesc = document.getElementById('lightboxDesc');
  const closeBtn = document.getElementById('lightboxClose');
  const zoomTriggers = document.querySelectorAll('[data-lightbox]');

  if (!modal || !modalImg) return;

  zoomTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Her buton kendi data-image / data-title / data-desc özelliğini taşır.
      // Fallback olarak en yakın kart içindeki img'nin src'si kullanılır.
      let imgSrc = trigger.getAttribute('data-image');
      let title  = trigger.getAttribute('data-title');
      let desc   = trigger.getAttribute('data-desc');

      // data-image yoksa (eski butonlar için güvenli fallback)
      if (!imgSrc) {
        const card = trigger.closest('.place-card') ||
                     trigger.closest('.gastro-hero-card') ||
                     trigger.closest('.gastro-item') ||
                     trigger.closest('.carnival-media');
        if (card) {
          const img = card.querySelector('img');
          imgSrc = img ? img.getAttribute('src') : '';
          title  = title  || card.querySelector('h3, h4')?.textContent || 'İskeçe Görseli';
          desc   = desc   || card.querySelector('.place-description, p')?.textContent || '';
        }
      }

      title = title || 'İskeçe Görseli';
      desc  = desc  || '';

      modalImg.src = imgSrc;
      modalImg.alt = title;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;

      // Tam boyut ve zoomsun (kırpmasız) gösterim
      modalImg.style.objectFit = 'contain';
      modalImg.style.maxWidth = '90vw';
      modalImg.style.maxHeight = '72vh';
      modalImg.style.width = 'auto';
      modalImg.style.height = 'auto';
      modalImg.style.display = 'block';
      modalImg.style.margin = '0 auto';

      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Arka planın kaymasını engelle
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Arka plana tıklayınca kapat
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // ESC ile kapat
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   5. İNTERAKTİF İSKEÇE MİNİ BİLGİ YARIŞMASI (QUIZ)
   ========================================================================== */
function initInteractiveQuiz() {
  const quizData = [
    {
      question: "1. İskeçe'nin tescilli, cevizli ve el yapımı çikolata ile kaplanan dünyaca ünlü geleneksel tatlısı hangisidir?",
      options: ["Karioka (Καρυόκα)", "Baklava (Μπακλαβάς)", "Loukoumades (Lokma)", "Galaktoboureko"],
      correct: 0,
      explanation: "Doğru! Karioka, 1926 yılında İskeçe'ye yerleşen Papaparaskevas ailesinin icadıdır ve şehrin lezzet sembolüdür."
    },
    {
      question: "2. İskeçe'nin merkezinde yer alan ve 1859-1870 yıllarında inşa edilen Osmanlı mirası Saat Kulesi hangi meydandadır?",
      options: ["Aristoteles Meydanı", "Sintagma Meydanı", "Demokrasi Meydanı (Platia Dimokratias)", "Omonia Meydanı"],
      correct: 2,
      explanation: "Harika! Saat Kulesi (Pirgos tu Rologiu), Demokrasi Meydanı'nın (Platia Dimokratias) tam merkezinde şehri selamlar."
    },
    {
      question: "3. İskeçe Karnavalı'nın son gecesinde Kosynthos Nehri üzerinde kötü ruhları kovmak için yakılan dev kukla figürü nedir?",
      options: ["Minotaur", "Tzaros (Çaros)", "Zeus", "Bacchus"],
      correct: 1,
      explanation: "Tebrikler! Doğu Trakya kökenli bir gelenek olan Tzaros (Çaros) yakma seremonisi, kışın gidişini ve arınmayı simgeler."
    },
    {
      question: "4. 'Never on Sunday' şarkısıyla Oscar kazanan dünyaca ünlü hangi Yunan besteci İskeçe'de doğmuştur?",
      options: ["Mikis Theodorakis", "Vangelis", "Manos Hatzidakis (Μάνος Χατζιδάκις)", "Yanni"],
      correct: 2,
      explanation: "Kesinlikle! Manos Hatzidakis İskeçe'de doğmuştur ve doğduğu görkemli neoklasik köşk bugün kültür merkezidir."
    },
    {
      question: "5. İskeçe'ye 25 km mesafede, lagün üstünde ahşap köprülerle ulaşılan Aziz Nikolaos Manastırı hangi göldedir?",
      options: ["Vistonida Gölü (Porto Lagos)", "Kerkini Gölü", "Prespa Gölü", "Volvi Gölü"],
      correct: 0,
      explanation: "Doğru! Vistonida Lagünü (Porto Lagos) üzerindeki Aziz Nikolaos Manastırı ve pembe flamingolar büyüleyici bir manzaraya sahiptir."
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let answered = false;

  const questionEl = document.getElementById('quizQuestion');
  const optionsEl = document.getElementById('quizOptions');
  const feedbackEl = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('quizNextBtn');
  const currentQNum = document.getElementById('quizCurrentNum');
  const progressFill = document.getElementById('quizProgressFill');
  const quizActiveBox = document.getElementById('quizActiveBox');
  const quizResultBox = document.getElementById('quizResultBox');
  const quizScoreDisplay = document.getElementById('quizFinalScore');
  const quizScoreMsg = document.getElementById('quizScoreMsg');
  const restartBtn = document.getElementById('quizRestartBtn');

  if (!questionEl || !optionsEl) return;

  function loadQuestion() {
    answered = false;
    feedbackEl.className = 'quiz-feedback';
    feedbackEl.textContent = '';
    nextBtn.style.display = 'none';

    const currentData = quizData[currentQuestionIndex];
    questionEl.textContent = currentData.question;
    currentQNum.textContent = currentQuestionIndex + 1;
    progressFill.style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;

    optionsEl.innerHTML = '';
    currentData.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `<span>${optText}</span> <span class="indicator">⚪</span>`;
      btn.addEventListener('click', () => selectAnswer(idx, btn));
      optionsEl.appendChild(btn);
    });
  }

  function selectAnswer(selectedIndex, selectedBtn) {
    if (answered) return;
    answered = true;

    const currentData = quizData[currentQuestionIndex];
    const optionButtons = optionsEl.querySelectorAll('.quiz-option-btn');

    optionButtons.forEach(b => b.disabled = true);

    if (selectedIndex === currentData.correct) {
      score++;
      selectedBtn.classList.add('correct');
      selectedBtn.querySelector('.indicator').textContent = '✅';
      feedbackEl.className = 'quiz-feedback show success';
      feedbackEl.textContent = currentData.explanation;
    } else {
      selectedBtn.classList.add('wrong');
      selectedBtn.querySelector('.indicator').textContent = '❌';
      optionButtons[currentData.correct].classList.add('correct');
      optionButtons[currentData.correct].querySelector('.indicator').textContent = '✅';
      feedbackEl.className = 'quiz-feedback show error';
      feedbackEl.textContent = `Yanlış! ${currentData.explanation}`;
    }

    if (currentQuestionIndex < quizData.length - 1) {
      nextBtn.textContent = 'Sonraki Soru ➡️';
      nextBtn.style.display = 'inline-flex';
    } else {
      nextBtn.textContent = 'Sonuçları Gör 🏆';
      nextBtn.style.display = 'inline-flex';
    }
  }

  nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    quizActiveBox.style.display = 'none';
    quizResultBox.classList.add('active');
    quizScoreDisplay.textContent = `${score} / ${quizData.length}`;

    if (score === 5) {
      quizScoreMsg.textContent = "Olağanüstü! 🌟 İskeçe konusunda tam bir uzmansın! Bir sonraki gezi rotan kesinlikle hazır!";
    } else if (score >= 3) {
      quizScoreMsg.textContent = "Tebrikler! 👏 İskeçe ve Batı Trakya hakkında harika bir genel kültürün var.";
    } else {
      quizScoreMsg.textContent = "Fena değil! 😊 Sayfamızdaki bölümleri inceleyerek İskeçe'nin gizli kalmış güzelliklerini daha yakından keşfedebilirsin.";
    }
  }

  restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    quizResultBox.classList.remove('active');
    quizActiveBox.style.display = 'block';
    loadQuestion();
  });

  // İlk soruyu yükle
  loadQuestion();
}

/* ==========================================================================
   6. YUNANCA - TÜRKÇE SESLİ SÖZLÜK (WEB SPEECH API)
   ========================================================================== */
function initGreekVocabulary() {
  const vocabInput = document.getElementById('vocabSearchInput');
  const vocabCards = document.querySelectorAll('.vocab-card');
  const audioButtons = document.querySelectorAll('.vocab-audio-btn');

  // Arama filtreleme
  if (vocabInput) {
    vocabInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      vocabCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(term)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Web Speech API ile Yunanca Telaffuz
  audioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const word = btn.getAttribute('data-word');
      if (!word) return;

      if ('speechSynthesis' in window) {
        // Devam eden seslendirmeleri iptal et
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'el-GR'; // Yunanca ses
        utterance.rate = 0.85;     // Anlaşılır ve net hız

        // Seslendirme hatası durumunda bildirim
        utterance.onerror = () => {
          showToast(`Telaffuz çalınamadı: ${word}`);
        };

        window.speechSynthesis.speak(utterance);
        btn.classList.add('playing');
        setTimeout(() => btn.classList.remove('playing'), 1000);
      } else {
        showToast(`Tarayıcınız ses sentezini desteklemiyor: ${word}`);
      }
    });
  });
}

/* ==========================================================================
   7. SEYAHAT SÜRESİ VE MESAFE HESAPLAYICI
   ========================================================================== */
function initTravelCalculator() {
  const citySelect = document.getElementById('calcCitySelect');
  const distEl = document.getElementById('calcDistance');
  const timeEl = document.getElementById('calcTime');
  const routeTipEl = document.getElementById('calcTip');

  if (!citySelect || !distEl || !timeEl) return;

  const routes = {
    istanbul: {
      dist: '390 km',
      time: '4.5 - 5 Saat',
      tip: 'İpsala - Kipi Sınır Kapısı üzerinden kesintisiz Egnatia Odos (A2) otobanı rotası.'
    },
    edirne: {
      dist: '185 km',
      time: '2 - 2.5 Saat',
      tip: 'Pazarkule veya İpsala sınır kapısından sonra Dedeağaç ve Gümülcine geçilerek ulaşılır.'
    },
    thessaloniki: {
      dist: '205 km',
      time: '2 Saat 15 Dk',
      tip: 'Selanik havalimanından veya merkezinden Egnatia Odos otobanı üzerinden doğu yönüne.'
    },
    athens: {
      dist: '705 km',
      time: '7.5 Saat',
      tip: 'Atina - Selanik A1 otobanı ve ardından Egnatia Odos otoyolu bağlantısı.'
    }
  };

  citySelect.addEventListener('change', () => {
    const selected = citySelect.value;
    const data = routes[selected];
    if (data) {
      distEl.textContent = data.dist;
      timeEl.textContent = data.time;
      routeTipEl.textContent = data.tip;
    }
  });
}

/* ==========================================================================
   8. İLETİŞİM / GEZİ NOTU FORMU DOĞRULAMA & TOAST
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('travelContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || name.length < 2) {
      showToast('Lütfen geçerli bir isim giriniz.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showToast('Lütfen geçerli bir e-posta adresi giriniz.', 'error');
      return;
    }

    if (!message || message.length < 10) {
      showToast('Mesajınız en az 10 karakter olmalıdır.', 'error');
      return;
    }

    // Başarılı gönderim simülasyonu
    showToast(`Teşekkürler ${name}! Gezi notunuz ve mesajınız başarıyla kaydedildi. 🇬🇷✉️`, 'success');
    form.reset();
  });
}

/* ==========================================================================
   9. BİLDİRİM KUTUSU (TOAST NOTIFICATION)
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type === 'error' ? 'error' : 'success'}`;
  toast.innerHTML = `
    <span>${type === 'error' ? '⚠️' : '✨'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}

/* ==========================================================================
   10. SCROLLSPY (SAYFA İÇİ GEZİNME TAKİBİ)
   ========================================================================== */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   11. GÖRSEL HATA FALLBACK MEKANİZMASI
   ========================================================================== */
window.handleImageError = function(imgElement, landmarkTitle) {
  imgElement.onerror = null; // Sonsuz döngüyü engelle
  // Şık SVG yedek görsel üret
  const safeTitle = encodeURIComponent(landmarkTitle || 'İskeçe Görseli');
  imgElement.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%231a365d"/><circle cx="300" cy="170" r="60" fill="%23e5a93b" opacity="0.8"/><path d="M270 210 L330 210 L320 130 L280 130 Z" fill="%23ffffff"/><text x="300" y="270" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23ffffff" text-anchor="middle">${safeTitle}</text><text x="300" y="300" font-family="sans-serif" font-size="14" fill="%23cbd5e1" text-anchor="middle">İskeçe (Xanthi) - Yunanistan</text></svg>`;
};

