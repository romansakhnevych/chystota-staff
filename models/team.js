const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  username: String,
  members: [String],
  percentage: Number
});

module.exports = mongoose.model('Team', teamSchema);