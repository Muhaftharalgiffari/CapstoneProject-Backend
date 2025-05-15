export const Home = () => {
    return `
        <div class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#A8DADC] via-[#F1FAEE] to-[#457B9D] font-poppins">
            <!-- Hero Section -->
            <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                <div class="text-center">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D3557] mb-4 md:mb-6 animate-fade-in">
                        ChiliDetect
                    </h1>
                    <p class="text-lg md:text-xl text-[#457B9D] mb-6 md:mb-8 max-w-3xl mx-auto px-4">
                        Solusi Cerdas untuk Deteksi Penyakit Tanaman Cabai menggunakan Teknologi AI
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                        <a href="/detect" class="bg-[#E63946] text-white px-6 md:px-8 py-3 rounded-lg hover:bg-[#1D3557] transition-colors duration-300 shadow-lg hover:shadow-xl text-center">
                            Mulai Deteksi
                        </a>
                        <a href="/types" class="bg-white text-[#1D3557] px-6 md:px-8 py-3 rounded-lg hover:bg-[#F1FAEE] transition-colors duration-300 shadow-lg hover:shadow-xl text-center">
                            Pelajari Jenis Cabai
                        </a>
                    </div>
                </div>
            </div>

            <!-- Main Features -->
            <div class="w-full bg-white py-12 md:py-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-[#1D3557] text-center mb-8 md:mb-12">Fitur Utama</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <div class="bg-[#F1FAEE] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div class="text-[#E63946] text-3xl md:text-4xl mb-3 md:mb-4">
                                <i class="fas fa-camera"></i>
                            </div>
                            <h3 class="text-lg md:text-xl font-semibold text-[#1D3557] mb-2">Deteksi Real-time</h3>
                            <p class="text-sm md:text-base text-[#457B9D]">Deteksi penyakit tanaman cabai secara instan dengan teknologi AI canggih</p>
                        </div>
                        <div class="bg-[#F1FAEE] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div class="text-[#E63946] text-3xl md:text-4xl mb-3 md:mb-4">
                                <i class="fas fa-leaf"></i>
                            </div>
                            <h3 class="text-lg md:text-xl font-semibold text-[#1D3557] mb-2">Identifikasi Akurat</h3>
                            <p class="text-sm md:text-base text-[#457B9D]">Hasil deteksi yang akurat untuk berbagai jenis penyakit tanaman cabai</p>
                        </div>
                        <div class="bg-[#F1FAEE] p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
                            <div class="text-[#E63946] text-3xl md:text-4xl mb-3 md:mb-4">
                                <i class="fas fa-book-medical"></i>
                            </div>
                            <h3 class="text-lg md:text-xl font-semibold text-[#1D3557] mb-2">Solusi Pengobatan</h3>
                            <p class="text-sm md:text-base text-[#457B9D]">Rekomendasi pengobatan yang tepat untuk setiap jenis penyakit</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- How It Works -->
            <div class="w-full bg-[#F1FAEE] py-12 md:py-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-[#1D3557] text-center mb-8 md:mb-12">Cara Kerja</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        <div class="text-center">
                            <div class="bg-[#A8DADC] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-[#1D3557] text-xl md:text-2xl font-bold">1</span>
                            </div>
                            <h3 class="text-base md:text-lg font-semibold text-[#1D3557] mb-2">Upload Gambar</h3>
                            <p class="text-sm md:text-base text-[#457B9D]">Unggah foto daun cabai yang ingin dideteksi</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-[#A8DADC] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-[#1D3557] text-xl md:text-2xl font-bold">2</span>
                            </div>
                            <h3 class="text-base md:text-lg font-semibold text-[#1D3557] mb-2">Analisis AI</h3>
                            <p class="text-sm md:text-base text-[#457B9D]">Sistem AI menganalisis gambar secara mendalam</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-[#A8DADC] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-[#1D3557] text-xl md:text-2xl font-bold">3</span>
                            </div>
                            <h3 class="text-base md:text-lg font-semibold text-[#1D3557] mb-2">Identifikasi</h3>
                            <p class="text-sm md:text-base text-[#457B9D]">Mengidentifikasi jenis penyakit yang terdeteksi</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-[#A8DADC] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-[#1D3557] text-xl md:text-2xl font-bold">4</span>
                            </div>
                            <h3 class="text-base md:text-lg font-semibold text-[#1D3557] mb-2">Solusi</h3>
                            <p class="text-sm md:text-base text-[#457B9D]">Memberikan rekomendasi pengobatan yang tepat</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Statistics -->
            <div class="w-full bg-white py-12 md:py-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                        <div class="text-center p-4">
                            <div class="text-3xl md:text-4xl font-bold text-[#E63946] mb-2">95%</div>
                            <p class="text-sm md:text-base text-[#457B9D]">Akurasi Deteksi</p>
                        </div>
                        <div class="text-center p-4">
                            <div class="text-3xl md:text-4xl font-bold text-[#E63946] mb-2">100+</div>
                            <p class="text-sm md:text-base text-[#457B9D]">Deteksi Berhasil</p>
                        </div>
                        <div class="text-center p-4">
                            <div class="text-3xl md:text-4xl font-bold text-[#E63946] mb-2">5+</div>
                            <p class="text-sm md:text-base text-[#457B9D]">Jenis Cabai</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 1s ease-out;
            }

            @media (max-width: 640px) {
                .container {
                    padding-left: 1rem;
                    padding-right: 1rem;
                }
            }
        </style>
    `;
};