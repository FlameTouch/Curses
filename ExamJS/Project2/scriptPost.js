const root = document.getElementById('root');

async function init() {
    const raw = sessionStorage.getItem('currentPost');
    if (!raw) {
        root.innerHTML = `<p class="no-post">No post selected. <a href="index.html" style="color:#e8c547">Go back</a>.</p>`;
        return;
    }
    const post = JSON.parse(raw);
    document.title = `Post #${post.id} — Details`;
    renderPost(post);
    await loadComments(post.id);
}

function renderPost(post) {
    const block = document.createElement('div');
    block.className = 'post-block';
    block.innerHTML = `
      <p class="post-eyebrow">Post — ID ${String(post.id).padStart(3, '0')}</p>
      <h1 class="post-title-heading">${post.title}</h1>
      <div class="post-meta">
        <div class="meta-item">
          <span class="meta-key">Post ID</span>
          <span class="meta-val">${post.id}</span>
        </div>
        <div class="meta-item">
          <span class="meta-key">User ID</span>
          <span class="meta-val">${post.userId}</span>
        </div>
      </div>
      <p class="post-body-label">Body</p>
      <p class="post-body-text">${post.body}</p>
    `;
    root.appendChild(block);
}

async function loadComments(postId) {
    const section = document.createElement('div');
    section.className = 'comments-section';
    section.innerHTML = `<div class="loader"><div class="loader-dot"></div><div class="loader-dot"></div><div class="loader-dot"></div><span>Fetching comments…</span></div>`;
    root.appendChild(section);

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const comments = await res.json();
        renderComments(comments, section);
    } catch (err) {
        section.innerHTML = `<p class="error-state">⚠ Could not load comments: ${err.message}</p>`;
    }
}

function renderComments(comments, container) {
    container.innerHTML = '';

    const heading = document.createElement('p');
    heading.className = 'section-heading';
    heading.textContent = `${comments.length} comments`;
    container.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'comments-grid';

    comments.forEach((comment, i) => {
        const card = document.createElement('div');
        card.className = 'comment-card';
        card.style.animationDelay = `${i * 50}ms`;
        card.innerHTML = `
        <span class="comment-num">Comment #${comment.id}</span>
        <p class="comment-name">${comment.name}</p>
        <p class="comment-email">${comment.email}</p>
        <p class="comment-body">${comment.body}</p>
      `;
        grid.appendChild(card);
    });

    container.appendChild(grid);
}
init();