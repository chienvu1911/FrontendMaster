class PostController {
  detail(req, res) {
    res.render('post-detail');
  }
}

module.exports = new PostController();
