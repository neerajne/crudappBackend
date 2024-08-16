const Task = require("../model/taskModel.js");

const addTask = async (req, res) => {
  const { title, description } = req.body;
  const newTask = await Task.create({ title: title, description: description });
  res.send(newTask);
};

module.exports = addTask;
