const btnOpen = document.getElementById("btn-open")
const btnClose = document.getElementById("btn-close")
const navbar = document.getElementById("navbar")
function openNavbar(){
    navbar.classList.add("open")
    navbar.classList.remove("hidden-navbar")
}
function closeNavbar(){
    navbar.classList.remove("open")
    navbar.classList.add("hidden-navbar")
}
btnOpen.addEventListener("click", openNavbar)
btnClose.addEventListener("click", closeNavbar)

// Formulário
function cadastrar_alunos(){
    const campos = document.querySelectorAll("input")
    if(campos.value.lenght < 3){
        console.log("error")
    }
}