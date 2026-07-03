// Main Application Logic for Kennessy Ebooks Store

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    displayEbooks();
    updatePaymentUI();
});

function initializeApp() {
    // Load user preferences
    const savedLanguage = localStorage.getItem('language') || 'en';
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
        languageSelect.value = savedLanguage;
    }

    // Get user's country from IP (or use default)
    detectUserCountry();
}

function detectUserCountry() {
    // In production, use IP geolocation service
    // For now, default to Nigeria
    const savedCountry = localStorage.getItem('userCountry');
    if (!savedCountry) {
        cartManager.userCountry = 'NG';
        localStorage.setItem('userCountry', 'NG');
    }
}

function displayEbooks() {
    const grid = document.getElementById('ebooks-grid');
    const ebooks = STORE_CONFIG.ebooks;
    
    grid.innerHTML = ebooks.map(ebook => {
        const country = cartManager.userCountry;
        const countryCurrency = STORE_CONFIG.supportedCountries[country];
        const convertedPrice = cartManager.convertPrice(ebook.price, ebook.baseCurrency);
        
        return `
            <div class="ebook-card">
                <div class="ebook-cover">${ebook.cover}</div>
                <div class="ebook-info">
                    <div class="ebook-category">${ebook.category}</div>
                    <div class="ebook-title">${ebook.title}</div>
                    <div class="ebook-author">by ${ebook.author}</div>
                    <div class="ebook-rating">
                        ${'★'.repeat(Math.floor(ebook.rating))}${ebook.rating % 1 >= 0.5 ? '½' : ''}
                        <span style="color: #7f8c8d;">(${ebook.reviews} reviews)</span>
                    </div>
                    <div class="ebook-description">${ebook.description}</div>
                    <div class="ebook-price">${countryCurrency.symbol} ${convertedPrice.toFixed(2)}</div>
                    <button class="btn btn-primary" onclick="addEbookToCart(${ebook.id})" style="width: 100%;">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function addEbookToCart(ebookId) {
    const ebook = STORE_CONFIG.ebooks.find(e => e.id === ebookId);
    if (ebook) {
        cartManager.addToCart(ebook);
    }
}

function filterEbooks() {
    const categoryFilter = document.getElementById('category-filter').value;
    const searchBox = document.getElementById('search-box').value.toLowerCase();
    
    const filtered = STORE_CONFIG.ebooks.filter(ebook => {
        const categoryMatch = categoryFilter === 'all' || ebook.category === categoryFilter;
        const searchMatch = ebook.title.toLowerCase().includes(searchBox) ||
                          ebook.author.toLowerCase().includes(searchBox) ||
                          ebook.description.toLowerCase().includes(searchBox);
        return categoryMatch && searchMatch;
    });

    const grid = document.getElementById('ebooks-grid');
    
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #7f8c8d;">No ebooks found matching your criteria.</p>';
        return;
    }

    const country = cartManager.userCountry;
    const countryCurrency = STORE_CONFIG.supportedCountries[country];
    
    grid.innerHTML = filtered.map(ebook => {
        const convertedPrice = cartManager.convertPrice(ebook.price, ebook.baseCurrency);
        
        return `
            <div class="ebook-card">
                <div class="ebook-cover">${ebook.cover}</div>
                <div class="ebook-info">
                    <div class="ebook-category">${ebook.category}</div>
                    <div class="ebook-title">${ebook.title}</div>
                    <div class="ebook-author">by ${ebook.author}</div>
                    <div class="ebook-rating">
                        ${'★'.repeat(Math.floor(ebook.rating))}${ebook.rating % 1 >= 0.5 ? '½' : ''}
                        <span style="color: #7f8c8d;">(${ebook.reviews} reviews)</span>
                    </div>
                    <div class="ebook-description">${ebook.description}</div>
                    <div class="ebook-price">${countryCurrency.symbol} ${convertedPrice.toFixed(2)}</div>
                    <button class="btn btn-primary" onclick="addEbookToCart(${ebook.id})" style="width: 100%;">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Close modals when clicking outside
window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    
    if (event.target == cartModal) {
        cartModal.style.display = 'none';
    }
    if (event.target == checkoutModal) {
        checkoutModal.style.display = 'none';
    }
};