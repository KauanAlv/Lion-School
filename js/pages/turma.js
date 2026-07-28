'use strict'

export async function criarTurma(idCurso) {

    const main = document.createElement('div')
    main.classList.add('turmas')

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

    opcaoStatus.forEach(item => {

        const option = document.createElement('option')
        option.value = item.valor
        option.textContent = item.texto

        select.appendChild(option)

    })

    statusLeft.appendChild(select)

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

    statusRight.append(
        legendaTitulo,
        legendaCursando,
        legendaFinalizado
    )

    status.append(statusLeft,statusRight)

    headerStatus.appendChild(status)

    main.appendChild(headerStatus)

    return main
}