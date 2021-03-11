var siteRouter = require('./site');
var postRouter = require('./post');

function route(app) {
  app.use('/post', postRouter);
  app.use('/', siteRouter);
}

module.exports = route;
