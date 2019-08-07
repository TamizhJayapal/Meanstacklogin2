const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const mongoose = require('./mongodb/mongoose');
const user = require('./model/user');
const feed = require('./model/feed');
const product = require('./model/admin/Product');
const adminApi = require('./controllers/admincontroller');

const ObjectId = require('mongoose').Types.ObjectId;
const port = process.env.PORT ? process.env.PORT : 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// admin route ..................

app.delete('/delProduct/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        return res.send(400).send('ObjectId does not matched');
    }
    product.findByIdAndRemove(req.params.id).then((x)=>{
        res.status(200).send(x);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.put('/updateProduct/:id', (req, res) => {
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

app.get('/getProduct', (req, res)=> {
    product.find().then((x)=>{
        res.status(200).send(x);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.post('/addProduct', (req, res)=>{
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

app.post('/register', (req,res)=>{    
    var newUser = {
        name:req.body.userName,
        email:req.body.userEmail,
        password:req.body.userPass
    }
    var userdata = new user(newUser);
    userdata.saveWithToken().then((x)=>{       
            res.send({token: x.tokens});
        }).catch((e)=>{
            if (e.errmsg.includes('email_1 dup')){
                res.status(400).send({
                    errors: {
                        message:'Email already exist!'
                    }
                })
            } else {
                res.status(400).send(e);
            }
    })
}); 

app.post('/feed', (req,res)=>{    
    var newfeed = {
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    }
    var userfeed = new feed(newfeed);
    userfeed.save().then((x)=>{       
            res.send(x);
        }).catch((e)=>{
            res.status(400).send(e);
    })
}); 

app.post('/login', (req,res)=>{
    let userData = req.body;
    user.findOne({email: userData.email}, (error, user) => {      
        if(!user){
          return res.status(401).send({
            errors: {
                message:'Email does not exist'
            }
        });
        }
        bcrypt.compare(req.body.password, user.password).then(function(data) {            
            if(data){                             
                 res.header("x-auth", user.tokens.token).send({
                     email:user.email,
                     name: user.name,
                     token:user.tokens.token
                 });
            }else {
                 res.status(401).send({
                     errors: {
                         message:'Invalid password'
                     }
                 });
            }
        });        
    });
});

app.listen(port, ()=>{
    console.log('server is running on port', port);
});
