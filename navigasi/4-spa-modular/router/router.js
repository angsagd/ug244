import Home from "../views/home.js";
import About from "../views/about.js";
import Contact from "../views/contact.js";
import Detail from "../views/detail.js";

// Pemetaan rute statis dan dinamis
const routes = {
    '/home': () => Home(),
    '/about': () => About(),
    '/contact': () => Contact(),
};

// Fungsi untuk mendeteksi rute dinamis seperti /detail/:id
function matchDynamicRoute(path) {
    const detailPattern = /^\/detail\/(\d+)$/;
    const match = path.match(detailPattern);

    if (match) {
        const id = match[1];
        return () => Detail(id);
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