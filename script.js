// Nelton Cereals & Groceries - Professional JavaScript Implementation

// Product Data - Enhanced with professional details
const cereals = [
    {
        id: 1,
        name: "Premium White Maize",
        description: "Premium quality white maize, clean and well-sorted. Ideal for animal feed and food processing. Certified organic and non-GMO.",
        price: 45,
        image: "🌽",
        tags: ["bulk", "wholesale", "certified"],
        category: "cereals",
        specifications: {
            purity: "99.5%",
            moisture: "≤14%",
            origin: "Kenya",
            certification: "KEBS Certified"
        }
    },
    {
        id: 2,
        name: "Premium Yellow Maize",
        description: "Premium yellow maize for animal feed and processing. High protein content and consistent quality. Available in bulk quantities.",
        price: 42,
        image: "🌽",
        tags: ["bulk", "feed", "export"],
        category: "cereals",
        specifications: {
            purity: "99.2%",
            moisture: "≤13%",
            origin: "Kenya",
            certification: "KEBS Certified"
        }
    },
    {
        id: 3,
        name: "Premium Green Grams",
        description: "Premium quality green grams, well-sorted and export-ready. High protein content and consistent quality. Available in bulk.",
        price: 120,
        image: "🫘",
        tags: ["legumes", "export", "premium"],
        category: "legumes",
        specifications: {
            purity: "99.8%",
            moisture: "≤12%",
            origin: "Kenya",
            certification: "KEBS Certified"
        }
    },
    {
        id: 4,
        name: "Premium Red Kidney Beans",
        description: "Premium red kidney beans, export-ready and certified. High protein content and consistent quality. Available in bulk.",
        price: 150,
        image: "🫘",
        tags: ["legumes", "export", "premium"],
        category: "legumes",
        specifications: {
            purity: "99.5%",
            moisture: "≤12%",
            origin: "Kenya",
            certification: "KEBS Certified"
        }
    },
    {
        id: 5,
        name: "Premium White Beans",
        description: "Premium white beans, export-ready and certified. High protein content and consistent quality. Available in bulk.",
        price: 140,
        image: "🫘",
        tags: ["legumes", "export", "premium"],
        category: "legumes",
        specifications: {
            purity: "99.7%",
            moisture: "≤12%",
            origin: "Kenya",
            certification: "KEBS Certified"
        }
    },
    {
        id: 6,
        name: "Premium Sorghum",
        description: "Premium sorghum, well-sorted and certified. High protein content and consistent quality. Available in bulk.",
        price: 55,
        image: "🌾",
        tags: ["cereals", "bulk", "premium"],
        category: "cereals",
        specifications: {
            purity: "99.5%",
            moisture: "≤12%",
            origin: "Kenya",
            certification: "KEBS Certified"
        }
    },
    {
        id: 7,
        name: "Premium Millet",
        description: "Premium millet, well-sorted and certified. High protein content and consistent quality. Available in bulk.",
        price: 80,
        image: "🌾",
        tags: ["cereals", "bulk", "premium"],
        category: "cereals",
        specifications: {
            purity: "99.5%",
            moisture: "≤12%",
            origin: "Kenya",
            certification: "KEBS Certified"
        }
    },
    {
        id: 8,
        name: "Premium Black Beans",
        description: "Premium black beans, export-ready and certified. High protein content and consistent quality. Available in bulk.",
        price: 160,
        image: "🫘",
        tags: ["legumes", "export", "premium"],
        category: "legumes",
        specifications: {
            purity: "99.5%",
            moisture: "≤12%",
            origin: "Kenya",
            certification: "KEBS Certified"
        }
    },
    {
        id: 9,
        name: "Premium Rice",
        description: "Premium rice, well-sorted and certified. High protein content and consistent quality. Available in bulk.",
        price: 85,
        image: "🍚",
        tags: ["cereals", "bulk", "premium"],
        category: "cereals",
        specifications: {
            purity: "99.5%",
            moisture: "≤12%",
            origin: "Kenya",
            certification: "KEBS Certified"
        }
    }
];

// Enhanced JavaScript functionality
let cart = [];
let currentFilter = 'all';
let inquiryCount = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadProducts();
    setupEventListeners();
});

// Initialize application
function initializeApp() {
    loadProducts();
    setupEventListeners();
    setupMobileMenu();
    setupScrollEffects();
}

// Load products
function loadProducts() {
    displayProducts(cereals);
    setupFilterSystem();
}

// Display products
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    const filteredProducts = currentFilter === 'all' ? products : products.filter(product => 
        product.category === currentFilter || product.tags.includes(currentFilter)
    );
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <div class="product-placeholder">
                <i class="fas fa-seedling"></i>
                <p>${product.name}</p>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-specs">
                <span class="spec-item">Purity: ${product.specifications.purity}</span>
                <span class="spec-item">Moisture: ${product.specifications.moisture}</span>
                <span class="spec-item">Origin: ${product.specifications.origin}</span>
            </div>
            <div class="product-price">KSh ${product.price}/kg</div>
            <button class="inquiry-btn" onclick="addToInquiry(${product.id})">
                <i class="fas fa-phone"></i> Get Quote
            </button>
        </div>
    `;
    return card;
}

// Setup filter system
function setupFilterSystem() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            displayProducts(cereals);
        });
    });
}

// Add to inquiry
function addToInquiry(productId) {
    const product = cereals.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    inquiryCount++;
    updateInquiryCount();
    displayInquiryItems();
}

// Update inquiry count
function updateInquiryCount() {
    const inquiryCountElement = document.querySelector('.inquiry-count');
    if (inquiryCountElement) {
        inquiryCountElement.textContent = inquiryCount;
    }
}

// Display inquiry items
function displayInquiryItems() {
    const inquiryItems = document.getElementById('inquiryItems');
    if (inquiryItems) {
        inquiryItems.innerHTML = cart.map(item => `
            <div class="inquiry-item">
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity} kg</p>
                <p>Price: KSh ${item.price * item.quantity}</p>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const totalElement = document.getElementById('inquiryTotal');
        if (totalElement) {
            totalElement.textContent = total;
        }
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
    
    // Scroll effects
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'white';
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Setup scroll effects
function setupScrollEffects() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'white';
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenu-toggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
}

// Initialize mobile menu
function setupMobile menu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenu-toggle) {
        const nav
