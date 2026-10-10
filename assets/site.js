// ABMe — shared behaviour: the phone menu toggle.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('nav')) setOpen(false);
  });
  var desktop = window.matchMedia('(min-width: 769px)');
  if (desktop.addEventListener) {
    desktop.addEventListener('change', function (e) { if (e.matches) setOpen(false); });
  }
})();
