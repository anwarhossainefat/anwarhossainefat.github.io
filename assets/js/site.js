/* Theme toggle and publication filter. The site works fully without this script. */
(function () {
  var root = document.documentElement;

  function store(key, value) {
    try { if (value === null) localStorage.removeItem(key); else localStorage.setItem(key, value); } catch (e) {}
  }
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function show(el, on) {
    if (on) el.removeAttribute('hidden'); else el.setAttribute('hidden', '');
  }
  function labelButton(btn) {
    var dark = isDark();
    btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    btn.setAttribute('title', dark ? 'Switch to light theme' : 'Switch to dark theme');
    /* The icon shows the theme you switch to: moon in light mode, sun in dark mode. */
    show(btn.querySelector('.i-sun'), dark);
    show(btn.querySelector('.i-moon'), !dark);
  }

  var btn = document.querySelector('.theme-btn');
  if (btn) {
    labelButton(btn);
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      store('theme', next);
      labelButton(btn);
    });
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function () { labelButton(btn); };
      if (mq.addEventListener) mq.addEventListener('change', onChange); else if (mq.addListener) mq.addListener(onChange);
    }
  }

  /* Publication filter */
  var filters = document.querySelectorAll('.filter');
  if (!filters.length) return;
  var pubs = document.querySelectorAll('.pub');
  var groups = document.querySelectorAll('[data-pub-group]');
  var count = document.querySelector('.filter-count');

  function apply(topic) {
    var shown = 0;
    pubs.forEach(function (p) {
      var ok = topic === 'all' || (' ' + p.getAttribute('data-tags') + ' ').indexOf(' ' + topic + ' ') !== -1;
      p.hidden = !ok;
      if (ok) shown++;
    });
    groups.forEach(function (g) {
      g.hidden = !g.querySelector('.pub:not([hidden])');
    });
    filters.forEach(function (f) { f.setAttribute('aria-pressed', f.getAttribute('data-topic') === topic ? 'true' : 'false'); });
    if (count) count.textContent = topic === 'all' ? '' : 'Showing ' + shown + ' of ' + pubs.length;
  }
  filters.forEach(function (f) {
    f.addEventListener('click', function () { apply(f.getAttribute('data-topic')); });
  });
})();
