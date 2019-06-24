const jwt = require('jsonwebtoken');

function verifytoken(req, res, next) {
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorzed request');
    }

    var splittok = req.headers.authorization.split(' ')[1];
    if(splittok === 'null'){
        return res.status(401).send('Unauthorzed request');
    }

    var payload = jwt.verify(splittok, 'abc123');
    if(!payload){
        return res.status(401).send('Unauthorzed request');
    }

    req.userId = payload._id;
    next();
}

module.exports = verifytoken;