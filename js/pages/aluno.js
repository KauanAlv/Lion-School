'use strict'

import { getAluno } from '../router/aluno.js'

export async function criarAluno(id) {

    const aluno = await getAluno(id)

    const heroAluno = document.createElement('div')
    heroAluno.classList.add('hero-aluno')

    // Caixa do aluno
    const caixaAluno = document.createElement('div')
    caixaAluno.classList.add('caixa', 'aluno')

    const foto = document.createElement('img')
    foto.src = aluno.foto
    foto.alt = aluno.nome

    const nome = document.createElement('span')
    nome.textContent = aluno.nome

    caixaAluno.append(foto, nome)

    // Caixa do gráfico
    const caixaGrafico = document.createElement('div')
    caixaGrafico.classList.add('caixa', 'grafico')

    aluno.desempenho.forEach(function (item) {

        const columns = document.createElement('div')
        columns.classList.add('columns')

        const nota = document.createElement('span')
        nota.classList.add('nota')
        nota.textContent = item.valor

        const column = document.createElement('div')
        column.classList.add('column')

        const valor = document.createElement('div')
        valor.classList.add('valor')

        valor.style.height = `${item.valor}%`

        let classe

        if (item.valor > 50) {
            classe = 'aprovado'
        } else if (item.valor >= 30) {
            classe = 'recuperacao'
        } else {
            classe = 'reprovado'
        }

        nota.classList.add(classe)
        valor.classList.add(classe)

        column.append(valor)

        const sigla = document.createElement('span')
        sigla.classList.add('sigla')
        sigla.textContent = item.categoria

        columns.append(nota, column, sigla)

        caixaGrafico.append(columns)
    })

    heroAluno.append(caixaAluno, caixaGrafico)

    return heroAluno
}