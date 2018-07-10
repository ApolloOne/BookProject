const routes = require('express').Router();
const mongodbClient = require('mongodb').MongoClient;
const mongoose=require('mongoose');
const BookModel=require('../model/Book.Module');
const assert=require('assert');
const url = 'mongodb://localhost:27017/Books';
          // GET ALL data Books
routes.get('/', (req, res) => {
    mongodbClient.connect(url, (err, database) => {
        assert.equal(null,err);
        const MyDb = database.db('Books');
        var books = MyDb.collection('books');
        books.find({}).toArray((err,data)=>{
            assert.equal(null,err);
            database.close();
            res.json(data);
        });
    });
});

      // GET value detail with _id
routes.get('/:id',(req,res) => {
    const _id=req.params.id;
    BookModel.findById(_id).then(data=>{
        return res.json(data);
    })
})
// Them ban ghi
routes.post('/',(req,res)=>{
    const Book= new BookModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        author: req.body.author,
        category: req.body.category
    });
    BookModel.findOne(name).then((result) => {
        if(result) {
            return res.json({
                mess:'da co ban ghi nay',
                data:result
            })
        } else {
            Book.save().then((value)=>{
                return res.json({
                    mess:'them du lieu thanh cong',
                    data:value
                })
            }).catch(err=>{
                return res.json({
                    status:err.status,
                    err:err.message,
                })
            })
        }
    })
})
// Xoa ban ghi
routes.delete('/:id',(req,res)=>{
    const _id=req.params.id;
    BookModel.findByIdAndDelete(_id).then((data)=>{
        return res.json({
            mess:'Da xoa ban ghi id'+_id
        })
    })
})
// Cap nhat ban ghi
routes.patch('/:id',(req,res)=>{
    const _id=req.params.id;
    const updateBook=new BookModel({
        name:req.body.name,
        price:req.body.price,
        author:req.body.author,
        category:req.body.category
    })
    BookModel.findOneAndUpdate(_id,updateBook).then(data => {
        return res.json({
            mess:'Da cap nhat gia tri ',
            data:data
        })
    })
})
module.exports = routes;