import express from "express";

const app = express();
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var title = "Work";
  var description = "8am - 14pm";
  res.render("index", {
    title: title,
    description: description,
  });
});

app.listen(8080, () => {
  console.log("App working!");
});
