const db = require('../config/db.config');

const getNotes = async (req,res) => {
    let query = "select * from notes";

    db.query(query,(err,result)=>{
        if(err)
            console.log('error: ',err.message);
        else
            res.json(result).end();
    });
};

module.exports = getNotes;