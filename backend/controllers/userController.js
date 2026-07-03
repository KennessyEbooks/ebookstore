const User = require('../models/User');

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({ success: true, user });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
    res.json({ success: true, user });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user._id).select('+password');
    if (!(await user.matchPassword(currentPassword))) return res.status(401).json({ error: 'Incorrect' });
    user.password = newPassword;
    await user.save();
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('wishlist');
    res.json({ success: true, wishlist: user.wishlist });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const addToWishlist = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, { $addToSet: { wishlist: req.params.ebookId } }, { new: true }).populate('wishlist');
    res.json({ success: true, wishlist: user.wishlist });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

const removeFromWishlist = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, { $pull: { wishlist: req.params.ebookId } }, { new: true }).populate('wishlist');
    res.json({ success: true, wishlist: user.wishlist });
  } catch (error) { res.status(500).json({ error: error.message }); }
};

module.exports = { getUserProfile, updateProfile, changePassword, getWishlist, addToWishlist, removeFromWishlist };
