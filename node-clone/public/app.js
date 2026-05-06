const app = document.getElementById("app");

const SECTION_Y = {
  desktop: {
    top: 0,
    program: 690,
    about: 2967,
    curriculum: 4593,
    testimonials: 6103,
    contact: 7124
  },
  mobile: {
    top: 0,
    program: 213,
    about: 1556,
    curriculum: 2761,
    testimonials: 4169,
    contact: 4660
  }
};

const CLICK_ACTIONS = {
  "2016:11": { type: "scroll", target: "program" },
  "2016:12": { type: "scroll", target: "about" },
  "2016:14": { type: "scroll", target: "testimonials" },
  "2016:15": { type: "scroll", target: "top" },
  "2015:1725": { type: "scroll", target: "curriculum" },
  "2106:9": { type: "scroll", target: "curriculum" },
  "2019:24": { type: "external", target: "linkedin" },
  "2019:26": { type: "internal", target: "/resume" },
  "2015:2418": { type: "external", target: "whatsapp" },
  "2015:2424": { type: "external", target: "linkedin" },
  "2015:2426": { type: "document", target: "privacy" },
  "2015:2427": { type: "document", target: "terms" },
  "2141:1312": { type: "menu" },
  "2133:11": { type: "scroll", target: "curriculum" },
  "2133:8": { type: "scroll", target: "top" },
  "2149:142": { type: "external", target: "linkedin" },
  "2153:11": { type: "external", target: "whatsapp" },
  "2153:18": { type: "external", target: "linkedin" },
  "2153:24": { type: "document", target: "privacy" },
  "2153:26": { type: "document", target: "terms" }
};

const EXTERNAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/olga-perekopskaya-executive-master-a3322515",
  whatsapp: "https://wa.me/"
};

const DOCUMENT_COPY = {
  privacy: {
    title: "Privacy Policy",
    body:
      "CareerDrive uses contact information only to respond to requests, coordinate program communication, and share relevant course updates. No payment or sensitive personal data is collected by this static site."
  },
  terms: {
    title: "Terms & Conditions",
    body:
      "CareerDrive materials are provided for educational career guidance. Participation does not guarantee admission, employment, or a specific career outcome. Program details can be confirmed directly before enrollment."
  }
};

const MOBILE_SCALE_FACTOR = 0.9;
const MOBILE_HIDDEN_NODE_IDS = new Set(["2159:20"]);

const MOBILE_NODE_OVERRIDES = {
  "2133:11": { width: 126, height: 36 },
  "2133:12": { width: 98, height: 24, matrix: [1, 0, 0, 1, 14, 6] },
  "2141:1312": { width: 44, height: 44, matrix: [1, 0, 0, 1, 260, 14] },
  "2149:107": { width: 256, height: 60 },
  "2149:108": { width: 256, height: 32 },
  "2149:109": { matrix: [1, 0, 0, 1, 0, 34] },
  "2149:104": { height: 1060 },
  "2149:112": { height: 456 },
  "2149:113": { height: 448 },
  "2150:353": { width: 280, matrix: [1, 0, 0, 1, 4, 152] },
  "2159:3": { height: 70 },
  "2159:4": { height: 48 },
  "2159:5": { height: 48 }
};

const DESKTOP_NODE_OVERRIDES = {
  "2015:1892": { height: 1545 },
  "2015:2079": { width: 800, matrix: [1, 0, 0, 1, 160, 184] }
};

const CURRICULUM_MODULE_IDS = {
  desktop: ["2015:2095", "2015:2106", "2015:2117", "2015:2128", "2015:2139", "2062:8", "2062:19", "2062:30"],
  mobile: ["2150:354", "2150:376", "2150:398", "2150:420", "2150:431", "2150:365", "2150:387", "2150:409"]
};

const CURRICULUM_SECTION_IDS = {
  desktop: "2015:2071",
  mobile: "2150:347"
};

const AFTER_CURRICULUM_IDS = {
  desktop: ["2015:1892"],
  mobile: ["2159:2", "2153:2"]
};

const CURRICULUM_EXPANSION_HEIGHT = {
  desktop: 174,
  mobile: 156
};

const CURRICULUM_LAYOUT_MOTION = {
  duration: 0.92,
  ease: "power3.inOut"
};

const ALUMNI_LOGOS = [
  "/images/figma/partners/msd.png",
  "/images/figma/partners/insead.png",
  "/images/figma/partners/certificate-training.png",
  "/images/figma/partners/skolkovo.png",
  "/images/figma/partners/sibur.png",
  "/images/figma/partners/cbsd.png",
  "/images/figma/partners/ey.png",
  "/images/figma/partners/global-coaching-university.png"
];

const TESTIMONIALS = [
  {
    name: "Albert",
    role: "Graduate of a Specialized High School, Moscow",
    image: "/images/figma/people/albert.jpg",
    text:
      "I was a top student with many interests, but no clear direction. Through working with Olga, I understood what truly mattered to me and chose a path I had never considered before: Computational Mathematics and Cybernetics, with a future in fintech."
  },
  {
    name: "Alexandra",
    role: "High School Student, Madrid",
    image: "/images/figma/people/alexandra.jpg",
    text:
      "Moving to a new country and a completely different school system turned my plans upside down. Working with Olga gave me clarity, confidence, and a real plan for how to build a future that truly feels like mine."
  },
  {
    name: "Ekaterina",
    role: "High School Teacher, Group of 24 students",
    image: "/images/figma/people/mentor-avatar.png",
    text:
      "This course gave my students what no career test ever could: real ownership of their future. I watched them move from confusion and safe choices to clarity, confidence, and self-trust."
  }
];

