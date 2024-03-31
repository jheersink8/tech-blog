// Add username and password from signup form to database
const signupForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#createUsername').value.trim();
    const password = document.querySelector('#createPassword').value.trim();
    if (username && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        const responseData = await response.json();
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(responseData.message);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupForm);