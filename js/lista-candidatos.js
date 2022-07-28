// JavaScript Purro (Vanilla JavaScript)
/* const titulo = document.querySelector("h1");
titulo.style.color = "blue";
titulo.textContent = "Relacao de Candidatos"; */

// Usando JQuery
const titulo = $("h1");
// Animação através do JQuery
titulo.hide().fadeIn(1000);
// Alterando a cor do h1 através da LQuery
titulo.css("color", "blue");
// Alterando o texto através da JQuery
titulo.text("Relação de candidatos");

/* Script para o carregamento de candidatos */
const botao = $("#carregar");
const lista = $("#lista");

botao.on("click", function(){
    /* Técnica Ajax de comunicação */
    $.ajax({
    url: "http://localhost:3000/candidatos",
    dataType: "json",
    success: function(resposta) {
        // Garantindo que a lista sempre comece vazia ao clicar o botão
        lista.html("");
        /* Loop (laço de repetição) */
        $.each(resposta, function(indice, conteudo){
            console.log(indice);
            console.log(conteudo);

            lista.append(
            `<li class="list-group-item">
            ${conteudo.nome}
            </li>` 
            ).hide().slideDown();       
        });
    }
    });
}); 