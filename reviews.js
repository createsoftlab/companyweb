document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const ratingInput = document.getElementById("rating");

    // Star Rating Click Event
    stars.forEach(star => {
        star.addEventListener("click", function () {
            let value = this.getAttribute("data-value");
            ratingInput.value = value;

            // Highlight selected stars
            stars.forEach(s => s.classList.remove("selected"));
            this.classList.add("selected");

            // Highlight previous stars
            let starIndex = Array.from(stars).indexOf(this);
            for (let i = 0; i <= starIndex; i++) {
                stars[i].classList.add("selected");
            }
        });
    });

    // Form Submit Event
    document.getElementById("reviewForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Review Submitted Successfully!");
    });
});
