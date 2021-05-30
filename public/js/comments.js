const newFormHandler = async (event) => {
    event.preventDefault();
    const post_id = event.target.getAttribute("data-id");
    const body = document.querySelector('#comment-body').value.trim();
    if (body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ body, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create post');
        }
    }
};

document
  .querySelector('#comment-form')
  .addEventListener('submit', newFormHandler);