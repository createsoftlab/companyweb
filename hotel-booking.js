/*var swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    effect: "fade",
    loop:true,
    autoplay: {
      delay:3500,
      disableOnInteraction:false,
    }
   
  });


  /****************imges silder*****************/
function nextSlide(button) {
    const slider = button.parentElement;
    const slides = slider.querySelectorAll('.slide');
    const active = slider.querySelector('.active');
    let index = Array.from(slides).indexOf(active);
    
    active.classList.remove('active');
    slides[(index + 1) % slides.length].classList.add('active');
  }
  
  function prevSlide(button) {
    const slider = button.parentElement;
    const slides = slider.querySelectorAll('.slide');
    const active = slider.querySelector('.active');
    let index = Array.from(slides).indexOf(active);
    
    active.classList.remove('active');
    slides[(index - 1 + slides.length) % slides.length].classList.add('active');
  }


  /*******************other*****************/
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
  const searchValue = document.querySelector('.search-box').value.toLowerCase();
  const hotelCards = document.querySelectorAll('.hotel-card');

  hotelCards.forEach(card => {
    const hotelName = card.querySelector('h3').textContent.toLowerCase();
    if (hotelName.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


/*******************click***********************/
let currentPage = 1;
const cardsPerPage = 8;
const hotelCards = document.querySelectorAll('.hotel-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Function to display cards based on page number
function showCards(page) {
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = page * cardsPerPage;
  hotelCards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Event listener for Previous button
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showCards(currentPage);
  }
});

// Event listener for Next button
nextBtn.addEventListener('click', () => {
  if (currentPage * cardsPerPage < hotelCards.length) {
    currentPage++;
    showCards(currentPage);
  }
});

// Initialize the pagination
showCards(currentPage);


/*************room****** */
$('.owl-carousel1').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    navText: ["<i class = 'fa fa-chevron-left'></i>", "<i class = 'fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10,
      },
      1000: {
        items: 3
      }
    }
  })












