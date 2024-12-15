function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark");

  // Menampilkan atau menyembunyikan ikon berdasarkan mode
  const iconMoon = document.getElementById("iconMoon");
  const iconSun = document.getElementById("iconSun");

  if (body.classList.contains("dark")) {
    iconMoon.classList.add("hidden");
    iconSun.classList.remove("hidden");
  } else {
    iconMoon.classList.remove("hidden");
    iconSun.classList.add("hidden");
  }
}

//kirim pesan
document.getElementById("whatsappForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Ambil nilai dari form
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validasi field
  if (!name || !email || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  // Format pesan untuk WhatsApp
  var whatsappMessage = `Nama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}`;

  // URL WhatsApp dengan pesan yang sudah diformat
  var whatsappUrl = `https://wa.me/6281316627877?text=${whatsappMessage}`;

  // Arahkan ke URL WhatsApp
  window.open(whatsappUrl, "_blank");
});
