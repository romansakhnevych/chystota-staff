const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  date: String,
  orders: [[{ type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]],
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team'}
});

module.exports = mongoose.model('Report', reportSchema);
