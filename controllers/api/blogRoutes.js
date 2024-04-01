const router = require('express').Router();
const { Blog, Comment } = require('../../models');

// Create a new blog
router.post('/new', async (req, res) => {

    try {
        const currentDate = new Date();
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
            date: currentDate,
        });
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
})

// Update a blog
router.put('/:id', async (req, res) => {
    try {
        const updateBlog = await Blog.update(
            {
                ...req.body,
                user_id: req.session.user_id,
            },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).json(updateBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});


// Delete a blog
router.delete('/:id', async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog with this ID!' });
            return;
        }
        res.status(200).json(blogData)
    } catch (err) {
        res.status(500).json(err);
    }
})


// Add a new comment to a blog
router.post('/:id', async (req, res) => {
    try {
        const currentDate = new Date();
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