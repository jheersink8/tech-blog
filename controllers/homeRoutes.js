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
            blogs,
            logged_in: req.session.logged_in
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
            ...blog,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for dashboard nav link
router.get('/dashboard', confirmAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

// Route for new post from dashboard
router.get('/dashboard/newPost', confirmAuth, async (req, res) => {
    res.render('newPost', { logged_in: req.session.logged_in });
});

// Route for edit/delete post from dashboard view


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