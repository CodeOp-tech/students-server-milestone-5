const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const studentsRouter = require("./routes/students");

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/students", studentsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
