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

document.querySelector('#delete-blog-button').addEventListener('click', deleteBlog);

