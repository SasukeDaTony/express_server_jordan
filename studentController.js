const express = require("express");

const controller = express.Router();

const studentsData = require("./studentsData.json");

controller.get("/", (request, response) => {
  response.json({ students: true });
});

controller.get("/:id", (request, response) => {
  try {
    const { id } = reques.params;
    const students = { studentsData };

    const student = students.find((element) => element.id === id);
    if (student) {
      return response.status(200).json({ data: student });
    } else {
      return response
        .status(404)
        .json({ error: `Could not find student with id ${id}` });
    }
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});
