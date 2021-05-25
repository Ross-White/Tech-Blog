const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home');
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

module.exports = router;