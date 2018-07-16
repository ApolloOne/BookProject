const mongoose=require('mongoose');
const Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/Books');
const UserSchema=new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Email:{type:String,required:true},
    Password:{type:String,required:true}
});
var User=mongoose.model('User',UserSchema);
module.exports=User;