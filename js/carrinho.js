const listaCarrinho = document.getElementById("listaCarrinho");
const total = document.getElementById("total");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let valorTotal = 0;

if (carrinho.length === 0) {

    listaCarrinho.innerHTML = `
        <h2>Seu carrinho está vazio.</h2>
        <a href="../index.html">Voltar para a loja</a>
    `;

} else {

    carrinho.forEach((produto, indice) => {

        valorTotal += produto.preco * produto.quantidade;

        listaCarrinho.innerHTML += `
            <div class="item-carrinho">

                <img src="../${produto.imagem}" alt="${produto.nome}">

                <div class="informacoes">

                    <h2>${produto.nome}</h2>

                    <p><strong>Autor:</strong> ${produto.autor}</p>

                    <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>

                    <p><strong>Quantidade:</strong> ${produto.quantidade}</p>

                </div>

                <button onclick="removerItem(${indice})">
                    Remover
                </button>

            </div>

            <hr>
        `;
    });

    total.innerHTML = `Total: R$ ${valorTotal.toFixed(2)}`;

}

function removerItem(indice) {

    carrinho.splice(indice, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    location.reload();

}

console.log(produto);