const CAREER_CHALLENGE_CARDS = [
  {
    image: "/images/frame4/career-choice.png",
    title: "You're choosing a career.",
    subtitle: "But have no idea what’s right for you"
  },
  {
    image: "/images/frame4/many-interests.png",
    title: "Large variety of interest.",
    subtitle: "What could become a job?"
  },
  {
    image: "/images/frame4/university-mistake.png",
    title: "University feels like a mistake.",
    subtitle: "Is this really “your path”?"
  },
  {
    image: "/images/frame4/major-master.png",
    title: "You're lost in choosing the Major or Master’s degree",
    subtitle: ""
  },
  {
    image: "/images/frame4/family-pressure.png",
    title: "Family won’t stop telling you what to do with your life",
    subtitle: ""
  },
  {
    image: "/images/frame4/first-job.png",
    title: "You gave your first job a chance",
    subtitle: "Now you just feel stuck in career"
  },
  {
    image: "/images/frame4/passed-over.png",
    title: "Others get promoted.",
    subtitle: "You get passed over — and don’t know why"
  },
  {
    image: "/images/frame4/own-business.png",
    title: "You dream of starting own business.",
    subtitle: "But fear holds you back"
  },
  {
    image: "/images/frame4/accelerate-career.png",
    title: "You want to accelerate career.",
    subtitle: "But the next step is a blur"
  }
];

let layoutData = null;
let activeMode = "";
let activeFrame = null;
let activeStage = null;
let activeScale = 1;
let mobileMenuPanel = null;
let mobileMenuBackdrop = null;
let dialogElement = null;
let activeCurriculumModules = new Set();
let currentCurriculumOffset = 0;
let motionContext = null;
let motionRefreshFrame = null;

const MOTION_GROUPS = {
  desktop: {
    hero: ["2016:3", "2037:90", "2015:1692", "2015:1697", "2015:1725", "2106:2", "2106:8", "2115:47", "2115:48"],
    float: ["2106:2", "2106:8", "2115:47", "2115:48", "2018:6", "2096:2", "2096:3"],
    stats: []
  },
  mobile: {
    hero: ["2133:10", "2141:1312", "2133:7", "2133:11", "2140:16", "2140:17", "2140:2", "2140:3", "2140:5", "2140:6", "2140:7", "2140:8"],
    float: ["2147:20", "2147:22", "2149:23"],
    stats: ["2140:16", "2140:2", "2140:7"]
  }
};

const SUBTLE_ARROW_MOTION_IDS = new Set([
  "2106:2",
  "2106:8",
  "2115:47",
  "2115:48",
  "2018:6",
  "2096:2",
  "2096:3",
  "2147:20",
  "2147:22",
  "2149:23"
]);

const STATIC_REVEAL_IDS = new Set(["2015:1892", "2015:2415", "2153:2"]);

const MOTION_REVEAL_SELECTOR = [
  ".animated-layer",
  ".career-challenge-card",
  ".mobile-testimonial-card",
  ".mobile-alumni-logo",
  ".curriculum-module-accordion"
].join(",");

fetch("/layout-data.json")
  .then((response) => response.json())
  .then((data) => {
    layoutData = data;
    render();
    window.addEventListener("resize", render, { passive: true });
  });

function render() {
  if (!layoutData) {
    return;
  }

  const mode = chooseMode();
  const frame = layoutData.frames[mode];

  if (mode !== activeMode) {
    teardownMotion();
    activeMode = mode;
    activeFrame = frame;
    app.replaceChildren(createShell(frame));
    updateScale(activeFrame);
    updateCurriculumAccordions();
    setupMotion();
    return;
  }

  updateScale(activeFrame);
  updateCurriculumAccordions();
  queueMotionRefresh();
}

function chooseMode() {
  return getViewportWidth() < 768 ? "mobile" : "desktop";
}

function createShell(frame) {
  const shell = document.createElement("div");
  shell.className = "fig-shell";
  shell.dataset.mode = activeMode;

  const stage = document.createElement("div");
  stage.className = "fig-stage";
  stage.style.width = `${frame.width}px`;
  stage.style.height = `${getFrameRenderHeight(frame)}px`;
  activeStage = stage;

  for (const child of frame.children) {
    stage.appendChild(createNode(child));
  }

  if (activeMode === "mobile") {
    stage.appendChild(createMobileAlumniMarquee());
    stage.appendChild(createCareerChallengeMarquee());
    stage.appendChild(createMobileTestimonials());
    mobileMenuBackdrop = createMobileMenuBackdrop();
    stage.appendChild(mobileMenuBackdrop);
    mobileMenuPanel = createMobileMenu();
    stage.appendChild(mobileMenuPanel);
  } else {
    stage.appendChild(createCareerChallengeMarquee());
    mobileMenuBackdrop = null;
    mobileMenuPanel = null;
  }

  shell.appendChild(stage);
  return shell;
}

function updateScale(frame) {
  if (!activeStage) {
    return;
  }

  const viewportWidth = getViewportWidth();
  const modeScale = activeMode === "mobile" ? MOBILE_SCALE_FACTOR : 1;
  const scale = (viewportWidth / frame.width) * modeScale;
  const renderedWidth = frame.width * scale;
  const renderedHeight = (getFrameRenderHeight(frame) + currentCurriculumOffset) * scale;
  activeScale = scale;

  activeStage.style.left = `${Math.max(0, (viewportWidth - renderedWidth) / 2)}px`;
  activeStage.style.transform = `scale(${scale})`;
  activeStage.parentElement.style.height = `${renderedHeight}px`;
}

