import express from "express";
const app = express();
import Task from "./database/Task.js";
import mysql from "./database/database.js";
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

try {
  await mysql.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.get("/", (req, res) => {
  res.render("index");
  res.send("formulário recebido");
});

app.post("/", (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  res.render("index");
  res.send(console.log(title, description));
});

app.listen(8080, () => {
  console.log("App working!");
});
