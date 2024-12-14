document.addEventListener("DOMContentLoaded", () => {
  // tombol pesan sekarang
  const orderButtons = document.querySelectorAll(".orderButton");

  orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.open("https://wa.link/kbbl7w", "_blank");
    });
  });

  //Button hero
  const heroButton = document.getElementById("orderButton");
  if (heroButton) {
    heroButton.addEventListener("click", () => {
      window.open("https://wa.link/kbbl7w", "_blank");
    });
  }
});
