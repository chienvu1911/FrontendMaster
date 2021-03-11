var express = require('express');
var router = express.Router();
var postController = require('../app/controllers/PostController');

router.get('/:slug', postController.detail);

module.exports = router;
