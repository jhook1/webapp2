const mysql = require('mysql');
const config = require('./config');

const db = mysql.createConnection(config.db);
db.connect(err=>{
    if(err)
        return console.error('error: ',err.message);
    else{
        console.log('MySQL server connection established');

        let query = "create database if not exists notes";
        db.query(query,err=>{
            if(err)
                return console.error('error: ',err.message);
            else{
                console.log('Database notes created/exists');

                query = "use notes";
                db.query(query,err=>{
                    if(err)
                        return console.error('error: ',err.message);
                    else{
                        console.log('Using database notes');

                        query="create table if not exists notes ("+
                                "id int not null auto_increment primary key,"+
                                "userid int not null,"+ //convert to foreign key
                                "title varchar(255),"+
                                "body text,"+
                                "createdat datetime not null,"+
                                "updatedat datetime not null"+
                            ")";
                        db.query(query,err=>{
                            if(err)
                                return console.error('error: ',err.message);
                            else
                                console.log('notes table created/exists');
                        });
                    }
                });
            }
        });
    }
});

module.exports = db;