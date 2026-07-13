//IMPORTANDO OS PRODUTOS DO ARQUIVO lista_produtos.js
import { produtos } from './lista_produtos.js'

//PEGANDO ELEMENTOS DO DOM
const sectionCards = document.querySelector('#cards')

//CARREGANDO OS CARDS
const listarProdutos = (lista = produtos) => {
    //LIMPANDO A SECTION cards
    sectionCards.innerHTML = ''

    //PERCORRENDO O ARRAY DE PRODUTOS
    lista.forEach((elem) => {
        //CRIANDO O ELEMENTO div E DEFININDO O ATRIBUTO CARD
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        //CRIANDO O ELEMENTO img E DEFININDO OS ATRIBUTOS SRC E ALT OS VALORES DO CAMINHO DAS IMAGENS E A DESCRIÇÃO DOS PRODUTOS
        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', elem.caminho_imagem)
        imgCard.setAttribute('alt', elem.descricao_produto)

        //CRIANDO O ELEMENTO p E ATRIBUINDO A DESCRIÇÃO DOS PRODUTOS
        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

        //CRIANDO O ELEMENTO h2 E ATRIBUINDO O VALOR UNITÁRIO DEIXANDO EM DUAS CASAS DECIMAIS E SUBSTITUINDO PONTO POR VÍRGULA
        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

        //CRIANDO O ELEMENTO button E DEFININDO OS ATRIBUTOS CLASS E A DESCRIÇÃO ADICONAR
        const btnCard = document.createElement('button');

        btnCard.setAttribute('class', 'btn-add');
        btnCard.innerHTML = 'Adicionar';

        btnCard.addEventListener('click', () => {
            const produtoCarrinho = {
                id: elem.id_produto,
                nome: elem.descricao_produto,
                autor: elem.autor,
                preco: elem.valor_unitario,
                imagem: elem.caminho_imagem,
                quantidade: 1
            };

            const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

            const produtoExistente = carrinho.find(
                produto => produto.id === produtoCarrinho.id
            );

            if (produtoExistente) {
                produtoExistente.quantidade++;
            } else {
                carrinho.push(produtoCarrinho);
            }

            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            alert(`${produtoCarrinho.nome} foi adicionado ao carrinho!`);
        });
        
        //ADICIONANDO OS ELEMENTOS FILHOS AOS divCard
        divCard.appendChild(imgCard)
        divCard.appendChild(pCard)
        divCard.appendChild(h2Card)
        divCard.appendChild(btnCard)

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
        listarProdutos();
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
            filtroProduto(elem.id_secao);
        });

        liMenu.appendChild(aMenu);
        ulMenuSecoes.appendChild(liMenu);
    });

}

carregaSecoes()

//FUNÇÃO FILTRO PRODUTO
const filtroProduto = (idSecao) => {

    const produtosFiltrados = produtos.filter(elem => elem.id_secao === idSecao);

    listarProdutos(produtosFiltrados);
}


//PESQUISA DE PRODUTOS
const campoPesquisa = document.querySelector("#campo-pesquisa");

campoPesquisa.addEventListener("input", () => {
    const termo = campoPesquisa.value.trim().toLocaleLowerCase("pt-BR");

    const resultado = produtos.filter(produto =>
        produto.descricao_produto
            .toLocaleLowerCase("pt-BR")
            .includes(termo)
    );

    listarProdutos(resultado);
});


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