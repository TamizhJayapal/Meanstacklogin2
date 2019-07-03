const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const bcrypt  = require('bcryptjs');

const userSchema = new Schema({
    name: {
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        duplicate:false,
        required:true
    },
    password: {
        type:String,
        trim:true,
        required: true
    },
    tokens:{
        token: {
            type:String,
            required: true
        },
        auth: {
            type:String,
            required: true
        }
    }
});

userSchema.methods.saveWithToken = function() {
    var User = this;
    var subject = {
        _id: User._id
    }
    var payload = jwt.sign(subject, 'abc123');   
    User.tokens.token = payload;
    User.tokens.auth = "auth";
    return User.save();
}

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

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;