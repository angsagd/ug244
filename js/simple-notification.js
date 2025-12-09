function getNotificationContainer() {
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.position = 'fixed';
        container.style.top = '20px';
        container.style.left = '50%';
        container.style.transform = 'translateX(-50%)';
        container.style.zIndex = '9999';
        document.body.appendChild(container);
    }
    return container;
}

function showNotification(message) {
    const container = getNotificationContainer();

    // buat elemen notifikasi
    const note = document.createElement('div');
    note.textContent = message;

    // styling dasar via JS
    note.style.backgroundColor = '#333';
    note.style.color = '#fff';
    note.style.padding = '12px 20px';
    note.style.marginTop = '10px';
    note.style.borderRadius = '6px';
    note.style.fontSize = '14px';
    note.style.opacity = '0';
    note.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    note.style.transform = 'translateY(-10px)';

    container.appendChild(note);

    // animasi fade-in
    requestAnimationFrame(() => {
        note.style.opacity = '1';
        note.style.transform = 'translateY(0)';
    });

    // hilang otomatis dalam 10 detik
    setTimeout(() => {
        note.style.opacity = '0';
        note.style.transform = 'translateY(-10px)';

        // hapus setelah animasi selesai
        setTimeout(() => note.remove(), 500);
    }, 10000);
}
