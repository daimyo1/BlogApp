document.addEventListener('DOMContentLoaded', function() {
    const postsList = document.getElementById('postsList');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (blogPosts.length === 0) {
        postsList.innerHTML = '<li>No blog posts available</li>';
    } else {
        blogPosts.forEach(post => {
            const postItem = document.createElement('li');
            postItem.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><em>by ${post.username}</em></p>`;
            postsList.appendChild(postItem);
        });
    }

    const toggleModeButton = document.getElementById('toggleMode');
    const body = document.body;
    toggleModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});