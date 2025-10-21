const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/board", (req, res) => {
  res.send({ title: "Build Deploy Test 2025-10-21" });
});

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});
//
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./public", "index.html"));
});
