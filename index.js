import express from "express";
const app = express();
import Task from "./database/Task.js";
import mysql from "./database/database.js";
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

try {
  await mysql.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.get("/", (req, res) => {
  Task.findAll({ raw: true, order: [["id", "DESC"]] }).then((taskToMake) => {
    res.render("index", {
      taskToMake: taskToMake,
    });
  });
});

app.get("/newtask", (req, res) => {
  res.render("createTask");
});

app.post("/savetask", (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  Task.create({
    title: title,
    description: description,
  }).then(() => {
    res.redirect("/");
  });
});

app.post("/delete", (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      Task.destroy({
        where: {
          id: id,
        },
      }).then(() => {
        res.redirect("/");
      });
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
});

app.listen(8080, () => {
  console.log("App working!");
});
