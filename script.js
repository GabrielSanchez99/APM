document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const loginButton = document.getElementById('loginButton');
    const closeButton = document.querySelector('.close');
    const loginForm = document.getElementById('loginForm');

    loginButton.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aqui você pode adicionar a lógica de autenticação (por exemplo, verificar em um banco de dados)

        // Exemplo simples de verificação de usuário e senha
        if (username === 'admin' && password === 'password') {
            alert('Login bem-sucedido!');
            loginModal.style.display = 'none';
            loginButton.textContent = 'Logout';
            loginButton.removeEventListener('click', handleLoginClick);
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
        }
    });
});
