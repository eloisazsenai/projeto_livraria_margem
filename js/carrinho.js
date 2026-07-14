const listaCarrinho = document.getElementById('listaCarrinho');
const total = document.getElementById('total');
const resumo = document.getElementById('resumo');
const btnEsvaziar = document.getElementById('btn-esvaziar');

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

const formatarMoeda = valor => valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

const salvarCarrinho = () => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
};

const obterChaveProduto = produto => produto.id ?? produto.nome;

const criarBotao = (texto, descricao, aoClicar, classe = '') => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.textContent = texto;
    botao.setAttribute('aria-label', descricao);
    botao.className = classe;
    botao.addEventListener('click', aoClicar);
    return botao;
};

const alterarQuantidade = (idProduto, variacao) => {
    const produto = carrinho.find(item => obterChaveProduto(item) === idProduto);
    if (!produto) return;

    produto.quantidade += variacao;
    if (produto.quantidade <= 0) {
        carrinho = carrinho.filter(item => obterChaveProduto(item) !== idProduto);
    }

    salvarCarrinho();
    renderizarCarrinho();
};

const removerItem = idProduto => {
    carrinho = carrinho.filter(item => obterChaveProduto(item) !== idProduto);
    salvarCarrinho();
    renderizarCarrinho();
};

const criarItemCarrinho = produto => {
    const item = document.createElement('article');
    item.className = 'item-carrinho';

    const imagem = document.createElement('img');
    const imagemExterna = produto.imagem.startsWith('http');
    imagem.src = imagemExterna ? produto.imagem : `../${produto.imagem}`;
    imagem.alt = `Capa do livro ${produto.nome}`;
    imagem.addEventListener('error', () => {
        imagem.src = '../imagens/livros_amontoados.jpg';
    }, { once: true });

    const informacoes = document.createElement('div');
    informacoes.className = 'informacoes';

    const nome = document.createElement('h2');
    nome.textContent = produto.nome;

    const autor = document.createElement('p');
    autor.textContent = `Autor: ${produto.autor}`;

    const preco = document.createElement('p');
    preco.textContent = `Preço unitário: ${formatarMoeda(produto.preco)}`;

    const subtotal = document.createElement('p');
    subtotal.textContent = `Subtotal: ${formatarMoeda(produto.preco * produto.quantidade)}`;

    const controles = document.createElement('div');
    controles.className = 'controles-quantidade';

    const chaveProduto = obterChaveProduto(produto);
    const diminuir = criarBotao('−', `Diminuir quantidade de ${produto.nome}`, () => alterarQuantidade(chaveProduto, -1));
    const quantidade = document.createElement('span');
    quantidade.textContent = produto.quantidade;
    quantidade.setAttribute('aria-label', `Quantidade: ${produto.quantidade}`);
    const aumentar = criarBotao('+', `Aumentar quantidade de ${produto.nome}`, () => alterarQuantidade(chaveProduto, 1));

    controles.append(diminuir, quantidade, aumentar);
    informacoes.append(nome, autor, preco, subtotal, controles);

    const remover = criarBotao('Remover', `Remover ${produto.nome} do carrinho`, () => removerItem(chaveProduto), 'btn-remover');
    item.append(imagem, informacoes, remover);
    return item;
};

function renderizarCarrinho() {
    listaCarrinho.replaceChildren();

    if (carrinho.length === 0) {
        const mensagem = document.createElement('h2');
        mensagem.textContent = 'Seu carrinho está vazio.';
        const link = document.createElement('a');
        link.href = '../index.html';
        link.textContent = 'Voltar para a loja';
        listaCarrinho.append(mensagem, link);
        resumo.hidden = true;
        return;
    }

    carrinho.forEach(produto => listaCarrinho.appendChild(criarItemCarrinho(produto)));

    const valorTotal = carrinho.reduce(
        (soma, produto) => soma + produto.preco * produto.quantidade,
        0
    );

    total.textContent = `Total: ${formatarMoeda(valorTotal)}`;
    resumo.hidden = false;
}

btnEsvaziar.addEventListener('click', () => {
    carrinho = [];
    localStorage.removeItem('carrinho');
    renderizarCarrinho();
});

renderizarCarrinho();
