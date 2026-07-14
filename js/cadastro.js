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