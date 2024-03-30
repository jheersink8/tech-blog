// Import seed files
const seedBlogs = require('./blog-seeds');
const seedComments = require('./comment-seeds');
const seedUsers = require('./user-seeds');
const sequelize = require('../config/connection');

// Run all seed functions from other seed files
const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedBlogs();
    await seedComments();
    process.exit(0);
};

seedAll();