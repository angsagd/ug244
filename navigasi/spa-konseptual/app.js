const app = document.getElementById('app');
const navLinks = document.querySelectorAll('nav a');

const pages = {
    home: `
        <h2>Beranda</h2>
        <p>Ini adalah konten beranda pada aplikasi SPA sederhana.</p>
    `,
    about: `
        <h2>Tentang</h2>
        <p>Halaman ini berisi informasi singkat tentang aplikasi.</p>
    `,
    contact: `
        <h2>Kontak</h2>
        <p>Silakan hubungi melalui email: <strong>info@example.com</strong></p>
    `
};

function renderPage(pageName) {
    app.innerHTML = pages[pageName] || '<h2>Halaman tidak ditemukan</h2>';
}

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const page = link.dataset.page;

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        renderPage(page);
    });
});

renderPage('home');