function getViewportWidth() {
  return Math.max(1, document.documentElement.clientWidth || window.innerWidth || 1);
}

function getFrameRenderHeight(frame) {
  return Math.ceil(Math.max(frame.height, getNodeBottom(frame)));
}

function getNodeBottom(node, parentMatrix = [1, 0, 0, 1, 0, 0]) {
  const matrix = multiplyMatrix(parentMatrix, node.matrix || [1, 0, 0, 1, node.x || 0, node.y || 0]);
  const ownBottom = matrix[5] + (node.height || 0);
  return Math.max(ownBottom, ...(node.children || []).map((child) => getNodeBottom(child, matrix)));
}

function multiplyMatrix(a, b) {
  return [
    a[0] * b[0] + a[2] * b[1],
    a[1] * b[0] + a[3] * b[1],
    a[0] * b[2] + a[2] * b[3],
    a[1] * b[2] + a[3] * b[3],
    a[0] * b[4] + a[2] * b[5] + a[4],
    a[1] * b[4] + a[3] * b[5] + a[5]
  ];
}

function createNode(node) {
  if (node.type === "TEXT") {
    return createText(node);
  }

  if (node.type === "VECTOR") {
    return createVector(node);
  }

  const element = document.createElement("div");
  element.className = classNames(
    "fig-node",
    node.type === "FRAME" ? "fig-frame" : "fig-rect",
    isButtonish(node) ? "fig-buttonish" : "",
    isAnimated(node) ? "animated-layer" : ""
  );
  applyBaseStyle(element, node);
  applyPaintStyle(element, node.style);
  applyResponsiveOverrides(element, node);
  bindInteraction(element, node);

  for (const child of node.children || []) {
    element.appendChild(createNode(child));
  }

  return element;
}

function createText(node) {
  const element = document.createElement("div");
  element.className = classNames("fig-node", "fig-text", isAnimated(node) ? "animated-layer" : "");
  applyBaseStyle(element, node);
  applyTextStyle(element, node.textStyle);
  bindInteraction(element, node);

  const content = document.createElement("span");
  content.className = "fig-text-content";

  const runs = node.textRuns?.length ? node.textRuns : [{ text: node.text || "", style: node.textStyle || {} }];
  for (const run of runs) {
    const span = document.createElement("span");
    span.textContent = run.text;
    applyTextStyle(span, run.style, true);
    content.appendChild(span);
  }

  element.appendChild(content);
  applyResponsiveOverrides(element, node);
  return element;
}

function createVector(node) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("fig-node", "fig-vector");
  if (isAnimated(node)) {
    svg.classList.add("animated-layer");
  }
  applyBaseStyle(svg, node);
  applyResponsiveOverrides(svg, node);
  bindInteraction(svg, node);
  svg.setAttribute("viewBox", `0 0 ${Math.max(node.width, 1)} ${Math.max(node.height, 1)}`);
  svg.setAttribute("width", node.width);
  svg.setAttribute("height", node.height);

  for (const shape of node.paths || []) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", shape.d);
    path.setAttribute("fill", shape.fill || "none");
    if (shape.fillRule) {
      path.setAttribute("fill-rule", shape.fillRule);
    }
    if (shape.stroke) {
      path.setAttribute("stroke", shape.stroke);
      path.setAttribute("stroke-width", shape.strokeWidth || 1);
    }
    svg.appendChild(path);
  }

  return svg;
}

function applyBaseStyle(element, node) {
  element.dataset.id = node.id;
  element.style.width = `${node.width}px`;
  element.style.height = `${node.height}px`;
  element.style.setProperty("--fig-opacity", node.opacity ?? 1);
  element.style.transform = cssMatrix(node.matrix);
  element.dataset.baseMatrix = JSON.stringify(node.matrix || [1, 0, 0, 1, node.x || 0, node.y || 0]);
  element.dataset.baseHeight = String(node.height || 0);

  if (node.radius) {
    element.style.borderRadius = `${node.radius}px`;
  }
}

function applyResponsiveOverrides(element, node) {
  if (activeMode === "mobile" && MOBILE_HIDDEN_NODE_IDS.has(node.id)) {
    element.hidden = true;
    return;
  }

  const override = activeMode === "mobile" ? MOBILE_NODE_OVERRIDES[node.id] : DESKTOP_NODE_OVERRIDES[node.id];
  if (!override) {
    return;
  }

  if (override.width) {
    element.style.width = `${override.width}px`;
  }
  if (override.height) {
    element.style.height = `${override.height}px`;
  }
  if (override.matrix) {
    element.style.transform = cssMatrix(override.matrix);
  }
}

function applyPaintStyle(element, style = {}) {
  if (style.background) {
    element.style.background = style.background;
  }

  if (style.image) {
    element.style.backgroundImage = `url("${style.image}")`;
    element.style.backgroundSize = style.imageFit || "cover";
    if (style.image.includes("/brand/careerdrive-logo.png")) {
      element.style.backgroundSize = "100% auto";
    }
  }

  if (style.borderColor && style.borderWidth) {
    element.style.border = `${style.borderWidth}px solid ${style.borderColor}`;
  }

  if (style.boxShadow) {
    element.style.boxShadow = style.boxShadow;
  }

  if (style.backdropFilter) {
    element.style.backdropFilter = style.backdropFilter;
  }

  if (style.filter) {
    element.style.filter = style.filter;
  }
}

