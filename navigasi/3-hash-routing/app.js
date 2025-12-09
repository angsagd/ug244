const app = document.getElementById('app');

// Tampilan tiap "halaman"
function renderHome() {
    app.innerHTML = `
        <h2>Beranda</h2>
        <p>Selamat datang di halaman beranda.</p>
    `;
}

function renderAbout() {
    app.innerHTML = `
        <h2>Tentang</h2>
        <p>Ini adalah halaman tentang aplikasi routing sederhana.</p>
    `;
}

function renderContact() {
    app.innerHTML = `
        <h2>Kontak</h2>
        <p>Hubungi kami di email: info@example.com.</p>
    `;
}

function renderNotFound() {
    app.innerHTML = `
        <h2>404</h2>
        <p>Halaman tidak ditemukan.</p>
    `;
}

// Pemetaan rute ke fungsi
const routes = {
    '/home': renderHome,
    '/about': renderAbout,
    '/contact': renderContact,
};

// Fungsi router utama
function router() {
    const hash = window.location.hash || '#/home'; 
    const path = hash.replace('#', '');

    const page = routes[path] || renderNotFound;
    page();
}

// Listener untuk perubahan hash
window.addEventListener('hashchange', router);

// Render halaman pertama kali
router();