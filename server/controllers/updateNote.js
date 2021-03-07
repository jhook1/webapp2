const db = require('../config/db.config');
const getDateTimeFormatted = require('../utility/getDateTimeFormatted');

const updateNote = async (req,res) => {
    let post = {
        title: req.body.title,
        body: req.body.body,
        updatedat: getDateTimeFormatted(new Date())
    };

    let query = "update notes set ? where id= ?";

    db.query(query,[post,req.params.noteid],(err,result)=>{
        if(err){
            console.log('error: ',err.message);
        }
        else
            console.log('Successfully updated note');
    });
};

module.exports = updateNote;