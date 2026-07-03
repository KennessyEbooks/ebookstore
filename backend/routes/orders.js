const express = require('express');
const { createOrder, getOrderById, updateOrder, cancelOrder } = require('../controllers/orderController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', createOrder);
router.get('/:id', getOrderById);
router.put('/:id', protect, updateOrder);
router.delete('/:id', protect, cancelOrder);

module.exports = router;
