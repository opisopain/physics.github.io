document.addEventListener('DOMContentLoaded', function(){
  // Lock Aktivtas
const aktivitas1Key = "AKTIVITAS1KEY";
const localAktivitas1 = localStorage.getItem(aktivitas1Key);
const aktivitas2Key = "AKTIVITAS2KEY";
const localAktivitas2 = localStorage.getItem(aktivitas2Key);
const aktivitas3Key = "AKTIVITAS3KEY";
const localAktivitas3 = localStorage.getItem(aktivitas3Key);
const aktivitas4Key = "AKTIVITAS4KEY";
const localAktivitas4 = localStorage.getItem(aktivitas4Key);
const lanjutAktivitas4 = document.getElementById("lanjutAktivitas4");
const aktivitas5Key = "AKTIVITAS5KEY";
const localAktivitas5 = localStorage.getItem(aktivitas5Key);
const notifTidakLulus = document.getElementById("notifTidakLulus");

const navList = document.querySelector(".nav-list");


// List Materi
window.addEventListener("load", function () {
  navList.classList.remove("initial-style");

  renderAktivitas();

  if (localAktivitas1 === null) {
    localStorage.setItem(aktivitas1Key, false);
  }

  if (localAktivitas2 === null) {
    localStorage.setItem(aktivitas2Key, false);
  }

  if (localAktivitas3 === null) {
    localStorage.setItem(aktivitas3Key, false);
  }
  if (localAktivitas4 === null) {
    localStorage.setItem(aktivitas4Key, false);
  }
  if (localAktivitas5 === null) {
    localStorage.setItem(aktivitas5Key, false);
  }

  // Kirim Refleksi dan Tampilkan Pop-Up
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    popUpLoading.classList.remove("hidden");
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(function () {
      textPopUp.innerText = "Jawaban Anda Terkirim";
      popUpLoading.classList.add("hidden");
      popUp.classList.remove("hidden");

      setTimeout(function () {
        popUp.classList.add("hidden");

        if (localStorage.getItem(aktivitas4Key) === "false") {
          cekSkor();
          renderAktivitas();
        }
        location.reload();
      }, 2000);
    });
  });

  // List Materi
  const listIcon = document.querySelector("#listIcon");
  const openIcon = document.querySelector("#listIcon .openIcon");
  const contentList = document.querySelector(".contentList");
  const closeIcon = document.querySelector("#listIcon .closeIcon");

  listIcon.addEventListener("click", function () {
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    contentList.classList.toggle("active");
  });

  const buttons = document.querySelectorAll(".dropdown-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      toggleDropdown(`dropdown${index}`);
    });
  });

  function toggleDropdown(className) {
    const dropdown = document.querySelector(`.${className}`);
    if (dropdown) {
      dropdown.classList.toggle("hidden");
    }
  }

  const putarIcon = document.querySelectorAll(".putar-icon");
  for (let i = 0; i < putarIcon.length; i++) {
    const elemen = putarIcon[i];
    elemen.addEventListener("click", function () {
      const icon = document.getElementById(`icon${i}`);
      icon.classList.toggle("rotate-[225deg]");
    });
  }
});

function renderAktivitas() {
  // Aktivitas 1
  if (localStorage.getItem(aktivitas1Key) === "true") {
    const aktivitas1IconLock = document.querySelectorAll(".aktivitas1Lock i");
    aktivitas1IconLock.forEach(function (element) {
      element.classList.add("hidden");
    });

    const menuList1 = document.querySelector(".nav-list .aktivitas1Lock");

    menuList1.classList.remove("opacity-50");
    menuList1.classList.add("opacity-100");

    const aktivitas1Open = document.querySelectorAll(".aktivitas1Lock");
    aktivitas1Open.forEach(function (element) {
      element.setAttribute("href", "/src/Argumentasi/Argumentasi.html");
    });
  }

  // Aktivitas 2
  if (localStorage.getItem(aktivitas2Key) === "true") {
    const kelas10 = document.getElementById("kelas10");
    const lockKelas10 = document.getElementById("lockKelas10");
    kelas10.classList.remove("opacity-50");
    kelas10.classList.add("opacity-100");
    kelas10.classList.add("dropdown-button");
    kelas10.classList.add("putar-icon");
    lockKelas10.classList.add("hidden");
  }

  // Aktivitas 3
  if (localStorage.getItem(aktivitas3Key) === "true") {
    const PenyebabPemanasanGlobalList = document.getElementById("PenyebabPemanasanGlobalList");
    const lockIcon = document.querySelector("#PenyebabPemanasanGlobalList i");

    PenyebabPemanasanGlobalList.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/PenyebabPemanasanGlobal.html");
    PenyebabPemanasanGlobalList.classList.remove("opacity-50");
    PenyebabPemanasanGlobalList.classList.add("opacity-100");
    lockIcon.classList.add("hidden");
  }

  //  Aktivitas 4
  if (localStorage.getItem(aktivitas4Key) === "true") {
    const DampakPemanasanGlobalList = document.getElementById("DampakPemanasanGlobalList");
    const lockIcon = document.querySelector("#DampakPemanasanGlobalList i");
    const nextButtonLink = document.getElementById("nextButton");
    const nextButton = document.querySelector('#nextButton i');
    

    nextButton.classList.remove("fa-lock", "opacity-50");
    nextButton.classList.add("fa-circle-chevron-right");
    nextButtonLink.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/DampakPemanasanGlobal.html");


    DampakPemanasanGlobalList.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/DampakPemanasanGlobal.html");
    DampakPemanasanGlobalList.classList.remove("opacity-50");
    DampakPemanasanGlobalList.classList.add("opacity-100");
    lockIcon.classList.add("hidden");

    lanjutAktivitas4.classList.remove("hidden");
    notifTidakLulus.classList.add("hidden");
  } else {
    notifTidakLulus.classList.remove("hidden");
  }

  //  Aktivitas 5
  if (localStorage.getItem(aktivitas5Key) === "true") {
    const SolusiPemanasanGlobalList = document.getElementById("SolusiPemanasanGlobalList");
    const lockIcon = document.querySelector("#SolusiPemanasanGlobalList i");

    SolusiPemanasanGlobalList.setAttribute("href", "/src/materi kelas 10/Pemanasan Global/SolusiPemanasanGlobal.html");
    SolusiPemanasanGlobalList.classList.remove("opacity-50");
    SolusiPemanasanGlobalList.classList.add("opacity-100");
    lockIcon.classList.add("hidden");

    const diskusi = document.querySelector(".diskusiMenu");
    const diskusiLink = document.querySelector(".diskusiMenu a");
    const diskusiIcon = document.querySelector(".diskusiMenu i");

    diskusi.classList.remove("opacity-50");
    diskusi.classList.add("opacity-100");

    diskusiLink.setAttribute("href", "/src/diskusi.html");
    diskusiIcon.classList.add("hidden");
  }
}

