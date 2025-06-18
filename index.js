 const carousel = document.getElementById("carousel");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");

  btnRight.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
    btnLeft.style.display = "block";
  });

  btnLeft.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
    if (carousel.scrollLeft <= 300) {
      btnLeft.style.display = "none";
    }
  });