//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Close the menu when a link is clicked (on mobile)
document.querySelectorAll("#nav-menu").forEach((link) => {
  link.addEventListener("click", function () {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  });
});
