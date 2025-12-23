import Home from "../views/home.js";

// Pemetaan rute statis dan dinamis
const routes = {
    '/home': () => Home(),
};

// Fungsi untuk mendeteksi rute dinamis seperti /detail/:id
function matchDynamicRoute(path) {
    const detailPattern = /^\/letter\/([a-z])$/;
    const match = path.match(detailPattern);

    if (match) {
        const letter = match[1];
        return () => Browse(letter);
    }
    return null; 
}

// Router utama
export default function router() {
    const hash = window.location.hash || '#/home';
    const path = hash.slice(1);  // '#/home' → '/home'

    const staticRoute = routes[path];
    if (staticRoute) {
        return staticRoute();
    }

    const dynamicRoute = matchDynamicRoute(path);
    if (dynamicRoute) {
        return dynamicRoute();
    }

    return `<h2>404</h2><p>Halaman tidak ditemukan.</p>`;
}