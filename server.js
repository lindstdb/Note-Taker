// Require Dependencies
const express = require("express");
const path = require("path");
const api = require("./routes");
const fs = require('fs');
const notes = require('./db/db.json');

// Create PORT
const PORT = process.env.PORT || 3001;

// Create express application
const app = express();


// Use Express to parse data
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/api", api)
app.use(express.json());

// GET routes for html
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

// GET route for db
app.get('/api/notes', (req,res) => {
    console.info(`${req.method} request recieved`);
    fstat.readFile('./db/db.json', 'utf8', (err, data) => {err ? console.log(err) : res.json(JSON.parse(data))})
})

// Add new note obj to array
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request recieved`);

    const { title, text } = req.body

    if(title && text) {
        const newNote = {
            title,
            text,
            id: Math.floor((1+Math.random()) * 0x10000)
            .toString(16)
            .substring(1),
        }
        fstat.readFile('./db/db.json', 'utf8', (err, data) => {
            if(err) {
                console.log(err)
            } else {
                const newData = JSON.parse(data);

                newData.push(newNote);

                fstat.writeFile('./db/db.json', JSON.stringify(newData, null, 4), (err) => err ? console.log(err) : console.log('It Worked!'))
            }
        })
    }
})

// DELETE from json
app.delete('/api/notes/:id', (req, res) => {
    fstat.readFile('./db/db.json', 'utf8', (err, data) => {
        if(err) {
            console.log(err)
        } else {
            const newNotes = JSON.parse(data)
            const newData = newNotes.filter(obj => obj.id !== req.params.id)
            fstat.writeFile('./db/dn.json', JSON.stringify(newData, null, 4), (err) => err ? console.log(err) : console.log('Success'))
        }
    })
})

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
)

app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
);