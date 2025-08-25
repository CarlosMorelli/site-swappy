// Estado global da aplicação
let currentPage = 'home';
let currentProductIndex = 0;
let currentCategory = 'all';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentPageIndex = 0;
const productsPerPage = 6;

// Dados dos produtos (50 produtos distribuídos em categorias)
const products = [
    // Roupas (17 produtos)
    { id: 1, name: 'Camiseta Básica', price: 'R$ 25,00', type: 'Troca', category: 'roupas' },
    { id: 2, name: 'Jeans Skinny', price: 'R$ 80,00', type: 'Venda', category: 'roupas' },
    { id: 3, name: 'Vestido Floral', price: 'R$ 60,00', type: 'Troca', category: 'roupas' },
    { id: 4, name: 'Blusa de Frio', price: 'R$ 45,00', type: 'Venda', category: 'roupas' },
    { id: 5, name: 'Shorts Jeans', price: 'R$ 35,00', type: 'Troca', category: 'roupas' },
    { id: 6, name: 'Camisa Social', price: 'R$ 70,00', type: 'Venda', category: 'roupas' },
    { id: 7, name: 'Saia Midi', price: 'R$ 40,00', type: 'Troca', category: 'roupas' },
    { id: 8, name: 'Jaqueta Jeans', price: 'R$ 90,00', type: 'Venda', category: 'roupas' },
    { id: 9, name: 'Top Cropped', price: 'R$ 20,00', type: 'Troca', category: 'roupas' },
    { id: 10, name: 'Calça Legging', price: 'R$ 30,00', type: 'Venda', category: 'roupas' },
    { id: 11, name: 'Blazer Feminino', price: 'R$ 85,00', type: 'Troca', category: 'roupas' },
    { id: 12, name: 'Regata Masculina', price: 'R$ 18,00', type: 'Venda', category: 'roupas' },
    { id: 13, name: 'Vestido Longo', price: 'R$ 75,00', type: 'Troca', category: 'roupas' },
    { id: 14, name: 'Bermuda Cargo', price: 'R$ 42,00', type: 'Venda', category: 'roupas' },
    { id: 15, name: 'Cropped Tricot', price: 'R$ 38,00', type: 'Troca', category: 'roupas' },
    { id: 16, name: 'Calça Social', price: 'R$ 65,00', type: 'Venda', category: 'roupas' },
    { id: 17, name: 'Moletom Básico', price: 'R$ 55,00', type: 'Troca', category: 'roupas' },

    // Eletrônicos (17 produtos)
    { id: 18, name: 'Smartphone Samsung', price: 'R$ 800,00', type: 'Venda', category: 'eletronicos' },
    { id: 19, name: 'Fone Bluetooth', price: 'R$ 120,00', type: 'Troca', category: 'eletronicos' },
    { id: 20, name: 'Notebook Dell', price: 'R$ 2500,00', type: 'Venda', category: 'eletronicos' },
    { id: 21, name: 'Tablet iPad', price: 'R$ 1800,00', type: 'Troca', category: 'eletronicos' },
    { id: 22, name: 'Smart TV 43"', price: 'R$ 1200,00', type: 'Venda', category: 'eletronicos' },
    { id: 23, name: 'Console PS5', price: 'R$ 3500,00', type: 'Troca', category: 'eletronicos' },
    { id: 24, name: 'Câmera Canon', price: 'R$ 2200,00', type: 'Venda', category: 'eletronicos' },
    { id: 25, name: 'Smartwatch', price: 'R$ 350,00', type: 'Troca', category: 'eletronicos' },
    { id: 26, name: 'Caixa de Som JBL', price: 'R$ 180,00', type: 'Venda', category: 'eletronicos' },
    { id: 27, name: 'Kindle E-reader', price: 'R$ 400,00', type: 'Troca', category: 'eletronicos' },
    { id: 28, name: 'Mouse Gamer', price: 'R$ 85,00', type: 'Venda', category: 'eletronicos' },
    { id: 29, name: 'Teclado Mecânico', price: 'R$ 250,00', type: 'Troca', category: 'eletronicos' },
    { id: 30, name: 'Monitor 24"', price: 'R$ 650,00', type: 'Venda', category: 'eletronicos' },
    { id: 31, name: 'Drone DJI', price: 'R$ 1500,00', type: 'Troca', category: 'eletronicos' },
    { id: 32, name: 'Carregador Portátil', price: 'R$ 45,00', type: 'Venda', category: 'eletronicos' },
    { id: 33, name: 'Webcam HD', price: 'R$ 120,00', type: 'Troca', category: 'eletronicos' },
    { id: 34, name: 'SSD 1TB', price: 'R$ 300,00', type: 'Venda', category: 'eletronicos' },

    // Livros (16 produtos)
    { id: 35, name: 'Dom Casmurro', price: 'R$ 15,00', type: 'Troca', category: 'livros' },
    { id: 36, name: 'O Cortiço', price: 'R$ 18,00', type: 'Venda', category: 'livros' },
    { id: 37, name: 'Harry Potter', price: 'R$ 35,00', type: 'Troca', category: 'livros' },
    { id: 38, name: 'Senhor dos Anéis', price: 'R$ 45,00', type: 'Venda', category: 'livros' },
    { id: 39, name: 'Código Limpo', price: 'R$ 80,00', type: 'Troca', category: 'livros' },
    { id: 40, name: '1984 - Orwell', price: 'R$ 25,00', type: 'Venda', category: 'livros' },
    { id: 41, name: 'O Alquimista', price: 'R$ 20,00', type: 'Troca', category: 'livros' },
    { id: 42, name: 'Sapiens', price: 'R$ 40,00', type: 'Venda', category: 'livros' },
    { id: 43, name: 'Mindset', price: 'R$ 30,00', type: 'Troca', category: 'livros' },
    { id: 44, name: 'Atomic Habits', price: 'R$ 35,00', type: 'Venda', category: 'livros' },
    { id: 45, name: 'Clean Architecture', price: 'R$ 75,00', type: 'Troca', category: 'livros' },
    { id: 46, name: 'O Pequeno Príncipe', price: 'R$ 12,00', type: 'Venda', category: 'livros' },
    { id: 47, name: 'Cem Anos de Solidão', price: 'R$ 28,00', type: 'Troca', category: 'livros' },
    { id: 48, name: 'A Revolução dos Bichos', price: 'R$ 22,00', type: 'Venda', category: 'livros' },
    { id: 49, name: 'O Nome do Vento', price: 'R$ 38,00', type: 'Troca', category: 'livros' },
    { id: 50, name: 'Neuromancer', price: 'R$ 32,00', type: 'Venda', category: 'livros' }
];