function applyTextStyle(element, style = {}, inline = false) {
  if (style.fontFamily) {
    element.style.fontFamily = `"${style.fontFamily}", Arial, sans-serif`;
  }
  if (style.fontWeight) {
    element.style.fontWeight = style.fontWeight;
  }
  if (style.fontSize) {
    element.style.fontSize = `${style.fontSize}px`;
  }
  if (style.lineHeight) {
    element.style.lineHeight = `${style.lineHeight}px`;
  }
  if (style.color) {
    element.style.color = style.color;
  }
  if (style.letterSpacing) {
    element.style.letterSpacing = `${style.letterSpacing}px`;
  }
  if (style.textDecoration) {
    element.style.textDecoration = style.textDecoration;
  }

  if (!inline) {
    element.style.textAlign = style.textAlign || "left";
    element.style.alignItems = style.alignItems || "flex-start";
  }
}

function setupMotion() {
  if (!activeStage) {
    return;
  }

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  if (prefersReducedMotion()) {
    revealImmediately();
    return;
  }

  if (!gsap || !ScrollTrigger) {
    setupRevealFallback();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  activeStage.classList.add("motion-gsap");

  motionContext = gsap.context(() => {
    setupStageIntro(gsap);
    setupHeroMotion(gsap);
    setupScrollReveals(gsap, ScrollTrigger);
    setupAmbientMotion(gsap, ScrollTrigger);
    setupInteractiveMotion(gsap);
    setupMarqueeMotion(gsap);
    setupNumberMotion(gsap, ScrollTrigger);
  }, activeStage);

  queueMotionRefresh();
}

function teardownMotion() {
  if (motionRefreshFrame) {
    cancelAnimationFrame(motionRefreshFrame);
    motionRefreshFrame = null;
  }

  if (motionContext) {
    motionContext.revert();
    motionContext = null;
  }

  activeStage?.classList.remove("motion-gsap");
}

function setupStageIntro(gsap) {
  gsap.fromTo(
    activeStage,
    {
      opacity: 0,
      clipPath: activeMode === "mobile" ? "inset(0% 0% 8% 0% round 18px)" : "inset(0% 0% 10% 0% round 28px)"
    },
    {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0% round 0px)",
      duration: 1.15,
      ease: "expo.out"
    }
  );
}

function setupHeroMotion(gsap) {
  const heroElements = getMotionElements("hero");
  if (!heroElements.length) {
    return;
  }

  const subtleArrows = heroElements.filter(isSubtleArrowMotionElement);
  const primaryHeroElements = heroElements.filter((element) => !isSubtleArrowMotionElement(element));
  const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

  if (primaryHeroElements.length) {
    gsap.set(primaryHeroElements, {
      "--motion-opacity": 0,
      "--motion-y": activeMode === "mobile" ? "22px" : "36px",
      "--motion-blur": "12px",
      clipPath: "inset(0% 0% 18% 0% round 16px)"
    });

    timeline.to(primaryHeroElements, {
      "--motion-opacity": 1,
      "--motion-y": "0px",
      "--motion-blur": "0px",
      clipPath: "inset(0% 0% 0% 0% round 0px)",
      duration: 1.05,
      stagger: activeMode === "mobile" ? 0.055 : 0.075
    }, 0.12);
  }

  if (subtleArrows.length) {
    gsap.set(subtleArrows, {
      "--motion-opacity": 0.62,
      "--motion-y": "6px",
      "--motion-blur": "2px",
      clipPath: "inset(0% 0% 4% 0% round 8px)"
    });

    timeline.to(subtleArrows, {
      "--motion-opacity": 1,
      "--motion-y": "0px",
      "--motion-blur": "0px",
      clipPath: "inset(0% 0% 0% 0% round 0px)",
      duration: 0.72,
      stagger: 0.035,
      ease: "power2.out"
    }, 0.22);
  }
}

function setupScrollReveals(gsap, ScrollTrigger) {
  const heroSet = new Set(getMotionElements("hero"));
  const allRevealElements = getRevealElements();
  allRevealElements.filter(isStaticRevealElement).forEach(markMotionVisible);
  const revealElements = allRevealElements.filter((element) => !heroSet.has(element) && !isStaticRevealElement(element));

  if (!revealElements.length) {
    return;
  }

  gsap.set(revealElements, {
    "--motion-opacity": 0,
    "--motion-y": activeMode === "mobile" ? "24px" : "42px",
    "--motion-blur": "10px",
    clipPath: "inset(9% 0% 12% 0% round 18px)"
  });

  ScrollTrigger.batch(revealElements, {
    start: "top 86%",
    once: true,
    interval: 0.08,
    batchMax: activeMode === "mobile" ? 4 : 7,
    onEnter: (batch) => {
      gsap.to(batch, {
        "--motion-opacity": 1,
        "--motion-y": "0px",
        "--motion-blur": "0px",
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        duration: 1,
        stagger: 0.07,
        ease: "power3.out",
        overwrite: "auto"
      });
    }
  });
}

