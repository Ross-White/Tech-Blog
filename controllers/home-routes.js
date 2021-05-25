const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/post', async (req, res) => {
    res.render('singlePost');
});

module.exports = router;