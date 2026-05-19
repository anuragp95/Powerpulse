<script>
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Animate trend bars on scroll
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.trend-bar-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-width') || bar.style.width;
        });
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.trends-table').forEach(t => barObserver.observe(t));

  // Newsletter subscribe
  document.querySelector('.newsletter-form button').addEventListener('click', function() {
    const input = document.querySelector('.newsletter-form input');
    if (input.value.includes('@')) {
      this.textContent = '✓ Subscribed!';
      this.style.background = 'var(--accent)';
      input.value = '';
      setTimeout(() => { this.textContent = 'Subscribe →'; }, 3000);
    } else {
      input.style.borderColor = 'var(--danger)';
      setTimeout(() => { input.style.borderColor = 'var(--border)'; }, 2000);
    }
  });
</script>
