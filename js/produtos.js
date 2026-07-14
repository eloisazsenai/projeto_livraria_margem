//IMPORTANDO OS PRODUTOS DO ARQUIVO lista_produtos.js
import { produtos } from './lista_produtos.js'

//VARIÁVEIS
let secaoSelecionada = 'Todos';

const sectionCards = document.querySelector('#cards');
const campoPesquisa = document.querySelector('#campo-pesquisa');

//CARREGANDO OS CARDS
const listarProdutos = (lista = produtos) => {
    //LIMPANDO A SECTION cards
    sectionCards.innerHTML = ''

    if (lista.length === 0) {
        const mensagem = document.createElement('p')
        mensagem.className = 'mensagem-sem-resultados'
        mensagem.textContent = 'Nenhum livro encontrado.'
        sectionCards.appendChild(mensagem)
        return
    }

    //PERCORRENDO O ARRAY DE PRODUTOS
    lista.forEach((elem) => {
        //CRIANDO O ELEMENTO div E DEFININDO O ATRIBUTO CARD
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        //CRIANDO O ELEMENTO img E DEFININDO OS ATRIBUTOS SRC E ALT OS VALORES DO CAMINHO DAS IMAGENS E A DESCRIÇÃO DOS PRODUTOS
        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', elem.caminho_imagem)
        imgCard.setAttribute('alt', elem.descricao_produto)
        imgCard.addEventListener('error', () => {
            imgCard.src = 'imagens/livros_amontoados.jpg'
        }, { once: true })

        //CRIANDO O ELEMENTO p E ATRIBUINDO A DESCRIÇÃO DOS PRODUTOS
        const tituloCard = document.createElement('h2');
        tituloCard.textContent = elem.descricao_produto;

        //CRIANDO ELEMENTO H2 E ATRIBUINDO AUTOR
        const autorCard = document.createElement('p');
        autorCard.textContent = elem.autor;

        //CRIANDO O ELEMENTO h2 E ATRIBUINDO O VALOR UNITÁRIO DEIXANDO EM DUAS CASAS DECIMAIS E SUBSTITUINDO PONTO POR VÍRGULA
        const precoCard = document.createElement('p');
        precoCard.textContent = elem.valor_unitario.toLocaleString(
            'pt-BR',
            {
                style: 'currency',
                currency: 'BRL'
            }
        );

        //CRIANDO O ELEMENTO button E DEFININDO OS ATRIBUTOS CLASS E A DESCRIÇÃO ADICONAR
        const btnCard = document.createElement('button');

        btnCard.setAttribute('class', 'btn-add');
        btnCard.innerHTML = 'Adicionar';
        //monta o produto
        btnCard.addEventListener('click', () => {
            const produtoCarrinho = {
                id: elem.id_produto,
                nome: elem.descricao_produto,
                autor: elem.autor,
                preco: elem.valor_unitario,
                imagem: elem.caminho_imagem,
                quantidade: 1
            };
            //adiciona ao array do carrinho
            const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

            const produtoExistente = carrinho.find(
                produto => produto.id === produtoCarrinho.id
            );

            if (produtoExistente) {
                produtoExistente.quantidade++;
                produtoExistente.nome = produtoCarrinho.nome;
                produtoExistente.autor = produtoCarrinho.autor;
                produtoExistente.preco = produtoCarrinho.preco;
                produtoExistente.imagem = produtoCarrinho.imagem;
            } else {
                carrinho.push(produtoCarrinho);
            }

            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            atualizarContadorCarrinho();

            alert(`${produtoCarrinho.nome} foi adicionado ao carrinho!`);
        });
        
        //ADICIONANDO OS ELEMENTOS FILHOS AOS divCard
        divCard.appendChild(imgCard);
        divCard.appendChild(tituloCard);
        divCard.appendChild(autorCard);
        divCard.appendChild(precoCard);
        divCard.appendChild(btnCard);

        //ADICIONANDO O divCard A SECTION CARDS
        sectionCards.appendChild(divCard)

    })

}

//CHAMANDO A FUNÇÃO listarProdutos
listarProdutos()

//MONTANDO OS MENUS SEÇÕES
const menuSecoes = () => {
    //CRIANDO A COLEÇÃO MAP    
    const mapSecoes = new Map()

    //PERCORRENDO O ARRAY PRODUTO
    produtos.forEach((elem)=>{
        //SELECIONANDO AS SEÇÕES
        mapSecoes.set(elem.id_secao, elem)
    })
    
    //CONVERTENDO MAP EM ARRAY
    const secoesFiltradas = Array.from(mapSecoes.values())

    //RETORNANDO O ARRAY SELECIONADO
    return secoesFiltradas
}

//FUNÇÃO PARA INSERIR OS MENUS NA LISTA
const carregaSecoes = () => {

    const ulMenuSecoes = document.querySelector('#menu-secoes');

    //LIMPANDO O ELEMENDO DO DOM
    ulMenuSecoes.innerHTML = '';

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "#";
    a.className = "lnk-secao";
    a.innerHTML = "Todos";

    a.addEventListener("click", (e) => {
        e.preventDefault();
        secaoSelecionada = 'Todos';
        aplicarFiltros();
    });

    li.appendChild(a);
    ulMenuSecoes.appendChild(li);

    menuSecoes().forEach((elem) => {

        const liMenu = document.createElement('li');

        const aMenu = document.createElement('a');
        aMenu.href = '#';
        aMenu.className = 'lnk-secao';
        aMenu.innerHTML = elem.secao;

        aMenu.addEventListener('click', (e) => {
            e.preventDefault();
            secaoSelecionada = elem.id_secao;
            aplicarFiltros();
        });

        liMenu.appendChild(aMenu);
        ulMenuSecoes.appendChild(liMenu);
    });

}

carregaSecoes()

//FUNÇÃO FILTRO PRODUTO
//PESQUISA DE PRODUTOS
const normalizarTexto = texto =>
    texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase('pt-BR');

const aplicarFiltros = () => {
    const termo = normalizarTexto(campoPesquisa.value.trim());

    const resultado = produtos.filter(produto => {
        const titulo = normalizarTexto(produto.descricao_produto);
        const autor = normalizarTexto(produto.autor);

        const correspondePesquisa =
            titulo.includes(termo) ||
            autor.includes(termo);

        const correspondeSecao =
            secaoSelecionada === 'Todos' ||
            produto.id_secao === secaoSelecionada;

        return correspondePesquisa && correspondeSecao;
    });

    listarProdutos(resultado);
};

campoPesquisa.addEventListener('input', aplicarFiltros);


//FUNÇÃO CONTADOR DO CARRINHO
const contadorCarrinho = document.querySelector('#contador-carrinho');

const atualizarContadorCarrinho = () => {
    const carrinho =
        JSON.parse(localStorage.getItem('carrinho')) || [];

    const quantidadeTotal = carrinho.reduce(
        (total, produto) => total + produto.quantidade,
        0
    );

    contadorCarrinho.textContent = quantidadeTotal;

    contadorCarrinho.setAttribute(
        'aria-label',
        `${quantidadeTotal} itens no carrinho`
    );

    contadorCarrinho.hidden = quantidadeTotal === 0;
};

atualizarContadorCarrinho();
