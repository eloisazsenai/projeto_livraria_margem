const formLogin = document.querySelector('#form-login');

formLogin.addEventListener('submit', event => {
    event.preventDefault();

    alert('Login realizado com sucesso! Demonstração front-end.');

    formLogin.reset();
});