document.addEventListener('DOMContentLoaded', () => {
  const cookieConsentDialog = document.getElementById('cookie-consent-dialog');
  const cookieCustomizationDialog = document.getElementById('cookie-customization-dialog');
  const acceptAllButton = document.getElementById('accept-all');
  const customizeButton = document.getElementById('customize');
  const rejectAllButton = document.getElementById('reject-all');
  const savePreferencesButton = document.getElementById('save-preferences');
  const customizeAcceptAllButton = document.getElementById('customize-accept-all');
  const customizeRejectAllButton = document.getElementById('customize-reject-all');
  const cookieForm = document.getElementById('cookie-form');

  // Verificar si ya hay consentimiento guardado
  const consent = localStorage.getItem('cookie-consent');
  if (!consent) {
    setTimeout(() => {
      cookieConsentDialog?.classList.add('active');
    }, 1000);
  }
  else { loadScriptsBasedOnPreferences(); }

  acceptAllButton.addEventListener('click', () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      personalization: true,
    });
    cookieConsentDialog?.classList.remove('active');
    setTimeout(() => {
      cookieConsentDialog.style.display = 'none';
    }, 1000);
    loadScriptsBasedOnPreferences();
  });

  customizeButton.addEventListener('click', () => {
    cookieConsentDialog?.classList.remove('active');
    setTimeout(() => {
      cookieConsentDialog.style.display = 'none';
    }, 1000);
    cookieCustomizationDialog.style.display = 'flex';
    setTimeout(() => {
      cookieCustomizationDialog?.classList.add('active');
    }, 200);
  });

  rejectAllButton.addEventListener('click', () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      personalization: false,
    });
    cookieConsentDialog?.classList.remove('active');
    setTimeout(() => {
      cookieConsentDialog.style.display = 'none';
    }, 1000);
  });

  savePreferencesButton.addEventListener('click', () => {
    const formData = new FormData(cookieForm);
    const preferences = {};
    formData.forEach((value, key) => {
      preferences[key] = value === 'on';
    });
    setCookiePreferences(preferences);
    cookieCustomizationDialog?.classList.remove('active');
    setTimeout(() => {
      cookieCustomizationDialog.style.display = 'none';
    }, 1000);
    loadScriptsBasedOnPreferences();
  });

  customizeAcceptAllButton.addEventListener('click', () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      personalization: true,
    });
    cookieCustomizationDialog?.classList.remove('active');
    setTimeout(() => {
      cookieCustomizationDialog.style.display = 'none';
    }, 1000);
    loadScriptsBasedOnPreferences();
  });

  customizeRejectAllButton.addEventListener('click', () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      personalization: false,
    });
    cookieCustomizationDialog?.classList.remove('active');
    setTimeout(() => {
      cookieCustomizationDialog.style.display = 'none';
    }, 1000);
  });

  function setCookiePreferences(preferences) {
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent', 'true');
  }

  function getCookiePreferences() {
    const preferences = localStorage.getItem('cookie-preferences');
    return preferences ? JSON.parse(preferences) : null;
  }

  function loadScriptsBasedOnPreferences() {
    const preferences = getCookiePreferences();
    if (preferences) {
      if (preferences.essential) {
        // pixeles esenciales
      }
      if (preferences.analytics)
        loadGoogleTagManager();
      if (preferences.marketing) {
        // pixeles marketing
      }
      if (preferences.personalization) {
        // pixeles para personalización
      }
    }
  }

  function loadGoogleTagManager() {
    (function (w, d, s, l, i) {
      // eslint-disable-next-line max-statements-per-line
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
    new Date().getTime(),
        'event': 'gtm.js',
      // eslint-disable-next-line max-statements-per-line
      }); const f = d.getElementsByTagName(s)[0];
      // eslint-disable-next-line max-statements-per-line, eqeqeq
      const j = d.createElement(s); const dl = l != 'dataLayer' ? `&l=${l}` : ''; j.async = true; j.src
    // eslint-disable-next-line max-statements-per-line
    = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-XXXXXX'); // Reemplaza GTM-XXXXXX con tu ID de GTM
  }
});
