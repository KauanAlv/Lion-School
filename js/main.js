'use strict'

import { criarHome } from './pages/home.js'
import { criarTurma } from './pages/turma.js'
/* import {criarAluno} from './pages/alunos.js' */

const paginas = {
    home: {
        titulo: 'Lion School',
        classeMain: 'main-home',
        renderizar: criarHome,
        textoHeader: 'Sair',
        acaoHeader: function () {
            location.reload()
        }
    },
    curso: {
        titulo: 'Alunos do Curso',
        classeMain: 'main-turma',
        renderizar: criarTurma,
        textoHeader: 'Voltar',
        acaoHeader: function () {
            renderizarPagina('home')
        }
    }/*,
    aluno: {
        titulo: 'Dados do aluno',
        classeMain: 'main-aluno',
        renderizar: criarAluno,
        textoHeader: 'Voltar',
        acaoHeader: function () {
            renderizarPagina('curso')
        }  
    } */
}

const botaoHeader = document.getElementById('botao-header')
const textoHeader = document.getElementById('texto-header')

export async function renderizarPagina(nomePagina, id = null) {
    const main = document.getElementById('main')

    const paginaAtual = paginas[nomePagina]
    document.title = paginaAtual.titulo
    
    textoHeader.textContent = paginaAtual.textoHeader
    botaoHeader.onclick = paginaAtual.acaoHeader
    
    const pagina = await paginaAtual.renderizar(id)
    
    main.className = paginaAtual.classeMain
    main.replaceChildren(pagina)
}

renderizarPagina('home')