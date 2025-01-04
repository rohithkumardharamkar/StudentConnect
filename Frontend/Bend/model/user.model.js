let mongoose=require("mongoose")
let userSch=new mongoose.Schema({
    "_id":Number,
    "mobile":Number,
    "name":String,
    "age":Number,
    "gender":String,
    "pwd":String,
    "img":String,
})
let usermodel=mongoose.model("User",userSch)
module.exports=usermodel;