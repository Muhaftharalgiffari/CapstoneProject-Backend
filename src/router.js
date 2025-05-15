import { Home } from './pages/Home.js';
import { Detect } from './pages/Detect.js';
import { History } from './pages/History.js';
import { Types } from './pages/Types.js';
import { About } from './pages/About.js';
import { initNavbar } from './components/Navbar.js';

const routes = {
    '/': Home,
    '/detect': Detect,
    '/history': History,
    '/types': Types,
    '/about': About
};

let isFirstRender = true;

export const renderPage = (path) => {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    // Selalu render ulang navbar
    initNavbar();

    if (isFirstRender) {
        // Render langsung tanpa transisi
        const pageComponent = routes[path] || Home;
        mainContent.innerHTML = pageComponent();
        mainContent.classList.remove('opacity-0');
        mainContent.classList.add('opacity-100');
        isFirstRender = false;
        initPageEvents(path);
        return;
    }

    // Transisi fade out
    mainContent.classList.remove('opacity-100');
    mainContent.classList.add('opacity-0', 'transition-opacity', 'duration-300');
    setTimeout(() => {
        // Render halaman
        const pageComponent = routes[path] || Home;
        mainContent.innerHTML = pageComponent();
        // Transisi fade in
        mainContent.classList.remove('opacity-0');
        mainContent.classList.add('opacity-100');
        // Inisialisasi event listener untuk halaman yang baru di-render
        initPageEvents(path);
    }, 300);
};

export const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    renderPage(path);
};

// Fungsi untuk inisialisasi event listener spesifik halaman
const initPageEvents = (path) => {
    switch (path) {
        case '/detect':
            if (window.initDetectPage) window.initDetectPage();
            break;
        case '/history':
            if (window.initHistoryPage) window.initHistoryPage();
            break;
        case '/types':
            if (window.initTypesPage) window.initTypesPage();
            break;
        // Tambahkan case lain sesuai kebutuhan
    }
};

// Event listener untuk history API
window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
}); 