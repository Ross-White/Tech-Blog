const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, Comment, User } = require('../models');

router.get('/', withAuth, async (req, res) => {
    try {
        const rawUserPosts = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: User,
                },
                {
                    model: Comment,
                },
            ]
        });
        const userPosts = rawUserPosts.map((post) => post.get({ plain: true }));
        res.render('dashboard', { 
            userPosts,
            logged_in: req.session.logged_in,
         });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/new', async (req, res) => {
    res.render('newPost');
});

router.get('/edit/:id', async (req, res) => {
    res.render('editPost');
});



module.exports = router;