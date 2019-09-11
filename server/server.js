const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const feed = require('./model/feed');
const adminApi = require('./controllers/admincontroller');
const userapi = require('./controllers/api');
const port = process.env.PORT ? process.env.PORT : 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userapi);
app.use('/admin', adminApi);

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

app.listen(port, ()=>{
    console.log('server is running on port', port);
});
