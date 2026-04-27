document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Header scroll effect
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (header) {
      header.style.borderBottomColor = y > 50 
        ? 'rgba(255,255,255,0.1)' 
        : 'rgba(255,255,255,0.05)';
    }
    lastScroll = y;
  }, { passive: true });

  // Card hover glow effect (follow cursor)
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });

  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.section-header, .cta-box, .hero-stats').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

  // Smooth parallax for hero orbs
  if (window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.querySelectorAll('.gradient-orb').forEach((orb, i) => {
        const speed = (i + 1) * 0.5;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    }, { passive: true });
  }
});
