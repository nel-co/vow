var menuBtn = document.querySelector('.mobile-nav');
var mobileNav = document.querySelector('.mobile-nav-wrapper');

mobileNav.style.display = 'none';  
(function() {
  menuBtn.addEventListener('click', function(e) {
    // e.preventDefault();
    if (mobileNav.style.display != 'flex') {
      mobileNav.style.display = 'flex';
    } else {
      mobileNav.style.display = 'none';
    }
   menuBtn.classList.toggle('change');
  });
})();

var typed = new Typed('#hero-word', {
  strings: [
    "Easier.",
    "Better.",
    "Smarter.",
    "Faster."
  ],
  typeSpeed: 29,
  backSpeed: 29,
  backDelay: 1800,
  loop: true
})