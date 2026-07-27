'use strict'

const URL = 'https://lion-school-phbo.onrender.com/alunos'

export async function getAlunos() {
    const response = await fetch(URL)
    if (!response.ok) throw new Error('Erro ao listar alunos.')
    return response.json()
}

export async function getAluno(id) {
    const response = await fetch(`${URL}/${id}`)
    if (!response.ok) throw new Error(`Erro ao buscar o aluno de id ${id}.`)
    return response.json()
}

export async function getAlunosByIdCurso(idCurso) {
    const response = await fetch(`${URL}?curso_id=${idCurso}`)
    if (!response.ok) throw new Error(`Erro ao buscar o aluno do curso de id ${idCurso}`)
    return response.json()
}

export async function getAlunosByStatus(status) {
    const response = await fetch(`${URL}?status=${status}`)
    if (!response.ok) throw new Error(`Erro ao listar alunos de status ${status}`)
    return response.json()
}