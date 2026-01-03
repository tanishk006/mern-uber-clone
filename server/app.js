// this is where the server is made

// to configure environmental variables 

const dotenv = require('dotenv');
dotenv.config();  
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./config/db');

connectToDb();

app.use(cors());

// this is a temporary route
app.get('/',(req , res) => {
  res.send("Hello World")
});

module.exports = app ;