document.querySelector(".apply-btn").addEventListener("click", function () {
  alert("Redirecting to application form...");
});

document
  .querySelectorAll(".action-btn")[0]
  .addEventListener("click", function () {
    this.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
    this.style.color = "#e74c3c";
  });

$(document).ready(function () {
  $(".ad-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".ad-slider-vertical").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  });
});
