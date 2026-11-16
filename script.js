// STEP 1: Mengambil elemen tombol dari HTML
const tombolSapa = document.getElementById('SapaButton');

// STEP 2: Menambahkan event listener untuk mendeteksi klik
tombolSapa.addEventListener('click', function() {

    // STEP 3: Menampilkan pesan sapaan
    alert('Halo! Terima kasih sudah berkunjung!');

});
