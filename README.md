# Recomende IFRO

Plataforma web para avaliação e recomendação de diferentes tipos de mídia, desenvolvida como projeto acadêmico do IFRO.

O **Recomende IFRO** permite que usuários visualizem avaliações de obras e publiquem suas próprias opiniões, organizadas por diferentes categorias de mídia.

## Sobre o projeto

A aplicação foi desenvolvida com foco em uma experiência simples para descobrir e compartilhar opiniões sobre obras de diferentes formatos.

Atualmente, a plataforma trabalha com as seguintes categorias:

* Filmes
* Jogos
* Séries
* Animações
* Livros
* Mangás / HQs

Cada avaliação pode apresentar:

* Título da obra
* Gênero/categoria
* Imagem
* Sinopse
* Resenha
* Indicação ou recomendação

A aplicação frontend se comunica com uma API externa para consultar e cadastrar avaliações.

## Tecnologias

### Frontend

* [Next.js](https://nextjs.org/)
* React
* TypeScript
* Tailwind CSS
* ESLint

### Integração

* API REST
* Variável de ambiente para configuração da URL da API
* Cookies/sessão através de `credentials: include`

## Estrutura do projeto

```text
recomende-ifro/
├── app/
│   ├── api/
│   │   └── resolve-imagem/
│   │       └── route.ts
│   ├── animacoes/
│   │   └── page.tsx
│   ├── filmes/
│   │   └── page.tsx
│   ├── jogos/
│   │   └── page.tsx
│   ├── livros/
│   │   └── page.tsx
│   ├── manga-hq/
│   │   └── page.tsx
│   ├── series/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── BarraLateral.tsx
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── ListaAvaliacoes.tsx
│   ├── ModalPost.tsx
│   ├── NovoPost.tsx
│   ├── cadastro.tsx
│   └── login.tsx
│
├── src/
│   ├── hooks/
│   │   └── useAvaliacoes.ts
│   └── lib/
│       └── api.ts
│
├── public/
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

## Funcionamento

### Visualização de avaliações

As avaliações são obtidas através da API e exibidas em cards.

O hook `useAvaliacoes` é responsável pelo carregamento dos dados e permite filtrar as avaliações de acordo com o gênero selecionado.

```text
API
 │
 ▼
buscarAvaliacoes()
 │
 ▼
useAvaliacoes()
 │
 ▼
ListaAvaliacoes
 │
 ▼
Card
```

### Criação de uma avaliação

O usuário pode abrir o formulário de criação e informar os dados da obra.

O fluxo de publicação é:

```text
Preencher dados
      │
      ▼
Informar URL da imagem
      │
      ▼
Buscar para validar imagem
      │
      ▼
Pré-visualização
      │
      ▼
Publicar avaliação
      │
      ▼
API /avaliacoes
```

A imagem é resolvida através da rota interna:

```text
POST /api/resolve-imagem
```

## API

A URL da API é configurada através da variável de ambiente:

```env
NEXT_PUBLIC_API_URL=http://localhost:5173
```

O frontend utiliza principalmente o endpoint:

```http
GET /avaliacoes
```

para buscar as avaliações.

Para criação:

```http
POST /avaliacoes
```

O corpo enviado possui a seguinte estrutura:

```json
{
  "titulo": "Nome da obra",
  "genero": "filme",
  "imagemUrl": "https://exemplo.com/imagem.jpg",
  "sinopse": "Sinopse da obra.",
  "resenha": "Opinião sobre a obra.",
  "recomendacao": true
}
```

As requisições que dependem de sessão utilizam cookies através de:

```typescript
credentials: "include"
```

## Requisitos

Antes de executar o projeto, tenha instalado:

* Node.js
* npm

Também é necessário possuir uma API compatível com os endpoints utilizados pelo frontend.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/julia-alves-s/recomende-ifro.git
```

Entre na pasta:

```bash
cd recomende-ifro
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5173
```

Substitua a URL pela localização da API utilizada no ambiente de desenvolvimento.

## Executando em desenvolvimento

Inicie o servidor:

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para iniciar a aplicação:

```bash
npm run start
```

## Lint

Para verificar problemas de lint:

```bash
npm run lint
```

## Categorias

A aplicação possui páginas específicas para:

| Categoria  | Rota         |
| ---------- | ------------ |
| Início     | `/`          |
| Filmes     | `/filmes`    |
| Jogos      | `/jogos`     |
| Séries     | `/series`    |
| Animações  | `/animacoes` |
| Livros     | `/livros`    |
| Mangá / HQ | `/manga-hq`  |

## Componentes principais

### `ListaAvaliacoes`

Responsável por carregar e renderizar a lista de avaliações, apresentando estados de carregamento, erro e lista vazia.

### `Card`

Representa individualmente uma avaliação publicada.

### `NovoPost`

Formulário utilizado para criação de novas avaliações.

### `ModalPost`

Responsável pela interface de criação de uma nova publicação através de modal.

### `BarraLateral`

Componente de navegação entre as diferentes categorias da plataforma.

### `useAvaliacoes`

Hook responsável pela comunicação com a camada de API e pelo gerenciamento do estado das avaliações.

## Objetivo acadêmico

O projeto faz parte das atividades acadêmicas do **Instituto Federal de Rondônia (IFRO)** e tem como objetivo aplicar conceitos de desenvolvimento web, componentização, consumo de APIs e organização de aplicações frontend.

## Status

> Projeto em desenvolvimento.

Novas funcionalidades e melhorias podem ser adicionadas conforme a evolução do projeto.

## Autoria

Projeto acadêmico desenvolvido por **Evelyn do Vale**, **Julia Alves**, **Luiz Guilhermy** e **Pedro Noemerg**.

## Licença

Este projeto está disponível para fins acadêmicos e educacionais.
