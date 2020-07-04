const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  key: String,
  createdAt: Date,
  totalCount: Number
});

module.exports = mongoose.model('records', RecordSchema);