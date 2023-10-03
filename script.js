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
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const hideCartButton = document.getElementById('hideCartButton');
    const checkoutButton = document.getElementById('checkoutButton');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const produto = this.parentNode;
            const nome = produto.dataset.nome;
            const preco = parseFloat(produto.dataset.preco);

            const novoItem = document.createElement('div');
            novoItem.classList.add('cart-item');
            novoItem.innerHTML = `
                <span>${nome}</span>
                <span>€${preco.toFixed(2)}</span>
                <button class="remove-from-cart">Remover</button>
            `;

            cartItems.appendChild(novoItem);

            // Atualiza o total
            let total = parseFloat(cartTotal.textContent.slice(1));
            total += preco;
            cartTotal.textContent = `€${total.toFixed(2)}`;

            // Exibe o carrinho
            cartContainer.style.display = 'block';
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-from-cart')) {
            const item = e.target.parentNode;
            const preco = parseFloat(item.children[1].textContent.slice(1));

            // Remove o item do carrinho
            item.remove();

            // Atualiza o total
            let total = parseFloat(cartTotal.textContent.slice(1));
            total -= preco;
            cartTotal.textContent = `€${total.toFixed(2)}`;
        }
    });

    hideCartButton.addEventListener('click', function() {
        cartContainer.style.display = 'none';
    });

    checkoutButton.addEventListener('click', function() {
        alert('Compra finalizada com sucesso!');
        cartItems.innerHTML = '';
        cartTotal.textContent = '€0.00';
        cartContainer.style.display = 'none';
    });
});
