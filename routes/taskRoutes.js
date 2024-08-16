const express = require("express");
const addTask = require("../Controllers/addController");
const deleteTask = require("../Controllers/deleteController");
const getTasks = require("../Controllers/getTasks");
const updateTask = require("../Controllers/updateController");
const router = express.Router();

router.route("/get").get(getTasks);
router.route("/add").post(addTask);
router.route("/delete").post(deleteTask);
router.route("/edit").post(updateTask);
module.exports = router;