// Função para mostrar página
function showPage(pageId) {
    // Esconder todas as páginas
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => page.style.display = 'none');
    
    // Mostrar a página solicitada
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.style.display = 'block';
        currentPage = pageId;
        
        // Carregar conteúdo específico da página
        if (pageId === 'home') {
            loadProducts();
            updateCartCount();
        } else if (pageId === 'carrinho') {
            loadCartItems();
        }
    }
}

// Função para carregar produtos
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    let filteredProducts = products;
    
    // Filtrar por categoria se necessário
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }
    
    // Calcular produtos para a página atual
    const startIndex = currentPageIndex * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Limpar grid
    productsGrid.innerHTML = '';
    
    // Adicionar produtos
    pageProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => openProduct(product);
        
        productCard.innerHTML = `
            <div class="product-image"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-type">${product.type}</p>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Atualizar contador de páginas
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const sectionCount = document.querySelector('.section-count');
    if (sectionCount) {
        sectionCount.textContent = `${currentPageIndex + 1}/${totalPages}`;
    }
}

// Função para abrir produto
function openProduct(product) {
    showPage('produto');
    
    // Atualizar informações do produto
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-type').textContent = product.type;
    document.getElementById('product-price').textContent = product.price;
    
    // Armazenar produto atual
    window.currentProduct = product;
    
    // Implementar lógica de exibição de botões baseada no tipo
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const tradeBtn = document.getElementById('trade-btn');
    
    if (product.type === 'Troca') {
        // Para produtos de troca: esconder botão de carrinho, mostrar botão de trocar
        if (addToCartBtn) addToCartBtn.style.display = 'none';
        if (tradeBtn) tradeBtn.style.display = 'block';
    } else if (product.type === 'Venda') {
        // Para produtos de venda: mostrar botão de carrinho, esconder botão de trocar
        if (addToCartBtn) addToCartBtn.style.display = 'block';
        if (tradeBtn) tradeBtn.style.display = 'none';
    }
}

// Função para filtrar por categoria
function filterByCategory(category) {
    currentCategory = category;
    currentPageIndex = 0;
    
    // Atualizar visual das categorias
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    
    const activeCard = document.querySelector(`[data-category="${category}"]`);
    if (activeCard) {
        activeCard.classList.add('active');
    }
    
    loadProducts();
}

// Função para pesquisar produtos
function searchProducts(query) {
    if (!query.trim()) {
        currentCategory = 'all';
        loadProducts();
        return;
    }
    
    const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    searchResults.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => openProduct(product);
        
        productCard.innerHTML = `
            <div class="product-image"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-type">${product.type}</p>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Funções do carrossel
