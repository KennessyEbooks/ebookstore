const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const paymentConfig = {
  stripe: {
    publicKey: process.env.STRIPE_PUBLIC_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY
  },
  flutterwave: {
    publicKey: process.env.FLUTTERWAVE_PUBLIC_KEY,
    secretKey: process.env.FLUTTERWAVE_SECRET_KEY,
    baseURL: 'https://api.flutterwave.com/v3'
  },
  paypal: {
    mode: process.env.PAYPAL_MODE || 'sandbox',
    clientID: process.env.PAYPAL_CLIENT_ID,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET,
    baseURL: process.env.PAYPAL_MODE === 'live' ? 'https://api.paypal.com' : 'https://api.sandbox.paypal.com'
  }
};

module.exports = { stripe, paymentConfig };
