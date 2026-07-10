const botoes = document.querySelectorAll(".btn-add");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const produto = {
            nome: botao.dataset.nome,
            autor: botao.dataset.autor,
            preco: Number(botao.dataset.preco),
            imagem: botao.dataset.imagem,
            quantidade: 1
        };

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        const produtoExistente = carrinho.find(item => item.nome === produto.nome);

        if (produtoExistente) {

            produtoExistente.quantidade++;

        } else {

            carrinho.push(produto);

        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        alert(`${produto.nome} foi adicionado ao carrinho!`);

    });

});