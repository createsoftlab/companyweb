//company details page -> 3D image gallery
const images = [
    'images/a1.jpeg',
    'images/a2.jpeg',
    'images/a3.jpeg',
    'images/a4.jpeg',
    'images/a5.jpg',
    'images/a6.jpg',
];

const gallery = document.getElementById("gallery");
const totalImages = images.length;
const angle = 360 / totalImages;

images.forEach((src, index) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");
    item.style.backgroundImage = `url(${src})`;
    item.style.transform = `rotateY(${index * angle}deg) translateZ(300px)`;
    item.style.width = "100%";
    item.style.height = "100%";
    gallery.appendChild(item);
});

//booking-home page -> image gallery


/* document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".browse-by-property-type-of-location .scroll-wrapper");
    const leftArrow = document.querySelector(".browse-by-property-type-of-location .slider-left");
    const rightArrow = document.querySelector(".browse-by-property-type-of-location .slider-right");
  
    if (slider && leftArrow && rightArrow) {
      leftArrow.addEventListener("click", function () {
        slider.scrollBy({ left: -300, behavior: "smooth" });
      });
  
      rightArrow.addEventListener("click", function () {
        slider.scrollBy({ left: 300, behavior: "smooth" });
      });
    }
  }); */
  
  