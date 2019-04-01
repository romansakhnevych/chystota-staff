const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  username: String,
  total: Number,
  items: [String]
});

module.exports = mongoose.model('Order', orderSchema);