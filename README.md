# Kennessy Ebooks Store

A professional ecommerce platform for selling farming and educational ebooks across Nigeria and African countries.

## 🌍 Features

### Supported Countries
- Nigeria (NGN)
- Kenya (KES)
- Ghana (GHS)
- Uganda (UGX)
- South Africa (ZAR)
- Tanzania (TZS)
- Cameroon (XAF)
- Ivory Coast (XOF)

### Payment Methods
- Credit/Debit Card (Stripe, Flutterwave)
- Mobile Money (MTN, Airtel, Safaricom M-Pesa, Telecel)
- Bank Transfer
- PayPal

### Multilingual Support
- English
- French (Français)
- Swahili (Kiswahili)
- Yoruba (Yorùbá)

### Ebook Categories
- Farming & Agriculture
- Education
- Business
- Health

## 📁 File Structure

```
KennessyEbooksStore/
├── index.html           # Main landing page
├── styles.css           # Styling and responsive design
├── config.js            # Store configuration, ebook data, exchange rates
├── i18n.js              # Internationalization (language support)
├── app.js               # Main application logic
├── cart-manager.js      # Shopping cart functionality
├── payment-handler.js   # Payment processing and checkout
├── backend-api.js       # Backend API integration (reference)
└── README.md            # Documentation
```

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/KennessyEbooks/KennessyEbooksStore.git
   cd KennessyEbooksStore
   ```

2. Open `index.html` in a web browser (for development)

3. For production:
   - Set up a backend server (Node.js/Express recommended)
   - Configure payment gateway credentials in environment variables
   - Deploy to hosting platform

## 💻 Development

### Adding New Ebooks

Edit `config.js` and add to the `STORE_CONFIG.ebooks` array:

```javascript
{
    id: 13,
    title: 'Your Ebook Title',
    author: 'Author Name',
    category: 'farming', // farming, education, business, health
    price: 2500,
    baseCurrency: 'NGN',
    description: 'Description of the ebook',
    cover: '📖', // Emoji or image URL
    rating: 4.8,
    reviews: 245,
    pages: 320
}
```

### Adding New Countries

Edit `config.js` and add to `STORE_CONFIG.supportedCountries`:

```javascript
XX: { 
    name: 'Country Name', 
    currency: 'XXX', 
    symbol: '€', 
    taxRate: 0.15 
}
```

### Adding New Languages

Edit `i18n.js` and add a new language object:

```javascript
xx: {
    'hero-title': 'Translated text...',
    // ... more translations
}
```

## 🔧 Configuration

### Environment Variables (Backend)

```bash
STRIPE_PUBLIC_KEY=pk_test_...
FLUTTERWAVE_PUBLIC_KEY=FLWR_PUB_...
PAYPAL_CLIENT_ID=...
MONGODB_URI=mongodb://...
NODE_ENV=production
```

### Exchange Rates

Update `EXCHANGE_RATES` in `config.js` to keep pricing accurate across currencies.

## 💳 Payment Integration

### Stripe Integration
```javascript
const stripe = Stripe('pk_test_...');
// Configure payment elements
```

### Flutterwave Integration
```javascript
Flutterwave.preLoad();
// Configure Flutterwave payment
```

### Mobile Money
- MTN Mobile Money
- Airtel Money
- Safaricom M-Pesa
- Telecel

## 📧 Email Notifications

When payment is successful:
1. Order confirmation email
2. Ebook download links
3. Order receipt
4. Updates on order status

## 🔒 Security Considerations

- **PCI Compliance**: Use payment gateway providers (Stripe, Flutterwave) for card processing
- **HTTPS Only**: Enforce HTTPS on production
- **Environment Variables**: Store sensitive keys in environment variables, not in code
- **Input Validation**: Validate all user inputs on both client and server
- **CORS Configuration**: Configure CORS properly for API endpoints
- **Rate Limiting**: Implement rate limiting on payment endpoints

## 📊 Analytics

Track:
- Page views
- Conversion rates
- Top-selling ebooks
- Revenue by country
- Payment method preferences

## 🤝 Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, contact: support@kennessyebooks.com

## 🎯 Roadmap

- [ ] User accounts and profiles
- [ ] Wishlist functionality
- [ ] Affiliate program
- [ ] Author dashboard
- [ ] Mobile app (React Native)
- [ ] Advanced analytics
- [ ] Subscription model for premium content
- [ ] Social sharing features
- [ ] Customer reviews and ratings
- [ ] Search engine optimization (SEO)

---

**Built with ❤️ for African learners and entrepreneurs**