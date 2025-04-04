document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Language selector functionality
    const langSelector = document.querySelector('.lang-selector__current');
    const langDropdown = document.querySelector('.lang-selector__dropdown');
    const langOptions = document.querySelectorAll('.lang-selector__option');
    
    // Get saved language or default to French
    let currentLang = localStorage.getItem('selectedLanguage') || 'fr';
    
    // Translations object (example, replace with your actual translations)
    // const translations = {
    //   'en': {
    //     'welcome': 'Welcome',
    //     'description': 'This is a description in English.',
    //     'navigation': {
    //       'home': 'Home',
    //       'about': 'About',
    //       'contact': 'Contact'
    //     }
    //   },
    //   'fr': {
    //     'welcome': 'Bienvenue',
    //     'description': 'Ceci est une description en français.',
    //     'navigation': {
    //       'home': 'Accueil',
    //       'about': 'À propos',
    //       'contact': 'Contact'
    //     }
    //   }
    // };
    
    // Apply saved language on page load
    applyLanguage(currentLang);
    updateLanguageSelector(currentLang);
    
    // Toggle language dropdown
    langSelector.addEventListener('click', function(e) {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
      langDropdown.classList.remove('active');
    });
    
    // Language selection
    langOptions.forEach(option => {
      option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        currentLang = lang;
        
        // Save selected language
        localStorage.setItem('selectedLanguage', lang);
        
        // Apply translations
        applyLanguage(lang);
        
        // Update language selector
        updateLanguageSelector(lang);
        
        // Close dropdown
        langDropdown.classList.remove('active');
      });
    });
    
    // Function to apply language translations
    function applyLanguage(lang) {
      const elements = document.querySelectorAll('[data-translate]');
      
      elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split('.');
        
        // Navigate through the nested translation object
        let translation = translations[lang];
        for (const k of keys) {
          if (translation && translation[k]) {
            translation = translation[k];
          } else {
            console.warn(`Translation key not found: ${key} for language: ${lang}`);
            return;
          }
        }
        
        // Apply translation
        if (typeof translation === 'string') {
          element.textContent = translation;
        }
      });
      
      // Update HTML lang attribute
      document.documentElement.lang = lang;
    }
    
    // Function to update language selector appearance
    function updateLanguageSelector(lang) {
      const flagImg = langSelector.querySelector('.lang-selector__flag');
      const langCode = langSelector.querySelector('.lang-selector__code');
      
      // Update active state in dropdown
      langOptions.forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
          option.classList.add('active');
        } else {
          option.classList.remove('active');
        }
      });
      
      // Update current language display
      flagImg.src = `img/flags/${lang}.svg`;
      langCode.textContent = lang.toUpperCase();
    }
});