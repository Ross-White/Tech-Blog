const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', (req, res) => {
    //Edit post
});

router.delete('/:id', (req, res) => {
    //Delete post
});

module.exports = router;