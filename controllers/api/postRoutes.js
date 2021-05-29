const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id
        });
        console.log(postData);
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