document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");
      const selected = toggle.querySelector(".selected");
  
      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
  
        // Close all other dropdowns
        dropdowns.forEach((d) => {
          if (d !== dropdown) d.classList.remove("active");
        });
  
        // Toggle current
        dropdown.classList.toggle("active");
      });
  
      // Select dropdown item
      menu.querySelectorAll(".dropdown-item").forEach((item) => {
        item.addEventListener("click", function () {
          selected.textContent = this.textContent;
          dropdown.classList.remove("active");
        });
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener("click", () => {
      dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    });
  });
  //====================================================================================
   document.addEventListener("DOMContentLoaded", function () {
    const allCards = document.querySelectorAll(".job-category-col");
    const dots = document.querySelectorAll(".dot");
    const cardsPerPage = 8;
    let currentPage = 0;
  
    function showPage(page) {
      allCards.forEach((card, index) => {
        card.classList.remove("visible");
        if (index >= page * cardsPerPage && index < (page + 1) * cardsPerPage) {
          card.classList.add("visible");
        }
      });
  
      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[page]) dots[page].classList.add("active");
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentPage = index;
        showPage(currentPage);
      });
    });
  
    // Initial show
    showPage(currentPage);
  }); 