function nextPage() {
    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === currentCategory);
    }
    
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (currentPageIndex < totalPages - 1) {
        currentPageIndex++;
        loadProducts();
    }
}

function previousPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        loadProducts();
    }
}

// Função para adicionar ao carrinho
function addToCart() {
    if (!window.currentProduct) return;
    
    const existingItem = cart.find(item => item.id === window.currentProduct.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...window.currentProduct,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    alert('Produto adicionado ao carrinho!');
}

// Função para atualizar contador do carrinho
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Função para carregar itens do carrinho
function loadCartItems() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
        const itemTotal = price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.onclick = () => showCartItemDetail(item);
        
        cartItem.innerHTML = `
            <div class="cart-item-image"></div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p class="cart-item-type">${item.type}</p>
                <p class="cart-item-price">${item.price} x ${item.quantity}</p>
            </div>
            <button class="remove-from-cart" onclick="removeFromCart(${item.id}); event.stopPropagation();">🗑️</button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Atualizar total
    const cartTotal = document.getElementById('cart-total');
    if (cartTotal) {
        cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

// Função para remover do carrinho com confirmação
function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    if (!product) return;
    
    const confirmRemoval = confirm(`Tem certeza que deseja remover "${product.name}" do carrinho?`);
    
    if (confirmRemoval) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        loadCartItems();
        
        // Se estiver na página de checkout, atualizar também
        if (currentPage === 'checkout') {
            loadCheckoutItems();
            calculateCheckoutTotals();
        }
    }
}

// Função para mostrar detalhes do item do carrinho
function showCartItemDetail(item) {
    const modal = document.getElementById('cart-detail-modal');
    const productName = document.getElementById('modal-product-name');
    const productPrice = document.getElementById('modal-product-price');
    const modalTotal = document.getElementById('modal-total');
    
    if (modal && productName && productPrice && modalTotal) {
        productName.textContent = item.name;
        productPrice.textContent = item.price;
        
        const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
        const shipping = 15.00;
        const total = price + shipping;
        
        modalTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        modal.style.display = 'block';
    }
}

// Função para fechar modal
function closeModal() {
    const modal = document.getElementById('cart-detail-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Funções do chat
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!chatInput || !chatMessages || !chatInput.value.trim()) return;
    
    const message = chatInput.value.trim();
    
    // Adicionar mensagem enviada
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message sent';
    messageDiv.innerHTML = `<div class="message-bubble">${message}</div>`;
    chatMessages.appendChild(messageDiv);
    
    // Limpar input
    chatInput.value = '';
    
    // Simular resposta automática
    setTimeout(() => {
        const responses = [
            'Entendi! Vamos conversar sobre isso.',
            'Que interessante! Me conte mais.',
            'Perfeito! Podemos fazer essa troca.',
            'Ótima ideia! Vamos negociar.',
            'Concordo com você!'
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const responseDiv = document.createElement('div');
        responseDiv.className = 'message received';
        responseDiv.innerHTML = `<div class="message-bubble">${randomResponse}</div>`;
        chatMessages.appendChild(responseDiv);
        
        // Scroll para baixo
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
    
    // Scroll para baixo
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function toggleAttachmentOptions() {
    const options = document.getElementById('attachment-options');
    if (options) {
        options.style.display = options.style.display === 'none' ? 'block' : 'none';
    }
}

function attachImage() {
    alert('Funcionalidade de anexar imagem será implementada em breve!');
    toggleAttachmentOptions();
}

function attachFile() {
    alert('Funcionalidade de anexar arquivo será implementada em breve!');
    toggleAttachmentOptions();
}

// Funções de formulários
function handleImageUpload(input) {
    if (input.files && input.files[0]) {
        const uploadArea = input.parentElement;
        const uploadText = uploadArea.querySelector('.upload-text');
        
        if (uploadText) {
            uploadText.textContent = 'Imagem selecionada: ' + input.files[0].name;
        }
    }
}

function submitProduct() {
    const name = document.getElementById('product-name-input').value;
    const price = document.getElementById('product-price-input').value;
    const category = document.getElementById('product-category-input').value;
    const description = document.getElementById('product-description-input').value;
    
    if (!name || !price || !category || !description) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    alert('Produto anunciado com sucesso!');
    showPage('home');
}

function handleLogin(event) {
    event.preventDefault();
    alert('Login realizado com sucesso!');
    showPage('home');
}

function handleSignup(event) {
    event.preventDefault();
    alert('Cadastro realizado com sucesso!');
    showPage('home');
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    showPage('checkout');
    loadCheckoutItems();
    calculateCheckoutTotals();
}

function proceedToPurchase() {
    alert('Redirecionando para o pagamento...');
    closeModal();
}

// Função para carregar itens na página de checkout
function loadCheckoutItems() {
    const checkoutItems = document.getElementById('checkout-items');
    if (!checkoutItems) return;
    
    if (cart.length === 0) {
        checkoutItems.innerHTML = '<p class="empty-cart">Nenhum item no carrinho</p>';
        return;
    }
    
    checkoutItems.innerHTML = '';
    
    cart.forEach(item => {
        const checkoutItem = document.createElement('div');
        checkoutItem.className = 'checkout-item';
        
        const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
        const itemTotal = price * item.quantity;
        
        checkoutItem.innerHTML = `
            <div class="checkout-item-image"></div>
            <div class="checkout-item-info">
                <h4>${item.name}</h4>
                <p class="checkout-item-type">${item.type}</p>
                <p class="checkout-item-quantity">Quantidade: ${item.quantity}</p>
                <p class="checkout-item-price">${item.price} cada</p>
                <p class="checkout-item-total"><strong>Subtotal: R$ ${itemTotal.toFixed(2).replace('.', ',')}</strong></p>
            </div>
        `;
        
        checkoutItems.appendChild(checkoutItem);
    });
}

// Função para calcular totais na página de checkout
function calculateCheckoutTotals() {
    let subtotal = 0;
    
    cart.forEach(item => {
        const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
        subtotal += price * item.quantity;
    });
    
    // Obter valor do frete selecionado
    const selectedDelivery = document.querySelector('input[name="delivery"]:checked');
    let shippingCost = 15.00; // Padrão
    
    if (selectedDelivery) {
        switch (selectedDelivery.value) {
            case 'standard':
                shippingCost = 15.00;
                break;
            case 'express':
                shippingCost = 25.00;
                break;
            case 'same-day':
                shippingCost = 35.00;
                break;
        }
    }
    
    const discount = 0; // Por enquanto sem desconto
    const total = subtotal + shippingCost - discount;
    
    // Atualizar elementos na página
    const subtotalElement = document.getElementById('subtotal-price');
    const shippingElement = document.getElementById('shipping-price');
    const discountElement = document.getElementById('discount-price');
    const totalElement = document.getElementById('final-total');
    
    if (subtotalElement) subtotalElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (shippingElement) shippingElement.textContent = `R$ ${shippingCost.toFixed(2).replace('.', ',')}`;
    if (discountElement) discountElement.textContent = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
    if (totalElement) totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Função para confirmar a compra
function confirmPurchase() {
    // Validar endereço
    const cep = document.getElementById('cep-input').value;
    const street = document.getElementById('street-input').value;
    const number = document.getElementById('number-input').value;
    const neighborhood = document.getElementById('neighborhood-input').value;
    const city = document.getElementById('city-input').value;
    
    if (!cep || !street || !number || !neighborhood || !city) {
        alert('Por favor, preencha todos os campos do endereço de entrega.');
        return;
    }
    
    // Obter método de pagamento selecionado
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (!selectedPayment) {
        alert('Por favor, selecione um método de pagamento.');
        return;
    }
    
    // Simular processamento da compra
    alert('Compra realizada com sucesso! Você receberá um e-mail de confirmação em breve.');
    
    // Limpar carrinho
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Voltar para a home
    showPage('home');
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartCount();
    
    // Event listeners para opções de entrega
    const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
    deliveryOptions.forEach(option => {
        option.addEventListener('change', calculateCheckoutTotals);
    });
});

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('cart-detail-modal');
    if (event.target === modal) {
        closeModal();
    }
}



// Variáveis para controle dos carrosséis das novas seções
let bestsellersPageIndex = 0;
let topRatedPageIndex = 0;

// Produtos mais vendidos (baseado em vendas simuladas)
const bestsellers = [
    { id: 18, name: 'Smartphone Samsung', price: 'R$ 800,00', type: 'Venda', category: 'eletronicos', sales: 150 },
    { id: 20, name: 'Notebook Dell', price: 'R$ 2500,00', type: 'Venda', category: 'eletronicos', sales: 89 },
    { id: 2, name: 'Jeans Skinny', price: 'R$ 80,00', type: 'Venda', category: 'roupas', sales: 78 },
    { id: 22, name: 'Smart TV 43"', price: 'R$ 1200,00', type: 'Venda', category: 'eletronicos', sales: 67 },
    { id: 6, name: 'Camisa Social', price: 'R$ 70,00', type: 'Venda', category: 'roupas', sales: 56 },
    { id: 38, name: 'Senhor dos Anéis', price: 'R$ 45,00', type: 'Venda', category: 'livros', sales: 45 },
    { id: 24, name: 'Câmera Canon', price: 'R$ 2200,00', type: 'Venda', category: 'eletronicos', sales: 34 },
    { id: 42, name: 'Sapiens', price: 'R$ 40,00', type: 'Venda', category: 'livros', sales: 32 },
    { id: 8, name: 'Jaqueta Jeans', price: 'R$ 90,00', type: 'Venda', category: 'roupas', sales: 29 },
    { id: 26, name: 'Caixa de Som JBL', price: 'R$ 180,00', type: 'Venda', category: 'eletronicos', sales: 28 }
];

// Produtos melhores avaliados (baseado em avaliações simuladas)
const topRated = [
    { id: 39, name: 'Código Limpo', price: 'R$ 80,00', type: 'Troca', category: 'livros', rating: 4.9 },
    { id: 23, name: 'Console PS5', price: 'R$ 3500,00', type: 'Troca', category: 'eletronicos', rating: 4.8 },
    { id: 41, name: 'O Alquimista', price: 'R$ 20,00', type: 'Troca', category: 'livros', rating: 4.8 },
    { id: 21, name: 'Tablet iPad', price: 'R$ 1800,00', type: 'Troca', category: 'eletronicos', rating: 4.7 },
    { id: 11, name: 'Blazer Feminino', price: 'R$ 85,00', type: 'Troca', category: 'roupas', rating: 4.7 },
    { id: 31, name: 'Drone DJI', price: 'R$ 1500,00', type: 'Troca', category: 'eletronicos', rating: 4.6 },
    { id: 45, name: 'Clean Architecture', price: 'R$ 75,00', type: 'Troca', category: 'livros', rating: 4.6 },
    { id: 3, name: 'Vestido Floral', price: 'R$ 60,00', type: 'Troca', category: 'roupas', rating: 4.5 },
    { id: 25, name: 'Smartwatch', price: 'R$ 350,00', type: 'Troca', category: 'eletronicos', rating: 4.5 },
    { id: 49, name: 'O Nome do Vento', price: 'R$ 38,00', type: 'Troca', category: 'livros', rating: 4.4 }
];

// Função para carregar produtos mais vendidos
function loadBestsellers() {
    const bestsellersGrid = document.getElementById('bestsellers-grid');
    if (!bestsellersGrid) return;
    
    const startIndex = bestsellersPageIndex * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = bestsellers.slice(startIndex, endIndex);
    
    bestsellersGrid.innerHTML = '';
    
    pageProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => openProduct(product);
        
        productCard.innerHTML = `
            <div class="product-image"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-type">${product.type}</p>
                <p class="product-price">${product.price}</p>
                <p class="product-sales">🔥 ${product.sales} vendas</p>
            </div>
        `;
        
        bestsellersGrid.appendChild(productCard);
    });
    
    // Atualizar contador
    const totalPages = Math.ceil(bestsellers.length / productsPerPage);
    const bestsellersCount = document.getElementById('bestsellers-count');
    if (bestsellersCount) {
        bestsellersCount.textContent = `${bestsellersPageIndex + 1}/${totalPages}`;
    }
}

// Função para carregar produtos melhores avaliados
function loadTopRated() {
    const topRatedGrid = document.getElementById('toprated-grid');
    if (!topRatedGrid) return;
    
    const startIndex = topRatedPageIndex * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = topRated.slice(startIndex, endIndex);
    
    topRatedGrid.innerHTML = '';
    
    pageProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => openProduct(product);
        
        productCard.innerHTML = `
            <div class="product-image"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-type">${product.type}</p>
                <p class="product-price">${product.price}</p>
                <p class="product-rating">⭐ ${product.rating}/5.0</p>
            </div>
        `;
        
        topRatedGrid.appendChild(productCard);
    });
    
    // Atualizar contador
    const totalPages = Math.ceil(topRated.length / productsPerPage);
    const topRatedCount = document.getElementById('toprated-count');
    if (topRatedCount) {
        topRatedCount.textContent = `${topRatedPageIndex + 1}/${totalPages}`;
    }
}

// Funções de navegação para produtos mais vendidos
function nextBestsellersPage() {
    const totalPages = Math.ceil(bestsellers.length / productsPerPage);
    if (bestsellersPageIndex < totalPages - 1) {
        bestsellersPageIndex++;
        loadBestsellers();
    }
}

function previousBestsellersPage() {
    if (bestsellersPageIndex > 0) {
        bestsellersPageIndex--;
        loadBestsellers();
    }
}

// Funções de navegação para produtos melhores avaliados
function nextTopRatedPage() {
    const totalPages = Math.ceil(topRated.length / productsPerPage);
    if (topRatedPageIndex < totalPages - 1) {
        topRatedPageIndex++;
        loadTopRated();
    }
}

function previousTopRatedPage() {
    if (topRatedPageIndex > 0) {
        topRatedPageIndex--;
        loadTopRated();
    }
}

// Atualizar a função showPage para carregar as novas seções
const originalShowPage = showPage;
showPage = function(pageId) {
    originalShowPage(pageId);
    
    if (pageId === 'home') {
        loadBestsellers();
        loadTopRated();
    }
};


// Função para salvar perfil do usuário
function saveProfile() {
    const profileData = {
        name: document.getElementById('profile-name').value,
        email: document.getElementById('profile-email').value,
        phone: document.getElementById('profile-phone').value,
        bio: document.getElementById('profile-bio').value,
        location: document.getElementById('profile-location').value
    };
    
    // Salvar no localStorage
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    
    // Mostrar mensagem de sucesso
    alert('Perfil salvo com sucesso!');
}

// Função para carregar dados do perfil
function loadProfile() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        const profileData = JSON.parse(savedProfile);
        
        document.getElementById('profile-name').value = profileData.name || 'João Silva';
        document.getElementById('profile-email').value = profileData.email || 'joao.silva@email.com';
        document.getElementById('profile-phone').value = profileData.phone || '(11) 99999-9999';
        document.getElementById('profile-bio').value = profileData.bio || 'Apaixonado por tecnologia e sustentabilidade. Adoro trocar e vender produtos que não uso mais!';
        document.getElementById('profile-location').value = profileData.location || 'São Paulo, SP';
    }
}

