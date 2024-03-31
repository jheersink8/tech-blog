// Set up routes for blog, comment, and user
const router = require('express').Router();

// const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

// router.use('/blog', blogRoutes);
router.use('/comment', commentRoutes);
// router.use('/user', userRoutes);

module.exports = router;
