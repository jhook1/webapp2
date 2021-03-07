const express = require('express');

const getNotes = require('../controllers/getNotes');
const addNote = require('../controllers/addNote');
const updateNote = require('../controllers/updateNote');
const deleteNote = require('../controllers/deleteNote');

const router = express.Router();

router.get('/',getNotes);
router.post('/',addNote);

router.post('/noteid=:noteid',updateNote);
router.delete('/noteid=:noteid',deleteNote);

module.exports = router;