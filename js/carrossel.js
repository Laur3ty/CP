// Criação do carrossel na página de integrantes
const membros = document.getElementById("membros");
const membro = document.querySelectorAll("#membros .integrante");

const proximo = document.getElementById("proximo");
const anterior = document.getElementById("anterior");

let posicao = 0;

proximo.addEventListener("click", function () {

    if (window.innerWidth <= 991) {

        if (posicao < membro.length - 1) {
            posicao++;
        }

        membros.style.transform = `translateX(${-posicao * membros.clientWidth}px)`;

    } else {

        if (posicao < 1) {
            posicao++;
        }

        membros.style.transform = `translateX(${-posicao * 68}%)`;
    }
});

anterior.addEventListener("click", function () {

    if (posicao > 0) {
        posicao--;
    }

    if (window.innerWidth <= 991) {

        membros.style.transform = `translateX(${-posicao * membros.clientWidth}px)`;

    } else {

        membros.style.transform = `translateX(${-posicao * 68}%)`;
    }
});