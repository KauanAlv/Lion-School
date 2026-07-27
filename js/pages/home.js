'use strict'

import { renderizarPagina } from "../main.js"

export function criarHome() {
    const hero = document.createElement('div')
    hero.classList.add('hero')

    const heroLeft = document.createElement('div')
    heroLeft.classList.add('hero-left')

    /* const spanHeroLeft = document.createElement('span')
    spanHeroLeft.textContent = 'curso' */

    const textHeroLeft = document.createElement('p')
    textHeroLeft.innerHTML = "Escolha um <span>curso</span> para gerenciar"

    const imgHeroLeft = document.createElement('img')
    imgHeroLeft.src = '../../img/dispositivos.png'
    imgHeroLeft.alt = 'Dispostivos (celular, tablet e computador)'

    heroLeft.append(textHeroLeft, imgHeroLeft)

    const heroCenter = document.createElement('div')
    heroCenter.classList.add('hero-center')

    const imgHeroCenter = document.createElement('img')
    imgHeroCenter.src = '../../img/estudante.png'
    imgHeroCenter.alt = 'Estudante'

    heroCenter.append(imgHeroCenter)

    const heroRight = document.createElement('div')
    heroRight.classList.add('hero-right')

    const buttonDS = document.createElement('button')
    buttonDS.classList.add('btn-ds')

    const imgButtonDS = document.createElement('img')
    imgButtonDS.src = '../../img/ds.png'
    imgButtonDS.alt = 'Logo DS'

    const spanButtonDS = document.createElement('span')
    spanButtonDS.textContent = 'DS'

    buttonDS.append(imgButtonDS, spanButtonDS)

    const buttonRedes = document.createElement('button')
    buttonRedes.classList.add('btn-redes')

    const imgButtonRedes = document.createElement('img')
    imgButtonRedes.src = '../../img/redes.png'
    imgButtonRedes.alt = 'Logo Redes'

    const spanButtonRedes = document.createElement('span')
    spanButtonRedes.textContent = 'REDES'

    buttonRedes.append(imgButtonRedes, spanButtonRedes)

    heroRight.append(buttonDS, buttonRedes)

    hero.append(heroLeft, heroCenter, heroRight)
    return hero
}