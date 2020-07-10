<h2 align="center">
  Projeto GITHUB_EXPLORER
</h2>

## Descrição

GITHUB_EXPLORER é um projeto de estudo para testar a API do Github.

O objetivo é receber o `author/repository` e verificar (via API) se existe o autor e o repositório e adicionar no localstorage do browser, montando uma lista de repositórios.

Clique no `author/repository` para abrir uma nova página contendo mais informações do repositório. Para apresentar as informações, é realizado uma consulta via API.

A finalidade é estudar o comportamento de API externo, neste caso o API da GitHub.

<br>

API GitHub: `api.github.com`

API para coletar informações do Author/Repository: `api.github.com/repos/author/repository`

API para coletar informações do Author/Repository/Issues: `api.github.com/issuesauthor/repository/issues`

<br>

## Tecnologias utilizadas:
<br>

`React` `TypeScript` `Axios` `ESLint` `Prettier`

<br>

## Imagens do projeto
Tela Principal
<h1 align="center">
    <img alt="github_explorer" title="#GitHubExplorer" src="https://github.com/carlosjunior1983/reactjs-github-explorer/blob/master/img_readme/principal.png"  /><br>
</h1>

<br>
Tela do repositório selecionado.
<h1 align="center">
    <img alt="github_explorer" title="#GitHubExplorer" src="https://github.com/carlosjunior1983/reactjs-github-explorer/blob/master/img_readme/page_repository.png"  /><br>
</h1>
<br>
<br>


## Instruções para teste

  - Baixar ou clonar o projeto.
  - Dentro da pasta do projeto, execute o comando `yarn` para instalar as dependências.
  - Logo após, execute o comando `yarn start` para executar o projeto.
  - Na página aberta, o autor/repositório e clique em pesquisar.

  Ex.:<br>
  facebook/react <br>
  facebook/react-native <br>
  angular/angular <br>
