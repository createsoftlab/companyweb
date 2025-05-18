document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".events-gallery-slider");
    const leftArrow = document.querySelector(".events .slider-left");
    const rightArrow = document.querySelector(".events .slider-right");

    // Scroll left
    leftArrow.addEventListener("click", function () {
        slider.scrollBy({ left: -250, behavior: "smooth" });
    });

    // Scroll right
    rightArrow.addEventListener("click", function () {
        slider.scrollBy({ left: 250, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".product-gallery-slider");
    const leftArrow = document.querySelector(".products .slider-left");
    const rightArrow = document.querySelector(".products .slider-right");

    // Scroll left
    leftArrow.addEventListener("click", function () {
        slider.scrollBy({ left: -250, behavior: "smooth" });
    });

    // Scroll right
    rightArrow.addEventListener("click", function () {
        slider.scrollBy({ left: 250, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".top-rated-company-slider");
    const leftArrow = document.querySelector(".top-rated-company-wrapper .slider-left");
    const rightArrow = document.querySelector(".top-rated-company-wrapper .slider-right");

    // Scroll left
    leftArrow.addEventListener("click", function () {
        slider.scrollBy({ left: -250, behavior: "smooth" });
    });

    // Scroll right
    rightArrow.addEventListener("click", function () {
        slider.scrollBy({ left: 250, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".browse-by-property-type-of-location .scroll-wrapper");
    const leftArrow = document.querySelector(".browse-by-property-type-of-location .slider-left");
    const rightArrow = document.querySelector(".browse-by-property-type-of-location .slider-right");

    // Scroll left
    leftArrow.addEventListener("click", function () {
        slider.scrollBy({ left: -250, behavior: "smooth" });
    });

    // Scroll right
    rightArrow.addEventListener("click", function () {
        slider.scrollBy({ left: 250, behavior: "smooth" });
    });
});
//booking-home -> deals for the weekend
const scrollWrapper = document.querySelector('.deals-for-the-weekend .scroll-wrapper');
  const btnLeft = document.querySelector('.deals-for-the-weekend .slider-left');
  const btnRight = document.querySelector('.deals-for-the-weekend .slider-right');

  btnLeft.addEventListener('click', () => {
    scrollWrapper.scrollBy({ left: -300, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    scrollWrapper.scrollBy({ left: 300, behavior: 'smooth' });
  });
//booking-home page -> explore-lanka class

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".explore-lanka .scroll-wrapper");
    const leftArrow = document.querySelector(".explore-lanka .slider-left");
    const rightArrow = document.querySelector(".explore-lanka .slider-right");

    // Scroll left
    leftArrow.addEventListener("click", function () {
        slider.scrollBy({ left: -250, behavior: "smooth" });
    });

    // Scroll right
    rightArrow.addEventListener("click", function () {
        slider.scrollBy({ left: 250, behavior: "smooth" });
    });
});

/* document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".quick-and-easy-trip-planner .scroll-wrapper");
    const leftArrow = document.querySelector(".quick-and-easy-trip-planner .slider-left");
    const rightArrow = document.querySelector(".quick-and-easy-trip-planner .slider-right");

    // Scroll left
    leftArrow.addEventListener("click", function () {
        slider.scrollBy({ left: -250, behavior: "smooth" });
    });

    // Scroll right
    rightArrow.addEventListener("click", function () {
        slider.scrollBy({ left: 250, behavior: "smooth" });
    });
}); */

document.addEventListener("DOMContentLoaded", function () {
    const tripGallery = document.getElementById("tripGallery");
  
    const galleryData = {
      city: [
        { src: "images/other1.jpg", name: "Colombo" },
        { src: "images/other2.jpg", name: "Kandy" },
        { src: "images/Kurunegala3.jpg", name: "Nuwara Eliya" },
        { src: "images/Kurunegala4.jpg", name: "Bandarawela" },
        { src: "images/Kurunegala5.jpg", name: "Nuwara Eliya" },
        { src: "images/Kurunegala6.jpg", name: "Bandarawela" },
        { src: "images/Kurunegala5.jpg", name: "Nuwara Eliya" },
        { src: "images/Kurunegala6.jpg", name: "Bandarawela" },
      ],
      beach: [
        { src: "images/beach1.jpeg", name: "Unawatuna" },
        { src: "images/beach2.jpeg", name: "Mirissa" },
        { src: "images/beach3.jpg", name: "Unawatuna" },
        { src: "images/beach2.jpeg", name: "Mirissa" },
        { src: "images/beach1.jpeg", name: "Unawatuna" },
        { src: "images/beach2.jpeg", name: "Mirissa" },
        { src: "images/beach1.jpeg", name: "Unawatuna" },
        { src: "images/beach3.jpg", name: "Mirissa" },
      ],
      culture: [
        { src: "images/other1.jpg", name: "Anuradhapura" },
        { src: "images/culture1.jpeg", name: "Polonnaruwa" },
        { src: "images/other1.jpg", name: "Anuradhapura" },
        { src: "images/culture1.jpeg", name: "Polonnaruwa" },
        { src: "images/other1.jpg", name: "Anuradhapura" },
        { src: "images/culture1.jpeg", name: "Polonnaruwa" },
        { src: "images/other1.jpg", name: "Anuradhapura" },
        { src: "images/culture1.jpeg", name: "Polonnaruwa" },
      ],
      relax: [
        { src: "images/other5.jpg", name: "Nuwara Eliya" },
        { src: "images/other6.jpg", name: "Bandarawela" },
        { src: "images/other7.jpg", name: "Nuwara Eliya" },
        { src: "images/other8.jpg", name: "Bandarawela" },
        { src: "images/other5.jpg", name: "Nuwara Eliya" },
        { src: "images/other6.jpg", name: "Bandarawela" },
        { src: "images/other7.jpg", name: "Nuwara Eliya" },
        { src: "images/other8.jpg", name: "Bandarawela" },
      ],
      food: [
        { src: "images/food1.jpg", name: "Jaffna" },
        { src: "images/food2.jpg", name: "Negombo" },
        { src: "images/food3.jpeg", name: "Jaffna" },
        { src: "images/food4.jpg", name: "Negombo" },
        { src: "images/food1.jpg", name: "Jaffna" },
        { src: "images/food2.jpg", name: "Negombo" },
        { src: "images/food3.jpeg", name: "Jaffna" },
        { src: "images/food4.jpg", name: "Negombo" },
        { src: "images/food1.jpg", name: "Jaffna" },
        { src: "images/food2.jpg", name: "Negombo" },
      ]
    };
  
    const navLinks = document.querySelectorAll(".quick-and-easy-trip-planner-navbar a");
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const type = this.dataset.type;
        updateGallery(type);
      });
    });
  
    function updateGallery(type) {
      const items = galleryData[type] || [];
      tripGallery.innerHTML = ""; // Clear existing
  
      items.forEach(item => {
        const card = document.createElement("div");
        card.className = "travel-destinations-cover text-center flex-shrink-0";
        card.innerHTML = `
          <img src="${item.src}" alt="${item.name}" class="img-fluid rounded">
          <h6 class="mt-2">${item.name}</h6>
        `;
        tripGallery.appendChild(card);
      });
    }
  
    // Load default category on load
    updateGallery("city");
  
    // Arrow scroll functionality
    const leftArrow = document.querySelector(".quick-and-easy-trip-planner .slider-left");
    const rightArrow = document.querySelector(".quick-and-easy-trip-planner .slider-right");
  
    leftArrow.addEventListener("click", function () {
      tripGallery.scrollBy({ left: -250, behavior: "smooth" });
    });
  
    rightArrow.addEventListener("click", function () {
      tripGallery.scrollBy({ left: 250, behavior: "smooth" });
    });
  });

  //sliders with right and bottom small sliders image gallery in booking-home page

  document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".popular-attractions-in-kandy .thumbnail");
    const mainImage = document.getElementById("mainImage");
    const imageSources = Array.from(thumbnails).map(img => img.src);
    let currentIndex = imageSources.indexOf(mainImage.src);
  
    function updateMainImage(index) {
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = imageSources[index];
        mainImage.style.opacity = 1;
      }, 200);
  
      thumbnails.forEach(thumb => thumb.classList.remove("active"));
      thumbnails.forEach((thumb, i) => {
        if (imageSources[i] === imageSources[index]) {
          thumb.classList.add("active");
        }
      });
  
      currentIndex = index;
    }
  
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener("click", () => updateMainImage(index));
    });
  
    document.getElementById("prevBtn").addEventListener("click", () => {
      const newIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
      updateMainImage(newIndex);
    });
  
    document.getElementById("nextBtn").addEventListener("click", () => {
      const newIndex = (currentIndex + 1) % imageSources.length;
      updateMainImage(newIndex);
    });
  });