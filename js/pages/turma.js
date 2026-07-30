'use strict'

import { getAlunosByIdCurso } from "../router/aluno.js"

export async function criarTurma(curso) {
    const main = document.createElement('div')
    main.classList.add('main-turma')

    const headerStatus = document.createElement('div')
    headerStatus.classList.add('header-status')

    const status = document.createElement('div')
    status.classList.add('status')

    const statusLeft = document.createElement('div')
    statusLeft.classList.add('status-left')

    const select = document.createElement('select')
    select.name = 'status'
    select.id = 'status'

    const opcaoStatus = [
        {
            valor: 'todos',
            texto: 'Status'
        },
        {
            valor: 'cursando',
            texto: 'Cursando'
        },
        {
            valor: 'finalizado',
            texto: 'Finalizado'
        }
    ]

    opcaoStatus.forEach(function (item) {
        const option = document.createElement('option')
        option.value = item.valor
        option.textContent = item.texto
        select.append(option)
    })

    statusLeft.append(select)

    const statusRight = document.createElement('div')
    statusRight.classList.add('status-right')

    const legendaTitulo = document.createElement('span')
    legendaTitulo.textContent = 'LEGENDA'

    const legendaCursando = document.createElement('div')
    legendaCursando.classList.add('legenda-item')

    const azul = document.createElement('div')
    azul.classList.add('azul')

    const textoCursando = document.createElement('span')
    textoCursando.textContent = 'Cursando'

    legendaCursando.append(azul, textoCursando)

    const legendaFinalizado = document.createElement('div')
    legendaFinalizado.classList.add('legenda-item')

    const amarelo = document.createElement('div')
    amarelo.classList.add('amarelo')

    const textoFinalizado = document.createElement('span')
    textoFinalizado.textContent = 'Finalizado'

    legendaFinalizado.append(amarelo, textoFinalizado)

    statusRight.append(legendaTitulo, legendaCursando, legendaFinalizado)

    status.append(statusLeft, statusRight)
    headerStatus.append(status)

    const alunos = await getAlunosByIdCurso(curso.id)

    const tituloAlunos = document.createElement('div')
    tituloAlunos.classList.add('titulo-alunos')

    const titulo = document.createElement('h1')
    titulo.textContent = curso.nome

    tituloAlunos.append(titulo)

    const containerCards = document.createElement('div')
    containerCards.classList.add('cards-alunos')

    function criarCards(lista) {
        containerCards.replaceChildren()

        lista.forEach(function (aluno) {

            const card = document.createElement('div')
            card.classList.add('card-aluno')

            if (aluno.status == 'cursando') {
                card.classList.add('cursando')
            } else {
                card.classList.add('finalizado')
            }

            const imagem = document.createElement('img')
            imagem.src = aluno.foto
            imagem.alt = aluno.nome

            const nome = document.createElement('h2')
            nome.textContent = aluno.nome

            const statusAluno = document.createElement('span')
            statusAluno.textContent = aluno.status

            card.append(imagem, nome, statusAluno)

            containerCards.append(card)
        })
    }

    criarCards(alunos)

    select.onchange = function () {
        if (select.value == 'todos') {
            criarCards(alunos)
        }

        if (select.value == 'cursando') {
            criarCards(
                alunos.filter(function (aluno) {
                    return aluno.status == 'cursando'
                })
            )
        }

        if (select.value == 'finalizado') {
            criarCards(
                alunos.filter(function (aluno) {
                    return aluno.status == 'finalizado'
                })
            )
        }
    }

    main.append(headerStatus, tituloAlunos, containerCards)

    return main
}