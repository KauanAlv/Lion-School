'use strict'

import {criarHome} from './pages/home.js'
import {criarTurma} from './pages/turma.js'
/* import {criarAluno} from './pages/alunos.js' */

const paginas = {
    home: {
        titulo: 'Lion School',
        classeMain: 'main-home',
        renderizar: criarHome
    },
    curso: {
        titulo: 'Alunos do Curso',
        classeMain: 'main-turma',
        renderizar: criarTurma
    }/*,
    aluno: {
        titulo: 'Dados do aluno',
        classeMain: 'main-aluno',
        renderizar: criarAluno
    } */
}

export async function renderizarPagina(nomePagina, id = null) {
    const main = document.getElementById('main')
    
    const paginaAtual = paginas[nomePagina]
    document.title = paginaAtual.titulo
    main.className = paginaAtual.classeMain

    const pagina = await paginaAtual.renderizar(id)

    main.replaceChildren(pagina)
}

renderizarPagina('home')