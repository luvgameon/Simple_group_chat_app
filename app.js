const express = require('express');
const app=express();
const login=require('./routes/login');
const msg=require('./routes/msg');
const BodyParser=require('body-parser');

app.use(BodyParser.urlencoded({extended:false}));
app.use(login);
app.use(msg);


app.listen(4000);