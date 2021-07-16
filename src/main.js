// DOM - Documento Object Model
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

// fazer o toggle para abrir o menu
for(const element of toggle){
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

// quando clicar em um item do menu, esconder ele
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

//adicionar sombra no header quando scroll acontecer
const header = document.querySelector('#header')
const navHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    //scroll é maior que a altura do header
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})