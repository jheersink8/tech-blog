const { User } = require('../models');

// Seed User Data
const userData = [
    {
        "username": "user1",
        "password": "P@ssw0rd1"
    },
    {
        "username": "user2",
        "password": "SecurePass2"
    },
    {
        "username": "user3",
        "password": "StrongPwd3"
    },
    {
        "username": "user4",
        "password": "Secret1234"
    },
    {
        "username": "user5",
        "password": "Passw0rd!"
    },
    {
        "username": "user6",
        "password": "Password123"
    },
    {
        "username": "user7",
        "password": "SecurePwd7"
    },
    {
        "username": "user8",
        "password": "P@ssw0rd8"
    },
    {
        "username": "user9",
        "password": "SecretPwd9"
    },
    {
        "username": "user10",
        "password": "StrongPass10"
    },
    {
        "username": "user11",
        "password": "P@ssw0rd11"
    },
    {
        "username": "user12",
        "password": "Secure123"
    },
    {
        "username": "user13",
        "password": "Pwd1234"
    },
    {
        "username": "user14",
        "password": "SecretPass!"
    },
    {
        "username": "user15",
        "password": "SecurePass15"
    },
    {
        "username": "user16",
        "password": "P@ssword16"
    },
    {
        "username": "user17",
        "password": "StrongPwd17"
    },
    {
        "username": "user18",
        "password": "Secret123"
    },
    {
        "username": "user19",
        "password": "Passw0rd19"
    },
    {
        "username": "user20",
        "password": "Password!"
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;