const router = require('express').Router();

router.post('/', (req, res) => {
    //Create user
});

router.get('/:id', (req, res) => {
    //Get user by id
});

router.get('/:id/posts', (req, res) => {
    //Get posts by user id
});

module.exports = router;