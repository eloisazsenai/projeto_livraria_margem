const formCadastro = document.querySelector('#form-cadastro');
const senha = document.querySelector('#senha');
const confirmarSenha = document.querySelector('#confirm-senha');

formCadastro.addEventListener('submit', event => {
    event.preventDefault();

    if (senha.value !== confirmarSenha.value) {
        alert('As senhas não coincidem.');
        confirmarSenha.focus();
        return;
    }

    alert('Cadastro realizado com sucesso! Demonstração front-end.');

    formCadastro.reset();
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