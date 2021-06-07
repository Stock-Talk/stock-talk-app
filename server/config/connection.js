const mongoose = require('mongoose');
const { deleteOne } = require('../models/Post');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/stock-talk', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;