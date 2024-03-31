const router = require('express').Router();
const { Comment } = require('../../models');

// Test Route
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Add a new comment
router.post('/', async (req, res) => {
    try {
        const newPost = await Comment.create({
            ...req.body
        });

        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;