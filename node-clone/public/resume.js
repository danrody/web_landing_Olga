const RESUME_SELECTOR_BY_KEY = {
  "nav.home": ".resume-nav-links a:nth-child(1)",
  "nav.contact": ".resume-nav-links a:nth-child(2)",
  "hero.kicker": ".resume-kicker",
  "hero.title": "#resume-title",
  "hero.lead": ".resume-lead",
  "hero.email": ".resume-actions .resume-button:nth-child(1)",
  "snapshot.1.value": ".resume-snapshot article:nth-child(1) strong",
  "snapshot.1.text": ".resume-snapshot article:nth-child(1) span",
  "snapshot.2.value": ".resume-snapshot article:nth-child(2) strong",
  "snapshot.2.text": ".resume-snapshot article:nth-child(2) span",
  "snapshot.3.value": ".resume-snapshot article:nth-child(3) strong",
  "snapshot.3.text": ".resume-snapshot article:nth-child(3) span",
  "contact.title": ".resume-sidebar .resume-panel:nth-child(1) h2",
  "contact.linkedin": ".resume-sidebar .resume-panel:nth-child(1) li:nth-child(3) a",
  "contact.city": ".resume-sidebar .resume-panel:nth-child(1) li:nth-child(4)",
  "contact.language": ".resume-sidebar .resume-panel:nth-child(1) li:nth-child(5)",
  "education.title": ".resume-sidebar .resume-panel:nth-child(2) h2",
  "education.1.strong": ".resume-sidebar .resume-panel:nth-child(2) .resume-stack p:nth-child(1) strong",
  "education.2.strong": ".resume-sidebar .resume-panel:nth-child(2) .resume-stack p:nth-child(2) strong",
  "education.2.span": ".resume-sidebar .resume-panel:nth-child(2) .resume-stack p:nth-child(2) span",
  "education.3.strong": ".resume-sidebar .resume-panel:nth-child(2) .resume-stack p:nth-child(3) strong",
  "education.3.span": ".resume-sidebar .resume-panel:nth-child(2) .resume-stack p:nth-child(3) span",
  "cert.title": ".resume-sidebar .resume-panel:nth-child(3) h2",
  "cert.1": ".resume-sidebar .resume-panel:nth-child(3) li:nth-child(1)",
  "cert.2": ".resume-sidebar .resume-panel:nth-child(3) li:nth-child(2)",
  "cert.3": ".resume-sidebar .resume-panel:nth-child(3) li:nth-child(3)",
  "cert.4": ".resume-sidebar .resume-panel:nth-child(3) li:nth-child(4)",
  "profile.title": "#profile-title",
  "profile.1": ".resume-section[aria-labelledby=\"profile-title\"] .resume-copy p:nth-child(1)",
  "profile.2": ".resume-section[aria-labelledby=\"profile-title\"] .resume-copy p:nth-child(2)",
  "profile.3": ".resume-section[aria-labelledby=\"profile-title\"] .resume-copy p:nth-child(3)",
  "experience.title": "#experience-title",
  "experience.1.time": ".resume-timeline article:nth-child(1) time",
  "experience.2.role": ".resume-timeline article:nth-child(2) h3",
  "experience.2.place": ".resume-timeline article:nth-child(2) p",
  "experience.3.role": ".resume-timeline article:nth-child(3) h3",
  "experience.3.place": ".resume-timeline article:nth-child(3) p",
  "experience.4.role": ".resume-timeline article:nth-child(4) h3",
  "experience.4.place": ".resume-timeline article:nth-child(4) p",
  "experience.5.role": ".resume-timeline article:nth-child(5) h3",
  "experience.5.place": ".resume-timeline article:nth-child(5) p",
  "experience.note": ".resume-note",
  "competencies.title": "#competencies-title",
  "competencies.1.title": ".resume-competencies article:nth-child(1) h3",
  "competencies.1.1": ".resume-competencies article:nth-child(1) li:nth-child(1)",
  "competencies.1.2": ".resume-competencies article:nth-child(1) li:nth-child(2)",
  "competencies.1.3": ".resume-competencies article:nth-child(1) li:nth-child(3)",
  "competencies.1.4": ".resume-competencies article:nth-child(1) li:nth-child(4)",
  "competencies.1.5": ".resume-competencies article:nth-child(1) li:nth-child(5)",
  "competencies.2.title": ".resume-competencies article:nth-child(2) h3",
  "competencies.2.1": ".resume-competencies article:nth-child(2) li:nth-child(1)",
  "competencies.2.2": ".resume-competencies article:nth-child(2) li:nth-child(2)",
  "competencies.2.3": ".resume-competencies article:nth-child(2) li:nth-child(3)",
  "competencies.3.title": ".resume-competencies article:nth-child(3) h3",
  "competencies.3.1": ".resume-competencies article:nth-child(3) li:nth-child(1)",
  "competencies.3.2": ".resume-competencies article:nth-child(3) li:nth-child(2)",
  "competencies.3.3": ".resume-competencies article:nth-child(3) li:nth-child(3)",
  "competencies.3.4": ".resume-competencies article:nth-child(3) li:nth-child(4)",
  "competencies.4.title": ".resume-competencies article:nth-child(4) h3",
  "competencies.4.1": ".resume-competencies article:nth-child(4) li:nth-child(1)",
  "competencies.4.2": ".resume-competencies article:nth-child(4) li:nth-child(2)",
  "competencies.5.title": ".resume-competencies article:nth-child(5) h3",
  "competencies.5.1": ".resume-competencies article:nth-child(5) li:nth-child(1)"
};

