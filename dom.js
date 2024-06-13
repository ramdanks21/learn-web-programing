// let body = document.body;
// let button = document.createElement("button").addEventListener("click", tester);
// let hai = document.getElementById("hai").addEventListener("click", function () {
//   alert("hello ramdan ");
// });
// function tester() {
//   alert("hai ramdan");
// }
// let isi = document.createTextNode("Button");
// body.append(button);
// button.appendChild(isi);
// function onKeyDown(evt) {
//   console.log(`Key = ${evt.key}. Code = ${evt.code}`);
// }

// function onPaste(evt) {
//   console.log(evt.clipboardDatah1.id.getData("text/plain"));
// }
// for (let el of document.getElementsByClassName("number")) {
//   el.addEventListener("keydown", onKeyDown);
//   el.addEventListener("paste", onPaste);
// }

// let body = document.body;
// let h1 = document.createElement("h1");
// h1.className = "hero";
// h1.id = "heroes";
// let text = document.createTextNode("Hello Guys");
// body.append(h1);
// h1.appendChild(text);
// let div = document.createElement("div");
// div.className = "container";
// let ul = document.createElement("ul");
// let li = document.createElement("li");
// li.appendChild(text);
// ul.appendChild(li);
// div.appendChild(ul);
// body.appendChild(div);
// let tangkap = document.getElementById("heroes");
// tangkap.style.color = "red";
// let button = document.createElement("button");
// button.id = "clickMe";
// body.append(button);
// let btn = document.createTextNode("Button");
// button.appendChild(btn);
// button.addEventListener("click", function () {
//   console.log("Hello Guys");
// });
// const hello = document.getElementsByTagName("p");
// const h1 = document.getElementsByTagName("h1");

// for (let i = 0; 1 < h1.length; i++) {
//   h1[i].style.background = "green";
//   h1[i].style.color = "white";
//   console.log(i);
// }
// for (let i = 0; 1 < hello.length; i++) {
//   hello[i].style.background = "green";
//   hello[i].style.color = "white";
// }

// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// getID dan selector adalah tunggal atau bisa langsung menggunakan propery seperti style,append dll
// untuk yang lain gunakan array di akhir methodnya contoh classname(a)[0]
let x = document.getElementsByClassName("h1");
// jika COLLECTION dan NODELIST gunakan Collection atau menggunakan araay contoh h1[1]
let container = document.getElementsByClassName("container")[0];
let ss = container.getElementsByTagName("h1");
ss[0].style.color = "blue";

let p = document.querySelector(".p");
p.innerText = "Hello";
p.className = "Tester";
// let b = p.getAttribute("tester"); //mengambil attribut
// p.setAttribute(qualifiedName, value); //menambahkan attribute
