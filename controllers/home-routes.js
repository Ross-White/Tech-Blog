const { Post } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const rawPosts = await Post.findAll();
    const posts = rawPosts.map(post => post.get({plain: true}));
    res.render('home', {posts});
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/post/:id', async (req, res) => {
    const rawPost = await Post.findByPk(req.params.id);
    const post = rawPost.get({plain: true});
    res.render('singlePost', post);
});

module.exports = router;