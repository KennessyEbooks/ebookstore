// Payment Handler for Kennessy Ebooks Store

class PaymentHandler {
    constructor() {
        this.currentPaymentMethod = 'card';
        this.order = null;
    }

    setPaymentMethod(method) {
        this.currentPaymentMethod = method;
    }

    validatePaymentUI() {
        const method = document.getElementById('payment-method').value;
        switch(method) {
            case 'card':
                return this.validateCardPayment();
            case 'mobile-money':
                return this.validateMobileMoneyPayment();
            case 'bank-transfer':
                return this.validateBankTransferPayment();
            case 'paypal':
                return this.validatePayPalPayment();
            default:
                return false;
        }
    }

    validateCardPayment() {
        // Validate card inputs (in production, use Stripe/Flutterwave validation)
        return true;
    }

    validateMobileMoneyPayment() {
        // Validate mobile money inputs
        return true;
    }

    validateBankTransferPayment() {
        // Validate bank transfer inputs
        return true;
    }

    validatePayPalPayment() {
        // PayPal handles validation
        return true;
    }

    processPayment(orderData) {
        // This would typically call a backend endpoint
        return new Promise((resolve, reject) => {
            const method = document.getElementById('payment-method').value;
            
            switch(method) {
                case 'card':
                    this.processCardPayment(orderData).then(resolve).catch(reject);
                    break;
                case 'mobile-money':
                    this.processMobileMoneyPayment(orderData).then(resolve).catch(reject);
                    break;
                case 'bank-transfer':
                    this.processBankTransferPayment(orderData).then(resolve).catch(reject);
                    break;
                case 'paypal':
                    this.processPayPalPayment(orderData).then(resolve).catch(reject);
                    break;
            }
        });
    }

    processCardPayment(orderData) {
        return new Promise((resolve, reject) => {
            console.log('Processing card payment:', orderData);
            // In production, integrate with Stripe or Flutterwave
            setTimeout(() => {
                resolve({
                    success: true,
                    transactionId: 'TXN_' + Date.now(),
                    message: 'Payment processed successfully'
                });
            }, 2000);
        });
    }

    processMobileMoneyPayment(orderData) {
        return new Promise((resolve, reject) => {
            console.log('Processing mobile money payment:', orderData);
            // In production, integrate with MTN, Airtel, Safaricom, etc.
            setTimeout(() => {
                resolve({
                    success: true,
                    transactionId: 'MMY_' + Date.now(),
                    message: 'Payment processed via mobile money'
                });
            }, 3000);
        });
    }

    processBankTransferPayment(orderData) {
        return new Promise((resolve, reject) => {
            console.log('Processing bank transfer payment:', orderData);
            // In production, generate bank transfer details for user
            setTimeout(() => {
                resolve({
                    success: true,
                    transactionId: 'BNK_' + Date.now(),
                    message: 'Bank transfer details provided',
                    bankDetails: {
                        accountName: 'Kennessy Ebooks',
                        accountNumber: '1234567890',
                        bankName: 'Standard Bank',
                        amount: orderData.total
                    }
                });
            }, 1500);
        });
    }

    processPayPalPayment(orderData) {
        return new Promise((resolve, reject) => {
            console.log('Processing PayPal payment:', orderData);
            // In production, integrate with PayPal SDK
            setTimeout(() => {
                resolve({
                    success: true,
                    transactionId: 'PPL_' + Date.now(),
                    message: 'PayPal payment processed'
                });
            }, 2000);
        });
    }

    async saveOrder(orderData, paymentResult) {
        // Save order to backend
        try {
            const response = await fetch(API_ENDPOINTS.orders, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...orderData,
                    paymentResult,
                    timestamp: new Date().toISOString(),
                    status: 'completed'
                })
            });

            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Error saving order:', error);
            // Still return success as payment was processed
            return { orderId: 'ORD_' + Date.now() };
        }
    }
}

const paymentHandler = new PaymentHandler();

function updatePaymentUI() {
    const method = document.getElementById('payment-method').value;
    const paymentUIDiv = document.getElementById('payment-ui');
    
    let html = '';
    
    switch(method) {
        case 'card':
            html = `
                <div class="form-group">
                    <label>Card Number:</label>
                    <input type="text" placeholder="1234 5678 9012 3456" maxlength="19">
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label>Expiry Date:</label>
                        <input type="text" placeholder="MM/YY">
                    </div>
                    <div class="form-group">
                        <label>CVV:</label>
                        <input type="text" placeholder="123" maxlength="3">
                    </div>
                </div>
            `;
            break;
        case 'mobile-money':
            html = `
                <div class="form-group">
                    <label>Mobile Money Provider:</label>
                    <select>
                        <option>MTN Mobile Money (NG, GH, CM)</option>
                        <option>Airtel Money (GH, ZA)</option>
                        <option>Safaricom M-Pesa (KE)</option>
                        <option>Telecel (GH, CI)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Mobile Number:</label>
                    <input type="tel" placeholder="+234 800 000 0000">
                </div>
            `;
            break;
        case 'bank-transfer':
            html = `
                <div class="form-group" style="background-color: #f0f0f0; padding: 1rem; border-radius: 5px;">
                    <h4>Bank Transfer Details:</h4>
                    <p><strong>Account Name:</strong> Kennessy Ebooks</p>
                    <p><strong>Account Number:</strong> 1234567890</p>
                    <p><strong>Bank:</strong> Standard Bank</p>
                    <p><strong>Amount:</strong> ${cartManager.getTotal().toFixed(2)}</p>
                    <p style="font-size: 0.9rem; color: #7f8c8d;">Transfer the specified amount and your ebooks will be delivered after verification.</p>
                </div>
            `;
            break;
        case 'paypal':
            html = `
                <div class="form-group">
                    <p>You will be redirected to PayPal to complete the payment securely.</p>
                </div>
            `;
            break;
    }
    
    paymentUIDiv.innerHTML = html;
}

function handleCheckout(event) {
    event.preventDefault();
    
    if (cartManager.cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

    // Collect form data
    const orderData = {
        email: document.getElementById('email').value,
        fullname: document.getElementById('fullname').value,
        phone: document.getElementById('phone').value,
        country: document.getElementById('country').value,
        paymentMethod: document.getElementById('payment-method').value,
        items: cartManager.cart,
        subtotal: cartManager.getSubtotal(),
        tax: cartManager.getTax(),
        total: cartManager.getTotal()
    };

    // Update user's country
    cartManager.userCountry = orderData.country;
    localStorage.setItem('userCountry', orderData.country);

    // Validate payment
    if (!paymentHandler.validatePaymentUI()) {
        alert('Please fill in all payment details correctly');
        return;
    }

    // Show loading state
    const submitBtn = document.querySelector('[data-i18n="complete-payment"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    // Process payment
    paymentHandler.processPayment(orderData)
        .then(async (result) => {
            if (result.success) {
                // Save order
                const orderResult = await paymentHandler.saveOrder(orderData, result);
                
                // Clear cart
                cartManager.clearCart();
                
                // Show success message
                alert(`Payment successful! Your ebooks will be sent to ${orderData.email}`);
                closeCheckout();
                document.getElementById('checkout-form').reset();
            }
        })
        .catch((error) => {
            alert('Payment failed: ' + error.message);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
}

function handleContactSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    event.target.reset();
}