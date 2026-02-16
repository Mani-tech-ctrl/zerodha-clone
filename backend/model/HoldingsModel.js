const{ model } = require("mongoose");

//import
const{HoldingsSchema} = require("../schemas/HoldingsSchema");

//creating model

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = {HoldingsModel};