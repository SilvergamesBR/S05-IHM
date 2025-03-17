// Theme modal functionality (using window.load to ensure resources are ready)
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

// All dynamic functionality runs when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Arrow button events for the carousel
  const slider = document.querySelector('.news-slider');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const scrollAmount = 276; // Use the card's width as the scroll amount
  
  if (leftArrow && rightArrow && slider) {
    leftArrow.addEventListener('click', function () {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  
    rightArrow.addEventListener('click', function () {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
  
  // Dynamic addition of event cards to the carousel
  const eventos = [
    {
      id: 1,
      title: 'Semana do Software 2025',
      date: '12/05',
      time: '10:00',
      location: 'Salão de Eventos',
      type: 'tech',
      description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 2,
      title: 'Workshop de IoT',
      date: '12/01',
      time: '08:00',
      location: 'Laboratório CS&I',
      type: 'tech',
      description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 3,
      title: 'Festa dos Alunos 2025',
      date: '18/05',
      time: '19:00',
      location: 'Área Esportiva do Inatel',
      type: 'cultural',
      description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 4,
      title: 'Feira de Oportunidades',
      date: '04/05',
      time: '10:00',
      location: 'Salão de Eventos',
      type: 'academic',
      description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
  ];
  
  const sliderContainer = document.querySelector('.news-slider');
  sliderContainer.innerHTML = '';
  
  eventos.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('news-card');
  
    eventCard.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="event-info">
        <h3>${event.title}</h3>
        <p>${event.date} | ${event.time}</p>
        <p>${event.location}</p>
        <p>${event.description}</p>
      </div>
    `;
  
    sliderContainer.appendChild(eventCard);
  });
});
