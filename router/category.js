const Category=require("./../models/category")
const express=require("express")

const route=express.Router()

route.get("/", async (req,res)=>{
    const data = await Category.find()
    res.json(data)
})

route.post("/", async (req,res)=>{
    const body=req.body
    
})