function setupAmbientMotion(gsap, ScrollTrigger) {
  const floatElements = getMotionElements("float");

  floatElements.forEach((element, index) => {
    const isSubtleArrow = isSubtleArrowMotionElement(element);
    const floatX = isSubtleArrow ? (index % 2 === 0 ? 3 : -3) : index % 2 === 0 ? 10 : -12;
    const floatY = isSubtleArrow ? (index % 3 === 0 ? -5 : 5) : index % 3 === 0 ? -18 : 16;
    const scrollY = isSubtleArrow ? (index % 2 === 0 ? -8 : 7) : index % 2 === 0 ? -34 : 28;

    gsap.to(element, {
      "--float-x": `${floatX}px`,
      "--float-y": `${floatY}px`,
      "--motion-scale": isSubtleArrow ? (index % 2 === 0 ? 1.006 : 0.996) : index % 2 === 0 ? 1.025 : 0.985,
      duration: (isSubtleArrow ? 6.6 : 3.2) + index * 0.25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.1
    });

    gsap.to(element, {
      "--scroll-y": `${scrollY}px`,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: isSubtleArrow ? 2.4 : 1.2
      }
    });
  });

  activeStage.querySelectorAll(".career-challenge-marquee, .mobile-testimonial-strip").forEach((element, index) => {
    gsap.to(element, {
      "--scroll-y": `${index % 2 === 0 ? -22 : 18}px`,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  });
}

function setupInteractiveMotion(gsap) {
  activeStage.querySelectorAll(".fig-interactive, .curriculum-module-accordion").forEach((element) => {
    element.addEventListener("pointerenter", () => {
      gsap.to(element, {
        "--hover-y": "-4px",
        "--motion-scale": 1.012,
        duration: 0.32,
        ease: "power3.out"
      });
    });

    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) {
        return;
      }

      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
      gsap.to(element, {
        "--hover-x": `${x}px`,
        "--hover-y": `${y - 4}px`,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto"
      });
    });

    element.addEventListener("pointerleave", () => {
      gsap.to(element, {
        "--hover-x": "0px",
        "--hover-y": "0px",
        "--motion-scale": 1,
        duration: 0.52,
        ease: "elastic.out(1, 0.55)"
      });
    });

    element.addEventListener("pointerdown", () => {
      gsap.to(element, {
        "--motion-scale": 0.985,
        duration: 0.12,
        ease: "power2.out"
      });
    });

    element.addEventListener("pointerup", () => {
      gsap.to(element, {
        "--motion-scale": 1.012,
        duration: 0.24,
        ease: "power2.out"
      });
    });
  });
}

function setupMarqueeMotion(gsap) {
  activeStage.querySelectorAll(".career-challenge-track, .mobile-alumni-marquee-track").forEach((track) => {
    const distance = track.scrollWidth / 2;
    if (!distance) {
      return;
    }

    gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -distance,
        duration: track.classList.contains("mobile-alumni-marquee-track") ? 18 : activeMode === "mobile" ? 32 : 40,
        ease: "none",
        repeat: -1
      }
    );
  });
}

function setupNumberMotion(gsap, ScrollTrigger) {
  getMotionElements("stats").forEach((element) => {
    const textElement = element.querySelector(".fig-text-content") || element;
    const original = textElement.textContent.trim();
    const match = original.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] || "";
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const value = { current: 0 };

    ScrollTrigger.create({
      trigger: element,
      start: "top 86%",
      once: true,
      onEnter: () => {
        gsap.to(value, {
          current: target,
          duration: 1.2,
          ease: "power3.out",
          onUpdate: () => {
            textElement.textContent = `${value.current.toFixed(decimals)}${suffix}`;
          },
          onComplete: () => {
            textElement.textContent = original;
          }
        });
      }
    });
  });
}

function setupRevealFallback() {
  const allRevealElements = getRevealElements();
  allRevealElements.filter(isStaticRevealElement).forEach(markMotionVisible);
  const revealElements = allRevealElements.filter((element) => !isStaticRevealElement(element));
  revealElements.forEach((element) => prepareRevealElement(element));

  if (!("IntersectionObserver" in window)) {
    revealImmediately();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          markMotionVisible(entry.target);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function prepareRevealElement(element) {
  element.style.setProperty("--motion-opacity", "0");
  element.style.setProperty("--motion-y", activeMode === "mobile" ? "22px" : "34px");
  element.style.setProperty("--motion-blur", "8px");
}

function markMotionVisible(element) {
  element.classList.add("is-visible");
  element.style.setProperty("--motion-opacity", "1");
  element.style.setProperty("--motion-x", "0px");
  element.style.setProperty("--motion-y", "0px");
  element.style.setProperty("--motion-blur", "0px");
}

function revealImmediately() {
  getRevealElements().forEach((element) => markMotionVisible(element));
  getMotionElements("hero").forEach((element) => markMotionVisible(element));
}

function getRevealElements() {
  return Array.from(activeStage?.querySelectorAll(MOTION_REVEAL_SELECTOR) || []);
}

function getMotionElements(group) {
  return (MOTION_GROUPS[activeMode]?.[group] || []).map((id) => findStageElement(id)).filter(Boolean);
}

function isSubtleArrowMotionElement(element) {
  return SUBTLE_ARROW_MOTION_IDS.has(element.dataset.id);
}

function isStaticRevealElement(element) {
  return STATIC_REVEAL_IDS.has(element.dataset.id);
}

function queueMotionRefresh() {
  const ScrollTrigger = window.ScrollTrigger;
  if (!ScrollTrigger || !motionContext || motionRefreshFrame) {
    return;
  }

  motionRefreshFrame = requestAnimationFrame(() => {
    motionRefreshFrame = null;
    ScrollTrigger.refresh();
  });
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function bindInteraction(element, node) {
  if (isCurriculumModule(node.id)) {
    element.classList.add("curriculum-module-accordion");
    element.appendChild(createCurriculumDetail(node));
  }

  const action = CLICK_ACTIONS[node.id] || (isCurriculumModule(node.id) ? { type: "module", node } : null);
  if (!action) {
    return;
  }

  element.classList.add("fig-interactive");
  element.setAttribute("role", action.type === "external" ? "link" : "button");
  element.setAttribute("tabindex", "0");
  element.setAttribute("aria-label", interactionLabel(node, action));

  const activate = (event) => {
    event.preventDefault();
    event.stopPropagation();
    runAction(action, node);
  };

  element.addEventListener("click", activate);
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      activate(event);
    }
  });
}

