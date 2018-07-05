var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/Books');
// create a schema
var booksSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    price:{type:Number,required:true},
    author:String,
    category:String
});
var books = mongoose.model('Books', booksSchema);
module.exports = books;