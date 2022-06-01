const mongoose = require("mongoose");
const schemas = require("./Schemas.js");

const Car = mongoose.model("Car", schemas.CarShema);
const User = mongoose.model("User", schemas.UserShema);

module.exports = {
    Car,
    User
}
