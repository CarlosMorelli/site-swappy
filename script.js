// Estrutura de dados de produtos expandida
const productsData = [
    // Roupas
    { id: 1, name: "Camiseta Básica", price: "R$ 25.00", type: "Troca", category: "roupas", image: "placeholder" },
    { id: 2, name: "Jeans Skinny", price: "R$ 80.00", type: "Venda", category: "roupas", image: "placeholder" },
    { id: 3, name: "Vestido Floral", price: "R$ 60.00", type: "Troca", category: "roupas", image: "placeholder" },
    { id: 4, name: "Blazer Social", price: "R$ 120.00", type: "Venda", category: "roupas", image: "placeholder" },
    { id: 5, name: "Tênis Esportivo", price: "R$ 150.00", type: "Troca", category: "roupas", image: "placeholder" },
    { id: 6, name: "Casaco de Inverno", price: "R$ 200.00", type: "Venda", category: "roupas", image: "placeholder" },
    { id: 7, name: "Shorts Jeans", price: "R$ 45.00", type: "Troca", category: "roupas", image: "placeholder" },
    { id: 8, name: "Camisa Social", price: "R$ 70.00", type: "Venda", category: "roupas", image: "placeholder" },
    { id: 9, name: "Saia Midi", price: "R$ 55.00", type: "Troca", category: "roupas", image: "placeholder" },
    { id: 10, name: "Moletom", price: "R$ 90.00", type: "Venda", category: "roupas", image: "placeholder" },
    { id: 11, name: "Calça Legging", price: "R$ 35.00", type: "Troca", category: "roupas", image: "placeholder" },
    { id: 12, name: "Jaqueta Jeans", price: "R$ 110.00", type: "Venda", category: "roupas", image: "placeholder" },
    { id: 13, name: "Top Fitness", price: "R$ 30.00", type: "Troca", category: "roupas", image: "placeholder" },
    { id: 14, name: "Vestido Longo", price: "R$ 85.00", type: "Venda", category: "roupas", image: "placeholder" },
    { id: 15, name: "Bermuda Cargo", price: "R$ 50.00", type: "Troca", category: "roupas", image: "placeholder" },
    { id: 16, name: "Blusa de Tricô", price: "R$ 65.00", type: "Venda", category: "roupas", image: "placeholder" },
    { id: 17, name: "Calça Social", price: "R$ 95.00", type: "Troca", category: "roupas", image: "placeholder" },
    { id: 18, name: "Regata Básica", price: "R$ 20.00", type: "Venda", category: "roupas", image: "placeholder" },

    // Eletrônicos
    { id: 19, name: "Smartphone Samsung", price: "R$ 800.00", type: "Venda", category: "eletronicos", image: "placeholder" },
    { id: 20, name: "Notebook Dell", price: "R$ 2500.00", type: "Troca", category: "eletronicos", image: "placeholder" },
    { id: 21, name: "Fone Bluetooth", price: "R$ 150.00", type: "Venda", category: "eletronicos", image: "placeholder" },
    { id: 22, name: "Tablet iPad", price: "R$ 1200.00", type: "Troca", category: "eletronicos", image: "placeholder" },
    { id: 23, name: "Smart TV 50\"", price: "R$ 1800.00", type: "Venda", category: "eletronicos", image: "placeholder" },
    { id: 24, name: "Console PlayStation", price: "R$ 2000.00", type: "Troca", category: "eletronicos", image: "placeholder" },
    { id: 25, name: "Câmera Digital", price: "R$ 900.00", type: "Venda", category: "eletronicos", image: "placeholder" },
    { id: 26, name: "Smartwatch", price: "R$ 300.00", type: "Troca", category: "eletronicos", image: "placeholder" },
    { id: 27, name: "Caixa de Som", price: "R$ 200.00", type: "Venda", category: "eletronicos", image: "placeholder" },
    { id: 28, name: "Kindle E-reader", price: "R$ 400.00", type: "Troca", category: "eletronicos", image: "placeholder" },
    { id: 29, name: "Mouse Gamer", price: "R$ 120.00", type: "Venda", category: "eletronicos", image: "placeholder" },
    { id: 30, name: "Teclado Mecânico", price: "R$ 250.00", type: "Troca", category: "eletronicos", image: "placeholder" },
    { id: 31, name: "Monitor 24\"", price: "R$ 600.00", type: "Venda", category: "eletronicos", image: "placeholder" },
    { id: 32, name: "Drone", price: "R$ 1500.00", type: "Troca", category: "eletronicos", image: "placeholder" },
    { id: 33, name: "Carregador Portátil", price: "R$ 80.00", type: "Venda", category: "eletronicos", image: "placeholder" },
    { id: 34, name: "Webcam HD", price: "R$ 180.00", type: "Troca", category: "eletronicos", image: "placeholder" },

    // Livros
    { id: 35, name: "Dom Casmurro", price: "R$ 25.00", type: "Troca", category: "livros", image: "placeholder" },
    { id: 36, name: "O Alquimista", price: "R$ 30.00", type: "Venda", category: "livros", image: "placeholder" },
    { id: 37, name: "1984", price: "R$ 35.00", type: "Troca", category: "livros", image: "placeholder" },
    { id: 38, name: "Harry Potter", price: "R$ 45.00", type: "Venda", category: "livros", image: "placeholder" },
    { id: 39, name: "O Pequeno Príncipe", price: "R$ 20.00", type: "Troca", category: "livros", image: "placeholder" },
    { id: 40, name: "Código Limpo", price: "R$ 80.00", type: "Venda", category: "livros", image: "placeholder" },
    { id: 41, name: "Sapiens", price: "R$ 50.00", type: "Troca", category: "livros", image: "placeholder" },
    { id: 42, name: "O Hobbit", price: "R$ 40.00", type: "Venda", category: "livros", image: "placeholder" },
    { id: 43, name: "Mindset", price: "R$ 35.00", type: "Troca", category: "livros", image: "placeholder" },
    { id: 44, name: "Atomic Habits", price: "R$ 45.00", type: "Venda", category: "livros", image: "placeholder" },
    { id: 45, name: "Clean Architecture", price: "R$ 90.00", type: "Troca", category: "livros", image: "placeholder" },
    { id: 46, name: "O Poder do Hábito", price: "R$ 38.00", type: "Venda", category: "livros", image: "placeholder" },
    { id: 47, name: "Pai Rico Pai Pobre", price: "R$ 42.00", type: "Troca", category: "livros", image: "placeholder" },
    { id: 48, name: "A Arte da Guerra", price: "R$ 28.00", type: "Venda", category: "livros", image: "placeholder" },
    { id: 49, name: "Quem Mexeu no Meu Queijo", price: "R$ 25.00", type: "Troca", category: "livros", image: "placeholder" },
    { id: 50, name: "O Monge e o Executivo", price: "R$ 32.00", type: "Venda", category: "livros", image: "placeholder" },
    { id: 51, name: "Inteligência Emocional", price: "R$ 48.00", type: "Troca", category: "livros", image: "placeholder" },
    { id: 52, name: "Como Fazer Amigos", price: "R$ 36.00", type: "Venda", category: "livros", image: "placeholder" }
];

