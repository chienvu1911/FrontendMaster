const Post = require('../models/Post');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    home(req, res, next) {
        Post.find({})
            .then((posts) =>
                res.render('home', {
                    posts: multipleMongooseToObject(posts),
                }),
            )
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
