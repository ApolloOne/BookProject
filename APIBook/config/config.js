var mongoose = require('mongoose');
const books=require('../model/Book.Module');
const Users=require('../model/User.Module');
var value2=new Users({
    _id:new mongoose.Types.ObjectId(),
    Email:'apollo@gmail.com',
    Password:'123456'
})
value2.save().then(result=>{
    console.log(result);
}).catch(err=>{
    console.error(err);
})