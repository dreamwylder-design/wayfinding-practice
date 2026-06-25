/* ============================================================
   Wayfinding Practice — main.js
   Phase 0 foundation. Shared across all pages.
   ============================================================ */

(function () {
  'use strict';

  // Mark JS available so .no-js fallback styles are bypassed.
  document.documentElement.classList.remove('no-js');

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ---------- Lenis smooth scroll ---------- */
  let lenis = null;
  if (!prefersReducedMotion && window.Lenis) {
    lenis = new window.Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  /* ---------- GSAP + ScrollTrigger ---------- */
  if (window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);

    if (lenis) {
      lenis.on('scroll', window.ScrollTrigger.update);
    }
  }

  /* ---------- Scroll animations ---------- */
  function initScrollAnimations() {
    if (prefersReducedMotion) return;
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    // Default reveal — skip reveals inside a stagger group (handled below),
    // otherwise they get two competing tweens and flash on entry.
    document.querySelectorAll('.reveal').forEach((el, i) => {
      if (el.closest('[data-reveal-stagger]')) return;
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Stagger groups: any [data-reveal-stagger] parent staggers its .reveal kids.
    document.querySelectorAll('[data-reveal-stagger]').forEach((parent) => {
      const kids = parent.querySelectorAll('.reveal');
      gsap.fromTo(
        kids,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: parent,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Mask reveal (clip from bottom)
    document.querySelectorAll('.reveal-mask').forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Settle (used once on the dark quote)
    document.querySelectorAll('.reveal-settle').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0.4 },
        {
          opacity: 1,
          duration: 2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Contour emergence (Approach section SVG only)
    const contour = document.querySelector('[data-contour-emergence]');
    if (contour) {
      const path = contour.querySelector('path');
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        gsap.to(contour, {
          opacity: 0.12,
          duration: 2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: contour,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: contour,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        });
      }
    }
  }

  /* ---------- Nav scroll behaviour ---------- */
  function initNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const SCROLL_THRESHOLD = 60;
    const transparentSections = document.querySelectorAll('[data-nav-transparent]');

    // Pages with no transparent hero region (faq, contact, privacy) start
    // and stay in the scrolled state — otherwise cream text on a cream
    // page background is invisible.
    if (!transparentSections.length) {
      nav.classList.add('is-scrolled');
      return;
    }

    // Sections marked with [data-nav-transparent] keep the nav transparent
    // (cream text + light logo) while their bounds intersect the nav.
    function isOverTransparentSection() {
      const navBottom = nav.getBoundingClientRect().bottom;
      for (const s of transparentSections) {
        const r = s.getBoundingClientRect();
        if (r.top <= navBottom && r.bottom >= navBottom) return true;
      }
      return false;
    }

    function update() {
      const y = window.scrollY || window.pageYOffset || 0;
      const overTransparent = isOverTransparentSection();
      const scrolledPast = y > SCROLL_THRESHOLD;
      nav.classList.toggle('is-scrolled', scrolledPast && !overTransparent);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ---------- Mobile hamburger ---------- */
  function initHamburger() {
    const hamburger = document.querySelector('.nav__hamburger');
    const overlay = document.querySelector('.nav-overlay');
    const closeBtn = overlay && overlay.querySelector('.nav-overlay__close');
    if (!hamburger || !overlay) return;

    function open() {
      overlay.classList.add('is-open');
      document.body.classList.add('nav-open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    function close() {
      overlay.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
    });
  }

  /* ---------- Form handler (shared, used on contact + home) ---------- */
  function initForms() {
    const forms = document.querySelectorAll('form[data-wf-form]');
    forms.forEach(setupForm);
  }

  function setupForm(form) {
    const successEl = form.querySelector('.form-success');

    function setError(field, message) {
      const group = field.closest('.form-group');
      if (!group) return;
      group.classList.add('error');
      let err = group.querySelector('.form-error');
      if (!err) {
        err = document.createElement('span');
        err.className = 'form-error';
        group.appendChild(err);
      }
      err.textContent = message;
    }
    function clearError(field) {
      const group = field.closest('.form-group');
      if (!group) return;
      group.classList.remove('error');
      const err = group.querySelector('.form-error');
      if (err) err.textContent = '';
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let valid = true;

      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');

      if (name) {
        if (!name.value.trim()) {
          setError(name, 'Please share a name to address you by.');
          valid = false;
        } else clearError(name);
      }
      if (email) {
        const v = email.value.trim();
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!v) {
          setError(email, 'An email is needed to reply.');
          valid = false;
        } else if (!emailRe.test(v)) {
          setError(email, 'That email doesn\u2019t look quite right.');
          valid = false;
        } else clearError(email);
      }

      if (!valid) return;

      try {
        const data = new FormData(form);
        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.hidden = true;
          if (successEl) {
            successEl.hidden = false;
          }
        } else {
          // Generic submission failure — surface inline near submit.
          showSubmitError(form, 'Something went wrong sending the message. Please try again, or email directly.');
        }
      } catch (err) {
        showSubmitError(form, 'Couldn\u2019t reach the server. Please try again, or email directly.');
      }
    });

    // Live-clear errors as user types
    form.querySelectorAll('input, textarea').forEach((field) => {
      field.addEventListener('input', () => clearError(field));
    });
  }

  function showSubmitError(form, message) {
    let el = form.querySelector('.form-submit-error');
    if (!el) {
      el = document.createElement('p');
      el.className = 'form-submit-error form-error';
      el.style.marginTop = '1rem';
      const submit = form.querySelector('.form-submit');
      if (submit && submit.parentNode) submit.parentNode.insertBefore(el, submit.nextSibling);
      else form.appendChild(el);
    }
    el.textContent = message;
  }

  /* ---------- Calendly popup ---------- */
  function initCalendly() {
    const CALENDLY_URL = 'https://calendly.com/richard-wayfindingpractice/free-call';
    document.querySelectorAll('[href="#halaxy"]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.Calendly) {
          window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else {
          window.open(CALENDLY_URL, '_blank', 'noopener');
        }
      });
    });
  }

  /* ---------- Init ---------- */
  function init() {
    initNav();
    initHamburger();
    initForms();
    initScrollAnimations();
    initCalendly();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
