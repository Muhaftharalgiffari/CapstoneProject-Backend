import './style/tailwind.css';
import { initNavbar } from './components/Navbar.js';
import { renderPage } from './router.js';
import { uploadImage, saveHistory, getHistory } from './api/predict.js';
import { DISEASE_INFO } from './api/diseaseInfo.js';
import jsPDF from 'jspdf';

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi navbar
    initNavbar();

    // Render halaman awal
    renderPage(window.location.pathname);
});

// Fungsi untuk inisialisasi halaman deteksi
window.initDetectPage = () => {
    const fileInput = document.getElementById('image-upload');
    const uploadArea = document.getElementById('upload-area');
    const previewContainer = document.getElementById('preview-container');
    const predictButton = document.getElementById('predict-button');
    const resultContainer = document.getElementById('result-container');
    const uploadBtn = document.getElementById('upload-btn');
    const dropArea = document.getElementById('drop-area');
    const cameraBtn = document.getElementById('camera-btn');
    const cameraModal = document.getElementById('camera-modal');
    const cameraStream = document.getElementById('camera-stream');
    const captureBtn = document.getElementById('capture-btn');
    const closeCamera = document.getElementById('close-camera');
    let selectedFile = null;
    let stream = null;

    function showUploadArea(show) {
        if (uploadArea) uploadArea.style.display = show ? '' : 'none';
    }

    function handleFiles(files) {
        previewContainer.innerHTML = '';
        if (files.length > 0) {
            const file = files[0];
            selectedFile = file;
            showUploadArea(false);
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'max-h-64 rounded-lg shadow my-2';
                    previewContainer.appendChild(img);

                    // Tombol batal
                    const cancelBtn = document.createElement('button');
                    cancelBtn.textContent = 'Batal';
                    cancelBtn.className = 'mt-2 px-4 py-2 bg-gray-300 text-[#1D3557] rounded hover:bg-gray-400 transition-colors';
                    cancelBtn.onclick = () => {
                        previewContainer.innerHTML = '';
                        selectedFile = null;
                        if (fileInput) fileInput.value = '';
                        showUploadArea(true);
                    };
                    previewContainer.appendChild(cancelBtn);
                };
                reader.readAsDataURL(file);
            }
        }
    }

    // File upload
    if (uploadBtn && fileInput) {
        uploadBtn.onclick = () => fileInput.click();
        fileInput.onchange = (e) => handleFiles(e.target.files);
    }

    // Drag & drop
    if (dropArea) {
        dropArea.ondragover = (e) => { e.preventDefault(); dropArea.classList.add('border-[#E63946]'); };
        dropArea.ondragleave = (e) => { e.preventDefault(); dropArea.classList.remove('border-[#E63946]'); };
        dropArea.ondrop = (e) => {
            e.preventDefault();
            dropArea.classList.remove('border-[#E63946]');
            handleFiles(e.dataTransfer.files);
        };
        // Paste hanya pada dropArea (opsional, bisa dihapus)
        dropArea.onpaste = (e) => {
            const items = e.clipboardData.items;
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    const file = items[i].getAsFile();
                    handleFiles([file]);
                    break;
                }
            }
        };
    }

    // Paste global (agar Ctrl+V di mana saja di halaman deteksi bisa)
    document.addEventListener('paste', function(e) {
        const items = e.clipboardData && e.clipboardData.items;
        if (!items) return;
        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
                const file = items[i].getAsFile();
                handleFiles([file]);
                break;
            }
        }
    });

    // Kamera
    if (cameraBtn && cameraModal && cameraStream && captureBtn && closeCamera) {
        cameraBtn.onclick = async () => {
            cameraModal.classList.remove('hidden');
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                cameraStream.srcObject = stream;
            } catch (err) {
                alert('Tidak dapat mengakses kamera!');
                cameraModal.classList.add('hidden');
            }
        };
        closeCamera.onclick = () => {
            cameraModal.classList.add('hidden');
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
        captureBtn.onclick = () => {
            const canvas = document.createElement('canvas');
            canvas.width = cameraStream.videoWidth;
            canvas.height = cameraStream.videoHeight;
            canvas.getContext('2d').drawImage(cameraStream, 0, 0);
            canvas.toBlob(blob => {
                handleFiles([new File([blob], 'capture.png', { type: 'image/png' })]);
            });
            cameraModal.classList.add('hidden');
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }

    // Deteksi
    if (predictButton) {
        predictButton.addEventListener('click', async () => {
            const file = selectedFile || (fileInput && fileInput.files[0]);
            if (!file) {
                alert('Silakan pilih atau ambil gambar terlebih dahulu');
                return;
            }
            try {
                predictButton.disabled = true;
                predictButton.textContent = 'Memproses...';
                const result = await uploadImage(file);
                displayResult(result);
                saveHistory(result);
            } catch (error) {
                console.error('Error:', error);
                alert('Terjadi kesalahan saat memproses gambar');
            } finally {
                predictButton.disabled = false;
                predictButton.textContent = 'Deteksi';
            }
        });
    }
};

