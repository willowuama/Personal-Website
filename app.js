//jshint esversion:6

// Imports
const express = require("express");
const bodyParser = require("body-parser");

// App configuration
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
const port = 3000;

app.get('/', (req,res) => {
  res.render('home');
})


// Launch Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
