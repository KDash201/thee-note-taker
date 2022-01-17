const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const fs = require("fs");
const path = require("path");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const db = require("./db/db.json");

// MIDDLEWARE
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// For use of all files in public dir
app.use(express.static("public"));

// Render Routes
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});

app.post("/api/notes", (req, res) => {
  const noteData = { 
    // id: id,
    title: req.body.title,
    text: req.body.text
  };
  db.push(noteData);
  fs.writeFile('./db/db.json', JSON.stringify(db), () => {
    res.send("Success");
});
console.log(db);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Use apiRoutes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
