const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true },
  password: { type: String, required: true, minlength: 6, select: false },
  country: { type: String, enum: ['NG', 'KE', 'GH', 'UG', 'ZA', 'TZ', 'CM', 'CI'], default: 'NG' },
  role: { type: String, enum: ['user', 'admin', 'author'], default: 'user' },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ebook' }],
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function(pwd) { return await bcryptjs.compare(pwd, this.password); };

module.exports = mongoose.model('User', userSchema);
