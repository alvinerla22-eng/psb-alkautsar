// ==============================================
// DATABASE SISWA & NILAI
// ==============================================
const databaseSiswa = [
    {
        nis: "12345",
        nama: "Andi Pratama",
        kelas: "XII IPA 1",
        sandi: "123456",
        nilai: {
            "Matematika": 85,
            "Bahasa Indonesia": 90,
            "Bahasa Inggris": 78,
            "Fisika": 82,
            "Kimia": 80
        }
    },
    {
        nis: "67890",
        nama: "Siti Aminah",
        kelas: "XII IPS 2",
        sandi: "654321",
        nilai: {
            "Matematika": 75,
            "Bahasa Indonesia": 88,
            "Bahasa Inggris": 92,
            "Sejarah": 86,
            "Geografi": 80
        }
    }
];

// Simpan ke localStorage agar data tetap ada
if (!localStorage.getItem("dataSiswa")) {
    localStorage.setItem("dataSiswa", JSON.stringify(databaseSiswa));
}

// ==============================================
// FUNGSI LOGIN
// ==============================================
const form = document.getElementById("loginForm");
const userInput = document.getElementById("username");
const passInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const togglePass = document.getElementById("togglePassword");

// Tampil/sembunyikan sandi
togglePass.addEventListener("click", () => {
    const tipe = passInput.type === "password" ? "text" : "password";
    passInput.type = tipe;
    togglePass.textContent = tipe === "password" ? "👁️" : "🙈";
});

// Proses login
form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorMsg.style.display = "none";

    const nis = userInput.value.trim();
    const sandi = passInput.value.trim();
    const dataSiswa = JSON.parse(localStorage.getItem("dataSiswa"));

    if (!nis || !sandi) {
        tampilkanError("⚠️ Harap isi NIS dan kata sandi!");
        return;
    }

    // Cari siswa di database
    const siswa = dataSiswa.find(s => s.nis === nis && s.sandi === sandi);

    if (siswa) {
        // Simpan sesi login
        localStorage.setItem("siswaAktif", JSON.stringify(siswa));
        alert(`✅ Selamat datang, ${siswa.nama}!`);
        // Pindah ke halaman beranda
        window.location.href = "beranda.html";
    } else {
        tampilkanError("❌ NIS atau kata sandi salah!");
    }
});

function tampilkanError(pesan) {
    errorMsg.textContent = pesan;
    errorMsg.style.display = "block";
}