export const About = () => {
    return `
        <section class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#A8DADC] via-[#F1FAEE] to-[#E63946] font-poppins">
            <div class="w-full max-w-6xl px-4 py-12">
                <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center mb-12">
                    <div class="flex justify-center mb-4">
                        <i class="fas fa-users text-4xl text-[#E63946]"></i>
                    </div>
                    <h1 class="text-3xl md:text-4xl font-extrabold text-[#1D3557] mb-2 drop-shadow-lg">Tim Kami</h1>
                    <p class="text-[#457B9D] text-base md:text-lg mb-6">Kenali lebih dekat tim pengembang ChiliDetect.</p>
                </div>

                <!-- Machine Learning Team -->
                <div class="mb-12">
                    <div class="flex items-center justify-center mb-6">
                        <i class="fas fa-brain text-3xl text-[#1D3557] mr-3"></i>
                        <h2 class="text-2xl font-bold text-[#1D3557]">Machine Learning Team</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-[#F1FAEE] rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                            <div class="relative">
                                <img src="/assets/images/Pepri Andika.png" alt="Pepri Andika" class="w-32 h-32 rounded-full mb-4 shadow-lg object-cover">
                                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#1D3557]/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-lg text-xs font-medium shadow-lg">
                                    <i class="fas fa-brain mr-1.5"></i>ML Team
                                </div>
                            </div>
                            <h3 class="font-bold text-[#1D3557] text-xl mb-1">Pepri Andika</h3>
                            <p class="text-[#E63946] text-xs font-medium mb-2 italic">"Transforming Industry with Intelligent Data"</p>
                            <div class="flex gap-3 mb-4">
                                <a href="https://www.linkedin.com/in/pepriandika/" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="https://github.com/pepriandika" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-github text-xl"></i>
                                </a>
                            </div>
                            <div class="flex flex-wrap gap-2 justify-center">
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fab fa-python mr-1"></i>Python
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-robot mr-1"></i>Machine Learning
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-database mr-1"></i>Data Engineering
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-flask mr-1"></i>Laboratory Analysis
                                </span>
                            </div>
                        </div>
                        <div class="bg-[#F1FAEE] rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                            <div class="relative">
                                <img src="/assets/images/Sheila.jpg" alt="Sheila" class="w-32 h-32 rounded-full mb-4 shadow-lg object-cover">
                                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#1D3557]/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-lg text-xs font-medium shadow-lg">
                                    <i class="fas fa-brain mr-1.5"></i>ML Team
                                </div>
                            </div>
                            <h3 class="font-bold text-[#1D3557] text-xl mb-1">Sheila</h3>
                            <p class="text-[#E63946] text-xs font-medium mb-2 italic">"Data is the New Oil"</p>
                            <div class="flex gap-3 mb-4">
                                <a href="https://www.linkedin.com/search/results/all/?keywords=sheila&origin=GLOBAL_SEARCH_HEADER&sid=.H6" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="https://github.com/sheiladys" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-github text-xl"></i>
                                </a>
                            </div>
                            <div class="flex flex-wrap gap-2 justify-center">
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-chart-line mr-1"></i>Data Processing
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-brain mr-1"></i>PyTorch
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-eye mr-1"></i>Computer Vision
                                </span>
                            </div>
                        </div>
                        <div class="bg-[#F1FAEE] rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                            <div class="relative">
                                <img src="/assets/images/Reinhart.png" alt="Reinhart Jens Robert" class="w-32 h-32 rounded-full mb-4 shadow-lg object-cover">
                                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#1D3557]/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-lg text-xs font-medium shadow-lg">
                                    <i class="fas fa-brain mr-1.5"></i>ML Team
                                </div>
                            </div>
                            <h3 class="font-bold text-[#1D3557] text-xl mb-1">Reinhart Jens Robert</h3>
                            <p class="text-[#E63946] text-xs font-medium mb-2 italic">"AI for a Better Tomorrow"</p>
                            <div class="flex gap-3 mb-4">
                                <a href="https://www.linkedin.com/in/reinhartjensrobert" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="https://github.com/reinhart07" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-github text-xl"></i>
                                </a>
                            </div>
                            <div class="flex flex-wrap gap-2 justify-center">
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-brain mr-1"></i>Deep Learning
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-network-wired mr-1"></i>Neural Networks
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-cube mr-1"></i>TensorFlow
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-language mr-1"></i>NLP
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Frontend & Backend Team -->
                <div>
                    <div class="flex items-center justify-center mb-6">
                        <i class="fas fa-laptop-code text-3xl text-[#1D3557] mr-3"></i>
                        <h2 class="text-2xl font-bold text-[#1D3557]">Frontend & Backend Team</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-[#F1FAEE] rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                            <div class="relative">
                                <img src="/assets/images/Muh. Afthar algiffari.png" alt="Muh. Afthar Algiffari" class="w-32 h-32 rounded-full mb-4 shadow-lg object-cover">
                                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#1D3557]/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-lg text-xs font-medium shadow-lg">
                                    <i class="fas fa-laptop-code mr-1.5"></i>Web Team
                                </div>
                            </div>
                            <h3 class="font-bold text-[#1D3557] text-xl mb-1">Muh. Afthar Algiffari</h3>
                            <p class="text-[#E63946] text-xs font-medium mb-2 italic">"Frontend-Driven, User-Focused, Always Evolving."</p>
                            <div class="flex gap-3 mb-4">
                                <a href="https://www.linkedin.com/in/muh-aftharalgiffari-834774236/" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="https://github.com/Muhaftharalgiffari" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-github text-xl"></i>
                                </a>
                            </div>
                            <div class="flex flex-wrap gap-2 justify-center">
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-globe mr-1"></i>Web Development
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fab fa-js mr-1"></i>JavaScript
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-palette mr-1"></i>UI/UX Design
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fab fa-node-js mr-1"></i>Node.js
                                </span>
                            </div>
                        </div>
                        <div class="bg-[#F1FAEE] rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                            <div class="relative">
                                <img src="https://ui-avatars.com/api/?name=Wira+Ananda&background=E63946&color=fff&size=128" alt="Wira Ananda" class="w-32 h-32 rounded-full mb-4 shadow-lg object-cover">
                                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#1D3557]/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-lg text-xs font-medium shadow-lg">
                                    <i class="fas fa-laptop-code mr-1.5"></i>Web Team
                                </div>
                            </div>
                            <h3 class="font-bold text-[#1D3557] text-xl mb-1">Wira Ananda</h3>
                            <p class="text-[#E63946] text-xs font-medium mb-2 italic">"Building Robust Systems"</p>
                            <div class="flex gap-3 mb-4">
                                <a href="https://www.linkedin.com/in/wira-ananda" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="https://github.com/wira-ananda" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-github text-xl"></i>
                                </a>
                            </div>
                            <div class="flex flex-wrap gap-2 justify-center">
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-exchange-alt mr-1"></i>Axios
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-share-alt mr-1"></i>Social Media
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-bullhorn mr-1"></i>Digital Media
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-pencil-ruler mr-1"></i>Graphic Design
                                </span>
                            </div>
                        </div>
                        <div class="bg-[#F1FAEE] rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                            <div class="relative">
                                <img src="/assets/images/Abid Abdillah.jpg" alt="Abid Abdillah" class="w-32 h-32 rounded-full mb-4 shadow-lg object-cover">
                                <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#1D3557]/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-lg text-xs font-medium shadow-lg">
                                    <i class="fas fa-laptop-code mr-1.5"></i>Web Team
                                </div>
                            </div>
                            <h3 class="font-bold text-[#1D3557] text-xl mb-1">Abid Abdillah</h3>
                            <p class="text-[#E63946] text-xs font-medium mb-2 italic">"Building Digital Solutions"</p>
                            <div class="flex gap-3 mb-4">
                                <a href="https://www.linkedin.com/in/abid-abdillah" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="https://github.com/Abid-Abdi" target="_blank" class="text-[#457B9D] hover:text-[#E63946] transition-colors">
                                    <i class="fab fa-github text-xl"></i>
                                </a>
                            </div>
                            <div class="flex flex-wrap gap-2 justify-center">
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-code mr-1"></i>Front-End
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-server mr-1"></i>Back-End
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fab fa-laravel mr-1"></i>Laravel
                                </span>
                                <span class="px-3 py-1 bg-[#A8DADC] text-[#1D3557] rounded-full text-xs font-medium">
                                    <i class="fas fa-window-maximize mr-1"></i>SPA
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}; 