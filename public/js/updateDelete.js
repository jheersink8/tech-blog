// Local side JS to contact server side API and delete blog
const deleteBlog = async (event) => {
    if (event.target.getAttribute('data-blogid')) {
        const id = event.target.getAttribute('data-blogid');

        const response = await fetch(`/api/blog/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog!');
        }
    }
};

// Local side JS to contact server side API and update blog
const updateBlog = async (event) => {
    event.preventDefault();
    
    const id= event.target.elements[2].getAttribute('data-blogid');

    const title = document.querySelector('#update-title').value.trim();
    const content = document.querySelector('#update-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/blog/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },

        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update blog!');
        }
    }
};

document.querySelector('#delete-blog-button').addEventListener('click', deleteBlog);

document.querySelector('.update-blog-form').addEventListener('submit', updateBlog);