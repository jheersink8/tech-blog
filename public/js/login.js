// Validate username and password to database 
const loginForm = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        const responseData = await response.json();
        console.log(responseData)
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(responseData.message);
        }
    }
};


document.querySelector('.login-form').addEventListener('submit', loginForm);

