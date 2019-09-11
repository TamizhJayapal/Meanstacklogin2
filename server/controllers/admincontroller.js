const express = require('express');
const router = express.Router();
const product = require('../model/admin/Product');
const ObjectId = require('mongoose').Types.ObjectId;
// admin route ..................

router.delete('/delProduct/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        return res.send(400).send('ObjectId does not matched');
    }
    product.findByIdAndRemove(req.params.id).then((x)=>{
        res.status(200).send(x);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

router.put('/updateProduct/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        return res.send(400).send('ObjectId does not matched');
    }
    var updateProduct = {
        productId: req.body.productId,
        productName: req.body.productName,
        productCatogary: req.body.productCatogary,
        productPrice: req.body.productPrice,
        productTax: req.body.productTax
    }
    product.findByIdAndUpdate(req.params.id, {$set: updateProduct}, {new: true}).then((data)=>{
       res.status(200).send(data);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

router.get('/getProduct', (req, res)=> {
    product.find().then((x)=>{
        res.status(200).send(x);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

router.post('/addProduct', (req, res)=>{
    var createproduct = {
        productId: 1,
        productName: req.body.productName,
        productCatogary: req.body.productCatogary,
        productPrice: req.body.productPrice,
        productTax: req.body.productTax
    }
    var newproduct = new product(createproduct);
    newproduct.save().then((x)=>{
        res.status(200).send(x);
    }).then((e)=>{
        res.status(400).send(e);
    });
});

// admin route ..................


module.exports = router;