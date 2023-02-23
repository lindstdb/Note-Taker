// Require Dependencies
const express = require("express");
const path = require("path");
const api = require("./routes");

// Create PORT
const PORT = process.env.PORT || 3001;

// Create express application
const app = express();


// Use Exrpess to parse data
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/api", api)
app.use(express.json());

// GET homepage
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")))

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

// Creates server listener
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));