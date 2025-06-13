document.getElementById("toggle-theme").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });


const tecnologias = ["Java", "React", "JavaScript", "TypeScript", "Power Platform"];
  let index = 0;

  setInterval(() => {
    const span = document.querySelector(".cabecalho-sub-titulo");
    span.textContent = tecnologias[index];
    index = (index + 1) % tecnologias.length; 
  }, 1000); 

  const botaoMenu = document.getElementById('botao-menu');
  const menuMobile = document.getElementById('menu-mobile');

  botaoMenu.addEventListener('click', () => {
    menuMobile.style.display = (menuMobile.style.display === 'flex') ? 'none' : 'flex';
  });

  const links = document.querySelectorAll('.menu-mobile a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menuMobile.style.display = 'none';
    });
  });

    const items = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  items.forEach(item => observer.observe(item));