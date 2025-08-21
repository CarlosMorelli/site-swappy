// Sistema de navegação entre páginas
class PageManager {
    constructor() {
        this.currentPage = 'home';
        this.pages = ['home', 'produto', 'anunciar', 'chat', 'login', 'signup'];
        this.init();
    }

    init() {
        // Carregar todas as páginas no DOM
        this.loadAllPages();
        
        // Mostrar apenas a página inicial
        this.showPage('home');
        
        // Adicionar event listeners
        this.addEventListeners();
    }

    async loadAllPages() {
        const container = document.body;
        
        // Carregar cada página HTML
        for (const page of this.pages) {
            if (page === 'home') continue; // Home já está carregada
            
            try {
                const response = await fetch(`${page}.html`);
                const html = await response.text();
                
                // Extrair apenas o conteúdo do container da página
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const pageContent = doc.querySelector('.container');
                
                if (pageContent) {
                    pageContent.style.display = 'none';
                    container.appendChild(pageContent);
                }
            } catch (error) {
                console.error(`Erro ao carregar página ${page}:`, error);
            }
        }
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

    handleFormSubmit(e) {
        const form = e.target;
        
        if (form.closest('#login-page')) {
            this.handleLogin(form);
        } else if (form.closest('#signup-page')) {
            this.handleSignup(form);
        }
    }

    handleLogin(form) {
        // Simular login
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;
        
        if (email && password) {
            alert('Login realizado com sucesso!');
            this.showPage('home');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    handleSignup(form) {
        // Simular cadastro
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
                alert('Conta criada com sucesso!');
                this.showPage('home');
            } else {
                alert('As senhas não coincidem.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    sendMessage(input) {
        const message = input.value.trim();
        if (!message) return;

        const chatMessages = document.querySelector('.chat-messages');
        if (chatMessages) {
            // Criar nova mensagem enviada
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message sent';
            messageDiv.innerHTML = `<div class="message-bubble">${message}</div>`;
            
            chatMessages.appendChild(messageDiv);
            
            // Limpar input
            input.value = '';
            
            // Scroll para baixo
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Simular resposta automática após 1 segundo
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

// Função global para navegação (chamada pelos botões)
function showPage(pageName) {
    if (window.pageManager) {
        window.pageManager.showPage(pageName);
    }
}

// Funções específicas para interações
function toggleCategory(element) {
    element.classList.toggle('active');
}

function toggleTradeAcceptance() {
    const toggle = document.getElementById('aceito-trocas');
    const label = toggle.nextElementSibling;
    
    if (toggle.checked) {
        label.style.background = '#C0392B';
    } else {
        label.style.background = '#ccc';
    }
}

function handleImageUpload(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const uploadArea = input.closest('.upload-area');
            const placeholder = uploadArea.querySelector('.upload-placeholder');
            
            // Criar preview da imagem
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '10px';
            
            placeholder.innerHTML = '';
            placeholder.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

// Adicionar interatividade aos cards de produto
function addProductInteractivity() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.product-card')) {
            showPage('produto');
        }
    });
}

// Adicionar efeitos de hover e animações
function addAnimations() {
    // Animação de entrada para cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar todos os cards
    document.querySelectorAll('.product-card, .category-card, .producer-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Função para simular carregamento de dados
function simulateDataLoading() {
    // Simular carregamento de produtos recentes
    setTimeout(() => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, index * 100);
        });
    }, 500);
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar o gerenciador de páginas
    window.pageManager = new PageManager();
    
    // Adicionar funcionalidades extras
    addProductInteractivity();
    addAnimations();
    simulateDataLoading();
    
    // Adicionar event listener para upload de imagem
    document.addEventListener('change', (e) => {
        if (e.target.type === 'file') {
            handleImageUpload(e.target);
        }
    });
    
    // Adicionar event listener para toggle de trocas
    document.addEventListener('change', (e) => {
        if (e.target.id === 'aceito-trocas') {
            toggleTradeAcceptance();
        }
    });
    
    console.log('Site Troca inicializado com sucesso!');
});

// Função para adicionar produtos dinamicamente (exemplo)
function addProduct(name, price, type, image) {
    const productsGrid = document.querySelector('.products-grid');
    if (productsGrid) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => showPage('produto');
        
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${image}')"></div>
            <div class="product-info">
                <h3>${type}</h3>
                <p class="product-price">${price}</p>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    }
}

// Função para atualizar contador de produtos
function updateProductCount() {
    const productCards = document.querySelectorAll('.product-card');
    const countElement = document.querySelector('.section-count');
    if (countElement) {
        countElement.textContent = `${productCards.length} >`;
    }
}

