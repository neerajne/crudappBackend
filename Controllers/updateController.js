const Task = require("../model/taskModel.js");

const updateTask = async (req, res) => {
  console.log("getting req");
  const { title, description, _id } = req.body;
  console.log(title, description, _id);
  const task = await Task.findByIdAndUpdate(_id, {
    title: title,
    description: description,
  });
  res.send(task);
};

module.exports = updateTask;
