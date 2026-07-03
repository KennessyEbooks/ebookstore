const Order = require('../models/Order');
const Payment = require('../models/Payment');
const { stripe, paymentConfig } = require('../config/payment');
const axios = require('axios');

const processStripePayment = async (req, res) => {
  try {
    const { orderId, amount, currency, token } = req.body;
    const charge = await stripe.charges.create({
      amount: Math.round(amount * 100),
      currency: currency.toLowerCase(),
      source: token,
      description: 'Kennessy Ebooks'
    });
    const payment = new Payment({ orderId, user: req.user._id, amount, currency, gateway: 'stripe', transactionId: charge.id, status: 'completed' });
    await payment.save();
    res.json({ success: true, transactionId: charge.id });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const processFlutterwavePayment = async (req, res) => {
  try {
    const { orderId, amount, currency, email } = req.body;
    const response = await axios.post(`${paymentConfig.flutterwave.baseURL}/payments`, {
      tx_ref: orderId, amount, currency, customer: { email }
    }, { headers: { Authorization: `Bearer ${paymentConfig.flutterwave.secretKey}` } });
    res.json({ success: true, data: response.data });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const processPayPalPayment = async (req, res) => {
  try {
    const { orderId, amount, currency } = req.body;
    const auth = Buffer.from(`${paymentConfig.paypal.clientID}:${paymentConfig.paypal.clientSecret}`).toString('base64');
    const tokenResponse = await axios.post(`${paymentConfig.paypal.baseURL}/v1/oauth2/token`, 'grant_type=client_credentials',
      { headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/x-www-form-urlencoded' } });
    const accessToken = tokenResponse.data.access_token;
    const paymentResponse = await axios.post(`${paymentConfig.paypal.baseURL}/v2/checkout/orders`,
      { intent: 'CAPTURE', purchase_units: [{ amount: { currency_code: currency, value: amount } }] },
      { headers: { Authorization: `Bearer ${accessToken}` } });
    res.json({ success: true, orderId: paymentResponse.data.id });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const processMobileMoneyPayment = async (req, res) => {
  try {
    const { orderId, amount, currency, provider } = req.body;
    const payment = new Payment({ orderId, user: req.user._id, amount, currency, gateway: 'mobile-money', transactionId: 'MM_' + Date.now(), status: 'pending' });
    await payment.save();
    res.json({ success: true, message: 'Payment initiated', transactionId: payment.transactionId });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const getPaymentStatus = async (req, res) => {
  try {
    const payment = await Payment.findOne({ transactionId: req.params.transactionId });
    if (!payment) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true, status: payment.status });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

module.exports = { processStripePayment, processFlutterwavePayment, processPayPalPayment, processMobileMoneyPayment, getPaymentStatus };
