const router = require('express').Router();
const { Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    res.render('dashboard');
});

router.get('/:id', async (req, res) => {
    try {
        const rawUserPosts = await Post.findAll({
            where: {
                user_id: req.params.id
            },
            include: [
                {
                    model: Comment,
                },
            ]
        });
        const userPosts = rawUserPosts.map((post) => post.get({ plain: true }));
        console.log(userPosts);
        res.render('dashboard', { userPosts });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/new', async (req, res) => {
    res.render('newPost');
});

router.get('/edit', async (req, res) => {
    res.render('editPost');
});



module.exports = router;