const jwt = require('jsonwebtoken')
const key = require('../config/key');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(" ")[1];
        jwt.verify(token, key.secret);
        next();
    } catch (err) {
        res.status(400).json({
            message: 'Auth failed'
        })
    }
}
