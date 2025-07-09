import { projetos } from "./projectsData.js"
console.log("JS carregado")
const backButton = document.getElementById('back');
const forwardButton = document.getElementById('forward');
let currentSlide = 0;

function renderSlide(index) {
    const projeto = projetos[index];
    document.getElementById('slideContainer').innerHTML = `
        <div class="slideCard">
            <img class="slideImage" src="${projeto.image}" alt="${projeto.name}">
            <div class="slideFooter">
            <h2 class="slideTitle">${projeto.name}</h2>
            <p class="slideDesc">${projeto.description}</p>
            <a class="slideBtn" href="${projeto.link}" target="_blank">Ver projeto</a>
            </div>
        </div>
    `;
}

// Inicializa com o primeiro slide
renderSlide(currentSlide);

forwardButton.addEventListener('click', () => {
    currentSlide === projetos.length ? currentSlide = 0 : currentSlide++
    renderSlide(currentSlide);
})

backButton.addEventListener('click', () => {
    currentSlide === 0 ? currentSlide = 12 : currentSlide--
    renderSlide(currentSlide);
})