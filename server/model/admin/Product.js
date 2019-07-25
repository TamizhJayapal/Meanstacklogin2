const mongoose = require('mongoose');
const sequenceId = require('../sequence_id');
const Schema = mongoose.Schema;

const product = new Schema({
    productId: {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productCatogary: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required:true
    },
    productTax: {
        type: Number,
        required: true
    }
});

product.pre('save', function(next) {
    var doc = this;
    sequenceId.findByIdAndUpdate({_id: 'product_id'},{$inc: { seq: 1}},{"upsert": true,"new": true  }, function(error, counter)   {
        if(error)
            return next(error);
        doc.productId = counter.seq;
        next();
    });
});

const productModel = mongoose.model("product", product);

module.exports = productModel;