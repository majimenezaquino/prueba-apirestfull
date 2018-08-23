const mongoose =require('mongoose')

//create model product
const Schema = mongoose.Schema;
const Product = new Schema({
    title: String,
    body: String,
    date: Date
  });

module.exports =mongoose.model('BlogPost')