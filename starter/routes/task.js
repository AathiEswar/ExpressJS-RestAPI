
const express = require("express");

// the controllers
const {
  getAllTask,
  createTask,
  deleteTask,
  getTask,
  updateTask,
} = require("../controller/task");

//require the router
const router = express.Router();

//route = base url + the relative path
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

//export module to use in the main file
module.exports = router;
