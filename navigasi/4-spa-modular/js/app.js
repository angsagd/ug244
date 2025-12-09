import router from "../router/router.js";

const app = document.getElementById('app');

// Render berdasarkan rute
function render() {
    app.innerHTML = router();
}

// Render awal
render();

// Ubah tampilan ketika hash berubah
window.addEventListener('hashchange', render);