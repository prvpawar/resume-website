// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header animation
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.opacity = 1 - window.scrollY / 600;
});