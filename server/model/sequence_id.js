const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sequenceSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    seq: {
        type: Number,
        default: 400500
    }
});

const seqModel  = mongoose.model('sequenceid', sequenceSchema);

module.exports = seqModel;