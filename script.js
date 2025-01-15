const heartContainer = document.querySelector('.heart-container');

// Fungsi untuk membuat dan menampilkan love
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Posisi acak di sumbu X
    heart.style.setProperty('--random-x', Math.random() * 200 - 100); // Gerakan acak di sumbu X
    heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // Durasi animasi acak
    heart.style.animationDelay = Math.random() * 2 + 's'; // Delay animasi acak
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Hapus love setelah animasi selesai
    }, 5000); // Love akan dihapus setelah 5 detik
}

// Buat lebih banyak love dalam interval yang lebih singkat
setInterval(createHeart, 150); // Munculkan love setiap 150ms
