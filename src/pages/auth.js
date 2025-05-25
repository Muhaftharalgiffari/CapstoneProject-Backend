// Fungsi untuk menangani login
export const handleLogin = async (email, password) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Simpan token ke localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            // Redirect ke halaman home
            window.location.href = '/home';
        } else {
            throw new Error(data.message || 'Login gagal');
        }
    } catch (error) {
        console.error('Error:', error);
        alert(error.message);
    }
};

// Fungsi untuk menangani register
export const handleRegister = async (name, email, password) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Registrasi berhasil! Silakan login.');
            window.location.href = '/login';
        } else {
            throw new Error(data.message || 'Registrasi gagal');
        }
    } catch (error) {
        console.error('Error:', error);
        alert(error.message);
    }
};

// Fungsi untuk mengecek status autentikasi
export const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login';
        return false;
    }
    return true;
};

// Fungsi untuk logout
export const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
}; 