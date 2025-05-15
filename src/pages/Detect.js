export const Detect = () => {
    return `
        <section class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#A8DADC] via-[#F1FAEE] to-[#E63946] font-poppins">
            <div class="w-full max-w-3xl px-4 py-12">
                <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center">
                    <h1 class="text-3xl md:text-4xl font-extrabold text-[#1D3557] mb-2 text-center drop-shadow-lg">Deteksi Penyakit Daun Cabai</h1>
                    <p class="text-[#457B9D] text-base md:text-lg mb-6 text-center">Upload, paste, atau ambil gambar daun cabai untuk mendeteksi penyakit secara otomatis dan akurat.</p>
                    <div class="w-full mb-6">
                        <div id="upload-area">
                            <label for="image-upload" class="block text-[#1D3557] font-semibold mb-4 text-lg">Pilih Gambar Daun Cabai</label>
                            <div id="drop-area" class="flex flex-col items-center justify-center border-2 border-dashed border-[#A8DADC] rounded-xl p-8 bg-[#F8FFF8] cursor-pointer transition hover:border-[#E63946] hover:bg-[#F1FAEE] focus-within:border-[#E63946] focus-within:bg-[#F1FAEE] shadow-sm">
                                <div class="mb-4 flex flex-col items-center">
                                    <svg class="w-16 h-16 text-[#A8DADC] mb-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5V8.25A2.25 2.25 0 015.25 6h13.5A2.25 2.25 0 0121 8.25v8.25A2.25 2.25 0 0118.75 18H5.25A2.25 2.25 0 013 16.5z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 10.5l3 3 4.5-4.5" />
                                    </svg>
                                    <span class="text-[#1D3557] font-medium text-base">Unggah atau Ambil Foto Daun Cabai</span>
                                </div>
                                <div class="flex flex-col sm:flex-row gap-3 w-full justify-center mb-2">
                                    <button id="upload-btn" type="button" class="bg-[#E63946] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#1D3557] transition-colors">Pilih File</button>
                                    <button id="camera-btn" type="button" class="bg-[#457B9D] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#1D3557] transition-colors">Gunakan Kamera</button>
                                </div>
                                <span class="text-xs text-[#1D3557] text-center">atau <b>drag & drop</b> / <b>paste</b> gambar di sini</span>
                                <input type="file" id="image-upload" accept="image/*" class="hidden" />
                            </div>
                        </div>
                        <div id="preview-container" class="mt-4 flex flex-col items-center"></div>
                        <div id="camera-modal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 hidden">
                            <div class="bg-white rounded-lg p-6 flex flex-col items-center relative">
                                <video id="camera-stream" autoplay playsinline class="rounded-lg w-72 h-72 object-cover mb-4"></video>
                                <button id="capture-btn" class="bg-[#E63946] text-white px-6 py-2 rounded mb-2 hover:bg-[#1D3557] transition-colors">Ambil Foto</button>
                                <button id="close-camera" class="absolute top-2 right-2 text-[#E63946] hover:text-[#1D3557] text-2xl">&times;</button>
                            </div>
                        </div>
                    </div>
                    <button id="predict-button" class="w-full bg-[#E63946] text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-[#d62839] transition-colors text-lg mb-4">Deteksi</button>
                    <div id="result-container" class="w-full mt-4"></div>
                </div>
                <div class="mt-8 bg-[#F1FAEE] rounded-xl shadow p-6">
                    <h2 class="text-xl font-bold text-[#1D3557] mb-2">Cara Penggunaan</h2>
                    <ol class="list-decimal list-inside text-[#457B9D] space-y-1 text-base">
                        <li>Pilih, paste, atau ambil gambar daun cabai yang ingin dideteksi.</li>
                        <li>Pastikan gambar jelas dan fokus pada daun.</li>
                        <li>Klik tombol <span class='font-semibold text-[#E63946]'>Deteksi</span>.</li>
                        <li>Tunggu hasil prediksi muncul di bawah.</li>
                    </ol>
                </div>
            </div>
        </section>
    `;
}; 