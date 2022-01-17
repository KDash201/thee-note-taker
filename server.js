const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const fs = require("fs");
const path = require("path");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const { db } = require("./db/db.json");


// MIDDLEWARE
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// For use of all files in public dir
app.use(express.static("public"));


app.get("/api/notes", (req, res) => {
  res.json(db);
  console.log(db);
});

// Use apiRoutes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
