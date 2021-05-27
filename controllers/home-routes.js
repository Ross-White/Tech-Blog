const { User, Post, Comment } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const rawPosts = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                },
            ],
        });
        const posts = rawPosts.map((post) => post.get({ plain: true}));
        console.log(posts);
        res.render('home', { posts })
    } catch (err) {
        res.status(500).json(err);
    }
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