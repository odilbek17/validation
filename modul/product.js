const mongoose=require("mongoose")

const ProductSchema=new mongoose.Schema({
    name:String,
    image:String,
    price:Number,
    count:Number,
    category:{
        type:mongoose.Types.ObjectId,
        ref:"Kategoriya"
    }
})

const Product= mongoose.model("Taver", ProductSchema)

module.exports= Product