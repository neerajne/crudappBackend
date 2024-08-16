const Task = require("../model/taskModel.js");
const getTasks = async (req, res) => {
  const result = await Task.find({});
  console.log(result);
  res.send(result);
};
module.exports = getTasks;
