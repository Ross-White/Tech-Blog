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

// router.get('/', async (req, res) => {
//     try {
//         const rawPosts = await Post.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['name'],
//                 },
//                 {
//                     model: Comment,
//                 },
//             ],
//         });
//         const posts = rawPosts.map((post) => post.get({ plain: true}));
//         res.render('home', { posts })
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get('/:id', (req, res) => {
    //Get post by id
});

router.put('/:id', (req, res) => {
    //Edit post
});

router.delete('/:id', (req, res) => {
    //Delete post
});

module.exports = router;