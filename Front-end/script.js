console.log("JS carregado");

// ==========================
// MOSTRAR SEÇÕES (menu)
// ==========================
function mostrar(secaoAtiva) {

    const secoes = ["sobre", "servicos", "eventos"];

    secoes.forEach(secao => {
        const elemento = document.getElementById(secao);

        if (elemento) {
            elemento.style.display = "none";
        }
    });

    const ativa = document.getElementById(secaoAtiva);

    if (ativa) {
        ativa.style.display = "block";
    }
}


// ==========================
// SERVIÇOS (abre/fecha)
// ==========================
function toggleServico(servicoClicado) {

    const descricao = servicoClicado.querySelector(".descricao");

    const estaAberto = window.getComputedStyle(descricao).display === "block";

    // fecha todos
    document.querySelectorAll(".descricao").forEach(item => {
        item.style.display = "none";
    });

    // abre só se estava fechado
    if (!estaAberto) {
        descricao.style.display = "block";
    }
}


// ==========================
// EVENTOS (abre/fecha)
// ==========================
function toggleEvento(eventoClicado) {

    const galeria = eventoClicado.querySelector(".galeria-evento");

    const estaAberto = window.getComputedStyle(galeria).display === "block";

    // fecha todos
    document.querySelectorAll(".galeria-evento").forEach(item => {
        item.style.display = "none";
    });

    // abre só se estava fechado
    if (!estaAberto) {
        galeria.style.display = "block";
    }
}