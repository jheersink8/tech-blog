
const router = require('express').Router();





// Route for homepage nav link
router.get('/', (req, res) => {
    res.render('homepage');
});

// Route for dashboard nav link
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

// Route for new post from dashboard
router.get('/dashboard/newPost', (req, res) => {
    res.render('newPost');
});

// Route for login nav link
router.get('/login', (req, res) => {
    res.render('login');
});

// Route for signup from login page
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;