const root = document.getElementById('root');

function init() {
    const raw = sessionStorage.getItem('currentUser');
    if (!raw) {
        root.innerHTML = `<p class="no-user">No user selected. <a href="index.html" style="color:#e8c547">Go back</a>.</p>`;
        return;
    }
    const user = JSON.parse(raw);
    document.title = `${user.name} — User Details`;
    renderUser(user);
}

function renderUser(user) {
    const block = document.createElement('div');
    block.className = 'user-block';
    block.innerHTML = `
      <p class="user-eyebrow">User — ID ${String(user.id).padStart(2, '0')}</p>
      <h1 class="user-name-heading">${user.name}</h1>
      <div class="info-grid">
 
        <div class="info-group">
          <p class="info-group-title">Identity</p>
          ${infoRow('Username', user.username)}
          ${infoRow('Email', user.email)}
          ${infoRow('Phone', user.phone)}
          ${infoRow('Website', user.website)}
        </div>
 
        <div class="info-group">
          <p class="info-group-title">Address</p>
          ${infoRow('Street', user.address.street)}
          ${infoRow('Suite', user.address.suite)}
          ${infoRow('City', user.address.city)}
          ${infoRow('Zipcode', user.address.zipcode)}
          ${infoRow('Lat', user.address.geo.lat)}
          ${infoRow('Lng', user.address.geo.lng)}
        </div>
 
        <div class="info-group">
          <p class="info-group-title">Company</p>
          ${infoRow('Name', user.company.name)}
          ${infoRow('Catch Phrase', user.company.catchPhrase)}
          ${infoRow('BS', user.company.bs)}
        </div>
 
      </div>
    `;
    root.appendChild(block);

    const postsBtn = document.createElement('button');
    postsBtn.className = 'btn-posts';
    postsBtn.textContent = 'Posts of current user';
    postsBtn.addEventListener('click', () => loadPosts(user.id, postsBtn));
    root.appendChild(postsBtn);

    /* Posts container */
    const postsSection = document.createElement('div');
    postsSection.id = 'posts-section';
    root.appendChild(postsSection);
}

let postsLoaded = false;

async function loadPosts(userId, btn) {
    if (postsLoaded) return; // prevent duplicate fetches
    postsLoaded = true;
    btn.classList.add('active');
    btn.textContent = 'Loading posts…';

    const section = document.getElementById('posts-section');
    section.innerHTML = `<div class="loader"><div class="loader-dot"></div><div class="loader-dot"></div><div class="loader-dot"></div><span>Fetching posts…</span></div>`;

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const posts = await res.json();
        btn.textContent = `Posts of current user (${posts.length})`;
        renderPosts(posts, section);
    } catch (err) {
        section.innerHTML = `<p class="error-state">⚠ Could not load posts: ${err.message}</p>`;
        btn.classList.remove('active');
        postsLoaded = false;
    }
}

function renderPosts(posts, container) {
    container.innerHTML = '';
    const heading = document.createElement('p');
    heading.className = 'section-heading';
    heading.textContent = `${posts.length} posts`;
    container.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'posts-grid';

    posts.forEach((post, i) => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.style.animationDelay = `${i * 40}ms`;
        card.innerHTML = `
        <span class="post-num">Post #${post.id}</span>
        <p class="post-title">${post.title}</p>
      `;

        const link = document.createElement('a');
        link.className = 'btn-post-detail';
        link.textContent = 'View post →';
        link.href = 'post-details.html';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.setItem('currentPost', JSON.stringify(post));
            window.location.href = 'post-details.html';
        });

        card.appendChild(link);
        grid.appendChild(card);
    });

    container.appendChild(grid);
}

function infoRow(key, val) {
    return `
      <div class="info-row">
        <span class="info-key">${key}</span>
        <span class="info-val">${val ?? '—'}</span>
      </div>`;
}
init();