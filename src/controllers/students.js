const pool = require("../config/db");

const getStudents = async (req, res) => {
  const [students] = await pool.query("SELECT * FROM students");

  return res.status(200).json({
    students,
  });
};

const getStudent = async (req, res) => {
  const { studentId } = req.params;
  const [students] = await pool.query("SELECT * FROM students WHERE id=?", [
    studentId,
  ]);

  if (students.length === 0) {
    return res.status(404).json({
      error: "Student not found",
    });
  }

  return res.status(200).json({
    student: students[0],
  });
};

const createStudent = async (req, res) => {
  const { firstName, lastName } = req.body;

  const [student] = await pool.query(
    "INSERT INTO students (firstName, lastName) VALUES (?, ?)",
    [firstName, lastName]
  );

  return res.status(200).json({
    student: {
      id: student.insertId,
      firstName,
      lastName,
    },
  });
};

const deleteStudent = async (req, res) => {
  const { studentId } = req.params;

  const [result] = await pool.query("DELETE FROM students WHERE id=?", [
    studentId,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({
      error: "Student does not exist",
    });
  }

  return res.status(200).json({
    data: "Successfully deleted student",
  });
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent,
};
