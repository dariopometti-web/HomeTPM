/* HomeTPM standalone site — minimal i18n toggle IT/EN.
   Reads/writes `hometpm.lang` in localStorage, then swaps every
   element that has `data-it` and `data-en` attributes. Defaults to IT
   (Italian primary audience) unless the browser is EN-only. */
(function () {
  var KEY = 'hometpm.lang';
  function detect() {
    try {
      var stored = localStorage.getItem(KEY);
      if (stored === 'it' || stored === 'en') return stored;
    } catch (_) {}
    var l = (navigator.language || 'it').toLowerCase();
    return l.startsWith('en') ? 'en' : 'it';
  }
  function apply(lang) {
    var nodes = document.querySelectorAll('[data-it],[data-en]');
    nodes.forEach(function (n) {
      var v = n.getAttribute('data-' + lang);
      if (v != null) n.textContent = v;
    });
    document.documentElement.setAttribute('lang', lang);
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'it' ? 'EN' : 'IT';
    // Update <title> and <meta description> if data-title-* is present
    var titleEl = document.querySelector('title');
    if (titleEl && titleEl.getAttribute('data-title-' + lang)) {
      titleEl.textContent = titleEl.getAttribute('data-title-' + lang);
    }
    var descEl = document.querySelector('meta[name="description"]');
    if (descEl && descEl.getAttribute('data-desc-' + lang)) {
      descEl.setAttribute('content', descEl.getAttribute('data-desc-' + lang));
    }
  }
  function toggle() {
    var current = detect();
    var next = current === 'it' ? 'en' : 'it';
    try { localStorage.setItem(KEY, next); } catch (_) {}
    apply(next);
  }
  document.addEventListener('DOMContentLoaded', function () {
    apply(detect());
    var b = document.getElementById('lang-toggle');
    if (b) b.addEventListener('click', toggle);
  });
})();
