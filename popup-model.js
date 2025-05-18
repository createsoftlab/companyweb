const openFormBtn = document.getElementById('openFormBtn');
  const closeFormBtn = document.getElementById('closeFormBtn');
  const popupForm = document.getElementById('popupForm');

  openFormBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popupForm.classList.add('active');
    document.body.classList.add('popup-open');

    // Auto scroll to popup
    setTimeout(() => {
      popupForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100); // Delay to allow popup to appear
  });

  closeFormBtn.addEventListener('click', function () {
    popupForm.classList.remove('active');
    document.body.classList.remove('popup-open');
  });

  window.addEventListener('click', function (e) {
    if (e.target === popupForm) {
      popupForm.classList.remove('active');
      document.body.classList.remove('popup-open');
    }
  });