// cara Pertaman

// const container = document.querySelector(".container");
// const jumbo = document.querySelector(".jumbo");
// container.addEventListener("click", function (e) {
//   // cek apakah yang diclik adalah thumb
//   if (e.target.className == "thumb") {
//     // jumbo src akan diganti sesuai dengan image yang kita click
//     jumbo.src = e.target.src;
//   }
// });

const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
container.addEventListener("click", function (e) {
  // cek apakah yang diclik adalah thumb
  if (e.target.className == "thumb") {
    // jumbo src akan diganti sesuai dengan image yang kita click
    jumbo.src = e.target.src;
    // elemen yang besar nya ditambah class fade
    jumbo.classList.add("fade");
  }
});
