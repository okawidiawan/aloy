const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

app.get("", (req, res) => {
  res.render("index", {
    title: "Wedding",
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
