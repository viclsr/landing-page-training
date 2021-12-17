const mobileBtn = document.querySelector("#btn-mobile");
const navLinksToggle = document.querySelectorAll(".menu-link a");

function toggleMenu() {
  const nav = document.querySelector(".nav-menu");
  nav.classList.toggle("active");
}
function toggleLink() {
  navLinksToggle.forEach((navLink) => {
    navLink.addEventListener("click", toggleMenu);
  });
}
mobileBtn.addEventListener("click", toggleMenu);
toggleLink();
