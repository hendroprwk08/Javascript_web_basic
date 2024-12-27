// Fungsi untuk menyimpan data teman ke localStorage
const daftarTeman = document.getElementById('daftar-teman');
    
const simpanTeman = () => {
    const nama = document.getElementById('nama').value;
    const umur = document.getElementById('umur').value;

    // Buat objek teman
    const teman = {
        nama: nama,
        umur: umur
    };

    // Simpan objek teman ke localStorage
    let dataTeman = JSON.parse(localStorage.getItem('teman')) || [];
    dataTeman.push(teman);
    localStorage.setItem('teman', JSON.stringify(dataTeman));

    // Kosongkan form
    document.getElementById('form-teman').reset();
    tampilkanTeman();
}

// Fungsi untuk menampilkan data teman dari localStorage
const tampilkanTeman = () => {
    daftarTeman.innerHTML = '';

    let dataTeman = JSON.parse(localStorage.getItem('teman')) || [];

    dataTeman.forEach(teman => {
        const li = document.createElement('li');
        li.textContent = `${teman.nama} (${teman.umur} tahun)`;
        daftarTeman.appendChild(li);
    });
}

// Event listener untuk form
document.getElementById('form-teman').onsubmit = (event) => {
    event.preventDefault();
    simpanTeman();
};

// Event pada tombol hapus
document.getElementById('hapus').onclick = () => {
    localStorage.clear();
    daftarTeman.innerHTML = '';
}

// Tampilkan data teman saat halaman dimuat
tampilkanTeman();