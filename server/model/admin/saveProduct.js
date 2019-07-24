const mongoose = require('mongoose');
const sequenceId = require('../sequence_id');
const Schema = mongoose.Schema;

const productAddSchema = new Schema({
    productid: {
        type: Number,
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
    productprice: {
        type: Number,
        required:true
    },
    producttax: {
        type: Number,
        required: true
    }
});


productAddSchema.pre('save', function(next) {
    var doc = this;
    sequenceId.findByIdAndUpdate({_id: 'product_id'},{$inc: { seq: 1}},{"upsert": true,"new": true  }, function(error, counter)   {
        if(error)
            return next(error);
        doc.productid = counter.seq;
        next();
    });
});

const productAdd = mongoose.model("product", productAddSchema);

module.exports = productAdd;