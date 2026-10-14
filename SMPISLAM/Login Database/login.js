// Data akun contoh
const akunSiswa = {
    username: "siswa123",
    password: "123456"
};

// Ambil elemen
const form = document.getElementById("loginForm");
const userInput = document.getElementById("username");
const passInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const togglePass = document.getElementById("togglePassword");

// Tampil/sembunyikan kata sandi
togglePass.addEventListener("click", () => {
    const tipe = passInput.type === "password" ? "text" : "password";
    passInput.type = tipe;
    togglePass.textContent = tipe === "password" ? "👁️" : "🙈";
});

// Proses login
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userVal = userInput.value.trim();
    const passVal = passInput.value.trim();

    // Sembunyikan pesan error dulu
    errorMsg.style.display = "none";
    errorMsg.textContent = "";

    if (!userVal || !passVal) {
        tampilkanError("⚠️ Harap isi NIS dan kata sandi!");
        return;
    }

    if (userVal === akunSiswa.username && passVal === akunSiswa.password) {
        alert("✅ Berhasil masuk! Selamat datang, Siswa!");
        // Ganti dengan halaman tujuan:

      window.location.href = "database.html";
    } else {
        tampilkanError("❌ NIS atau kata sandi tidak cocok!");
    }
});

function tampilkanError(pesan) {
    errorMsg.textContent = pesan;
    errorMsg.style.display = "block";
}