const mongoose= require('mongoose');
const dotenv=require('dotenv');
require('dotenv').config();

try{
    mongoose.connect(process.env.URL,{
    })  
    console.log("Db Connect Sucessfully")
}catch(error){
    console.log('Database Errror'+''+error);
}