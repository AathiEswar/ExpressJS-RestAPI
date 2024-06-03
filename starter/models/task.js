// require mongoose
const mongoose = require("mongoose");

//Schema
const TaskSchema = new mongoose.Schema({
    // give properties to the mongoose schema for validation
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name can not be more than 20"],
  },
  completed: {
    type: Boolean,
    default : false,
    trime : true 
  },
});

//export the model
module.exports = mongoose.model("Task", TaskSchema);
