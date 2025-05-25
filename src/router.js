import { Home } from './pages/Home.js';
import { Detect } from './pages/Detect.js';
import { History } from './pages/History.js';
import { Types } from './pages/Types.js';
import { About } from './pages/About.js';
import { Login } from './pages/Login.js';
import { Register } from './pages/Register.js';
import { initNavbar } from './components/Navbar.js';
import { checkAuth } from './pages/auth.js';

const publicRoutes = ['/', '/login', '/register'];
const routes = {
    '/': Login,
    '/login': Login,
    '/register': Register,
    '/home': Home,
    '/detect': Detect,
    '/history': History,
    '/types': Types,
    '/about': About
};

let isFirstRender = true;

export const renderPage = (path) => {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    // Cek autentikasi untuk rute yang dilindungi
    if (!publicRoutes.includes(path) && !checkAuth()) {
        return;
    }

    // Selalu render ulang navbar kecuali untuk halaman login dan register
    if (path !== '/login' && path !== '/register' && path !== '/') {
        initNavbar();
    }

    if (isFirstRender) {
        // Render langsung tanpa transisi
        const pageComponent = routes[path] || Login;
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
        const pageComponent = routes[path] || Login;
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
        case '/login':
            if (window.initLoginPage) window.initLoginPage();
            break;
        case '/register':
            if (window.initRegisterPage) window.initRegisterPage();
            break;
    }
};

// Event listener untuk history API
window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
}); 