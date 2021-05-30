const commentFormHandler = async (event) => {
    event.preventDefault();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const body = document.querySelector('#comment-body').value.trim();
    console.log(post_id, body);
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ 
            body, 
            post_id 
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};

document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);