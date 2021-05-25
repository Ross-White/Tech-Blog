const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('dashboard');
});

router.get('/new', async (req, res) => {
    res.render('newPost');
});

router.get('/edit', async (req, res) => {
    res.render('editPost');
});



module.exports = router;