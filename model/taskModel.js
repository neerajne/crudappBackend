const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
    minLength: 2,
    date: { type: Date, default: Date.now },
  },
  description: {
    type: String,
    required: true,
    maxLength: 50,
    minLength: 1,
    date: { type: Date, default: Date.now },
  },
});

const Task = model("Task", taskSchema);
module.exports = Task;
