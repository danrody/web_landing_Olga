(() => {
  const STORAGE_KEY = "careerdrive-language";
  const SUPPORTED_LANGUAGES = new Set(["en", "ru"]);

  function getLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGUAGES.has(stored) ? stored : "en";
  }

  function setLanguage(language) {
    const nextLanguage = SUPPORTED_LANGUAGES.has(language) ? language : "en";
    localStorage.setItem(STORAGE_KEY, nextLanguage);
    applyDocumentLanguage(nextLanguage);
    updateSwitcher(nextLanguage);
    window.dispatchEvent(new CustomEvent("careerdrive:languagechange", { detail: { language: nextLanguage } }));
  }

  function toggleLanguage() {
    setLanguage(getLanguage() === "ru" ? "en" : "ru");
  }

  function applyDocumentLanguage(language = getLanguage()) {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
  }

  function createSwitcher() {
    if (document.querySelector(".language-switcher")) {
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "language-switcher";
    button.setAttribute("aria-label", "Switch language");
    button.innerHTML = `
      <span class="language-switcher-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M3 12h18"></path>
          <path d="M12 3c2.25 2.38 3.38 5.38 3.38 9S14.25 18.62 12 21"></path>
          <path d="M12 3c-2.25 2.38-3.38 5.38-3.38 9S9.75 18.62 12 21"></path>
        </svg>
      </span>
      <span class="language-switcher-code"></span>
    `;
    button.addEventListener("click", toggleLanguage);
    (document.querySelector(".legal-links") || document.body).appendChild(button);
    updateSwitcher(getLanguage());
  }

  function updateSwitcher(language = getLanguage()) {
    const button = document.querySelector(".language-switcher");
    if (!button) {
      return;
    }

    button.querySelector(".language-switcher-code").textContent = language === "ru" ? "RU" : "EN";
    button.title = language === "ru" ? "Переключить на English" : "Switch to Russian";
    button.setAttribute("aria-pressed", String(language === "ru"));
  }

  window.CareerDriveLanguage = {
    getLanguage,
    setLanguage,
    createSwitcher,
    applyDocumentLanguage
  };

  applyDocumentLanguage();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createSwitcher, { once: true });
  } else {
    createSwitcher();
  }
})();
