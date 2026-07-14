const produtos = [
    {
        id_produto: 1,
        autor: "Clarice Lispector",
        descricao_produto: "A Hora da Estrela",
        valor_unitario: 39.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/650866-M.jpg?default=false",
        id_secao: 1,
        secao: "Literatura Brasileira"
    },
    {
        id_produto: 2,
        autor: "Machado de Assis",
        descricao_produto: "Dom Casmurro",
        valor_unitario: 42.50,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/647501-M.jpg?default=false",
        id_secao: 1,
        secao: "Literatura Brasileira"
    },
    {
        id_produto: 3,
        autor: "Machado de Assis",
        descricao_produto: "Memórias Póstumas de Brás Cubas",
        valor_unitario: 45.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/123152-M.jpg?default=false",
        id_secao: 1,
        secao: "Literatura Brasileira"
    },
    {
        id_produto: 4,
        autor: "Jorge Amado",
        descricao_produto: "Capitães da Areia",
        valor_unitario: 46.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/4178919-M.jpg?default=false",
        id_secao: 1,
        secao: "Literatura Brasileira"
    },
    {
        id_produto: 5,
        autor: "Graciliano Ramos",
        descricao_produto: "Vidas Secas",
        valor_unitario: 38.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/12369687-M.jpg?default=false",
        id_secao: 1,
        secao: "Literatura Brasileira"
    },
    {
        id_produto: 6,
        autor: "Lewis Carroll",
        descricao_produto: "Alice no País das Maravilhas",
        valor_unitario: 35.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/12460373-M.jpg?default=false",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 7,
        autor: "Lewis Carroll",
        descricao_produto: "Alice Através do Espelho",
        valor_unitario: 36.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/13801806-M.jpg?default=false",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 8,
        autor: "Antoine de Saint-Exupéry",
        descricao_produto: "O Pequeno Príncipe",
        valor_unitario: 34.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/8570014-M.jpg?default=false",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 9,
        autor: "J. R. R. Tolkien",
        descricao_produto: "O Hobbit",
        valor_unitario: 59.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/14627509-M.jpg?default=false",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 10,
        autor: "J. R. R. Tolkien",
        descricao_produto: "O Senhor dos Anéis",
        valor_unitario: 99.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/15120680-M.jpg?default=false",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 11,
        autor: "J. K. Rowling",
        descricao_produto: "Harry Potter e a Pedra Filosofal",
        valor_unitario: 49.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/15155833-M.jpg?default=false",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 12,
        autor: "J. K. Rowling",
        descricao_produto: "Harry Potter e a Câmara Secreta",
        valor_unitario: 49.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/15158664-M.jpg?default=false",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 13,
        autor: "George Orwell",
        descricao_produto: "1984",
        valor_unitario: 44.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/8745958-M.jpg?default=false",
        id_secao: 3,
        secao: "Ficção Científica"
    },
    {
        id_produto: 14,
        autor: "Aldous Huxley",
        descricao_produto: "Admirável Mundo Novo",
        valor_unitario: 46.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/13623695-M.jpg?default=false",
        id_secao: 3,
        secao: "Ficção Científica"
    },
    {
        id_produto: 15,
        autor: "Ray Bradbury",
        descricao_produto: "Fahrenheit 451",
        valor_unitario: 42.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/12993656-M.jpg?default=false",
        id_secao: 3,
        secao: "Ficção Científica"
    },
    {
        id_produto: 16,
        autor: "Frank Herbert",
        descricao_produto: "Duna",
        valor_unitario: 69.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/10368109-M.jpg?default=false",
        id_secao: 3,
        secao: "Ficção Científica"
    },
    {
        id_produto: 17,
        autor: "William Gibson",
        descricao_produto: "Neuromancer",
        valor_unitario: 54.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/283860-M.jpg?default=false",
        id_secao: 3,
        secao: "Ficção Científica"
    },
    {
        id_produto: 18,
        autor: "Jane Austen",
        descricao_produto: "Orgulho e Preconceito",
        valor_unitario: 39.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/12054378-M.jpg?default=false",
        id_secao: 4,
        secao: "Romance"
    },
    {
        id_produto: 19,
        autor: "Charlotte Brontë",
        descricao_produto: "Jane Eyre",
        valor_unitario: 45.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/8235363-M.jpg?default=false",
        id_secao: 4,
        secao: "Romance"
    },
    {
        id_produto: 20,
        autor: "Emily Brontë",
        descricao_produto: "O Morro dos Ventos Uivantes",
        valor_unitario: 44.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/12818862-M.jpg?default=false",
        id_secao: 4,
        secao: "Romance"
    },
    {
        id_produto: 21,
        autor: "Colleen Hoover",
        descricao_produto: "É Assim que Acaba",
        valor_unitario: 49.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/10473609-M.jpg?default=false",
        id_secao: 4,
        secao: "Romance"
    },
    {
        id_produto: 22,
        autor: "Colleen Hoover",
        descricao_produto: "Verity",
        valor_unitario: 52.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/8747160-M.jpg?default=false",
        id_secao: 4,
        secao: "Romance"
    },
    {
        id_produto: 23,
        autor: "Rick Riordan",
        descricao_produto: "Percy Jackson: O Ladrão de Raios",
        valor_unitario: 47.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/7239831-M.jpg?default=false",
        id_secao: 5,
        secao: "Infantojuvenil"
    },
    {
        id_produto: 24,
        autor: "C. S. Lewis",
        descricao_produto: "As Crônicas de Nárnia",
        valor_unitario: 64.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/12749826-M.jpg?default=false",
        id_secao: 5,
        secao: "Infantojuvenil"
    },
    {
        id_produto: 25,
        autor: "Neil Gaiman",
        descricao_produto: "Coraline",
        valor_unitario: 39.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/14171421-M.jpg?default=false",
        id_secao: 5,
        secao: "Infantojuvenil"
    },
    {
        id_produto: 26,
        autor: "L. Frank Baum",
        descricao_produto: "O Mágico de Oz",
        valor_unitario: 35.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/12370076-M.jpg?default=false",
        id_secao: 5,
        secao: "Infantojuvenil"
    },
    {
        id_produto: 27,
        autor: "J. M. Barrie",
        descricao_produto: "Peter Pan",
        valor_unitario: 34.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/8237052-M.jpg?default=false",
        id_secao: 5,
        secao: "Infantojuvenil"
    },
    {
        id_produto: 28,
        autor: "James Clear",
        descricao_produto: "Hábitos Atômicos",
        valor_unitario: 58.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/12539702-M.jpg?default=false",
        id_secao: 6,
        secao: "Desenvolvimento Pessoal"
    },
    {
        id_produto: 29,
        autor: "Charles Duhigg",
        descricao_produto: "O Poder do Hábito",
        valor_unitario: 52.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/9078085-M.jpg?default=false",
        id_secao: 6,
        secao: "Desenvolvimento Pessoal"
    },
    {
        id_produto: 30,
        autor: "Greg McKeown",
        descricao_produto: "Essencialismo",
        valor_unitario: 49.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/10401970-M.jpg?default=false",
        id_secao: 6,
        secao: "Desenvolvimento Pessoal"
    },
    {
        id_produto: 31,
        autor: "Robert T. Kiyosaki",
        descricao_produto: "Pai Rico, Pai Pobre",
        valor_unitario: 45.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/8315603-M.jpg?default=false",
        id_secao: 6,
        secao: "Desenvolvimento Pessoal"
    },
    {
        id_produto: 32,
        autor: "Carol S. Dweck",
        descricao_produto: "Mindset",
        valor_unitario: 54.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/746414-M.jpg?default=false",
        id_secao: 6,
        secao: "Desenvolvimento Pessoal"
    },
    {
        id_produto: 33,
        autor: "Robert C. Martin",
        descricao_produto: "Clean Code",
        valor_unitario: 109.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/8065615-M.jpg?default=false",
        id_secao: 7,
        secao: "Tecnologia"
    },
    {
        id_produto: 34,
        autor: "David Flanagan",
        descricao_produto: "JavaScript: O Guia Definitivo",
        valor_unitario: 129.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/13194548-M.jpg?default=false",
        id_secao: 7,
        secao: "Tecnologia"
    },
    {
        id_produto: 35,
        autor: "Aditya Y. Bhargava",
        descricao_produto: "Entendendo Algoritmos",
        valor_unitario: 79.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/13780321-M.jpg?default=false",
        id_secao: 7,
        secao: "Tecnologia"
    },
    {
        id_produto: 36,
        autor: "Luciano Ramalho",
        descricao_produto: "Python Fluente",
        valor_unitario: 139.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/8743408-M.jpg?default=false",
        id_secao: 7,
        secao: "Tecnologia"
    },
    {
        id_produto: 37,
        autor: "Alessandro Del Sole",
        descricao_produto: "Código Limpo na Prática",
        valor_unitario: 89.90,
        unidade: "UN",
        caminho_imagem: "imagens/livros_amontoados.jpg",
        id_secao: 7,
        secao: "Tecnologia"
    },
    {
        id_produto: 38,
        autor: "George Orwell",
        descricao_produto: "A Revolução dos Bichos",
        valor_unitario: 29.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/15200524-M.jpg?default=false",
        id_secao: 8,
        secao: "Clássicos"
    },
    {
        id_produto: 39,
        autor: "Oscar Wilde",
        descricao_produto: "O Retrato de Dorian Gray",
        valor_unitario: 41.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/14314858-M.jpg?default=false",
        id_secao: 8,
        secao: "Clássicos"
    },
    {
        id_produto: 40,
        autor: "Mary Shelley",
        descricao_produto: "Frankenstein",
        valor_unitario: 43.90,
        unidade: "UN",
        caminho_imagem: "https://covers.openlibrary.org/b/id/12356249-M.jpg?default=false",
        id_secao: 8,
        secao: "Clássicos"
    }
];

export {produtos}
