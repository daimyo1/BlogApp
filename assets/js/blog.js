document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogPostsContainer = document.getElementById('blogPosts');

    if (blogPosts.length === 0) {
        blogPostsContainer.innerHTML = '<p>No blog posts available</p>';
    } else {
        blogPostsContainer.innerHTML = '';

        blogPosts.forEach(post => {
            const postContainer = document.createElement('div');
            postContainer.classList.add('blog-post');

            const usernameBox = document.createElement('div');
            usernameBox.classList.add('username-box');
            usernameBox.textContent = post.username;

            const titleContentBox = document.createElement('div');
            titleContentBox.classList.add('title-content-box');

            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;

            const contentElement = document.createElement('p');
            contentElement.textContent = post.content;

            titleContentBox.appendChild(titleElement);
            titleContentBox.appendChild(contentElement);

            postContainer.appendChild(usernameBox);
            postContainer.appendChild(titleContentBox);

            blogPostsContainer.appendChild(postContainer);
        });
    }

    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