const RESUME_RU_TEXT = {
  "nav.home": "Главная",
  "nav.contact": "Контакт",
  "hero.kicker": "Профессионал в карьерном консультировании и сопровождении",
  "hero.title": "Ольга Перекопская",
  "hero.lead":
    "Как специалист по карьерной навигации и консультированию я имею комплексную практику: профориентация молодых взрослых, управление карьерными переходами для профессионалов, развитие карьеры, разработка и проведение обучающих программ для развития навыков управления карьерой, информация о тенденциях рынка труда и улучшение навыков трудоустройства.",
  "hero.email": "Написать",
  "snapshot.1.value": "20+ лет",
  "snapshot.1.text": "Я работала HR-менеджером в крупных международных компаниях",
  "snapshot.2.value": "12 лет",
  "snapshot.2.text": "Моя психотерапевтическая практика",
  "snapshot.3.value": "2018-2024",
  "snapshot.3.text": "HRD Senior Advisor, Global Career Counsellor",
  "contact.title": "Контакты",
  "contact.linkedin": "Профиль LinkedIn",
  "contact.city": "Москва, РФ",
  "contact.language": "Свободный английский",
  "education.title": "Образование",
  "education.1.strong": "Executive Master, Consulting &amp; Coaching for Change, INSEAD",
  "education.2.strong": "Магистр управления человеческими ресурсами.",
  "education.2.span": "Государственный университет управления, Москва, РФ",
  "education.3.strong": "Врач, психотерапия.",
  "education.3.span": "Медицинская академия, РФ",
  "cert.title": "Сертификации",
  "cert.1": "Certified Global Career Development Facilitator, NCDA, USA",
  "cert.2": "Career Construction Institution, USA",
  "cert.3": "Designing Your Life, Stanford, USA",
  "cert.4": "Certified ICF Coach, Hogan, SHL, Saville consulting (Wave) assessment tools",
  "profile.title": "Профиль",
  "profile.1":
    "Как специалист по карьерной навигации и консультированию я имею комплексную практику: профориентация молодых взрослых, управление карьерными переходами для профессионалов, развитие карьеры, разработка и проведение обучающих программ для развития навыков управления карьерой, информация о тенденциях рынка труда и улучшение навыков трудоустройства. У меня сильный бэкграунд, который сформировал меня как профессионала.",
  "profile.2":
    "Моя психотерапевтическая практика сформировала понимание того, как личные психологические особенности влияют на рабочую жизнь. Мое фундаментальное образование в менеджменте и более 20 лет работы HR-менеджером в крупных международных компаниях позволили мне сформировать широкий бизнес-взгляд, понимание деловой среды и требований, которые любая бизнес-функция предъявляет к современным профессионалам, а также понимание динамики современного рынка труда.",
  "profile.3":
    "Я считаю, что моя ключевая и уникальная компетенция — подход <em>Life Design</em> (M. Savickas), критически важный для переходов и построения индивидуальных траекторий на протяжении жизни.",
  "experience.title": "Опыт работы",
  "experience.1.time": "2018-2024",
  "experience.2.role": "HRD",
  "experience.2.place": "Ipoteka-bank, Ташкент, Узбекистан",
  "experience.3.role": "HR Leader, Executive &amp; Leadership Development, Talent management.",
  "experience.3.place": "SIBUR, Москва, РФ.",
  "experience.4.role": "Chief Learning Officer",
  "experience.4.place": "Metinvest Holding, Киев, Украина",
  "experience.5.role": "HR Director, Talent Management",
  "experience.5.place": "TNK-BP, Москва, РФ",
  "experience.note": "Дополнительный опыт: HR Manager, Recruitment Manager, психотерапевтическая практика в течение 12 лет",
  "competencies.title": "Ключевые компетенции",
  "competencies.1.title": "Глубокое знание карьерных теорий",
  "competencies.1.1": "Теории жизненного пути",
  "competencies.1.2":
    "Теории карьерного выбора и планирования: trait-factors, конструктивистский подход, life-designing, социальное научение, теория адаптации к работе, planned happenstance",
  "competencies.1.3": "Психологические теории индивидуальных личностных черт и поведения",
  "competencies.1.4": "Организационные и управленческие теории",
  "competencies.1.5": "Теории лидерства. Теории управления изменениями",
  "competencies.2.title": "Career Education: способность обучать людей развитию навыков управления карьерой",
  "competencies.2.1": "Знание подходов к обучению разных целевых групп (старшая школа, студенты, профессионалы)",
  "competencies.2.2": "Разработка обучающих программ и учебных планов",
  "competencies.2.3":
    "Поддержка людей в развитии компетенций для lifelong career management skills: осознание сильных сторон, развитие навыков карьерного планирования и трудоустройства",
  "competencies.3.title": "Карьерная информация и оценка",
  "competencies.3.1": "Поддержка людей в оценке личных характеристик и потребностей и в их связи с рынком труда и системой образования",
  "competencies.3.2": "Использование разных оценочных техник для определения сильных сторон, слабых сторон, возможностей и рисков клиентов",
  "competencies.3.3": "Объяснение мира труда, профессиональных и образовательных систем, а также тенденций рынков труда и образования",
  "competencies.3.4": "Использование разных ICT-инструментов для карьерной информации и оценки (интернет-тесты личности)",
  "competencies.4.title": "Карьерное консультирование",
  "competencies.4.1": "Поддержка клиентов в понимании их ситуаций, поиске решений и принятии решений через идеографические и рефлексивные методы.",
  "competencies.4.2":
    "Использование специальных концепций и техник консультативного интервью (когнитивно-поведенческий, person-centred approach, системное консультирование, solution-focused counselling, коучинг, life designing, narrative approaches, support of self-organization, problem management",
  "competencies.5.title": "Профориентация/Vocational Guidance",
  "competencies.5.1": "Поддержка подростков и молодых профессионалов в выборе профессии и трека развития."
};

