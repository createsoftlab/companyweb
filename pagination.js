//pagination in popular companies-section in home page
document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 6; // You can change this as needed
    const items = document.querySelectorAll(".popular-company-list-cover");
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const paginationNumbersContainer = document.querySelector(".pagination-container-for-popular-company-list-cover .pagination-numbers");
    const btnFirst = document.querySelector(".pagination-container-for-popular-company-list-cover .first-page");
    const btnPrev = document.querySelector(".pagination-container-for-popular-company-list-cover .previous-page");
    const btnNext = document.querySelector(".pagination-container-for-popular-company-list-cover .next-page");
    const btnLast = document.querySelector(".pagination-container-for-popular-company-list-cover .last-page");

    let currentPage = 1;

    function showPage(page) {
        // Hide all items first
        items.forEach((item, index) => {
            item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? "flex" : "none";
        });

        // Update active pagination number
        document.querySelectorAll(".pagination-numbers span").forEach(span => {
            span.classList.remove("active");
        });

        const activeSpan = document.querySelector(`.pagination-numbers span[data-page="${page}"]`);
        if (activeSpan) activeSpan.classList.add("active");

        // Enable/Disable navigation buttons
        btnFirst.disabled = page === 1;
        btnPrev.disabled = page === 1;
        btnNext.disabled = page === totalPages;
        btnLast.disabled = page === totalPages;

        currentPage = page;
    }

    function generatePaginationNumbers() {
        paginationNumbersContainer.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            const span = document.createElement("span");
            span.textContent = i;
            span.setAttribute("data-page", i);
            if (i === currentPage) span.classList.add("active");
            span.addEventListener("click", () => showPage(i));
            paginationNumbersContainer.appendChild(span);
        }
    }

    // Add event listeners to navigation buttons
    btnFirst.addEventListener("click", () => showPage(1));
    btnPrev.addEventListener("click", () => {
        if (currentPage > 1) showPage(currentPage - 1);
    });
    btnNext.addEventListener("click", () => {
        if (currentPage < totalPages) showPage(currentPage + 1);
    });
    btnLast.addEventListener("click", () => showPage(totalPages));

    // Initialize
    generatePaginationNumbers();
    showPage(currentPage);
});

//pagination for explore 
document.addEventListener("DOMContentLoaded", () => {
    const categories = ["Real Estate", "Restaurants", "Automobiles", "Hospitals", "Electricals", "Technology", "Education", "Transportation", "Sports", "Pet Shop",
       " Real Estate", "Restaurants", "Automobiles", "Hospitals", "Electricals", "Technology", "Education", "Transportation", "Sports", "Pet Shop","Real Estate", "Restaurants", "Automobiles", "Hospitals", "Electricals", "Technology", "Education", "Transportation", "Sports", "Pet Shop",
       "Real Estate", "Restaurants", "Automobiles", "Hospitals", "Electricals", "Technology", "Education", "Transportation", "Sports", "Pet Shop"
    ];
    let exploreList = document.querySelector(".explore-list");
    let paginationNumbers = document.querySelector(".pagination-container-for-explore .pagination-numbers");
    let prevPageBtn = document.querySelector(".pagination-container-for-explore .previous-page");
    let nextPageBtn = document.querySelector(".pagination-container-for-explore .next-page");
    let firstPageBtn = document.querySelector(".pagination-container-for-explore .first-page");
    let lastPageBtn = document.querySelector(".pagination-container-for-explore .last-page");
    let exploreWrapper = document.querySelector(".explore-box-wrapper"); 

    const itemsPerPage = 16;
    let currentPage = 1;
    let totalPages = Math.ceil(categories.length / itemsPerPage);

    function renderList() {
        exploreList.innerHTML = "";
        let start = (currentPage - 1) * itemsPerPage;
        let end = start + itemsPerPage;
        let items = categories.slice(start, end);
        items.forEach(category => {
            let li = document.createElement("li");
            li.className = "explore-list-item";
            li.innerHTML = `<i class='fa-solid fa-chevron-right'></i><span>${category}</span>`;
            exploreList.appendChild(li);
        });
        exploreWrapper.style.display = "block";  
    }

    function renderPagination() {
        paginationNumbers.innerHTML = " ";
        for (let i = 1; i <= totalPages; i++) {
            let pageNumber = document.createElement("span");
            pageNumber.textContent = i;
            pageNumber.classList.add("page-number");
            if (i === currentPage) pageNumber.classList.add("active");
            pageNumber.addEventListener("click", () => {
                event.stopPropagation(); 
                currentPage = i;
                updatePagination();
            });
            paginationNumbers.appendChild(pageNumber);
        }
    }

    function updatePagination() {
        renderList();
        renderPagination();
        prevPageBtn.disabled = currentPage === 1;
        firstPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
        lastPageBtn.disabled = currentPage === totalPages;

        exploreWrapper.style.display = "block";
    }

    prevPageBtn.addEventListener("click", () => {
        
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });

    nextPageBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });

    firstPageBtn.addEventListener("click", () => {
        currentPage = 1;
        updatePagination();
    });

    lastPageBtn.addEventListener("click", () => {
        currentPage = totalPages;
        updatePagination();
    });
    

    updatePagination();
});