// Fungsi untuk inisialisasi halaman riwayat
window.initHistoryPage = () => {
    const tableBody = document.getElementById('history-table-body');
    const clearBtn = document.getElementById('clear-history');
    if (!tableBody) return;
    const history = getHistory();
    if (history.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" class="py-4 text-center text-gray-600">Belum ada riwayat deteksi</td></tr>`;
        return;
    }
    tableBody.innerHTML = history.map((item, idx) => {
        const note = item.note || '';
        return `
        <tr class="border-b hover:bg-[#F1FAEE] transition-colors">
            <td class="py-2 px-4">${idx + 1}</td>
            <td class="py-2 px-4">${item.prediction}</td>
            <td class="py-2 px-4">${(item.confidence * 100).toFixed(2)}%</td>
            <td class="py-2 px-4">${new Date(item.timestamp).toLocaleString()}</td>
            <td class="py-2 px-4 text-left text-xs">${note ? note.replace(/\n/g, '<br>') : '-'}</td>
            <td class="py-2 px-4 flex flex-col gap-2">
                <button class="delete-history px-3 py-1 bg-gray-300 text-[#1D3557] rounded hover:bg-gray-400 transition-colors" data-idx="${idx}">Hapus</button>
                <button class="download-history px-3 py-1 bg-[#E63946] text-white rounded hover:bg-[#1D3557] transition-colors" data-idx="${idx}">Download</button>
            </td>
        </tr>
        `;
    }).join('');
    // Event hapus per baris
    tableBody.querySelectorAll('.delete-history').forEach(btn => {
        btn.onclick = (e) => {
            const idx = parseInt(e.currentTarget.getAttribute('data-idx'));
            const history = getHistory();
            history.splice(idx, 1);
            localStorage.setItem('predictionHistory', JSON.stringify(history));
            window.initHistoryPage();
        };
    });
    // Event download PDF per baris
    tableBody.querySelectorAll('.download-history').forEach(btn => {
        btn.onclick = (e) => {
            const idx = parseInt(e.currentTarget.getAttribute('data-idx'));
            const item = getHistory()[idx];
            const note = item.note || '';
            const info = DISEASE_INFO[item.prediction];
            const doc = new jsPDF();
            doc.setFont('helvetica');
            doc.setFontSize(18);
            doc.setTextColor('#E63946');
            doc.text('Hasil Deteksi Cabai', 14, 18);
            doc.setFontSize(12);
            doc.setTextColor('#222');
            doc.text(`Status: ${item.prediction}`, 14, 30);
            doc.text(`Confidence: ${(item.confidence * 100).toFixed(2)}%`, 14, 38);
            doc.text(`Waktu Deteksi: ${new Date(item.timestamp).toLocaleString()}`, 14, 46);
            doc.setTextColor('#E63946');
            doc.text('Catatan Pribadi:', 14, 56);
            doc.setTextColor('#222');
            doc.text(doc.splitTextToSize(note, 180), 14, 62);
            let y = 62 + doc.getTextDimensions(doc.splitTextToSize(note, 180)).h + 8;
            if (info) {
                doc.setTextColor('#E63946');
                doc.text('Penjelasan Penyakit:', 14, y);
                doc.setTextColor('#222');
                y += 6;
                y += doc.splitTextToSize(info.definisi.replace(/<[^>]+>/g, ''), 180).length * 6;
                doc.text(doc.splitTextToSize(info.definisi.replace(/<[^>]+>/g, ''), 180), 14, y - (doc.splitTextToSize(info.definisi.replace(/<[^>]+>/g, ''), 180).length * 6));
                y += 8;
                doc.setTextColor('#457B9D');
                doc.text('Solusi Penyembuhan:', 14, y);
                doc.setTextColor('#222');
                y += 6;
                y += doc.splitTextToSize(info.solusi.replace(/<[^>]+>/g, ''), 180).length * 6;
                doc.text(doc.splitTextToSize(info.solusi.replace(/<[^>]+>/g, ''), 180), 14, y - (doc.splitTextToSize(info.solusi.replace(/<[^>]+>/g, ''), 180).length * 6));
                y += 8;
                doc.setTextColor('#A8DADC');
                doc.text('Jenis Cabai yang Sering Terkena:', 14, y);
                doc.setTextColor('#222');
                y += 6;
                doc.text(doc.splitTextToSize(info.jenis_cabai.replace(/<[^>]+>/g, ''), 180), 14, y);
            }
            doc.save(`hasil_deteksi_cabai_${Date.now()}.pdf`);
        };
    });
    // Event hapus semua
    if (clearBtn) {
        clearBtn.onclick = () => {
            if (confirm('Yakin ingin menghapus semua riwayat?')) {
                localStorage.removeItem('predictionHistory');
                window.initHistoryPage();
            }
        };
    }
};

