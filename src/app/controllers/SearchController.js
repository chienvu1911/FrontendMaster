class SearchController {
  index(req, res) {
    var keywordSearch = req.query.key;
    res.render('search');
  }
}

module.exports = new SearchController();
