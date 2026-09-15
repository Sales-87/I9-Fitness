const menu = document.querySelector(".menu-hamburguer");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("ativo");
}); 

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});