const resumeOriginalContent = new Map();

applyResumeLanguage();
window.addEventListener("careerdrive:languagechange", (event) => applyResumeLanguage(event.detail?.language));

function applyResumeLanguage(language = window.CareerDriveLanguage?.getLanguage?.() || "en") {
  const isRussian = language === "ru";

  document.title = isRussian ? "Резюме Ольги Перекопской | CareerDrive" : "Olga Perekopskaya Resume | CareerDrive";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      isRussian
        ? "Резюме Ольги Перекопской: карьерная навигация, консультирование, HR leadership, coaching и профориентация."
        : "Olga Perekopskaya resume: career guidance, counselling, HR leadership, coaching, and vocational guidance."
    );

  for (const [key, selector] of Object.entries(RESUME_SELECTOR_BY_KEY)) {
    const element = document.querySelector(selector);
    if (!element) {
      continue;
    }

    if (!resumeOriginalContent.has(element)) {
      resumeOriginalContent.set(element, element.innerHTML);
    }

    const nextContent = isRussian ? RESUME_RU_TEXT[key] : resumeOriginalContent.get(element);
    if (nextContent !== undefined) {
      element.innerHTML = nextContent;
    }
  }

  const portrait = document.querySelector(".resume-portrait img");
  if (portrait) {
    portrait.alt = isRussian ? "Ольга Перекопская" : "Olga Perekopskaya";
  }

  window.ScrollTrigger?.refresh?.();
}

(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!gsap || reduceMotion) {
    document.body.classList.add("resume-motion-ready");
    return;
  }

  if (ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  document.body.classList.add("resume-motion-ready", "resume-gsap");
  createScrollProgress(gsap, ScrollTrigger);
  animateHero(gsap);
  animateScrollReveals(gsap, ScrollTrigger);
  animatePortrait(gsap, ScrollTrigger);
  animateSnapshot(gsap, ScrollTrigger);
  bindResumeHover(gsap);
})();

