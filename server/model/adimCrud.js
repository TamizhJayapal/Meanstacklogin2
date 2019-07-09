const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productAddSchema = new Schema({
    productid: {
        type:number,
        required: true
    },
    productcatogary: {
        type: String,
        required: true
    },
    productname: {
        type: String,
        required: true
    },
    price: {
        type:number,
        required:true
    },
    pictureid: {
        type: number,
        required: true
    }
});

const productAdd = mongoose.model("productAdd", productAddSchema);

module.exports = productAdd;