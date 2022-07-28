const menu = document.querySelector(".menu");
const botaoMenu = document.querySelector(".icone");

botaoMenu.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.toggle("aberto");
});