// Sistema de carrinho
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Sistema de carrossel
let currentProductPage = 0;
let currentProducerPage = 0;
const productsPerPage = 4;
const producersPerPage = 3;

// Filtro atual
let currentFilter = 'all';

// Sistema de navegação entre páginas
class PageManager {
    constructor() {
        this.currentPage = 'home';
        this.pages = ['home', 'produto', 'anunciar', 'chat', 'login', 'signup', 'carrinho', 'chat-list'];
        this.init();
    }

    init() {
        this.showPage('home');
        this.addEventListeners();
        this.renderProducts();
        this.updateCartCount();
    }

    showPage(pageName) {
        // Esconder todas as páginas
        this.pages.forEach(page => {
            const pageElement = document.getElementById(`${page}-page`);
            if (pageElement) {
                pageElement.style.display = 'none';
            }
        });

        // Mostrar a página solicitada
        const targetPage = document.getElementById(`${pageName}-page`);
        if (targetPage) {
            targetPage.style.display = 'block';
            this.currentPage = pageName;
            
            // Atualizar conteúdo específico da página
            if (pageName === 'carrinho') {
                this.renderCart();
            } else if (pageName === 'home') {
                this.renderProducts();
            }
        } else {
            console.error(`Página ${pageName} não encontrada`);
        }
    }

