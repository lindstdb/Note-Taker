// Require Dependencies
const express = require('express');
const api = require("./routes");
const path = require("path");

// Create express application
const app = express();

// Create PORT
const PORT = process.env.PORT || 3001;



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