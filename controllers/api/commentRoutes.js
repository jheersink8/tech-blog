// DELETE THIS IF THE OTHER ROUTE WORKS!!!!!!!!


// const router = require('express').Router();
// const { Comment } = require('../../models');

// // Add a new comment
// router.post('/blog/:id', async (req, res) => {
//     try {
//         const currentDate = new Date();

//         const newPost = await Comment.create({
//             ...req.body,
//             date: currentDate,
//             user_id: req.session.user_id,
//             blog_id: req.params.id,
//         });

//         res.status(200).json(newPost)
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });


// module.exports = router;