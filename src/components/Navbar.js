import { navigateTo } from '../router.js';

export const initNavbar = () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    navbar.innerHTML = `
        <nav class="bg-primary shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16 items-center">
                    <div class="flex items-center">
                        <a href="/" class="text-white font-bold text-xl flex items-center gap-2">
                            <span class="text-white text-2xl drop-shadow-lg filter brightness-90">🌶</span>
                            ChiliDetect
                        </a>
                    </div>
                    
                    <!-- Hamburger menu button -->
                    <div class="md:hidden">
                        <button id="hamburger-button" class="text-white hover:text-secondary focus:outline-none">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Desktop menu -->
                    <div class="hidden md:flex md:ml-6 md:space-x-8">
                        <a href="/" class="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-secondary hover:text-secondary text-white transition-colors">Beranda</a>
                        <a href="/detect" class="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-secondary hover:text-secondary text-white transition-colors">Deteksi</a>
                        <a href="/history" class="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-secondary hover:text-secondary text-white transition-colors">Riwayat</a>
                        <a href="/types" class="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-secondary hover:text-secondary text-white transition-colors">Jenis Cabai</a>
                        <a href="/about" class="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-secondary hover:text-secondary text-white transition-colors">Tentang</a>
                    </div>
                </div>

                <!-- Mobile menu -->
                <div id="mobile-menu" class="hidden md:hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <a href="/" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-secondary hover:text-white transition-colors">Beranda</a>
                        <a href="/detect" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-secondary hover:text-white transition-colors">Deteksi</a>
                        <a href="/history" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-secondary hover:text-white transition-colors">Riwayat</a>
                        <a href="/types" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-secondary hover:text-white transition-colors">Jenis Cabai</a>
                        <a href="/about" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-secondary hover:text-white transition-colors">Tentang</a>
                    </div>
                </div>
            </div>
        </nav>
    `;

    // Tambahkan event listener untuk navigasi
    const links = navbar.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = e.currentTarget.getAttribute('href');
            navigateTo(path);
            // Tutup mobile menu setelah klik
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Tambahkan event listener untuk hamburger button
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Tutup mobile menu ketika klik di luar menu
    document.addEventListener('click', (e) => {
        if (mobileMenu && !mobileMenu.contains(e.target) && !hamburgerButton.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}; 