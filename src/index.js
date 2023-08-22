const path = require('path');
const express = require('express')
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars').engine;
const port = 3000
const route = require('./routes');
const db  = require('../src/config/db')

//db connect

db.connect();

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended:true,
}));
app.use(express.json());

//template engine

app.engine('hbs', handlebars({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, '/resources','views'));
console.log(path.join(__dirname, '/resources','views'));

// route init
route(app);

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})