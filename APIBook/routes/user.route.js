const router = require('express').Router();
const bcrypt = require('bcrypt');
const key = require('../config/key')
const jwt = require('jsonwebtoken');
const authUser=require('../middleware/check-auth');
const saltRounds = 10;
const User = require('../model/User.Module');
const mongoose = require('mongoose');
// GET all user
router.get('/',authUser, (req, res) => {
    User.find({}, (err, data) => {
        if (err) throw err;
        return res.status(200).json(data);
    })
})
// detail record
router.get('/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id).then(data => {
        return res.status(200).json(data);
    })
})
// Add record
router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.Password, saltRounds).then(hash => {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            Email: req.body.Email,
            Password: hash
        })
        User.findOne({Email: req.body.Email}).then(result => {
            if (result) {
                return res.json({
                    mess: 'Da co du lieu nay',
                    data: result,
                })
            } else {
                user.save().then(data => {
                    return res.status(200).json({
                        mess: 'Them du lieu thanh cong',
                        data: data
                    })
                }).catch(err => {
                    res.status(500).json({
                        error: err
                    })
                })
            }
        })
    })
})
router.post('/login',authUser, (req, res) => {
    User.findOne({Email: req.body.Email}).then(user => {
        console.log(user);
        if (bcrypt.compare(req.body.Password, user.Password)) {
            const token = jwt.sign({Email: req.body.Email}, key.secret)
            console.log(token);
            return res.status(200).json({
                message: "Auth successfully",
                token: token
            })
        }
    }).catch(err => {
        return res.status(401).json({
            message: "Auth failed",
            error: err
        })
    })
})
// update record
router.patch('/:id',authUser, (req, res) => {
    bcrypt.hash(req.body.Password, saltRounds).then(hash => {
        const _id = req.params.id;
        console.log(hash);
        const UserUpdate = new User({
            Email: req.body.Email,
            Password: hash
        })
        User.findByIdAndUpdate(_id, UserUpdate).then(data => {
            return res.status(200).json({
                mess: 'Sua du lieu thanh cong',
                data: data
            });
        })
    })
})
// delete record
router.delete('/:id',authUser, (req, res) => {
    const _id = req.params.id;
    User.findByIdAndDelete(_id).then(() => {
        return res.status(200).json({
            mess: 'xoa thanh cong'
        })
    })
})
module.exports = router;