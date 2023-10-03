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
        
        //verificação de usuário e senha
        if (username === 'admin' && password === 'password') {
            alert('Login bem-sucedido!');
            loginModal.style.display = 'none';
            loginButton.textContent = 'Logout';
            loginButton.removeEventListener('click', handleLoginClick);
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
        }
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartContainer = document.getElementById('cart-container');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const produto = this.parentNode;
            const nome = produto.dataset.nome;
            const preco = parseFloat(produto.dataset.preco);

            const novoItem = document.createElement('div');
            novoItem.classList.add('cart-item');
            novoItem.innerHTML = `
                <span>${nome}</span>
                <span>R$${preco.toFixed(2)}</span>
            `;

            cartContainer.appendChild(novoItem);
        });
    });
});
