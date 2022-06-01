const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors())

const carsRouter = require("./routers/CarsRouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/cars", carsRouter)

const CONNECTION_STRING = "mongodb+srv://tooag:anjumongodb@cluster0.zd3j3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING, function(err){
    if(err) return console.log(err);
    app.listen(8080)
})





