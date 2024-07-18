'use strict'

// MENU RESPONSIVE. Se activa con pantallas menores a 1000px
const browserBtn = document.querySelector('.header__browser-btn')
const browserNav = document.querySelector('.header__browser-nav')
// Al hacer click en el browserBtn, se activa el browserNav
browserBtn.addEventListener('click', () =>
    browserNav.classList.toggle('is-active'))

// FRASE INICIO. 
// El único problema que he encontrado con ella, es que no consigo hacer que no separe las palabras al hacer el navegador más pequeño
const frase = document.querySelector('.header__text-p')
const cadenaFrase = frase.textContent
const arraypalabra = cadenaFrase.split("")
frase.textContent = ""
for(let i = 0; i < arraypalabra.length; i++){
    console.log(arraypalabra[i])
    frase.innerHTML += "<span>" + arraypalabra[i] + "</span>"
}
let palabra = 0
let timer = setInterval(escribe, 100)
function escribe(){
    const span = frase.querySelectorAll('span')[palabra]
    span.classList.add('fade')
    palabra++
    if(palabra == arraypalabra.length){
        completado()
        return
    }
}
function completado(){
    clearInterval(timer)
}
// ANIMACION SCROLL
let mainIntro = document.querySelector(".main__intro")
let mainTerritories = document.querySelector(".main__territories")
let mainReligions = document.querySelector(".main__religions")
let mainCharacters = document.querySelector(".main__characters")
// Al llegar el scroll a un número en concreto de la consola, aparece uno de los elementos seleccionados
window.addEventListener("scroll", () => {
    let value = window.scrollY;
    console.log(value)
    
    if(value > 3300){
        mainCharacters.classList.add("active")
    }
    else if(value > 2600){
        mainReligions.classList.add("active")
    }
    else if(value > 1400){
        mainTerritories.classList.add("active")
    }
    else if(value > 300){
       mainIntro.classList.add("active")
    } 
})

// SLIDER. En vez de usar el slider con imagenes, lo he usado con texto. He omitido las flechas laterales y ese se mueve al pulsar en el botones inferiores
let posicion = 0
const introBtn = document.querySelectorAll('.main__intro-btn')
let sliderIntro = document.querySelector('.main__intro-info')
// El slider está situado en un 300% por lo que al hacer click en uno de los botones, este se mueve un 100%, dando paso al siguiente elemento seleccionado
const desplazarSlider = () => {
    sliderIntro.style.transform = `translateX(-${posicion * (100 / 3)}%)`
}
introBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        posicion = i
        console.log(posicion)
        desplazarSlider()
    })
})

// TABS
const terBtn = document.querySelectorAll('.main__territories-btn')
const terOpt = document.querySelectorAll('.main__territories-option')
// Al pulsar en uno de los terBtn, se activa el terOpt al que está anclado y se cierra el que estaba abierto hasta ese momento, activando o desactivando el is-active en cada uno de ellos
terBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
            terOpt.forEach(option => option.classList.remove('is-active'))
            terBtn.forEach(button => button.classList.remove('is-active'))
            terOpt[index].classList.add('is-active')
            terBtn[index].classList.add('is-active')
        })
    })

// LIGHTBOX
document.addEventListener('DOMContentLoaded', function() {
    let toggleButtons = document.querySelectorAll('.main__characters-btn');
    let closeButtons = document.querySelectorAll('.main__characters-lightbox-btn-close');
    // Al estar unidos por data-target, al hacer click sobre un boton, se abre el elemento seleccionado y luego los botones de cierre funcionan igual para todos 
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            let target = button.getAttribute('data-target')
            let lightbox = document.querySelector('.' + target) 
            lightbox.style.display = 'flex' 
            document.body.classList.add('lightbox-active')
        })
    })
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            let lightbox = button.closest('.main__characters-lightbox')
            lightbox.style.display = 'none'
            document.body.classList.remove('lightbox-active')
        })
    }) 
    document.addEventListener('click', event => {
        let lightboxes = document.querySelectorAll('.main__characters-lightbox')
        lightboxes.forEach(lightbox => {
            if (!event.target.closest('.textPanel') && !event.target.closest('.main__characters-btn')) {
                lightbox.style.display = 'none'
                document.body.classList.remove('lightbox-active')
            }
        })
    })
})