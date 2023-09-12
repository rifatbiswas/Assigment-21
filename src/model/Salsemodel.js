const mongoose = require("mongoose")
const SalesSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  price: Number,
},{timestamps:true,versionKey:false});

const SalesModel = mongoose.model("sales", SalesSchema);
module.exports=SalesModel
