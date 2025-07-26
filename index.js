const express = require("express");
const mongoose = require("mongoose");
const app=express()
mongoose
  .connect(
  "mongodb+srv://gulomovodilbek430:<dbkJsBX4hIlq6YUXEy>@cluster0.o7uz65r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected to db"))
  .catch((e) => console.log(e));

app.use(express.json())
kJsBX4hIlq6YUXEy