    addEventListeners() {
        // Event listeners para formulários
        document.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(e);
        });

        // Event listeners para categorias
        document.addEventListener('click', (e) => {
            if (e.target.closest('.category-card')) {
                const categoryCard = e.target.closest('.category-card');
                const categoryText = categoryCard.querySelector('span').textContent.toLowerCase();
                let category = 'all';
                
                if (categoryText.includes('roupas')) category = 'roupas';
                else if (categoryText.includes('eletrônicos')) category = 'eletronicos';
                else if (categoryText.includes('livros')) category = 'livros';
                
                this.filterByCategory(category);
            }
        });

        // Event listeners para carrinho
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                const productId = parseInt(e.target.dataset.productId);
                this.addToCart(productId);
            }
            
            if (e.target.classList.contains('remove-from-cart')) {
                const productId = parseInt(e.target.dataset.productId);
                this.removeFromCart(productId);
            }
        });

        // Event listeners para carrossel
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('carousel-prev')) {
                this.previousProducts();
            }
            if (e.target.classList.contains('carousel-next')) {
                this.nextProducts();
            }
        });

        // Event listeners para inputs de chat
        document.addEventListener('keypress', (e) => {
            if (e.target.classList.contains('chat-input') && e.key === 'Enter') {
                this.sendMessage(e.target);
            }
        });

        // Event listeners para botões de envio de mensagem
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('send-btn')) {
                const input = e.target.parentElement.querySelector('.chat-input');
                this.sendMessage(input);
            }
        });
    }

    filterByCategory(category) {
        currentFilter = category;
        currentProductPage = 0;
        this.renderProducts();
        
        // Atualizar indicador visual das categorias
        document.querySelectorAll('.category-card').forEach(card => {
            card.classList.remove('active');
        });
        
        if (category !== 'all') {
            const categoryCards = document.querySelectorAll('.category-card');
            categoryCards.forEach(card => {
                const text = card.querySelector('span').textContent.toLowerCase();
                if ((category === 'roupas' && text.includes('roupas')) ||
                    (category === 'eletronicos' && text.includes('eletrônicos')) ||
                    (category === 'livros' && text.includes('livros'))) {
                    card.classList.add('active');
                }
            });
        }
    }

    getFilteredProducts() {
        if (currentFilter === 'all') {
            return productsData;
        }
        return productsData.filter(product => product.category === currentFilter);
    }

    renderProducts() {
        const filteredProducts = this.getFilteredProducts();
        const startIndex = currentProductPage * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);
        
        const productsGrid = document.querySelector('.products-grid');
        if (productsGrid) {
            productsGrid.innerHTML = '';
            
            productsToShow.forEach(product => {
                const productCard = this.createProductCard(product);
                productsGrid.appendChild(productCard);
            });
            
            // Atualizar contador
            const sectionCount = document.querySelector('.section-count');
            if (sectionCount) {
                const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
                sectionCount.textContent = `${currentProductPage + 1}/${totalPages} >`;
            }
            
            // Atualizar botões de navegação
            this.updateCarouselButtons(filteredProducts.length);
        }
    }

    createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => this.showProductDetails(product);
        
        productCard.innerHTML = `
            <div class="product-image"></div>
            <div class="product-info">
                <h3>${product.type}</h3>
                <p class="product-price">${product.price}</p>
                <p class="product-name">${product.name}</p>
                <button class="add-to-cart" data-product-id="${product.id}" onclick="event.stopPropagation()">
                    Adicionar ao Carrinho
                </button>
            </div>
        `;
        
        return productCard;
    }

    showProductDetails(product) {
        // Atualizar página de produto com detalhes específicos
        const productPage = document.getElementById('produto-page');
        if (productPage) {
            const productName = productPage.querySelector('h2');
            const productType = productPage.querySelector('.product-type');
            const addToCartBtn = productPage.querySelector('.btn-primary');
            
            if (productName) productName.textContent = product.name;
            if (productType) productType.textContent = product.type;
            if (addToCartBtn) {
                addToCartBtn.textContent = product.type === 'Troca' ? 'Quero trocar' : 'Quero comprar';
                addToCartBtn.onclick = () => {
                    this.addToCart(product.id);
                    this.showPage('chat');
                };
            }
        }
        
        this.showPage('produto');
    }

    updateCarouselButtons(totalProducts) {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        const hasNext = currentProductPage < totalPages - 1;
        const hasPrev = currentProductPage > 0;
        
        // Adicionar botões se não existirem
        let carouselContainer = document.querySelector('.carousel-controls');
        if (!carouselContainer) {
            carouselContainer = document.createElement('div');
            carouselContainer.className = 'carousel-controls';
            carouselContainer.innerHTML = `
                <button class="carousel-btn carousel-prev">‹</button>
                <button class="carousel-btn carousel-next">›</button>
            `;
            
            const productsSection = document.querySelector('.products-section');
            if (productsSection) {
                productsSection.appendChild(carouselContainer);
            }
        }
        
        const prevBtn = carouselContainer.querySelector('.carousel-prev');
        const nextBtn = carouselContainer.querySelector('.carousel-next');
        
        if (prevBtn) prevBtn.disabled = !hasPrev;
        if (nextBtn) nextBtn.disabled = !hasNext;
    }

    nextProducts() {
        const filteredProducts = this.getFilteredProducts();
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        
        if (currentProductPage < totalPages - 1) {
            currentProductPage++;
            this.renderProducts();
        }
    }

    previousProducts() {
        if (currentProductPage > 0) {
            currentProductPage--;
            this.renderProducts();
        }
    }

    addToCart(productId) {
        const product = productsData.find(p => p.id === productId);
        if (product && !cart.find(item => item.id === productId)) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            this.updateCartCount();
            
            // Feedback visual
            this.showNotification(`${product.name} adicionado ao carrinho!`);
        }
    }

    removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        this.updateCartCount();
        this.renderCart();
    }

    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }

    renderCart() {
        const cartContainer = document.querySelector('.cart-items');
        if (cartContainer) {
            cartContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
                return;
            }
            
            cart.forEach(product => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image"></div>
                    <div class="cart-item-info">
                        <h3>${product.name}</h3>
                        <p class="cart-item-type">${product.type}</p>
                        <p class="cart-item-price">${product.price}</p>
                    </div>
                    <button class="remove-from-cart" data-product-id="${product.id}">Remover</button>
                `;
                cartContainer.appendChild(cartItem);
            });
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    handleFormSubmit(e) {
        const form = e.target;
        
        if (form.closest('#login-page')) {
            this.handleLogin(form);
        } else if (form.closest('#signup-page')) {
            this.handleSignup(form);
        }
    }

    handleLogin(form) {
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;
        
        if (email && password) {
            this.showNotification('Login realizado com sucesso!');
            this.showPage('home');
        } else {
            this.showNotification('Por favor, preencha todos os campos.');
        }
    }

    handleSignup(form) {
        const inputs = form.querySelectorAll('input');
        let allFilled = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });
        
        if (allFilled) {
            const password = form.querySelector('input[type="password"]').value;
            const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;
            
            if (password === confirmPassword) {
                this.showNotification('Conta criada com sucesso!');
                this.showPage('home');
            } else {
                this.showNotification('As senhas não coincidem.');
            }
        } else {
            this.showNotification('Por favor, preencha todos os campos.');
        }
    }

    sendMessage(input) {
        const message = input.value.trim();
        if (!message) return;

        const chatMessages = document.querySelector('.chat-messages');
        if (chatMessages) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message sent';
            messageDiv.innerHTML = `<div class="message-bubble">${message}</div>`;
            
            chatMessages.appendChild(messageDiv);
            input.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            setTimeout(() => {
                const responseDiv = document.createElement('div');
                responseDiv.className = 'message received';
                responseDiv.innerHTML = `<div class="message-bubble">Obrigado pela mensagem! Em breve entrarei em contato.</div>`;
                
                chatMessages.appendChild(responseDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }
}

// Função global para navegação
function showPage(pageName) {
    if (window.pageManager) {
        window.pageManager.showPage(pageName);
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    window.pageManager = new PageManager();
    console.log('Site Troca inicializado com funcionalidades expandidas!');
});

