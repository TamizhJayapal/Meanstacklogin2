const mongoose = require('mongoose');

const db = 'mongodb://localhost:27017/mean';
mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false});

module.exports = mongoose;

