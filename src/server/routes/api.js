const  express=require('express');
const { response } = require('express');
const { type } = require('os');
const { updateLanguageServiceSourceFile } = require('typescript');
const router =express.Router();
const MongoClient=require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;


const connection=(closure)=>{
    return MongoClient.connect('mongodb://localhost:27017/coursesdb',(err,db)=>{
        if (err) return console.log(err);

        closure(db);
    });
};

const sendError=(err,res)=>{
    response.status=501;
    response.message=typeof err == 'object' ? err.message :err ;
    res.status(501).json(response);

};

// 


router.get('/users',(req,res)=>{
    connection((db)=>{
        db.collection('users')
        .find()
        .toArray()
       .then((users)=>{
           response.data=users;
           res.json(response);
       }).catch((err)=>{
           sendError(err,res)
       });
       
    });
});