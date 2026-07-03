const mongoose = require('mongoose');

const ebookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['farming', 'education', 'business', 'health'], required: true },
  price: { type: Number, required: true },
  baseCurrency: { type: String, default: 'NGN' },
  fileUrl: { type: String, required: true },
  pages: Number,
  rating: { type: Number, default: 0, min: 0, max: 5 },
  reviews: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: false },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ebook', ebookSchema);
