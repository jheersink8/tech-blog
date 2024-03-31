const newComment = async (event) => {
    event.preventDefault();
    const id = event.target.elements[1].getAttribute('data-blogid');
    const content = document.querySelector('#comment').value.trim();
    if (content) {
        const response = await fetch(`/api/blog/${id}`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/blog/${id}`);
        } else {
            alert('Failed to add comment!')
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', newComment);