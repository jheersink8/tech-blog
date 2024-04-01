// Import other models
const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

// User has many Blog
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// User has many Comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Comment belongs to Blog
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

// Comment belongs to User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Blog has many Comment
Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

// Blog belongs to User
Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { Blog, Comment, User };