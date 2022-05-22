var express = require('express');
var router = express.Router();

router.get('/', function (_req, res, _next) {
	res.render('Home');
});

router.get('/blog', function (_req, res, _next) {
	res.render('blog');
});

router.get('*', function (_req, res, _next) {
	res.render('404');
});

module.exports = router;
