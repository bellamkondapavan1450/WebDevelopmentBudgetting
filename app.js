const express = require('express');
const app = express();
var cors = require('cors')
const {mongoURI} = require('./config/dev');
const bcrypt = require('bcryptjs');
var bodyparser = require('body-parser')
app.use(cors())
app.use(bodyparser.json())

const middleware =(req,res,next)=>{
    next();
}


const mongoose = require('mongoose');
mongoose.connect(mongoURI,{  useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true});
 mongoose.set('useFindAndModify', false);
require('./models/user');
require('./models/transaction');
require('./models/nots');

app.use(middleware);


app.use(express.json());
app.use(require('./routes/index'));
app.use(require('./routes/trans'));
app.use(require('./routes/nots'));





app.get('/',(req,res)=>{
    console.log('hello !!!!!');
    res.send('working');
})


//to avail the post output read about body parser

const port =3000;
// app.get('/',(req,res)=>res.send("hellooooooo"));

app.listen(port ,()=>console.log('helloworld'));