//pagination for jobs page
document.addEventListener("DOMContentLoaded", function () {
    const jobsPerPage = 6; // Number of jobs per page
    const jobCards = document.querySelectorAll(".job-card");
    const totalPages = Math.ceil(jobCards.length / jobsPerPage);
    const paginationContainer = document.querySelector(".pagination");
    const prevPage3 = document.getElementById("prevPage");
    const nextPage3 = document.getElementById("nextPage");
    let currentPage3 = 1;

    function showPage(page) {
        jobCards.forEach((card, index) => {
            card.style.display = (index >= (page - 1) * jobsPerPage && index < page * jobsPerPage) ? "block" : "none";
        });

        updatePagination();
    }

    function updatePagination() {
        paginationContainer.innerHTML = `
            <li class="page-item ${currentPage3 === 1 ? 'disabled' : ''}" id="prevPage">
                <a class="page-link" href="#" aria-label="Previous">&laquo;</a>
            </li>
        `;

        for (let i = 1; i <= totalPages; i++) {
            paginationContainer.innerHTML += `
                <li class="page-item ${i === currentPage3 ? 'active' : ''}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>
            `;
        }

        paginationContainer.innerHTML += `
            <li class="page-item ${currentPage3 === totalPages ? 'disabled' : ''}" id="nextPage">
                <a class="page-link" href="#" aria-label="Next">&raquo;</a>
            </li>
        `;

        addEventListeners();
    }

    function addEventListeners() {
        document.querySelectorAll(".pagination .page-link").forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const page = parseInt(this.dataset.page);
                if (!isNaN(page)) {
                    currentPage3 = page;
                    showPage(currentPage3);
                }
            });
        });

        document.getElementById("prevPage3").addEventListener("click", function (e) {
            e.preventDefault();
            if (currentPage3 > 1) {
                currentPage3--;
                showPage(currentPage3);
            }
        });

        document.getElementById("nextPage3").addEventListener("click", function (e) {
            e.preventDefault();
            if (currentPage3 < totalPages) {
                currentPage3++;
                showPage(currentPage3);
            }
        });
    }

    showPage(1);
});

//pagination for job-details page
document.addEventListener("DOMContentLoaded", function () {
    const jobsPerPage = 10;
    const jobCards = document.querySelectorAll(".job-card-info");
    const totalPages = Math.ceil(jobCards.length / jobsPerPage);
    const paginationNumbers = document.querySelector(".pagination-numbers");
    const firstPageBtn = document.querySelector(".first-page");
    const prevPageBtn = document.querySelector(".previous-page");
    const nextPageBtn = document.querySelector(".next-page");
    const lastPageBtn = document.querySelector(".last-page");
    let currentPage = 1;

    function showPage(page) {
        jobCards.forEach((card, index) => {
            card.style.display = (index >= (page - 1) * jobsPerPage && index < page * jobsPerPage) ? "flex" : "none";
        });

        updatePaginationNumbers();
        updateButtonStates();
    }

    function updatePaginationNumbers() {
        paginationNumbers.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const span = document.createElement("span");
            span.textContent = i;
            span.dataset.page = i;
            if (i === currentPage) {
                span.classList.add("active");
            }
            span.addEventListener("click", () => {
                currentPage = i;
                showPage(currentPage);
            });
            paginationNumbers.appendChild(span);
        }
    }

    function updateButtonStates() {
        firstPageBtn.disabled = currentPage === 1;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
        lastPageBtn.disabled = currentPage === totalPages;
    }

    // Event Listeners for nav buttons
    firstPageBtn.addEventListener("click", () => {
        currentPage = 1;
        showPage(currentPage);
    });

    prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextPageBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    lastPageBtn.addEventListener("click", () => {
        currentPage = totalPages;
        showPage(currentPage);
    });

    showPage(currentPage);
});



//pagination in events section in company-details page
document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 4; // You can change this as needed
    const items = document.querySelectorAll(".events-gallery-cover");
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const paginationNumbersContainer = document.querySelector(".pagination-container-for-events .pagination-numbers");
    const btnFirst = document.querySelector(".pagination-container-for-events .first-page");
    const btnPrev = document.querySelector(".pagination-container-for-events .previous-page");
    const btnNext = document.querySelector(".pagination-container-for-events .next-page");
    const btnLast = document.querySelector(".pagination-container-for-events .last-page");

    let currentPage = 1;

    function showPage(page) {
        // Hide all items first
        items.forEach((item, index) => {
            item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? "flex" : "none";
        });

        // Update active pagination number
        document.querySelectorAll(".pagination-numbers span").forEach(span => {
            span.classList.remove("active");
        });

        const activeSpan = document.querySelector(`.pagination-numbers span[data-page="${page}"]`);
        if (activeSpan) activeSpan.classList.add("active");

        // Enable/Disable navigation buttons
        btnFirst.disabled = page === 1;
        btnPrev.disabled = page === 1;
        btnNext.disabled = page === totalPages;
        btnLast.disabled = page === totalPages;

        currentPage = page;
    }

    function generatePaginationNumbers() {
        paginationNumbersContainer.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            const span = document.createElement("span");
            span.textContent = i;
            span.setAttribute("data-page", i);
            if (i === currentPage) span.classList.add("active");
            span.addEventListener("click", () => showPage(i));
            paginationNumbersContainer.appendChild(span);
        }
    }

    // Add event listeners to navigation buttons
    btnFirst.addEventListener("click", () => showPage(1));
    btnPrev.addEventListener("click", () => {
        if (currentPage > 1) showPage(currentPage - 1);
    });
    btnNext.addEventListener("click", () => {
        if (currentPage < totalPages) showPage(currentPage + 1);
    });
    btnLast.addEventListener("click", () => showPage(totalPages));

    // Initialize
    generatePaginationNumbers();
    showPage(currentPage);
});