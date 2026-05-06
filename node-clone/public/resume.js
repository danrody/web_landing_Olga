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
