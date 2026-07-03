const express = require('express');
const { getEbooks, getEbookById, createEbook, updateEbook, deleteEbook, searchEbooks } = require('../controllers/ebookController');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

router.get('/', getEbooks);
router.get('/search', searchEbooks);
router.get('/:id', getEbookById);
router.post('/', protect, authorize('author', 'admin'), createEbook);
router.put('/:id', protect, authorize('author', 'admin'), updateEbook);
router.delete('/:id', protect, authorize('author', 'admin'), deleteEbook);

module.exports = router;
