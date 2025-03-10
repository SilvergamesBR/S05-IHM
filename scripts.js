window.addEventListener("load", function () {
    const themeModal = document.getElementById("themeModal");
    const btnMainTheme = document.getElementById("btnMainTheme");
    const btnAuxTheme = document.getElementById("btnAuxTheme");
    const closeModal = document.querySelector(".close-modal");
    const themeToggle = document.querySelector('.theme-toggle');
  
    // Apply the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'aux') {
      document.body.classList.add('aux-theme');
    } else {
      document.body.classList.remove('aux-theme');
    }
  
    // Show modal when theme toggle button is clicked
    themeToggle.addEventListener('click', function () {
      themeModal.style.display = "block";
    });
  
    // Set main theme: remove aux-theme class and save in localStorage
    btnMainTheme.addEventListener('click', function () {
      document.body.classList.remove("aux-theme");
      localStorage.setItem('theme', 'main');
      themeModal.style.display = "none";
    });
  
    // Set aux theme: add aux-theme class and save in localStorage
    btnAuxTheme.addEventListener('click', function () {
      document.body.classList.add("aux-theme");
      localStorage.setItem('theme', 'aux');
      themeModal.style.display = "none";
    });
  
    // Close modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      themeModal.style.display = "none";
    });
  
    // Optional: close modal when clicking outside the modal content
    window.addEventListener('click', function (event) {
      if (event.target === themeModal) {
        themeModal.style.display = "none";
      }
    });
  });
  