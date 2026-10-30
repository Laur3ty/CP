// Esconde o menu na lateral em telas menores
const btnMenu = document.getElementById("btn-open-menu");
const menu = document.querySelector(".menu");

    if (btnMenu && menu) {
        btnMenu.addEventListener("click", () => menu.classList.toggle("ativo-menu"));
        menu.querySelectorAll(".btn").forEach(link => {
            link.addEventListener("click", () => menu.classList.remove("ativo-menu"));
        });
    }