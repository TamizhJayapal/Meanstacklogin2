const express = require('express');
const router = express.Router();
const user = require('../model/user');
const bcrypt = require('bcryptjs');

router.post('/register', (req,res)=>{    
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


router.post('/login', (req,res)=>{
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



module.exports = router;