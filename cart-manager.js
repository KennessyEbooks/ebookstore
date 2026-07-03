// Shopping Cart Manager for Kennessy Ebooks Store

class CartManager {
    constructor() {
        this.cart = this.loadCart();
        this.userCountry = localStorage.getItem('userCountry') || 'NG';
        this.updateCartCount();
    }

    loadCart() {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateCartCount();
    }

    addToCart(ebook) {
        // Check if ebook already in cart
        const existing = this.cart.find(item => item.id === ebook.id);
        if (existing) {
            existing.quantity = (existing.quantity || 1) + 1;
        } else {
            this.cart.push({
                ...ebook,
                quantity: 1,
                addedDate: new Date().toISOString()
            });
        }
        this.saveCart();
        this.showNotification(`Added "${ebook.title}" to cart`);
    }

    removeFromCart(ebookId) {
        this.cart = this.cart.filter(item => item.id !== ebookId);
        this.saveCart();
    }

    updateQuantity(ebookId, quantity) {
        const item = this.cart.find(item => item.id === ebookId);
        if (item && quantity > 0) {
            item.quantity = quantity;
            this.saveCart();
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    getSubtotal() {
        return this.cart.reduce((total, item) => {
            return total + (this.convertPrice(item.price, item.baseCurrency) * (item.quantity || 1));
        }, 0);
    }

    getTaxRate() {
        return STORE_CONFIG.supportedCountries[this.userCountry]?.taxRate || 0.075;
    }

    getTax() {
        return this.getSubtotal() * this.getTaxRate();
    }

    getTotal() {
        return this.getSubtotal() + this.getTax();
    }

    convertPrice(price, fromCurrency) {
        // Convert from original currency to user's country currency
        const userCountryCurrency = STORE_CONFIG.supportedCountries[this.userCountry].currency;
        const basePrice = price / EXCHANGE_RATES[fromCurrency];
        return basePrice * EXCHANGE_RATES[userCountryCurrency];
    }

    updateCartCount() {
        const count = this.cart.reduce((total, item) => total + (item.quantity || 1), 0);
        const badge = document.getElementById('cart-count');
        if (badge) {
            badge.textContent = count;
        }
    }

    showNotification(message) {
        // Create simple notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #27ae60;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    displayCart() {
        const cartItemsDiv = document.getElementById('cart-items');
        if (!cartItemsDiv) return;

        if (this.cart.length === 0) {
            cartItemsDiv.innerHTML = '<p style="text-align: center; color: #7f8c8d;">Your cart is empty</p>';
            document.querySelector('[data-i18n="checkout-btn"]').disabled = true;
            return;
        }

        const countryCurrency = STORE_CONFIG.supportedCountries[this.userCountry];
        cartItemsDiv.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">
                        ${countryCurrency.symbol} ${this.convertPrice(item.price, item.baseCurrency).toFixed(2)} x ${item.quantity || 1}
                    </div>
                </div>
                <button class="btn btn-secondary" onclick="cartManager.removeFromCart(${item.id}); cartManager.displayCart(); cartManager.updateSummary();">Remove</button>
            </div>
        `).join('');

        this.updateSummary();
    }

    updateSummary() {
        const countryCurrency = STORE_CONFIG.supportedCountries[this.userCountry];
        document.getElementById('subtotal').textContent = `${countryCurrency.symbol} ${this.getSubtotal().toFixed(2)}`;
        document.getElementById('tax').textContent = `${countryCurrency.symbol} ${this.getTax().toFixed(2)}`;
        document.getElementById('total').textContent = `${countryCurrency.symbol} ${this.getTotal().toFixed(2)}`;
    }
}

// Initialize cart manager
const cartManager = new CartManager();

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        cartManager.displayCart();
    }
}

function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

function proceedToCheckout() {
    if (cartManager.cart.length === 0) {
        alert('Your cart is empty. Please add items before checkout.');
        return;
    }
    document.getElementById('cart-modal').style.display = 'none';
    document.getElementById('checkout-modal').style.display = 'block';
    // Prefill country from localStorage
    const countrySelect = document.getElementById('country');
    if (cartManager.userCountry) {
        countrySelect.value = cartManager.userCountry;
    }
}