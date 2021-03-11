const Post = require('../models/Post');

class SiteController {
    home(req, res) {
        Post.find({}, function (err, posts) {
            if (!err) {
                res.json(posts);
            }
        });
        //res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
