const { Blog } = require('../models');

// Blog Seed Data
const blogData = [
    {
        "title": "Introduction to Node.js",
        "content": "Node.js is a powerful JavaScript runtime that allows developers to build scalable and high-performance applications.",
        "date": "2024-03-27",
        "user_id": 1
    },
    {
        "title": "Getting Started with React",
        "content": "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components.",
        "date": "2024-03-28",
        "user_id": 2
    },
    {
        "title": "Understanding RESTful APIs",
        "content": "RESTful APIs are a standard for building web services that adhere to the principles of Representational State Transfer (REST).",
        "date": "2024-03-29",
        "user_id": 8
    },
    {
        "title": "Introduction to Docker",
        "content": "Docker is a containerization platform that allows developers to package, distribute, and run applications in isolated environments.",
        "date": "2024-03-30",
        "user_id": 20
    },
    {
        "title": "Exploring MongoDB",
        "content": "MongoDB is a popular NoSQL database that provides flexibility and scalability for storing and managing data.",
        "date": "2024-03-31",
        "user_id": 4
    },
    {
        "title": "Getting Started with Express.js",
        "content": "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web applications.",
        "date": "2024-04-01",
        "user_id": 8
    },
    {
        "title": "Introduction to GraphQL",
        "content": "GraphQL is a query language for APIs that provides a more efficient and flexible alternative to traditional REST APIs.",
        "date": "2024-04-02",
        "user_id": 9
    },
    {
        "title": "Exploring AWS Services",
        "content": "Amazon Web Services (AWS) offers a wide range of cloud computing services that enable businesses to build scalable and reliable applications.",
        "date": "2024-04-02",
        "user_id": 10
    }
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;