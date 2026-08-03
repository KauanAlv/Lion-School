# Lion School

## Sobre o projeto

Lion School é uma aplicação web desenvolvida para consultar cursos, listar alunos e visualizar o desempenho individual de cada estudante por disciplina.

Os dados são consumidos por meio de uma API REST, permitindo que as informações sejam carregadas dinamicamente.

## Funcionalidades

- Listagem de cursos disponíveis.
- Exibição dos alunos de cada curso.
- Filtro de alunos por status.
- Visualização dos dados individuais de cada aluno.
- Exibição do desempenho por disciplina.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API

## Estrutura do projeto

```
Lion School/
│
├── css/
│   ├── reset.css
│   └── style.css
│
├── img/
│
├── js/
│   ├── pages/
│   │   ├── aluno.js
│   │   ├── home.js
│   │   └── turma.js
│   │
│   ├── router/
│   │   ├── aluno.js
│   │   └── curso.js
│   │
│   └── main.js
│
├── index.html
└── README.md
```

## API utilizada

A aplicação consome a seguinte API:

### Cursos

```
GET /cursos
GET /cursos/:id
```

### Alunos

```
GET /alunos
GET /alunos/:id
GET /alunos?curso_id=:id
GET /alunos?status=:status
```

## Como executar

1. Clone o repositório.

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto.

```bash
cd Lion-School
```

3. Execute utilizando uma extensão como Live Server ou outro servidor local.

## Organização

- **pages/**: construção das telas da aplicação.
- **router/**: comunicação com a API.
- **main.js**: controle de navegação entre as páginas.
- **css/**: estilização da interface.

## Objetivo

O projeto foi desenvolvido para praticar conceitos de:

- Manipulação do DOM.
- Consumo de APIs REST.
- JavaScript modular.
- Navegação entre páginas sem recarregamento completo.
- Organização de código em módulos.
