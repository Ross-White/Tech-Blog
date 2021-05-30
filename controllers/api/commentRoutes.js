const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    console.log('request:::::::::::', req.body);
    try {
        const commentData = await Comment.create({
            body: req.body.body,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;