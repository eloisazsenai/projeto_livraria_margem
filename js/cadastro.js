const formCadastro = document.querySelector('#form-cadastro');
const senha = document.querySelector('#senha');
const confirmarSenha = document.querySelector('#confirm-senha');
const campoCep = document.querySelector('#cep');
const campoLogradouro = document.querySelector('#logradouro');
const campoBairro = document.querySelector('#bairro');
const campoCidade = document.querySelector('#cidade');
const campoEstado = document.querySelector('#estado');
const campoNumero = document.querySelector('#numero');
const statusCep = document.querySelector('#status-cep');

let temporizadorCep;
let ultimoCepConsultado = '';

const exibirStatusCep = (mensagem, tipo = '') => {
    statusCep.textContent = mensagem;
    statusCep.className = tipo ? `status-cep status-cep--${tipo}` : 'status-cep';
};

const preencherEndereco = endereco => {
    campoLogradouro.value = endereco.logradouro || '';
    campoBairro.value = endereco.bairro || '';
    campoCidade.value = endereco.localidade || '';
    campoEstado.value = endereco.uf || '';
};

const buscarEnderecoPorCep = async cep => {
    if (cep === ultimoCepConsultado) {
        return;
    }

    ultimoCepConsultado = cep;
    campoCep.setAttribute('aria-busy', 'true');
    exibirStatusCep('Buscando endereço...', 'carregando');

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (!resposta.ok) {
            throw new Error('Não foi possível consultar o CEP.');
        }

        const endereco = await resposta.json();

        if (endereco.erro) {
            preencherEndereco({});
            exibirStatusCep('CEP não encontrado.', 'erro');
            return;
        }

        preencherEndereco(endereco);
        exibirStatusCep('Endereço preenchido automaticamente.', 'sucesso');
        campoNumero.focus();
    } catch (erro) {
        ultimoCepConsultado = '';
        exibirStatusCep('Não foi possível consultar o CEP. Tente novamente.', 'erro');
    } finally {
        campoCep.removeAttribute('aria-busy');
    }
};

campoCep.addEventListener('input', () => {
    const cepNumerico = campoCep.value.replace(/\D/g, '').slice(0, 8);

    campoCep.value = cepNumerico.replace(/^(\d{5})(\d)/, '$1-$2');
    clearTimeout(temporizadorCep);

    if (cepNumerico.length !== 8) {
        ultimoCepConsultado = '';
        exibirStatusCep('');
        return;
    }

    temporizadorCep = setTimeout(() => {
        buscarEnderecoPorCep(cepNumerico);
    }, 400);
});

formCadastro.addEventListener('submit', event => {
    event.preventDefault();

    if (senha.value !== confirmarSenha.value) {
        alert('As senhas não coincidem.');
        confirmarSenha.focus();
        return;
    }

    alert('Cadastro realizado com sucesso! Demonstração front-end.');

    formCadastro.reset();
    preencherEndereco({});
    ultimoCepConsultado = '';
    exibirStatusCep('');
});

//ADICIONA LOGICA AO BOTÃO MOSTAR/OCULTAR SENHA
const botoesMostrarSenha =
    document.querySelectorAll('.btn-mostrar-senha');

botoesMostrarSenha.forEach(botao => {
    botao.addEventListener('click', () => {
        const campo = document.getElementById(botao.dataset.campo);
        const senhaEstaVisivel = campo.type === 'text';

        campo.type = senhaEstaVisivel ? 'password' : 'text';
        botao.textContent = senhaEstaVisivel ? 'Mostrar' : 'Ocultar';
    });
});
