'use strict'

import { renderizarPagina } from "../main.js"
import { getCursos } from "../router/curso.js"
import { criarTurma } from "./turma.js"

export async function criarHome() {
    const hero = document.createElement('div')
    hero.classList.add('hero')

    const heroLeft = document.createElement('div')
    heroLeft.classList.add('hero-left')

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

    let cursos = await getCursos()
    cursos.forEach (function(curso) {
        const button = document.createElement('button')
        button.classList.add('botoes')
        
        button.onclick = () => renderizarPagina('curso', curso.id)

        const imgCurso = document.createElement('img')
        imgCurso.src = curso.icon
        imgCurso.classList.add('icons-cursos')
        imgCurso.alt = `Ícone do curso de ${curso.nome}`

        const spanCurso = document.createElement('span')
        spanCurso.textContent = curso.sigla

        button.append(imgCurso, spanCurso)
        heroRight.appendChild(button)
    })

    hero.append(heroLeft, heroCenter, heroRight)
    return hero
}