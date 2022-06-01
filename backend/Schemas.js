const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarShema = new Schema({
    model: String,
    color: String,
    year: Number,
});

const UserShema = new Schema({
    login: String,
    password: String,
    fullName: String,
    cars: [CarShema]
});

module.exports = {
    CarShema,
    UserShema
}

