const Ebook = require('../models/Ebook');

const getEbooks = async (req, res) => {
  try {
    const { page = 1, limit = 12 } = req.query;
    const ebooks = await Ebook.find({ isPublished: true }).skip((page - 1) * limit).limit(parseInt(limit)).populate('author', 'fullname');
    const total = await Ebook.countDocuments({ isPublished: true });
    res.json({ success: true, count: ebooks.length, total, pages: Math.ceil(total / limit), ebooks });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const getEbookById = async (req, res) => {
  try {
    const ebook = await Ebook.findById(req.params.id).populate('author', 'fullname email');
    if (!ebook) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true, ebook });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const createEbook = async (req, res) => {
  try {
    const { title, description, category, price, baseCurrency, fileUrl } = req.body;
    const ebook = new Ebook({ title, description, category, price, baseCurrency, fileUrl, author: req.user._id });
    await ebook.save();
    res.status(201).json({ success: true, ebook });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const updateEbook = async (req, res) => {
  try {
    let ebook = await Ebook.findById(req.params.id);
    if (!ebook) return res.status(404).json({ error: 'Not found' });
    ebook = await Ebook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, ebook });
  } catch (error) { res.status(400).json({ error: error.message }); }
};

const deleteEbook = async (req, res) => {
  try {
    const ebook = await Ebook.findById(req.params.id);
    if (!ebook) return res.status(404).json({ error: 'Not found' });
    await Ebook.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const searchEbooks = async (req, res) => {
  try {
    const { q, category } = req.query;
    let query = { isPublished: true };
    if (q) query.$text = { $search: q };
    if (category) query.category = category;
    const ebooks = await Ebook.find(query).populate('author', 'fullname');
    res.json({ success: true, count: ebooks.length, ebooks });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

module.exports = { getEbooks, getEbookById, createEbook, updateEbook, deleteEbook, searchEbooks };
