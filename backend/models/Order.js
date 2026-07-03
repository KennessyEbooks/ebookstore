const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, unique: true, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  email: { type: String, required: true },
  fullname: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, enum: ['NG', 'KE', 'GH', 'UG', 'ZA', 'TZ', 'CM', 'CI'], required: true },
  items: [{ ebookId: mongoose.Schema.Types.ObjectId, title: String, price: Number, quantity: { type: Number, default: 1 } }],
  subtotal: Number,
  tax: Number,
  total: Number,
  currency: String,
  paymentMethod: { type: String, enum: ['card', 'mobile-money', 'bank-transfer', 'paypal'] },
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  transactionId: String,
  createdAt: { type: Date, default: Date.now }
});

orderSchema.pre('save', function(next) { if (!this.orderId) this.orderId = 'ORD_' + Date.now(); next(); });

module.exports = mongoose.model('Order', orderSchema);
