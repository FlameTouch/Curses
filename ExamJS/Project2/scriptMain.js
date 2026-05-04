const API = 'https://jsonplaceholder.typicode.com/users';
const root = document.getElementById('root');

async function init() {
    try {
        const res = await fetch(API);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const users = await res.json();
        renderUsers(users);
    } catch (err) {
        root.innerHTML = `<p class="error-state">⚠ Could not load users: ${err.message}</p>`;
    }
}

function renderUsers(users) {
    const grid = document.createElement('div');
    grid.className = 'users-grid';

    users.forEach((user, i) => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.style.animationDelay = `${i * 60}ms`;

        card.innerHTML = `
        <span class="user-id">ID — ${String(user.id).padStart(2, '0')}</span>
        <h2 class="user-name">${user.name}</h2>
        <div class="user-meta">
          <span class="meta-email">${user.email}</span>
          <span class="meta-phone">${user.phone}</span>
          <span class="meta-city">${user.address.city}</span>
        </div>
      `;

        /* Details button */
        const btn = document.createElement('a');
        btn.className = 'btn-details';
        btn.textContent = 'View Details →';
        btn.href = 'user-details.html';
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Store the full user object so user-details.html can read it instantly
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'user-details.html';
        });

        card.appendChild(btn);
        grid.appendChild(card);
    });

    root.innerHTML = '';
    root.appendChild(grid);
}
init();