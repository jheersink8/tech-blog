const router = require('express').Router();
const { Blog, Comment } = require('../../models');

// Create a new blog

// Update a blog

// Delete a blog

// Add a new comment
router.post('/:id', async (req, res) => {
    try {
   
        const currentDate = new Date();
  console.log(req.body.content)
        const newPost = await Comment.create({
            content: req.body.content,
            date: currentDate,
            user_id: req.session.user_id,
            blog_id: req.params.id,
        });
      
        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;