function runAction(action, node) {
  if (action.type === "menu") {
    toggleMobileMenu();
    return;
  }

  closeMobileMenu();

  if (action.type === "scroll") {
    scrollToSection(action.target);
    return;
  }

  if (action.type === "external") {
    const url = EXTERNAL_LINKS[action.target];
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    return;
  }

  if (action.type === "internal") {
    window.location.href = action.target;
    return;
  }

  if (action.type === "document") {
    const documentCopy = DOCUMENT_COPY[action.target];
    if (documentCopy) {
      showDialog(documentCopy.title, documentCopy.body);
    }
    return;
  }

  if (action.type === "module") {
    toggleCurriculumModule(node.id);
    return;
  }
}

function toggleCurriculumModule(id) {
  if (activeCurriculumModules.has(id)) {
    activeCurriculumModules.delete(id);
  } else {
    activeCurriculumModules.add(id);
  }

  updateCurriculumAccordions();
}

function updateCurriculumAccordions() {
  if (!activeStage || !activeFrame) {
    return;
  }

  const moduleIds = CURRICULUM_MODULE_IDS[activeMode] || [];
  const expansionHeight = CURRICULUM_EXPANSION_HEIGHT[activeMode] || 0;
  const shouldAnimateLayout = shouldAnimateCurriculumLayout(moduleIds);
  let offset = 0;

  for (const id of moduleIds) {
    const element = findStageElement(id);
    if (!element) {
      continue;
    }

    const isExpanded = activeCurriculumModules.has(id);
    const previousExpanded = element.dataset.motionExpanded;
    const isClosing = previousExpanded === "true" && !isExpanded;
    setElementYOffset(element, offset, shouldAnimateLayout);
    element.classList.toggle("is-closing", isClosing);
    element.classList.toggle("is-expanded", isExpanded);
    element.setAttribute("aria-expanded", String(isExpanded));

    const baseHeight = Number(element.dataset.baseHeight || element.style.height.replace("px", "") || 0);
    setElementHeight(element, baseHeight + (isExpanded ? expansionHeight : 0), shouldAnimateLayout);

    if (previousExpanded && previousExpanded !== String(isExpanded)) {
      animateCurriculumState(element, isExpanded);
    }
    element.dataset.motionExpanded = String(isExpanded);

    if (isExpanded) {
      offset += expansionHeight;
    }
  }

  currentCurriculumOffset = offset;
  shiftCurriculumFollowers(offset, shouldAnimateLayout);
  updateScaledStageHeight(shouldAnimateLayout);
  refreshMotionAfterCurriculum(shouldAnimateLayout);
}

function shouldAnimateCurriculumLayout(moduleIds) {
  if (!window.gsap || !motionContext || prefersReducedMotion()) {
    return false;
  }

  return moduleIds.some((id) => {
    const element = findStageElement(id);
    const previousExpanded = element?.dataset.motionExpanded;
    return previousExpanded !== undefined && previousExpanded !== String(activeCurriculumModules.has(id));
  });
}

function shiftCurriculumFollowers(offset, animate = false) {
  const section = findStageElement(CURRICULUM_SECTION_IDS[activeMode]);
  if (section) {
    const baseHeight = Number(section.dataset.baseHeight || section.style.height.replace("px", "") || 0);
    setElementHeight(section, baseHeight + offset, animate);
  }

  for (const id of AFTER_CURRICULUM_IDS[activeMode] || []) {
    const element = findStageElement(id);
    if (element) {
      setElementYOffset(element, offset, animate);
    }
  }

  if (activeMode === "mobile") {
    document.querySelectorAll(".mobile-testimonial-strip").forEach((element) => setElementYOffset(element, offset, animate));
  }
}

function updateScaledStageHeight(animate = false) {
  const height = getFrameRenderHeight(activeFrame) + currentCurriculumOffset;
  setElementHeight(activeStage, height, animate);
  setElementHeight(activeStage.parentElement, height * activeScale, animate);
}

function setElementYOffset(element, offset, animate = false) {
  const matrix = JSON.parse(element.dataset.baseMatrix || "[1,0,0,1,0,0]");
  matrix[5] += offset;
  const transform = cssMatrix(matrix);

  if (animate && window.gsap) {
    window.gsap.to(element, {
      transform,
      duration: CURRICULUM_LAYOUT_MOTION.duration,
      ease: CURRICULUM_LAYOUT_MOTION.ease,
      overwrite: "auto"
    });
    return;
  }

  window.gsap?.killTweensOf(element, "transform");
  element.style.transform = transform;
}

function setElementHeight(element, height, animate = false) {
  const nextHeight = `${height}px`;

  if (animate && window.gsap) {
    window.gsap.to(element, {
      height: nextHeight,
      duration: CURRICULUM_LAYOUT_MOTION.duration,
      ease: CURRICULUM_LAYOUT_MOTION.ease,
      overwrite: "auto"
    });
    return;
  }

  window.gsap?.killTweensOf(element, "height");
  element.style.height = nextHeight;
}

function refreshMotionAfterCurriculum(animate = false) {
  if (animate && window.gsap) {
    window.gsap.delayedCall(CURRICULUM_LAYOUT_MOTION.duration + 0.05, queueMotionRefresh);
    return;
  }

  queueMotionRefresh();
}

function findStageElement(id) {
  return activeStage?.querySelector(`[data-id="${id}"]`);
}

function isCurriculumModule(id) {
  return (CURRICULUM_MODULE_IDS[activeMode] || []).includes(id);
}

