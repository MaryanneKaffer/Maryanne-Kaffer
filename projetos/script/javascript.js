import { projetos } from "./projectsData.js"

const backButton = document.getElementById('back');
const forwardButton = document.getElementById('forward');
const container = document.getElementById('slideContainer');
let currentSlide = 0;

//Função do slide
function renderSlide(index) {
    const projeto = projetos[index];

    const newSlide = document.createElement('div');
    newSlide.classList.add('slideCard', 'fade-out'); // Animações com o css
    newSlide.innerHTML = `
        <img class="slideImage" src="${projeto.image}" alt="${projeto.name}">
        <div class="slideFooter"> 
            <h2 class="slideTitle">${projeto.name}</h2>
            <p class="slideDesc">${projeto.description}</p>
            <a class="slideBtn" href="${projeto.link}" target="_blank">Ver projeto</a>
            <a class="slideBtn" href="${projeto.github}" target="_blank">Github</a>
        </div>
    `;

    container.innerHTML = '';
    container.appendChild(newSlide);

    requestAnimationFrame(() => {
        newSlide.classList.remove('fade-out');
        newSlide.classList.add('fade-in');
    });
}

renderSlide(currentSlide); // Iniciando o slide

// Funcionamento dos botôes
forwardButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % projetos.length;
    renderSlide(currentSlide);
});

backButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + projetos.length) % projetos.length;
    renderSlide(currentSlide);
});
