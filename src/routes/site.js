var express = require('express');
var router = express.Router();
var siteController = require('../app/controllers/SiteController');

router.get('/', siteController.home);
router.get('/search', siteController.search);

module.exports = router;
