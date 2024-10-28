const express = require("express");
const {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent,
} = require("../controllers/students");

const router = express.Router();

router.get("/", getStudents);

router.get("/:studentId", getStudent);

router.post("/", createStudent);

router.delete("/:studentId", deleteStudent);

module.exports = router;
