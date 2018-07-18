<<<<<<< HEAD
const jwt = require('jsonwebtoken')
const key = require('../config/key');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, key.sercret);
        next();
    } catch (err) {
        res.status(400).json({
            message: 'Auth failed'
        })
    }
}
||||||| merged common ancestors
=======
const jwt = require('jsonwebtoken');
const key = require('../config/key');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, key.secret);
        next();
    } catch (err) {
        res.status(401).json({
            message: "Auth failed"
        })
    }
};
>>>>>>> f76901bc87819f63f3f0d704487b4422e0cc2abf
