const { Comment } = require('../models');

// Comment Seed Data 
const commentData = [
    {
        "content": "Great blog post!",
        "date": "2024-03-27",
        "user_id": 5,
        "blog_id": 1
    },
    {
        "content": "Nice article!",
        "date": "2024-03-27",
        "user_id": 12,
        "blog_id": 1
    },
    {
        "content": "I found this very helpful.",
        "date": "2024-03-27",
        "user_id": 18,
        "blog_id": 1
    },
    {
        "content": "Thanks for sharing!",
        "date": "2024-03-28",
        "user_id": 7,
        "blog_id": 2
    },
    {
        "content": "Interesting read.",
        "date": "2024-03-29",
        "user_id": 15,
        "blog_id": 3
    },
    {
        "content": "Looking forward to more content like this.",
        "date": "2024-03-29",
        "user_id": 3,
        "blog_id": 3
    },
    {
        "content": "I have a question about this topic.",
        "date": "2024-03-30",
        "user_id": 10,
        "blog_id": 4
    },
    {
        "content": "Can you provide more examples?",
        "date": "2024-03-31",
        "user_id": 17,
        "blog_id": 5
    },
    {
        "content": "This inspired me to try something new.",
        "date": "2024-03-31",
        "user_id": 9,
        "blog_id": 5
    },
    {
        "content": "I encountered a similar problem before.",
        "date": "2024-03-31",
        "user_id": 1,
        "blog_id": 5
    },
    {
        "content": "I have a different perspective on this.",
        "date": "2024-04-01",
        "user_id": 14,
        "blog_id": 6
    },
    {
        "content": "This helped me understand better.",
        "date": "2024-04-01",
        "user_id": 19,
        "blog_id": 6
    },
    {
        "content": "I have a question about this part.",
        "date": "2024-04-02",
        "user_id": 6,
        "blog_id": 7
    },
    {
        "content": "Could you explain this further?",
        "date": "2024-04-02",
        "user_id": 11,
        "blog_id": 7
    },
    {
        "content": "I'm excited to try this out.",
        "date": "2024-04-02",
        "user_id": 20,
        "blog_id": 8
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;