function createScrollProgress(gsap, ScrollTrigger) {
  const progress = document.createElement("div");
  progress.className = "resume-scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.prepend(progress);

  if (!ScrollTrigger) {
    gsap.set(progress, { scaleX: 1 });
    return;
  }

  gsap.to(progress, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.2
    }
  });
}

function animateHero(gsap) {
  const heroItems = [
    ".resume-nav",
    ".resume-kicker",
    ".resume-hero h1",
    ".resume-lead",
    ".resume-actions .resume-button",
    ".resume-portrait"
  ];

  gsap.set(heroItems, {
    autoAlpha: 0,
    y: 34,
    filter: "blur(10px)"
  });
  gsap.set(".resume-portrait", {
    clipPath: "inset(8% 0% 12% 0% round 8px)"
  });
  gsap.set(".resume-portrait img", {
    scale: 1.12
  });

  gsap
    .timeline({ defaults: { ease: "power4.out" } })
    .to(".resume-nav", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.8 }, 0)
    .to(".resume-kicker", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.75 }, 0.08)
    .to(".resume-hero h1", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1.05 }, 0.16)
    .to(".resume-lead", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.9 }, 0.34)
    .to(".resume-actions .resume-button", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.75, stagger: 0.07 }, 0.5)
    .to(".resume-portrait", { autoAlpha: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0% 0% 0% 0% round 8px)", duration: 1.1 }, 0.2)
    .to(".resume-portrait img", { scale: 1, duration: 1.25 }, 0.22);
}

function animateScrollReveals(gsap, ScrollTrigger) {
  const revealElements = gsap.utils.toArray([
    ".resume-snapshot article",
    ".resume-panel",
    ".resume-section",
    ".resume-timeline article",
    ".resume-competencies article"
  ].join(","));

  gsap.set(revealElements, {
    autoAlpha: 0,
    y: 46,
    filter: "blur(10px)"
  });

  if (!ScrollTrigger) {
    gsap.to(revealElements, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.06 });
    return;
  }

  ScrollTrigger.batch(revealElements, {
    start: "top 88%",
    once: true,
    interval: 0.08,
    batchMax: 5,
    onEnter: (batch) => {
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.95,
        stagger: 0.08,
        ease: "power3.out",
        overwrite: "auto"
      });
    }
  });
}

function animatePortrait(gsap, ScrollTrigger) {
  if (!ScrollTrigger) {
    return;
  }

  gsap.to(".resume-portrait img", {
    yPercent: -7,
    scale: 1.06,
    ease: "none",
    scrollTrigger: {
      trigger: ".resume-hero",
      start: "top top",
      end: "bottom top",
      scrub: 1.1
    }
  });
}

function animateSnapshot(gsap, ScrollTrigger) {
  const cards = gsap.utils.toArray(".resume-snapshot article");
  if (!cards.length || !ScrollTrigger) {
    return;
  }

  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { "--resume-card-shine": "-130%" },
      {
        "--resume-card-shine": "130%",
        duration: 1.15,
        delay: index * 0.08,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          once: true
        }
      }
    );
  });
}

function bindResumeHover(gsap) {
  document.querySelectorAll(".resume-button, .resume-nav-links a").forEach((element) => {
    element.addEventListener("pointerenter", () => {
      gsap.to(element, { y: -3, scale: 1.025, duration: 0.24, ease: "power3.out" });
    });
    element.addEventListener("pointerleave", () => {
      gsap.to(element, { y: 0, scale: 1, duration: 0.45, ease: "elastic.out(1, 0.55)" });
    });
  });

  document.querySelectorAll(".resume-panel, .resume-competencies article, .resume-snapshot article").forEach((element) => {
    element.addEventListener("pointerenter", () => {
      gsap.to(element, {
        y: -5,
        boxShadow: "0 26px 70px rgba(21, 21, 21, 0.12)",
        duration: 0.28,
        ease: "power3.out"
      });
    });
    element.addEventListener("pointerleave", () => {
      gsap.to(element, {
        y: 0,
        boxShadow: "0 18px 46px rgba(21, 21, 21, 0.06)",
        duration: 0.42,
        ease: "power3.out"
      });
    });
  });
}
