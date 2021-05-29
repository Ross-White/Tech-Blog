const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-content').value.trim();
    const user_id = this.session.user_id;

    if (title) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body, user_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);