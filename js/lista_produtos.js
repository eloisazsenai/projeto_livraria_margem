const produtos = [
    {
        id_produto: 1,
        descricao_produto: "A Hora da Estrela",
        valor_unitario: 39.90,
        unidade: "UN",
        caminho_imagem: "imagens/a_hora_da_estrela.jpg",
        id_secao: 1,
        secao: "Literatura Brasileira"
    },
    {
        id_produto: 2,
        descricao_produto: "Dom Casmurro",
        valor_unitario: 42.50,
        unidade: "UN",
        caminho_imagem: "imagens/dom_casmurro.jpg",
        id_secao: 1,
        secao: "Literatura Brasileira"
    },
    {
        id_produto: 3,
        descricao_produto: "Memórias Póstumas de Brás Cubas",
        valor_unitario: 45.90,
        unidade: "UN",
        caminho_imagem: "imagens/memorias_postumas.jpg",
        id_secao: 1,
        secao: "Literatura Brasileira"
    },
    {
        id_produto: 4,
        descricao_produto: "Capitães da Areia",
        valor_unitario: 46.90,
        unidade: "UN",
        caminho_imagem: "imagens/capitaes_da_areia.jpg",
        id_secao: 1,
        secao: "Literatura Brasileira"
    },
    {
        id_produto: 5,
        descricao_produto: "Vidas Secas",
        valor_unitario: 38.90,
        unidade: "UN",
        caminho_imagem: "imagens/vidas_secas.jpg",
        id_secao: 1,
        secao: "Literatura Brasileira"
    },
    {
        id_produto: 6,
        descricao_produto: "Alice no País das Maravilhas",
        valor_unitario: 35.90,
        unidade: "UN",
        caminho_imagem: "imagens/alice_pais_maravilhas.jpg",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 7,
        descricao_produto: "Alice Através do Espelho",
        valor_unitario: 36.90,
        unidade: "UN",
        caminho_imagem: "imagens/alice_atraves_espelho.jpg",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 8,
        descricao_produto: "O Pequeno Príncipe",
        valor_unitario: 34.90,
        unidade: "UN",
        caminho_imagem: "imagens/o_pequeno_principe.jpg",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 9,
        descricao_produto: "O Hobbit",
        valor_unitario: 59.90,
        unidade: "UN",
        caminho_imagem: "imagens/o_hobbit.jpg",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 10,
        descricao_produto: "O Senhor dos Anéis",
        valor_unitario: 99.90,
        unidade: "UN",
        caminho_imagem: "imagens/o_senhor_dos_aneis.jpg",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 11,
        descricao_produto: "Harry Potter e a Pedra Filosofal",
        valor_unitario: 49.90,
        unidade: "UN",
        caminho_imagem: "imagens/hp_pedra_filosofal.jpg",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 12,
        descricao_produto: "Harry Potter e a Câmara Secreta",
        valor_unitario: 49.90,
        unidade: "UN",
        caminho_imagem: "imagens/hp_camara_secreta.jpg",
        id_secao: 2,
        secao: "Fantasia"
    },
    {
        id_produto: 13,
        descricao_produto: "1984",
        valor_unitario: 44.90,
        unidade: "UN",
        caminho_imagem: "imagens/1984.jpg",
        id_secao: 3,
        secao: "Ficção Científica"
    },
    {
        id_produto: 14,
        descricao_produto: "Admirável Mundo Novo",
        valor_unitario: 46.90,
        unidade: "UN",
        caminho_imagem: "imagens/admiravel_mundo_novo.jpg",
        id_secao: 3,
        secao: "Ficção Científica"
    },
    {
        id_produto: 15,
        descricao_produto: "Fahrenheit 451",
        valor_unitario: 42.90,
        unidade: "UN",
        caminho_imagem: "imagens/fahrenheit_451.jpg",
        id_secao: 3,
        secao: "Ficção Científica"
    },
    {
        id_produto: 16,
        descricao_produto: "Duna",
        valor_unitario: 69.90,
        unidade: "UN",
        caminho_imagem: "imagens/duna.jpg",
        id_secao: 3,
        secao: "Ficção Científica"
    },
    {
        id_produto: 17,
        descricao_produto: "Neuromancer",
        valor_unitario: 54.90,
        unidade: "UN",
        caminho_imagem: "imagens/neuromancer.jpg",
        id_secao: 3,
        secao: "Ficção Científica"
    },
    {
        id_produto: 18,
        descricao_produto: "Orgulho e Preconceito",
        valor_unitario: 39.90,
        unidade: "UN",
        caminho_imagem: "imagens/orgulho_preconceito.jpg",
        id_secao: 4,
        secao: "Romance"
    },
    {
        id_produto: 19,
        descricao_produto: "Jane Eyre",
        valor_unitario: 45.90,
        unidade: "UN",
        caminho_imagem: "imagens/jane_eyre.jpg",
        id_secao: 4,
        secao: "Romance"
    },
    {
        id_produto: 20,
        descricao_produto: "O Morro dos Ventos Uivantes",
        valor_unitario: 44.90,
        unidade: "UN",
        caminho_imagem: "imagens/morro_ventos_uivantes.jpg",
        id_secao: 4,
        secao: "Romance"
    },
    {
        id_produto: 21,
        descricao_produto: "É Assim que Acaba",
        valor_unitario: 49.90,
        unidade: "UN",
        caminho_imagem: "imagens/e_assim_que_acaba.jpg",
        id_secao: 4,
        secao: "Romance"
    },
    {
        id_produto: 22,
        descricao_produto: "Verity",
        valor_unitario: 52.90,
        unidade: "UN",
        caminho_imagem: "imagens/verity.jpg",
        id_secao: 4,
        secao: "Romance"
    },
    {
        id_produto: 23,
        descricao_produto: "Percy Jackson: O Ladrão de Raios",
        valor_unitario: 47.90,
        unidade: "UN",
        caminho_imagem: "imagens/percy_jackson.jpg",
        id_secao: 5,
        secao: "Infantojuvenil"
    },
    {
        id_produto: 24,
        descricao_produto: "As Crônicas de Nárnia",
        valor_unitario: 64.90,
        unidade: "UN",
        caminho_imagem: "imagens/narnia.jpg",
        id_secao: 5,
        secao: "Infantojuvenil"
    },
    {
        id_produto: 25,
        descricao_produto: "Coraline",
        valor_unitario: 39.90,
        unidade: "UN",
        caminho_imagem: "imagens/coraline.jpg",
        id_secao: 5,
        secao: "Infantojuvenil"
    },
    {
        id_produto: 26,
        descricao_produto: "O Mágico de Oz",
        valor_unitario: 35.90,
        unidade: "UN",
        caminho_imagem: "imagens/magico_oz.jpg",
        id_secao: 5,
        secao: "Infantojuvenil"
    },
    {
        id_produto: 27,
        descricao_produto: "Peter Pan",
        valor_unitario: 34.90,
        unidade: "UN",
        caminho_imagem: "imagens/peter_pan.jpg",
        id_secao: 5,
        secao: "Infantojuvenil"
    },
    {
        id_produto: 28,
        descricao_produto: "Hábitos Atômicos",
        valor_unitario: 58.90,
        unidade: "UN",
        caminho_imagem: "imagens/habitos_atomicos.jpg",
        id_secao: 6,
        secao: "Desenvolvimento Pessoal"
    },
    {
        id_produto: 29,
        descricao_produto: "O Poder do Hábito",
        valor_unitario: 52.90,
        unidade: "UN",
        caminho_imagem: "imagens/o_poder_do_habito.jpg",
        id_secao: 6,
        secao: "Desenvolvimento Pessoal"
    },
    {
        id_produto: 30,
        descricao_produto: "Essencialismo",
        valor_unitario: 49.90,
        unidade: "UN",
        caminho_imagem: "imagens/essencialismo.jpg",
        id_secao: 6,
        secao: "Desenvolvimento Pessoal"
    },
    {
        id_produto: 31,
        descricao_produto: "Pai Rico, Pai Pobre",
        valor_unitario: 45.90,
        unidade: "UN",
        caminho_imagem: "imagens/pai_rico_pai_pobre.jpg",
        id_secao: 6,
        secao: "Desenvolvimento Pessoal"
    },
    {
        id_produto: 32,
        descricao_produto: "Mindset",
        valor_unitario: 54.90,
        unidade: "UN",
        caminho_imagem: "imagens/mindset.jpg",
        id_secao: 6,
        secao: "Desenvolvimento Pessoal"
    },
    {
        id_produto: 33,
        descricao_produto: "Clean Code",
        valor_unitario: 109.90,
        unidade: "UN",
        caminho_imagem: "imagens/clean_code.jpg",
        id_secao: 7,
        secao: "Tecnologia"
    },
    {
        id_produto: 34,
        descricao_produto: "JavaScript: O Guia Definitivo",
        valor_unitario: 129.90,
        unidade: "UN",
        caminho_imagem: "imagens/javascript_guia.jpg",
        id_secao: 7,
        secao: "Tecnologia"
    },
    {
        id_produto: 35,
        descricao_produto: "Entendendo Algoritmos",
        valor_unitario: 79.90,
        unidade: "UN",
        caminho_imagem: "imagens/entendendo_algoritmos.jpg",
        id_secao: 7,
        secao: "Tecnologia"
    },
    {
        id_produto: 36,
        descricao_produto: "Python Fluente",
        valor_unitario: 139.90,
        unidade: "UN",
        caminho_imagem: "imagens/python_fluente.jpg",
        id_secao: 7,
        secao: "Tecnologia"
    },
    {
        id_produto: 37,
        descricao_produto: "Código Limpo na Prática",
        valor_unitario: 89.90,
        unidade: "UN",
        caminho_imagem: "imagens/codigo_limpo_pratica.jpg",
        id_secao: 7,
        secao: "Tecnologia"
    },
    {
        id_produto: 38,
        descricao_produto: "A Revolução dos Bichos",
        valor_unitario: 29.90,
        unidade: "UN",
        caminho_imagem: "imagens/revolucao_bichos.jpg",
        id_secao: 8,
        secao: "Clássicos"
    },
    {
        id_produto: 39,
        descricao_produto: "O Retrato de Dorian Gray",
        valor_unitario: 41.90,
        unidade: "UN",
        caminho_imagem: "imagens/dorian_gray.jpg",
        id_secao: 8,
        secao: "Clássicos"
    },
    {
        id_produto: 40,
        descricao_produto: "Frankenstein",
        valor_unitario: 43.90,
        unidade: "UN",
        caminho_imagem: "imagens/frankenstein.jpg",
        id_secao: 8,
        secao: "Clássicos"
    }
];

 export {produtos}