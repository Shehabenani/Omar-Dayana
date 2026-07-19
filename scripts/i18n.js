(function () {
  const STORAGE_KEY = "inv-lang";

  const translations = {
    en: {
      pageTitle: "Omar & Dayana — 8.8.2026",
      tapToOpen: "Tap to open",
      introLoading: "Loading…",
      tapAgain: "Tap again to open",
      heroTagline: "Welcome to the Wedding of",
      heroDate: "8 August 2026",
      scrollDown: "Scroll Down",
      ariaScrollCountdown: "Scroll to countdown",
      inviteLine1: "Together with our families, we joyfully invite",
      inviteLine2: "you to celebrate the beginning of our forever.",
      saveTheDateHeading: "Save the Date",
      saveTheDateLine: "SATURDAY, 8 AUGUST, 2026",
      countdownHeading: "Countdown",
      countdownDate: "8 August 2026",
      cdDays: "Days",
      cdHours: "Hours",
      cdMins: "Minutes",
      cdSecs: "Seconds",
      welcomeHeading: "Welcome!",
      welcomeText:
        "We joyfully invite you to celebrate the beginning of our forever. Here you'll find everything you need for our special day.",
      momentsHeading: "Memories",
      momentAlt1: "Omar and Dayana moment 1",
      momentAlt2: "Omar and Dayana moment 2",
      momentAlt3: "Omar and Dayana moment 3",
      momentAlt4: "Omar and Dayana moment 4",
      momentAlt5: "Omar and Dayana moment 5",
      momentAlt6: "Omar and Dayana moment 6",
      momentAlt7: "Omar and Dayana moment 7",
      momentAlt8: "Omar and Dayana moment 8",
      momentAlt9: "Omar and Dayana moment 9",
      momentAlt10: "Omar and Dayana moment 10",
      weddingHeading: "The Wedding Of",
      lede: "Together with their families, request the honour of your presence as they begin their new chapter, bound in love and blessing.",
      dateLine: "SATURDAY · AUGUST 8, 2026 · 6:00 PM",
      venueSectionHeading: "The Venue",
      venueLocationLine: "ALMASA HOTEL - NASR CITY",
      venueHall: "EMERALD VENUE",
      detailsHeading: "What To Know",
      dateTimeLabel: "Date & Time",
      datePrimary: "August 8, 2026",
      ceremonyTime: "Ceremony begins at 7:00 PM",
      venueLabel: "Venue",
      venuePrimary: "Emerald Venue",
      venueSecondary: "Almasa Hotel",
      mapTitle: "Almasa Hotel location",
      getDirections: "Get Directions",
      sweetDreamsLine1: "Sweet Dreams for",
      sweetDreamsLine2: "Your Little Ones",
      seeYouSoonHeading: "See You Soon",
      seeYouSoonMessageLine1: "We can't wait to celebrate this",
      seeYouSoonMessageLine2: "unforgettable day with you.",
      seeYouSoonClosing: "With love,",
      seeYouSoonNames: "Omar & Dayana",
      footerText:
        "With love and gratitude, we can't wait to celebrate with you.",
      ariaToggleMusic: "Toggle music",
      ariaSwitchToAr: "Switch to Arabic",
      ariaSwitchToEn: "Switch to English",
      langButton: "AR",
      mapHl: "en",
    },
    ar: {
      pageTitle: "عمر ودايانا — 8.8.2026",
      tapToOpen: "اضغط للفتح",
      introLoading: "جاري التحميل…",
      tapAgain: "اضغط مرة أخرى للفتح",
      heroTagline: "نرحّب بكم في حفل زفاف",
      heroDate: "8 أغسطس 2026",
      scrollDown: "مرّر للأسفل",
      ariaScrollCountdown: "الانتقال إلى العد التنازلي",
      inviteLine1: "مع عائلاتنا، يسعدنا دعوتكم",
      inviteLine2: "للاحتفال ببداية حياتنا.",
      saveTheDateHeading: "احفظوا الموعد",
      saveTheDateLine: "السبت · 8 أغسطس 2026",
      countdownHeading: "العدّ التنازلي",
      countdownDate: "8 أغسطس 2026",
      cdDays: "أيام",
      cdHours: "ساعات",
      cdMins: "دقائق",
      cdSecs: "ثوانٍ",
      welcomeHeading: "أهلاً بكم!",
      welcomeText:
        "يسعدنا دعوتكم للاحتفال ببداية حياتنا المشتركة. هنا تجدون كل ما تحتاجونه ليومنا المميز.",
      momentsHeading: "لحظاتنا",
      momentAlt1: "لحظة لعمر ودايانا 1",
      momentAlt2: "لحظة لعمر ودايانا 2",
      momentAlt3: "لحظة لعمر ودايانا 3",
      momentAlt4: "لحظة لعمر ودايانا 4",
      momentAlt5: "لحظة لعمر ودايانا 5",
      momentAlt6: "لحظة لعمر ودايانا 6",
      momentAlt7: "لحظة لعمر ودايانا 7",
      momentAlt8: "لحظة لعمر ودايانا 8",
      momentAlt9: "لحظة لعمر ودايانا 9",
      momentAlt10: "لحظة لعمر ودايانا 10",
      weddingHeading: "حفل زفاف",
      lede: "بجانب عائلتيهما، يتشرفان بدعوتكم لحضور بداية فصل جديد من حياتهما، متمسكين بالحب والبركة.",
      dateLine: "السبت · 8 أغسطس 2026 · 6:00 مساءً",
      venueSectionHeading: "المكان",
      venueLocationLine: "فندق الماسة - مدينة نصر",
      venueHall: "قاعة إميرالد",
      detailsHeading: "ما يهمكم معرفته",
      dateTimeLabel: "التاريخ والوقت",
      datePrimary: "8 أغسطس 2026",
      ceremonyTime: "تبدأ المراسم الساعة 7:00 مساءً",
      venueLabel: "المكان",
      venuePrimary: "قاعة إميرالد",
      venueSecondary: "فندق الماسة",
      mapTitle: "موقع فندق الماسة",
      getDirections: "عرض الاتجاهات",
      sweetDreamsLine1: "أحلاماً سعيدة",

      sweetDreamsLine2: "لصغاركم",
      seeYouSoonHeading: "نراكم قريباً",
      seeYouSoonMessageLine1: "لا نطيق الانتظار للاحتفال معكم",
      seeYouSoonMessageLine2: "بهذا اليوم الذي لا يُنسى.",
      seeYouSoonClosing: "مع حبنا،",
      seeYouSoonNames: "عمر ودايانا",
      footerText: "بكل حب وامتنان، لا نطيق الانتظار للاحتفال معكم.",
      ariaToggleMusic: "تشغيل أو إيقاف الموسيقى",
      ariaSwitchToAr: "التبديل إلى العربية",
      ariaSwitchToEn: "التبديل إلى الإنجليزية",
      langButton: "EN",
      mapHl: "ar",
    },
  };

  const langToggle = document.getElementById("lang-toggle");
  const mapFrame = document.querySelector(".details-map__frame");

  let currentLang = "en";

  function detectInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ar") return saved;
    const browser = (navigator.language || "").toLowerCase();
    return browser.startsWith("ar") ? "ar" : "en";
  }

  function applyText(key, value) {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach((el) => {
      el.textContent = value;
    });
  }

  function applyAria(key, value) {
    document.querySelectorAll(`[data-i18n-aria="${key}"]`).forEach((el) => {
      el.setAttribute("aria-label", value);
    });
  }

  function applyAlt(lang) {
    const t = translations[lang];
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.dataset.i18nAlt;
      if (t[key]) el.alt = t[key];
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    const t = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t.pageTitle;

    Object.keys(t).forEach((key) => {
      if (key.startsWith("aria")) {
        applyAria(key, t[key]);
        return;
      }
      if (key === "langButton" || key === "mapHl") return;
      applyText(key, t[key]);
    });

    applyAlt(lang);

    if (langToggle) {
      langToggle.textContent = t.langButton;
      langToggle.setAttribute(
        "aria-label",
        lang === "en" ? t.ariaSwitchToAr : t.ariaSwitchToEn,
      );
    }

    if (mapFrame) {
      mapFrame.title = t.mapTitle;
      mapFrame.src = `https://maps.google.com/maps?q=Almasa+Hotel,+Nasr+City,+Cairo,+Egypt&hl=${t.mapHl}&z=15&output=embed`;
    }

    localStorage.setItem(STORAGE_KEY, lang);
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      setLanguage(currentLang === "en" ? "ar" : "en");
    });
  }

  window.invitationI18n = function (key) {
    const t = translations[currentLang];
    return t && t[key] ? t[key] : key;
  };

  setLanguage(detectInitialLang());
})();
