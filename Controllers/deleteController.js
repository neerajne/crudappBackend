const Task = require("../model/taskModel.js");

const deleteTask = async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    return res.status(400).json({ message: "ID is required" });
  }

  try {
    const task = await Task.findByIdAndDelete(_id);

    res.status(200).json({ message: "Task Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = deleteTask;
