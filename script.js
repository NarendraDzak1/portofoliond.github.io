/* ==========================================================
   PORTOFOLIO — NARENDRA DZAKI KUSWARA
   script.js
   ========================================================== */

(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. Foto profil — tampilkan inisial kalau berkas tidak ada */
  function setupAvatar() {
    var img = document.getElementById('avatar');
    var fb = document.getElementById('avatar-fallback');
    if (!img || !fb) return;

    function swap() {
      img.style.display = 'none';
      fb.style.display = 'flex';
    }
    img.addEventListener('error', swap);
    if (img.complete && img.naturalWidth === 0) swap();
  }

  /* 2. Menu navigasi mobile */
  function setupNav() {
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-links');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Tutup' : 'Menu';
    });

    menu.addEventListener('click', function (e) {
      if (e.target.tagName !== 'A') return;
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
    });
  }

  /* 3. Section muncul perlahan saat masuk layar */
  function setupReveal() {
    var items = document.querySelectorAll('.rv');
    if (!items.length) return;

    if (!('IntersectionObserver' in window) || reduced) {
      items.forEach(function (el) { el.classList.add('on'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('on');
        io.unobserve(en.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

    items.forEach(function (el) { io.observe(el); });
  }

  /* 4. Tautan navigasi menyala sesuai section yang dibaca */
  function setupActiveLink() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('.nav-links a[href^="#"]')
    );
    if (!links.length || !('IntersectionObserver' in window)) return;

    var targets = links
      .map(function (a) { return document.querySelector(a.getAttribute('href')); })
      .filter(Boolean);

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    targets.forEach(function (t) { io.observe(t); });
  }

  /* 5. Tahun berjalan di footer */
  function setupYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function init() {
    setupAvatar();
    setupNav();
    setupReveal();
    setupActiveLink();
    setupYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
