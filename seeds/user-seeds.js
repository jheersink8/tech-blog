const { User } = require('../models');

// Seed User Data
const userData = [
    { "username": "brave-panther", "password": "P@ssw0rd1" },
    { "username": "crazy-dragon", "password": "SecurePass2" },
    { "username": "fierce-tiger", "password": "StrongPwd3" },
    { "username": "gentle-bear", "password": "Secret1234" },
    { "username": "happy-owl", "password": "Passw0rd!" },
    { "username": "kind-wolf", "password": "Password123" },
    { "username": "lucky-fox", "password": "SecurePwd7" },
    { "username": "mystic-phoenix", "password": "P@ssw0rd8" },
    { "username": "powerful-lion", "password": "SecretPwd9" },
    { "username": "swift-hawk", "password": "StrongPass10" },
    { "username": "tiny-bunny", "password": "P@ssw0rd11" },
    { "username": "wise-owl", "password": "Secure123" },
    { "username": "zealous-wolf", "password": "Pwd1234" },
    { "username": "brave-lion", "password": "SecretPass!" },
    { "username": "daring-dragon", "password": "SecurePass15" },
    { "username": "fearless-panther", "password": "P@ssword16" },
    { "username": "graceful-unicorn", "password": "StrongPwd17" },
    { "username": "jolly-llama", "password": "Secret123" },
    { "username": "magical-pixie", "password": "Passw0rd19" },
    { "username": "noble-elephant", "password": "Password!" }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;