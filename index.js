const express = require("express");
const mongoose = require("mongoose");
const app=express()
mongoose
  .connect(
    "mongodb+srv://shohzodganiyevich:rYfdNinLCy9xTAqy@cluster0.nlr3uyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected to db"))
  .catch((e) => console.log(e));

app.use(express.json())