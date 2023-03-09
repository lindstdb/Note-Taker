const router = require('express').Router();
const dataDb = require('..db/db.json');
const path = require('path');
const fs = require('fs');
const uuid = require('../helpers/uuid');


router.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '../db/db.json'))
);

router.post('/notes', (req, res) => {
    console.info(`${req.method} request recieved to add note`);
    const { title, text } = req.body;
    if(title && text) {
        const newNote = {
            title,
            text,
            id: uuid(),
    };

    dataDb.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(dataDb), (err) =>
        err ? console.error(err) : console.info('Note Added')    
    );
    res.json(newNote);
   }
});

router.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} Note Deleted`);
    const noteId = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const noteIndex = noteId.filter((note) => note.id !== req.params.id);

        fs.writeFileSync('./db/db.json', JSON.stringify(noteIndex), (err) =>
            err ? console.error(err) : console.info('Note Taken')
        );
        res.json(noteIndex);
});

module.exports = router;
