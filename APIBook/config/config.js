var mongoose = require('mongoose');
const books=require('../model/Book.Module');
var value1=new books({
    _id:new mongoose.Types.ObjectId(),
    name:"Than Thoai Hi Lap",
    price:2000,
    author:'Hellenismos',
    category:'than thoai'
});
value1.save().then(result=>{
    console.log(result);
}).catch(err=>{
    console.error(err);
});