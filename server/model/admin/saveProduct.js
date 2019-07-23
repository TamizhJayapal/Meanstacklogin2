const mongoose = require('mongoose');
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

/* var CounterSchema = Schema({
    _id: {type: String},
    seq: { type: Number}
});
var counter = mongoose.model('counter', CounterSchema);


productAddSchema.pre('save', function(next) {
    var doc = this;
    counter.findOneAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter)   {
        console.log(counter);
        next();
    });
}); */


const productAdd = mongoose.model("product", productAddSchema);

module.exports = productAdd;