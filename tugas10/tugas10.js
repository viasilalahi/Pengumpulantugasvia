// Alert saat tombol REGISTER dan LOGIN diklik
document.querySelector('.signup-btn').addEventListener('click', function () {
    alert('Website Dalam Perbaikan');
});

document.querySelector('.login-btn').addEventListener('click', function () {
    alert('Website Dalam Perbaikan');
});

// Ubah teks kedua-text secara berkala
const genreList = ['Horror', 'Action', 'Romance', 'Comedy'];
let index = 0;

const genreText = document.querySelector('.kedua-text');
genreText.style.color = 'orange'; // Set warna awal

setInterval(() => {
    index = (index + 1) % genreList.length;
    genreText.textContent = genreList[index];
}, 4000);
