// You can add scroll-triggered animations or interactive logic later
const stars = document.querySelectorAll('.star');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

stars.forEach(star => observer.observe(star));
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = 0;
  setTimeout(() => preloader.style.display = "none", 600);
});
