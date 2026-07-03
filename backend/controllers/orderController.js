const Order = require('../models/Order');

const createOrder = async (req, res) => {
  try {
    const { email, fullname, phone, country, items, paymentMethod, subtotal, tax, total, currency } = req.body;
    const order = new Order({ email, fullname, phone, country, items, paymentMethod, subtotal, tax, total, currency, user: req.user ? req.user._id : null });
    await order.save();
    res.status(201).json({ success: true, order });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.ebookId', 'title price');
    if (!order) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true, order });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, order });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Not found' });
    await Order.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

module.exports = { createOrder, getOrderById, updateOrder, cancelOrder };
