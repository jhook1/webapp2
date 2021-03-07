const db = require('../config/db.config');
const Note = require('../models/note');

const addNote = async (req,res) => {
    let post = new Note({
        userid: 0,
        title: req.body.title,
        body: req.body.body
    });

    let query = "insert into notes set ?";

    db.query(query,post,(err,result)=>{
        if(err)
            console.log('error: ',err.message);
        else
            console.log('Successfully added note');
    });
};

module.exports = addNote;