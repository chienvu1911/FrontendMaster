const express = require('express')
const morgan = require('morgan')
const path = require('path');
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")));
// form data
app.use(express.urlencoded());
// ajax, axios,....
app.use(express.json());

app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(morgan("combined"));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/search', (req, res) => {
  var keywordSearch = req.query.key;
  res.render('search');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



