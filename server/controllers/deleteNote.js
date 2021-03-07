const db = require("../config/db.config");

const deleteNote = async (req,res)=>{
    let query = 'delete from notes where id= ?';

    db.query(query,req.params.noteid,(err,result)=>{
        if(err)
            console.log('error: ',err.message);
        else
            console.log('Successfully deleted note');
    });
};

module.exports = deleteNote;