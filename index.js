// Memenculkn navigasi list
const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menuToggle");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// Memunculkan materi ketika list-icon di klik
const listIcon = document.querySelector("#listIcon");
const openIcon = document.querySelector("#listIcon .openIcon");
const closeIcon = document.querySelector("#listIcon .closeIcon");
const contentList = document.querySelector(".contentList");

listIcon.addEventListener("click", function () {
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  contentList.classList.toggle("active");
});

// Mendengarkan klik pada semua tombol dropdown
const buttons = document.querySelectorAll(".dropdown-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = button.getAttribute("data-index");
    toggleDropdown(`dropdown${index}`);
  });
});

// Fungsi untuk menampilkan/menyembunyikan dropdown yang sesuai
function toggleDropdown(className) {
  // Mengambil elemen dropdown yang sesuai dengan nama kelas
  const dropdown = document.querySelector(`.${className}`);
  if (dropdown) {
    // Menggunakan toggle untuk menambah/menghilangkan class "hidden"
    dropdown.classList.toggle("hidden");
  }
}

// Putar tanda plus

const putarIcon1 = document.querySelector(".putar-icon1");
const icon1 = document.querySelector("#icon1");

putarIcon1.addEventListener("click", function () {
  icon1.classList.toggle("rotate-[225deg]");
});

const putarIcon2 = document.querySelector(".putar-icon2");
const icon2 = document.querySelector("#icon2");

putarIcon2.addEventListener("click", function () {
  icon2.classList.toggle("rotate-[225deg]");
});

const putarIcon3 = document.querySelector(".putar-icon3");
const icon3 = document.querySelector("#icon3");

putarIcon3.addEventListener("click", function () {
  icon3.classList.toggle("rotate-[225deg]");
});

// Hilangkan default saat pengiriman form

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Jawaban Terkirim!");
    });
  });
});
