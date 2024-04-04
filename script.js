/* Codigo para menu Mobile*/

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
    document.body.classList.toggle("overflow-hidden");

    mobileMenu.classList.toggle("-translate-x-full");

    setTimeout(function () {
      mobileMenu.classList.toggle("hidden");
    }, 50);
  });

  // Ocultar o menu quando clicado fora dele
  document.addEventListener("click", function (event) {
    if (
      !menuToggle.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      mobileMenu.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  });
});
