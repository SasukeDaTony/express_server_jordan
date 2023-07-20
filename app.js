const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
const studentsController = require('./studentController');


app.get("/", (request, response) => {
  response.send("Hello world & Jordans_class_server");
});

app.get("/test", (request, response) => {
  try {
    response.status(200).json({ test: "success", time: "1pm" });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

app.use('/students' , studentsController);

// app.use('/students/:id', studentsController);


module.exports = app;
