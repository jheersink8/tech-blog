const newBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#new-title').value.trim();
    const content = document.querySelector('#new-content').value.trim();

    if (title && content) {
        const response = await fetch('/api/blog/new', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });


        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create new blog!')
        }
    }
};


document.querySelector('.new-blog-form').addEventListener('submit', newBlog);