//menubox
document.addEventListener("DOMContentLoaded", function () {
    const menuIconWrapper = document.querySelector(".menu-icon-wrapper ");
    const menuExploreBox = document.querySelector(".menu-box");
    const closeIcon = document.querySelector(".close-icon ");

    // Show the menu when clicking the menu icon
    menuIconWrapper.addEventListener("click",  () => {
        menuExploreBox.classList.toggle("active");
    });

    // Close the menu when clicking the "X" icon
    closeIcon.addEventListener("click", function () {
        menuExploreBox.classList.remove("active");
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!menuExploreBox.contains(event.target) && !menuIconWrapper.contains(event.target)) {
            menuExploreBox.classList.remove("active");
        }
    });
});


//search-drop-down
document.addEventListener("DOMContentLoaded", function () {
    let dropdownBtn = document.getElementById("drop-text");
    let list = document.getElementById("list"); 
    let icon = document.getElementById("icon");
    let dropDownInput = document.getElementById("drop-down-text");
    let listItems = document.querySelectorAll(".drop-down-list-item");

    // Show dropdown list on click
    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent closing immediately

        // Toggle dropdown visibility
        list.classList.toggle("show");

        // Rotate arrow icon
        icon.style.transform = list.classList.contains("show") ? "rotate(-180deg)" : "rotate(0deg)";
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !list.contains(event.target)) {
            list.classList.remove("show");
            icon.style.transform = "rotate(0deg)";
        }
    });

    // Handle dropdown item selection
    listItems.forEach(item => {
        item.addEventListener("click", function () {
            dropDownInput.value = item.innerText; // Set input value
            list.classList.remove("show"); // Hide dropdown
            icon.style.transform = "rotate(0deg)"; // Reset icon rotation
        });
    });

    
});



//explore box appear on home page
document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.querySelector(".explore");
    const exploreBox = document.querySelector(".explore-box-wrapper");
    const closeIcon = document.querySelector(".explore-header .close-icon i");

    if(exploreBtn && exploreBox && closeIcon){
        // Toggle dropdown with smooth transition
    exploreBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        exploreBox.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!exploreBox.contains(event.target) && !exploreBtn.contains(event.target)) {
            exploreBox.classList.remove("active");
        }
    });

    // Close dropdown when clicking the "X" icon
    closeIcon.addEventListener("click", function () {
        exploreBox.classList.remove("active");
    });
    }
    /* ========== Dropdown Time Duration ========== */
    const dropdown = document.querySelector(".drop-down-time-duration");

    if (dropdown) {
        const icon = dropdown.querySelector("i");

        dropdown.addEventListener("click", function () {
            dropdown.classList.toggle("active");
            if (icon) {
                icon.classList.toggle("rotate");
            }
        });
    }
});


/*==================*/ 






/* document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".drop-down-time-duration");
    const icon = dropdown.querySelector(".drop-down-time-duration i");

    dropdown.addEventListener("click", function () {
        dropdown.classList.toggle("active");
        icon.classList.toggle("rotate");
    });
}); */
