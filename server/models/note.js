const getDateTimeFormatted = require('../utility/getDateTimeFormatted');

function Note(note){
    this.userid = note.userid;
    this.title = note.title;
    this.body = note.body;
    this.createdat = getDateTimeFormatted(new Date());
    this.updatedat = getDateTimeFormatted(new Date());
}

module.exports = Note;