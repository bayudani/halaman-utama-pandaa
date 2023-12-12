function toggleLanjutanBacaContent() {
  var lanjutanBacaContent = document.getElementById("LanjutanBaca");
  var learnMoreButton = document.querySelector(".ctabutton");

  // Ubah visibilitas konten
  lanjutanBacaContent.style.display =
    lanjutanBacaContent.style.display === "none" ? "block" : "none";

  // Ubah teks tombol
  learnMoreButton.innerText =
    lanjutanBacaContent.style.display === "none" ? "Learn More" : "Back";
}

document
  .querySelector(".ctabutton")
  .addEventListener("click", toggleLanjutanBacaContent);

function toggleLanjutBacaContentArticle() {
  var lanjutBacaContent = document.getElementById("lanjutBacaContent");
  var lanjutBacaButton = document.getElementById("lanjutBacaButton");

  //untuk  Ubah visibilitas konten
  lanjutBacaContent.style.display =
    lanjutBacaContent.style.display === "none" ? "block" : "none";

  // untuk rUbah teks tombol
  lanjutBacaButton.innerText =
    lanjutBacaContent.style.display === "none" ? "Lanjut Baca" : "Tutup";
}

document
  .getElementById("lanjutBacaButton")
  .addEventListener("click", toggleLanjutBacaContentArticle);



//   function toggleLanjutBacaContent() {
//     var lanjutBacaContent = document.getElementById("lanjutBacaContent");
//     var lanjutBacaButton = document.getElementById("lanjutBacaButton");

//     // Ubah visibilitas konten
//     lanjutBacaContent.style.display = (lanjutBacaContent.style.display === "none") ? "block" : "none";

//     // ini untk meruUbah teks tombol sesuai dengan visibilitas konten
//     lanjutBacaButton.innerText = (lanjutBacaContent.style.display === "none") ? "Lanjut Baca" : "Tutup";
//   }

//   // Tambahkan event listener ke tombol "Lanjut Baca"
//   document.getElementById("lanjutBacaButton").addEventListener("click", toggleLanjutBacaContent);
