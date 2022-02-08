require('dotenv').config()
//creating express app
const express = require("express");
const app = express();

//importing modules
const mongoose = require("mongoose")

//file imports
const testRoute = require("./routes/testRoute")

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//db connection
const dbUri = process.env.DB_URI
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to Mongo DB")
})

//listen on port PORT
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
