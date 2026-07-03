const express = require('express');
const { processStripePayment, processFlutterwavePayment, processPayPalPayment, processMobileMoneyPayment, getPaymentStatus } = require('../controllers/paymentController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/stripe', protect, processStripePayment);
router.post('/flutterwave', protect, processFlutterwavePayment);
router.post('/paypal', protect, processPayPalPayment);
router.post('/mobile-money', protect, processMobileMoneyPayment);
router.get('/status/:transactionId', getPaymentStatus);

module.exports = router;
