const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    name: {
        type:String,
        trim:true,
        required: true
    },
    email:{
        type:String,
        trim:true
    },
    subject:{
        type:String,
        trim:true
    },
    message: {
        type:String,
        trim:true,
        required: true
    }
});


const feedModel = mongoose.model('feedback', feedSchema);

module.exports = feedModel;