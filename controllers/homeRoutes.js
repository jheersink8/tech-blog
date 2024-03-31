const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const confirmAuth = require('../utils/auth')

// Route for homepage nav link which renders all blogs in a list
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            order: [['date', 'DESC']],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('homepage', {
            blogs
        });

    } catch (err) {
        res.status(500).json(err);
    };
});

// Route for a single blog post with comments section
router.get('/blog/:id', confirmAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['content', 'date'],
                    order: [['date', 'DESC']],
                    include: [
                        {
                            model: User,
                            attributes: ['username']
                        }
                    ],

                }],
        });
        const blog = blogData.get({ plain: true });

        res.render('blog', {
            ...blog
            // ADD LOGGED IN LOGIC LATER
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for dashboard nav link
router.get('/dashboard', confirmAuth, async (req, res) => {
    res.render('dashboard');
});

// Route for new post from dashboard
router.get('/dashboard/newPost', confirmAuth, async (req, res) => {
    res.render('newPost');
});

// Route for login nav link (if not already logged in)
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

// Route for signup from login page
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;