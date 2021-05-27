const router = require('express').Router();

router.post('/', (req, res) => {
    //Create post
});

router.get('/', (req, res) => {
    //Get all posts
});

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