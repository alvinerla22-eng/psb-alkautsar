// Fungsi untuk tombol panah ke bawah
document.addEventListener('DOMContentLoaded', function () {
    const scrollBtn = document.getElementById('scrollDown');
    
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function () {
            // Gulir ke bagian tombol hijau
            document.querySelector('.green-group').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Tambahkan efek klik pada semua tombol
    const allButtons = document.querySelectorAll('.blue-btn, .green-btn');
    allButtons.forEach(btn => {
        btn.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.98)';
        });
        btn.addEventListener('mouseup mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});