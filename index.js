import express from "express";

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");

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
