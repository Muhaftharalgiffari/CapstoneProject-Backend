import { navigateTo } from '../router.js';

export const Types = () => {
    return `
        <div class="min-h-screen bg-gradient-to-b from-[#A8DADC] via-[#F1FAEE] to-[#E63946] py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-[#1D3557] mb-4 flex items-center justify-center gap-3">
                        <i class="fas fa-pepper-hot text-[#E63946] text-5xl"></i>
                        ChillDetect
                    </h1>
                    <p class="text-lg text-[#457B9D]">Klik panah untuk mempelajari lebih lanjut</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min">
                    <!-- Cabe Rawit -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
                        <div class="relative h-64 flex items-center justify-center bg-[#F1FAEE]">
                            <div class="gallery flex gap-2 overflow-x-auto px-2 py-2">
                                <img src="/assets/images/Cabe Rawit.jpg" alt="Cabe Rawit" class="h-64 w-90 object-cover rounded-lg shadow" />
                                <img src="/assets/images/Cabe Rawit 2.png" alt="Cabe Rawit 2" class="h-64 w-90 object-cover rounded-lg shadow" />
                            </div>
                        </div>
                        <div class="p-6">
                            <h2 class="text-2xl font-bold text-[#E63946] mb-2">Cabe Rawit</h2>
                            <p class="text-[#457B9D] mb-4 italic">Capsicum frutescens</p>
                            <div class="accordion">
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Karakteristik <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Ukuran kecil, panjang 2-3 cm</li>
                                            <li>Warna hijau saat muda, merah saat matang</li>
                                            <li>Tingkat kepedasan: 50,000-100,000 SHU</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Penyakit yang Sering Menyerang <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Bacterial Spot</li>
                                            <li>Curl Virus</li>
                                            <li>White spot</li>
                                            <li>Nutrition Deficiency</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Tips Budidaya <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Pilih benih unggul dan sehat</li>
                                            <li>Jaga kelembapan tanah, jangan terlalu basah</li>
                                            <li>Berikan pupuk organik secara berkala</li>
                                            <li>Rotasi tanaman untuk mencegah penyakit tanah</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Fakta Unik <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Paling populer di Indonesia sebagai sambal</li>
                                            <li>Tahan terhadap hama dan penyakit</li>
                                            <li>Dapat tumbuh di berbagai kondisi lahan</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cabe Kriting Jeneponto -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
                        <div class="relative h-64 flex items-center justify-center bg-[#F1FAEE]">
                            <div class="gallery flex gap-2 overflow-x-auto px-2 py-2">
                                <img src="/assets/images/Cabe Kriting Jeneponto.jpg" alt="Cabe Kriting Jeneponto" class="h-64 w-90 object-cover rounded-lg shadow" />
                                <img src="/assets/images/Cabe Kriting Jeneponto 2.png" alt="Cabe Kriting Jeneponto 2" class="h-64 w-90 object-cover rounded-lg shadow" />
                            </div>
                        </div>
                        <div class="p-6">
                            <h2 class="text-2xl font-bold text-[#E63946] mb-2">Cabe Kriting Jeneponto</h2>
                            <p class="text-[#457B9D] mb-4 italic">Capsicum annuum</p>
                            <div class="accordion">
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Karakteristik <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Bentuk keriting khas</li>
                                            <li>Warna merah menyala saat matang</li>
                                            <li>Tingkat kepedasan: 30,000-50,000 SHU</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Penyakit yang Sering Menyerang <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Bacterial Spot</li>
                                            <li>Cercospora Leaf Spot</li>
                                            <li>Nutrition Deficiency</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Tips Budidaya <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Pilih benih lokal Jeneponto untuk hasil terbaik</li>
                                            <li>Tanam di lahan terbuka dengan sinar matahari cukup</li>
                                            <li>Jaga kelembapan tanah dan lakukan pemupukan rutin</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Fakta Unik <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Asli dari Jeneponto, Sulawesi Selatan</li>
                                            <li>Digunakan dalam masakan khas Makassar</li>
                                            <li>Memiliki aroma khas yang kuat</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cabe Hiyung -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
                        <div class="relative h-64 flex items-center justify-center bg-[#F1FAEE]">
                            <div class="gallery flex gap-2 overflow-x-auto px-2 py-2">
                                <img src="/assets/images/Cabe Hiyung.jpg" alt="Cabe Hiyung" class="h-64 w-90 object-cover rounded-lg shadow" />
                                <img src="/assets/images/Cabe Hiyung 2.jpeg" alt="Cabe Hiyung 2" class="h-64 w-90 object-cover rounded-lg shadow" />
                            </div>
                        </div>
                        <div class="p-6">
                            <h2 class="text-2xl font-bold text-[#E63946] mb-2">Cabe Hiyung</h2>
                            <p class="text-[#457B9D] mb-4 italic">Capsicum frutescens</p>
                            <div class="accordion">
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Karakteristik <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Bentuk besar dan panjang</li>
                                            <li>Warna merah tua saat matang</li>
                                            <li>Tingkat kepedasan: 15,000-30,000 SHU</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Penyakit yang Sering Menyerang <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Bacterial Spot</li>
                                            <li>Curl Virus</li>
                                            <li>Nutrition Deficiency</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Tips Budidaya <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Tanam di lahan yang subur dan gembur</li>
                                            <li>Berikan pupuk kandang sebelum tanam</li>
                                            <li>Jaga kelembapan tanah dan hindari genangan air</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Fakta Unik <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Asli dari Kalimantan Selatan</li>
                                            <li>Digunakan dalam masakan Banjar</li>
                                            <li>Memiliki rasa pedas yang khas</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cabe Katokkon -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
                        <div class="relative h-64 flex items-center justify-center bg-[#F1FAEE]">
                            <div class="gallery flex gap-2 overflow-x-auto px-2 py-2">
                                <img src="/assets/images/Cabe Katokkon.jpg" alt="Cabe Katokkon" class="h-64 w-90 object-cover rounded-lg shadow" />
                                <img src="/assets/images/Cabe Katokkon 2.png" alt="Cabe Katokkon 2" class="h-64 w-90 object-cover rounded-lg shadow" />
                            </div>
                        </div>
                        <div class="p-6">
                            <h2 class="text-2xl font-bold text-[#E63946] mb-2">Cabe Katokkon</h2>
                            <p class="text-[#457B9D] mb-4 italic">Capsicum annuum</p>
                            <div class="accordion">
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Karakteristik <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Bentuk kecil dan bulat</li>
                                            <li>Warna merah cerah saat matang</li>
                                            <li>Tingkat kepedasan: 40,000-60,000 SHU</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Penyakit yang Sering Menyerang <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Bacterial Spot</li>
                                            <li>White spot</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Tips Budidaya <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Tanam di dataran tinggi untuk hasil optimal</li>
                                            <li>Jaga kelembapan tanah dan lakukan pemupukan rutin</li>
                                            <li>Panen saat buah benar-benar matang</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Fakta Unik <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Asli dari Sulawesi Utara</li>
                                            <li>Digunakan dalam masakan Manado</li>
                                            <li>Memiliki aroma yang khas</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cabe Rica Manado -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden h-fit">
                        <div class="relative h-64 flex items-center justify-center bg-[#F1FAEE]">
                            <div class="gallery flex gap-2 overflow-x-auto px-2 py-2">
                                <img src="/assets/images/Cabe Rica Manado.jpeg" alt="Cabe Rica Manado" class="h-64 w-90 object-cover rounded-lg shadow" />
                                <img src="/assets/images/Cabe Rica Manado 2.jpeg" alt="Cabe Rica Manado 2" class="h-64 w-90 object-cover rounded-lg shadow" />
                            </div>
                        </div>
                        <div class="p-6">
                            <h2 class="text-2xl font-bold text-[#E63946] mb-2">Cabe Rica Manado</h2>
                            <p class="text-[#457B9D] mb-4 italic">Capsicum frutescens</p>
                            <div class="accordion">
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Karakteristik <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Bentuk kecil dan ramping</li>
                                            <li>Warna merah menyala saat matang</li>
                                            <li>Tingkat kepedasan: 35,000-55,000 SHU</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Penyakit yang Sering Menyerang <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Bacterial Spot</li>
                                            <li>Curl Virus</li>
                                            <li>White spot</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Tips Budidaya <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Tanam di lahan terbuka dengan sinar matahari penuh</li>
                                            <li>Jaga kelembapan tanah dan lakukan pemupukan rutin</li>
                                            <li>Panen saat buah berwarna merah cerah</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <button class="accordion-btn w-full flex justify-between items-center py-1 px-4 rounded-lg bg-[#A8DADC] text-[#1D3557] font-semibold focus:outline-none">Fakta Unik <span>▼</span></button>
                                    <div class="accordion-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out p-2 bg-[#F1FAEE] rounded-b-lg">
                                        <ul class="list-disc list-inside text-[#457B9D]">
                                            <li>Asli dari Manado, Sulawesi Utara</li>
                                            <li>Bahan utama masakan Rica-rica</li>
                                            <li>Memiliki aroma yang kuat</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @keyframes slideDown {
                from { max-height: 0; opacity: 0; }
                to { max-height: 1000px; opacity: 1; }
            }

            .animate-fade-in {
                animation: fadeIn 0.3s ease-out;
            }

            .arrow-btn:hover {
                background-color: rgba(29, 53, 87, 0.1);
            }

            .arrow-btn:hover svg {
                transform: translateY(3px);
            }

            .arrow-btn svg {
                transition: transform 0.3s ease;
            }

            .rotate-180 {
                transform: rotate(180deg);
            }

            .chili-details {
                max-height: 0;
                opacity: 0;
                overflow: hidden;
                transform-origin: top;
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .chili-details:not(.hidden) {
                max-height: 1000px;
                opacity: 1;
            }

            .chili-details .space-y-4 {
                transform-origin: top;
                transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .chili-details.hidden .space-y-4 {
                transform: scaleY(0);
            }

            .chili-details:not(.hidden) .space-y-4 {
                transform: scaleY(1);
            }

            .bg-[#F1FAEE] {
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .grid {
                grid-auto-rows: auto;
            }
        </style>
    `;
}; 