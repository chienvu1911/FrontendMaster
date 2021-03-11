const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// form data
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// ajax, axios,....
app.use(express.json());

app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
        app.set('view engine', 'hbs');
app.set(
  
  
  'views', path.join(__dirname, 'resources/views'));
app.use(morgan('combined'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
