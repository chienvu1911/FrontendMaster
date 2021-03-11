const Post = require('../models/Post');
const { mongooseToObject } = require('../../util/mongoose');

class PostController {
    detail(req, res, next) {
        Post.findOne({
            slug: req.params.slug,
        })
            .then((post) => {
                res.render('post-detail', {
                    post: mongooseToObject(post),
                });
            })
            .catch(next);
    }
}

module.exports = new PostController();
