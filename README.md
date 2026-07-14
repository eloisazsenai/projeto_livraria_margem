# Livraria Margem

Projeto de uma livraria virtual desenvolvido durante a formação em desenvolvimento front-end do SENAI, realizada por meio do Programa Autonomia e Renda Petrobras.

O projeto foi criado com o objetivo de aplicar, na prática, conhecimentos de HTML, CSS e JavaScript, explorando a construção de interfaces, manipulação do DOM, formulários, filtros e armazenamento de dados no navegador.

## Objetivo

Desenvolver uma aplicação front-end de uma livraria virtual que permita ao usuário visualizar livros, pesquisar produtos, filtrar por categorias e gerenciar um carrinho de compras.

O projeto possui finalidade educacional. As funcionalidades de cadastro, login e finalização de compra são apenas demonstrativas e não utilizam back-end ou banco de dados.

## Funcionalidades

- Exibição dinâmica do catálogo de livros;
- Pesquisa por título ou autor;
- Filtro de produtos por seção;
- Exibição de título, autor, preço e capa;
- Adição de produtos ao carrinho;
- Controle de quantidade dos produtos;
- Remoção de itens do carrinho;
- Cálculo automático de subtotal e total;
- Contador de itens no menu;
- Persistência do carrinho com `localStorage`;
- Formulário demonstrativo de cadastro;
- Validação de confirmação de senha;
- Página demonstrativa de login;
- Layout adaptado para computadores e dispositivos móveis.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript;
- Local Storage;
- Open Library Covers API;
- Git e GitHub.

## Estrutura do projeto

```text
projeto_livraria_margem/
├── css/
│   ├── style_cadastro.css
│   ├── style_carrinho.css
│   ├── style_estrutura_pagina.css
│   ├── style_login.css
│   └── style_sobre.css
├── imagens/
├── js/
│   ├── cadastro.js
│   ├── carrinho.js
│   ├── lista_produtos.js
│   └── produtos.js
├── paginas/
│   ├── cadastro.html
│   ├── carrinho.html
│   ├── login.html
│   └── sobre.html
└── index.html
```

## Como executar

1. Clone este repositório:

```bash
git clone https://github.com/eloisazsenai/projeto_livraria_margem.git
```

2. Entre na pasta do projeto:

```bash
cd projeto_livraria_margem
```

3. Abra o arquivo `index.html` no navegador.

Para uma melhor experiência, o projeto também pode ser executado com uma extensão de servidor local, como o Live Server do Visual Studio Code.

## Armazenamento dos dados

O carrinho utiliza o `localStorage` do navegador. Por isso, os produtos permanecem salvos mesmo depois de atualizar ou fechar a página.

Os dados ficam armazenados somente no navegador utilizado e não são enviados para nenhum servidor.

## Capas dos livros

As capas são fornecidas pela Open Library Covers API. Quando uma capa não está disponível, o projeto exibe uma imagem local de reserva.

Por depender de um serviço externo, algumas capas precisam de conexão com a internet para serem carregadas.

## Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

- Estruturação semântica de páginas;
- Estilização e responsividade com CSS;
- Manipulação de elementos do DOM;
- Eventos em JavaScript;
- Criação dinâmica de componentes;
- Métodos de arrays, como `forEach`, `filter`, `find` e `reduce`;
- Uso do `localStorage`;
- Organização do código em arquivos separados;
- Controle de versão com Git e GitHub;
- Correção de erros e evolução incremental de funcionalidades.

## Limitações

Este é um projeto exclusivamente front-end. Portanto:

- O cadastro não cria uma conta real;
- O login não realiza autenticação;
- Não existe integração com banco de dados;
- O botão de finalizar compra não processa pagamentos;
- Os dados do carrinho ficam armazenados apenas no navegador.

## Contexto educacional

Projeto desenvolvido no SENAI por meio do Programa Autonomia e Renda Petrobras, com foco no aprendizado prático de codificação front-end.

## Melhorias futuras

- Backend para cadastro e login
- Banco de dados
- Sistema de favoritos
- Página de detalhes dos livros
- Área administrativa
- Sistema de pedidos

## Autor

Desenvolvido por **Eloísa Zifirino**.

GitHub: https://github.com/eloisazifirino