function scrollToSection(target) {
  let y = SECTION_Y[activeMode]?.[target] ?? 0;
  if (target === "testimonials" || target === "contact") {
    y += currentCurriculumOffset;
  }

  window.scrollTo({
    top: Math.round(y * activeScale),
    behavior: "smooth"
  });
}

function createMobileMenu() {
  const panel = document.createElement("nav");
  panel.className = "mobile-menu-panel";
  panel.setAttribute("aria-label", "Mobile navigation");
  panel.setAttribute("aria-hidden", "true");

  for (const item of [
    ["Program", "program"],
    ["About me", "about"],
    ["Curriculum", "curriculum"],
    ["Testimonials", "testimonials"],
    ["Contact", "contact"]
  ]) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item[0];
    button.addEventListener("click", () => {
      closeMobileMenu();
      scrollToSection(item[1]);
    });
    panel.appendChild(button);
  }

  return panel;
}

function createMobileMenuBackdrop() {
  const backdrop = createOverlay("mobile-menu-backdrop", {
    x: 0,
    y: 0,
    width: activeFrame.width,
    height: getFrameRenderHeight(activeFrame)
  });
  backdrop.setAttribute("aria-hidden", "true");
  backdrop.addEventListener("click", closeMobileMenu);
  return backdrop;
}

function createMobileAlumniMarquee() {
  const marquee = createOverlay("mobile-alumni-marquee", { x: 0, y: 920, width: 320, height: 148 });
  const track = document.createElement("div");
  track.className = "mobile-alumni-marquee-track";

  for (let i = 0; i < 2; i += 1) {
    for (const logo of ALUMNI_LOGOS) {
      const item = document.createElement("div");
      item.className = "mobile-alumni-logo";

      const image = document.createElement("img");
      image.src = logo;
      image.alt = "";
      image.loading = "lazy";

      item.appendChild(image);
      track.appendChild(item);
    }
  }

  marquee.appendChild(track);
  return marquee;
}

function createMobileTestimonials() {
  const strip = createOverlay("mobile-testimonial-strip", { x: 12, y: 4315, width: 296, height: 300 });
  strip.setAttribute("aria-label", "Testimonials");

  for (const testimonial of TESTIMONIALS) {
    const card = document.createElement("article");
    card.className = "mobile-testimonial-card";

    const header = document.createElement("div");
    header.className = "mobile-testimonial-header";

    const image = document.createElement("img");
    image.src = testimonial.image;
    image.alt = "";
    image.loading = "lazy";

    const meta = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = testimonial.name;
    const role = document.createElement("span");
    role.textContent = testimonial.role;
    meta.append(name, role);

    const body = document.createElement("p");
    body.textContent = testimonial.text;

    header.append(image, meta);
    card.append(header, body);
    strip.appendChild(card);
  }

  return strip;
}

function createCareerChallengeMarquee() {
  const config =
    activeMode === "mobile"
      ? { x: 0, y: 1230, width: 320, height: 292 }
      : { x: 0, y: 2396, width: 1200, height: 394 };
  const marquee = createOverlay("career-challenge-marquee animated-layer", config);
  marquee.setAttribute("aria-label", "Career questions");

  const track = document.createElement("div");
  track.className = "career-challenge-track";

  for (let i = 0; i < 2; i += 1) {
    for (const card of CAREER_CHALLENGE_CARDS) {
      track.appendChild(createCareerChallengeCard(card));
    }
  }

  marquee.appendChild(track);
  return marquee;
}

function createCareerChallengeCard(card) {
  const article = document.createElement("article");
  article.className = "career-challenge-card";

  const image = document.createElement("img");
  image.src = card.image;
  image.alt = "";
  image.loading = "lazy";

  const title = document.createElement("strong");
  title.textContent = card.title;

  const subtitle = document.createElement("span");
  subtitle.textContent = card.subtitle;

  article.append(image, title, subtitle);
  return article;
}

function createOverlay(className, { x, y, width, height }) {
  const element = document.createElement("section");
  element.className = `fig-node ${className}`;
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
  const matrix = [1, 0, 0, 1, x, y];
  element.style.transform = cssMatrix(matrix);
  element.dataset.baseMatrix = JSON.stringify(matrix);
  return element;
}

function createCurriculumDetail(node) {
  const module = readModule(node);
  const detail = document.createElement("div");
  detail.className = "curriculum-module-detail";
  detail.style.transform = cssMatrix([1, 0, 0, 1, 0, (node.height || 0) + 10]);
  detail.addEventListener("click", (event) => event.stopPropagation());

  const title = document.createElement("strong");
  title.textContent = module.title;

  const body = document.createElement("p");
  body.textContent = module.body;

  detail.append(title, body);
  return detail;
}

function toggleMobileMenu() {
  if (!mobileMenuPanel) {
    return;
  }

  const isOpen = mobileMenuPanel.classList.toggle("is-open");
  mobileMenuPanel.setAttribute("aria-hidden", String(!isOpen));
  mobileMenuBackdrop?.classList.toggle("is-open", isOpen);
  mobileMenuBackdrop?.setAttribute("aria-hidden", String(!isOpen));
  activeStage?.querySelector('[data-id="2141:1312"]')?.classList.toggle("is-menu-open", isOpen);
  activeStage?.querySelector('[data-id="2141:1312"]')?.setAttribute("aria-expanded", String(isOpen));
  animateMobileMenu(isOpen);
}

function closeMobileMenu() {
  if (!mobileMenuPanel) {
    return;
  }

  mobileMenuPanel.classList.remove("is-open");
  mobileMenuPanel.setAttribute("aria-hidden", "true");
  mobileMenuBackdrop?.classList.remove("is-open");
  mobileMenuBackdrop?.setAttribute("aria-hidden", "true");
  activeStage?.querySelector('[data-id="2141:1312"]')?.classList.remove("is-menu-open");
  activeStage?.querySelector('[data-id="2141:1312"]')?.setAttribute("aria-expanded", "false");
  animateMobileMenu(false);
}