// Refleksi
document.getElementById("NamaSiswa").value = localStorage.getItem("DATA-NAMA-SISWA-KEY");
document.getElementById("Kelas").value = localStorage.getItem("DATA-KELAS-SISWA-KEY");

// Atur icon refleksi
const refleksiIcon = document.querySelectorAll(".refleksiIcon");
const refleksiInput = document.querySelectorAll(".refleksiInput");
const refleksiText = document.querySelectorAll(".textRefleksi");

for (let i = 0; i < refleksiInput.length; i++) {
  const elemen = refleksiInput[i];

  elemen.addEventListener("input", function () {
    const nilaiInput = elemen.value;
    const IconElement = refleksiIcon[i];
    const textElement = refleksiText[i];

    Array.from(IconElement.classList).forEach((className) => {
      if (className.startsWith("text-") || className.startsWith("fa-face-")) {
        IconElement.classList.remove(className);
      }
    });

    if (nilaiInput === "2") {
      IconElement.classList.add("text-orange-500");
      IconElement.classList.add("fa-face-frown");
      textElement.innerText = "Kurang Mengerti";
    } else if (nilaiInput === "3") {
      IconElement.classList.add("text-yellow-500");
      IconElement.classList.add("fa-face-meh");
      textElement.innerText = "Cukup Mengerti";
    } else if (nilaiInput === "4") {
      IconElement.classList.add("text-green-500");
      IconElement.classList.add("fa-face-smile-beam");
      textElement.innerText = "Mengerti";
    } else if (nilaiInput === "5") {
      IconElement.classList.add("text-cyan-500");
      IconElement.classList.add("fa-face-laugh-squint");
      textElement.innerText = "Sangat Mengerti";
    } else {
      IconElement.classList.add("text-red-500");
      IconElement.classList.add("fa-face-dizzy");
      textElement.innerText = "Tidak Mengerti";
    }
  });
}

// cek skor
function cekSkor() {
  let jumlah = 0;
  for (let i = 0; i < refleksiInput.length; i++) {
    const elemen = refleksiInput[i];

    jumlah += parseInt(elemen.value);
  }
  const skor = jumlah / refleksiInput.length;

  if (skor >= 3) {
    localStorage.setItem(aktivitas4Key, true);
  }
  return skor;
}

// zoom gambar
const gambar = document.querySelectorAll(".gambar");
  // event zoom
gambar.forEach((element) => {
  element.addEventListener("click", function () {
    const currentPicturePath = element.getAttribute("src");
    const newElementContainer = document.createElement('div');
    const zoomImage = document.createElement('img');
    zoomImage.setAttribute('src', currentPicturePath);
    newElementContainer.appendChild(zoomImage);
    document.body.appendChild(newElementContainer);
  
    newElementContainer.classList.add('zoomImageCnt');
    zoomImage.classList.add('zoomImage');

    newElementContainer.addEventListener('click', function(){
      zoomImage.remove();
      newElementContainer.remove();
    });

    newElementContainer.classList.add('scale-0')
    setTimeout(() => {
    newElementContainer.classList.remove('scale-0')
    newElementContainer.classList.add('scale-100')
    }, 1);
  });
});


})