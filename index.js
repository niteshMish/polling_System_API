const express = require('express');
const port =  process.env.PORT || 7000;
const app = express();


const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use(express.static('./assets'));


app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes/index'));

app.listen(port , function(err){
    if(err){
        console.log("Error in Listening from the server");
        return ;
    }
    console.log(`yeap ! server is up on the port ${port}`);

})