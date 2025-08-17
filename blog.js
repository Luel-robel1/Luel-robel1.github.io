const posts = [
    {
        title: "Getting Started with JavaScript",
        date: "August 10, 2025",
        content: "JavaScript is a powerful language for web development. In this post, I explore ES6 features like arrow functions and destructuring, with practical examples for beginners."
    },
    {
        title: "Building APIs with Python Django",
        date: "August 5, 2025",
        content: "Learn how to create a RESTful API using Django. This post covers routing, handling requests, and connecting to a database for your web applications."
    },
    {
        title: "Responsive Design Tips",
        date: "July 28, 2025",
        content: "Discover best practices for creating responsive websites using CSS Grid, Flexbox, and media queries to ensure a great user experience on all devices."
    }
];

function displayPosts() {
    const blogContainer = document.getElementById('blog-posts');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <div class="post-meta">Posted on ${post.date}</div>
            <p>${post.content}</p>
        `;
        blogContainer.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', displayPosts);