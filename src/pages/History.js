export const History = () => {
    return `
        <section class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#A8DADC] via-[#F1FAEE] to-[#E63946] font-poppins">
            <div class="w-full max-w-3xl px-4 py-12">
                <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                    <h1 class="text-3xl md:text-4xl font-extrabold text-[#1D3557] mb-2 drop-shadow-lg">Riwayat Deteksi</h1>
                    <p class="text-[#457B9D] text-base md:text-lg mb-6">Lihat hasil deteksi yang pernah dilakukan sebelumnya.</p>
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white rounded-lg shadow-md">
                            <thead>
                                <tr class="bg-[#A8DADC] text-[#1D3557]">
                                    <th class="py-2 px-4">No</th>
                                    <th class="py-2 px-4">Status</th>
                                    <th class="py-2 px-4">Confidence</th>
                                    <th class="py-2 px-4">Waktu</th>
                                    <th class="py-2 px-4">Catatan</th>
                                    <th class="py-2 px-4">Aksi</th>
                                </tr>
                            </thead>
                            <tbody id="history-table-body">
                                <!-- Data riwayat akan diisi oleh JS -->
                            </tbody>
                        </table>
                    </div>
                    <button id="clear-history" class="mt-6 px-6 py-2 bg-[#E63946] text-white rounded-lg font-semibold shadow hover:bg-[#1D3557] transition-colors">Hapus Semua Riwayat</button>
                </div>
            </div>
        </section>
    `;
}; 