function animateMobileMenu(isOpen) {
  const gsap = window.gsap;
  if (!gsap || prefersReducedMotion() || !mobileMenuPanel) {
    return;
  }

  const items = Array.from(mobileMenuPanel.querySelectorAll("button"));
  gsap.killTweensOf([mobileMenuPanel, mobileMenuBackdrop, ...items].filter(Boolean));

  if (isOpen) {
    gsap.fromTo(
      mobileMenuBackdrop,
      { opacity: 0, backdropFilter: "blur(0px)" },
      { opacity: 1, backdropFilter: "blur(5px)", duration: 0.28, ease: "power2.out" }
    );
    gsap.fromTo(
      mobileMenuPanel,
      {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0% round 26px)",
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0% round 26px)",
        filter: "blur(0px)",
        duration: 0.42,
        ease: "expo.out"
      }
    );
    gsap.fromTo(
      items,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.38, stagger: 0.045, ease: "power3.out", delay: 0.06 }
    );
    return;
  }

  gsap.to(mobileMenuBackdrop, {
    opacity: 0,
    backdropFilter: "blur(0px)",
    duration: 0.2,
    ease: "power2.in"
  });
  gsap.to(mobileMenuPanel, {
    opacity: 0,
    clipPath: "inset(0% 0% 100% 0% round 26px)",
    filter: "blur(8px)",
    duration: 0.22,
    ease: "power2.in"
  });
}

function animateCurriculumState(element, isExpanded) {
  const gsap = window.gsap;
  if (!gsap || prefersReducedMotion()) {
    return;
  }

  const detail = element.querySelector(".curriculum-module-detail");
  if (detail) {
    gsap.killTweensOf(detail);
  }

  gsap.fromTo(
    element,
    { "--motion-scale": isExpanded ? 0.992 : 1.008 },
    { "--motion-scale": 1, duration: 0.5, ease: "elastic.out(1, 0.65)", overwrite: "auto" }
  );

  if (isExpanded) {
    if (detail) {
      gsap.fromTo(
        detail,
        { opacity: 0, clipPath: "inset(0% 0% 100% 0% round 20px)", filter: "blur(8px)" },
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0% round 20px)",
          filter: "blur(0px)",
          duration: 0.68,
          delay: 0.14,
          ease: "power3.out"
        }
      );
    }
    return;
  }

  if (detail) {
    gsap.set(detail, {
      opacity: 0,
      visibility: "hidden",
      clipPath: "inset(0% 0% 100% 0% round 20px)",
      filter: "blur(0px)"
    });
  }
}

function showDialog(title, body) {
  if (!dialogElement) {
    dialogElement = createDialog();
    document.body.appendChild(dialogElement);
  }

  dialogElement.querySelector(".site-dialog-title").textContent = title;
  dialogElement.querySelector(".site-dialog-body").textContent = body;
  dialogElement.classList.add("is-open");
  dialogElement.setAttribute("aria-hidden", "false");
  dialogElement.querySelector(".site-dialog-close").focus();
}

function createDialog() {
  const backdrop = document.createElement("div");
  backdrop.className = "site-dialog-backdrop";
  backdrop.setAttribute("aria-hidden", "true");

  const dialog = document.createElement("section");
  dialog.className = "site-dialog";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-labelledby", "site-dialog-title");

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "site-dialog-close";
  closeButton.setAttribute("aria-label", "Close");
  closeButton.textContent = "×";

  const title = document.createElement("h2");
  title.id = "site-dialog-title";
  title.className = "site-dialog-title";

  const body = document.createElement("p");
  body.className = "site-dialog-body";

  dialog.append(closeButton, title, body);
  backdrop.appendChild(dialog);

  const close = () => {
    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
  };

  closeButton.addEventListener("click", close);
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      close();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
      close();
    }
  });

  return backdrop;
}

function readModule(node) {
  const texts = collectText(node);
  const number = texts.find((text) => /^\d{2}$/.test(text));
  const title = texts.find((text) => !/^\d{2}$/.test(text) && !/sessions?$/.test(text));
  const description = texts.filter((text) => text !== number && text !== title).join(". ");

  return {
    title: `${number ? `${number}. ` : ""}${title || "Curriculum module"}`,
    body: description || "Curriculum module details."
  };
}

function collectText(node, texts = []) {
  if (node.text?.trim()) {
    texts.push(node.text.replace(/\s+/g, " ").trim());
  }

  for (const child of node.children || []) {
    collectText(child, texts);
  }

  return texts;
}

function interactionLabel(node, action) {
  if (action.type === "menu") return "Open menu";
  if (action.type === "module") return "Open curriculum module";
  if (action.type === "internal") return "Open resume";
  if (action.type === "document") return action.target === "privacy" ? "Open privacy policy" : "Open terms and conditions";
  if (action.type === "external") return action.target === "linkedin" ? "Open LinkedIn" : "Open WhatsApp";
  return node.text || node.name || "Open section";
}

function cssMatrix(matrix = [1, 0, 0, 1, 0, 0]) {
  return `matrix(${matrix.join(",")})`;
}

function isButtonish(node) {
  return /button|link/i.test(node.name || "");
}

function isAnimated(node) {
  return node.type === "FRAME" && /section|background\+shadow|button/i.test(node.name || "");
}

function classNames(...names) {
  return names.filter(Boolean).join(" ");
}
