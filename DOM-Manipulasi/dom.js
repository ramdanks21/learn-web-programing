const liBaru = document.createElement("li");
const textliBaru = document.createTextNode("Item baru");
liBaru.appendChild(textliBaru);

// menyimpan elenbaru diposisi sebelum anak ke 2
const ul = document.querySelector("section#b ul"); //posisi tempat
const li2 = ul.querySelector("li:nth-child(2)"); //element target li anak ke 2

ul.insertBefore(liBaru, li2);

// removechild
const sectionA = document.querySelector("section#a");
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

//rep;acechild
const sectionB = document.querySelector("section#b"); // membatasi secope
const p4 = sectionB.querySelector("p"); // mengakses tag p disecetion id ='b'
const h2Baru = document.createElement("h2");
const textH2Baru = document.createTextNode("Judul Baru");
h2Baru.appendChild(textH2Baru);
sectionB.replaceChild(h2Baru, p4);
