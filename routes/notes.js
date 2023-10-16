const router = require('express').Router();

const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
router.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
router.post('/', (req, res) => {
  console.log(req.body);

  const { title, text} = req.body;

  if (req.body) {
    const note = {
     title , text ,
      id: uuid(),
    };

    readAndAppend(note, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = router;
