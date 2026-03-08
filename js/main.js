/* ==========================================================================
   Bot One — Vanilla JS
   Smooth scroll, mobile nav, scroll animations, nav background effect.
   No dependencies.
   ========================================================================== */

(function () {
    'use strict';

    /* ---------- Smooth Scroll ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();

            // Close mobile nav if open
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');

            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    /* ---------- Mobile Nav Toggle ---------- */
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    /* ---------- Nav Scroll Effect ---------- */
    var nav = document.getElementById('nav');
    var hero = document.getElementById('hero');

    function onScroll() {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Scroll Animations (Intersection Observer) ---------- */
    var animateElements = document.querySelectorAll('.animate');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        animateElements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show everything immediately
        animateElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }
})();
