const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt  = require('bcryptjs');

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required: true
    }
});

userSchema.pre('save', function(next){
    var User = this;
    if(User.isModified('password')){
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(User.password, salt, (e, hash)=>{
                User.password = hash;
                next();
            });
        });
    }else{
        next();
    }
});

const userModel = mongoose.model('userSchema', userSchema);

module.exports = userModel;