var express = require('express');
var router = express.Router();
var siteController = require('../app/controllers/SiteController');

router.use('/', siteController.home);
router.use('/search', siteController.search);

module.exports = router;
