const express = require('express');
const logger = require('morgan');

const notesRouter = require('./routes/notesRouter');

const app = express();

const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.json());

app.use('/notes',notesRouter);

app.get('/',(req,res)=>{
    res.send('Hello world!');
});

app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
});