// Fungsi untuk inisialisasi halaman jenis cabai
window.initTypesPage = () => {
    document.querySelectorAll('.accordion').forEach(accordion => {
        const btns = accordion.querySelectorAll('.accordion-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const isOpen = content.classList.contains('opacity-100');
                // Tutup semua panel di card ini
                accordion.querySelectorAll('.accordion-content').forEach(c => {
                    c.classList.remove('opacity-100');
                    c.classList.add('opacity-0');
                    c.style.maxHeight = '0px';
                });
                accordion.querySelectorAll('.accordion-btn span').forEach(span => {
                    span.textContent = '▼';
                });
                // Jika panel yang diklik sebelumnya tertutup, buka
                if (!isOpen) {
                    content.classList.add('opacity-100');
                    content.classList.remove('opacity-0');
                    content.style.maxHeight = content.scrollHeight + 'px';
                    btn.querySelector('span').textContent = '▲';
                }
                // Jika panel yang diklik sudah terbuka, biarkan semua tertutup (toggle)
            });
        });
    });
};

// Fungsi untuk menampilkan hasil
const displayResult = (result) => {
    const resultContainer = document.getElementById('result-container');
    if (resultContainer) {
        let infoHtml = '';
        const info = DISEASE_INFO[result.prediction];
        if (info) {
            infoHtml = `
                <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white border-l-4 border-[#E63946] rounded-lg shadow p-4 flex flex-col items-start">
                        <div class="text-3xl mb-2">🦠</div>
                        <h4 class="font-bold text-[#E63946] mb-2 text-lg">Penjelasan Penyakit</h4>
                        <p class="text-[#1D3557] text-sm leading-relaxed">${info.definisi}</p>
                    </div>
                    <div class="bg-white border-l-4 border-[#457B9D] rounded-lg shadow p-4 flex flex-col items-start">
                        <div class="text-3xl mb-2">💡</div>
                        <h4 class="font-bold text-[#457B9D] mb-2 text-lg">Solusi Penyembuhan</h4>
                        <p class="text-[#1D3557] text-sm leading-relaxed">${info.solusi}</p>
                    </div>
                    <div class="bg-white border-l-4 border-[#A8DADC] rounded-lg shadow p-4 flex flex-col items-start">
                        <div class="text-3xl mb-2">🌶️</div>
                        <h4 class="font-bold text-[#A8DADC] mb-2 text-lg">Jenis Cabai yang Sering Terkena</h4>
                        <p class="text-[#1D3557] text-sm leading-relaxed">${info.jenis_cabai}</p>
                    </div>
                </div>
            `;
        }
        // Preview 3 riwayat deteksi terakhir
        let previewHistory = getHistory().slice(0, 3).map((item, idx) => `
            <div class="bg-white rounded-lg shadow p-3 mb-2">
                <div class="flex justify-between items-center">
                    <div>
                        <span class="font-bold text-[#E63946]">${item.prediction}</span>
                        <span class="text-xs text-gray-500 ml-2">${new Date(item.timestamp).toLocaleString()}</span>
                    </div>
                    <span class="text-sm text-gray-600">${(item.confidence * 100).toFixed(2)}%</span>
                </div>
            </div>
        `).join('');
        if (previewHistory) {
            previewHistory = `<div class="mt-8"><h4 class="font-bold text-[#1D3557] mb-2">Riwayat Deteksi Terakhir</h4>${previewHistory}</div>`;
        }
        // Tips Pencegahan
        const tipsHtml = `<div class="mt-8 p-4 bg-[#F1FAEE] rounded-lg shadow">
            <div class="flex items-center mb-2"><span class="text-2xl mr-2">🛡️</span><span class="font-bold text-[#457B9D] text-lg">Tips Pencegahan Penyakit Cabai</span></div>
            <ul class="list-disc list-inside text-[#1D3557] text-sm mt-2">
                <li>Gunakan benih unggul dan sehat.</li>
                <li>Lakukan rotasi tanaman dan hindari monokultur.</li>
                <li>Jaga kebersihan lahan dan buang tanaman terinfeksi.</li>
                <li>Atur jarak tanam agar sirkulasi udara baik.</li>
                <li>Lakukan pemupukan dan penyiraman secara seimbang.</li>
                <li>Periksa tanaman secara rutin untuk deteksi dini penyakit.</li>
            </ul>
        </div>`;
        // Catatan Pribadi
        const history = getHistory();
        const savedNote = (history.length > 0 && history[0].note) ? history[0].note : '';
        const noteKey = `note_${result.timestamp}`;
        const noteHtml = `<div class="mt-8 p-4 bg-white rounded-lg shadow">
            <div class="flex items-center mb-2"><span class="text-2xl mr-2">📝</span><span class="font-bold text-[#E63946] text-lg">Catatan Pribadi</span></div>
            <textarea id="personal-note" class="w-full border rounded p-2 text-sm" rows="2" placeholder="Tulis catatan pribadi di sini...">${savedNote}</textarea>
            <button id="save-note" class="mt-2 px-4 py-1 bg-[#457B9D] text-white rounded hover:bg-[#1D3557] transition-colors">Simpan Catatan</button>
        </div>`;
        resultContainer.innerHTML = `
            <div class="p-4 bg-white rounded-lg shadow text-center">
                <h3 class="text-xl font-bold mb-2 text-[#1D3557]">Hasil Prediksi</h3>
                <p class="text-lg font-semibold text-[#E63946]">Status: ${result.prediction}</p>
                <p class="text-sm text-gray-600">Confidence: ${(result.confidence * 100).toFixed(2)}%</p>
                <button id="download-result" class="mt-4 px-4 py-2 bg-[#E63946] text-white rounded hover:bg-[#1D3557] transition-colors">Download Hasil</button>
            </div>
            ${infoHtml}
            ${noteHtml}
            ${previewHistory}
            ${tipsHtml}
        `;
        // Event simpan catatan
        setTimeout(() => {
            const saveBtn = document.getElementById('save-note');
            const noteInput = document.getElementById('personal-note');
            if (saveBtn && noteInput) {
                saveBtn.onclick = () => {
                    localStorage.setItem(noteKey, noteInput.value);
                    // Update predictionHistory (item terbaru)
                    const history = getHistory();
                    if (history.length > 0) {
                        history[0].note = noteInput.value;
                        localStorage.setItem('predictionHistory', JSON.stringify(history));
                    }
                    saveBtn.textContent = 'Tersimpan!';
                    setTimeout(() => saveBtn.textContent = 'Simpan Catatan', 1500);
                };
            }
            // Download hasil deteksi (PDF)
            const downloadBtn = document.getElementById('download-result');
            if (downloadBtn) {
                downloadBtn.onclick = () => {
                    const doc = new jsPDF();
                    doc.setFont('helvetica');
                    doc.setFontSize(18);
                    doc.setTextColor('#E63946');
                    doc.text('Hasil Deteksi Cabai', 14, 18);
                    doc.setFontSize(12);
                    doc.setTextColor('#222');
                    doc.text(`Status: ${result.prediction}`, 14, 30);
                    doc.text(`Confidence: ${(result.confidence * 100).toFixed(2)}%`, 14, 38);
                    doc.text(`Waktu Deteksi: ${new Date(result.timestamp).toLocaleString()}`, 14, 46);
                    doc.setTextColor('#E63946');
                    doc.text('Catatan Pribadi:', 14, 56);
                    doc.setTextColor('#222');
                    const note = noteInput.value || '-';
                    doc.text(doc.splitTextToSize(note, 180), 14, 62);
                    let y = 62 + doc.getTextDimensions(doc.splitTextToSize(note, 180)).h + 8;
                    if (info) {
                        doc.setTextColor('#E63946');
                        doc.text('Penjelasan Penyakit:', 14, y);
                        doc.setTextColor('#222');
                        y += 6;
                        y += doc.splitTextToSize(info.definisi.replace(/<[^>]+>/g, ''), 180).length * 6;
                        doc.text(doc.splitTextToSize(info.definisi.replace(/<[^>]+>/g, ''), 180), 14, y - (doc.splitTextToSize(info.definisi.replace(/<[^>]+>/g, ''), 180).length * 6));
                        y += 8;
                        doc.setTextColor('#457B9D');
                        doc.text('Solusi Penyembuhan:', 14, y);
                        doc.setTextColor('#222');
                        y += 6;
                        y += doc.splitTextToSize(info.solusi.replace(/<[^>]+>/g, ''), 180).length * 6;
                        doc.text(doc.splitTextToSize(info.solusi.replace(/<[^>]+>/g, ''), 180), 14, y - (doc.splitTextToSize(info.solusi.replace(/<[^>]+>/g, ''), 180).length * 6));
                        y += 8;
                        doc.setTextColor('#A8DADC');
                        doc.text('Jenis Cabai yang Sering Terkena:', 14, y);
                        doc.setTextColor('#222');
                        y += 6;
                        doc.text(doc.splitTextToSize(info.jenis_cabai.replace(/<[^>]+>/g, ''), 180), 14, y);
                    }
                    doc.save(`hasil_deteksi_cabai_${Date.now()}.pdf`);
                };
            }
        }, 100);
    }
}; 