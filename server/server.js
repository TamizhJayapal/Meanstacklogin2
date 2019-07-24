const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const mongoose = require('./mongodb/mongoose');
const user = require('./model/user');
const feed = require('./model/feed');
const product = require('./model/admin/Product');

const port = process.env.PORT ? process.env.PORT : 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/getProduct', (req, res)=> {
    product.find().then((x)=>{
        res.status(200).send(x);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.post('/addProduct', (req, res)=>{
    var createproduct = {
        productid: 1,
        productname: req.body.productName,
        productcatogary: req.body.productCatogary,
        productprice: req.body.productPrice,
        producttax: req.body.productTax
    }
    var newproduct = new product(createproduct);
    newproduct.save().then((x)=>{
        res.status(200).send(x);
    }).then((e)=>{
        res.status(400).send(e);
    });
});

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
            res.status(400).send(e);
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
