const sectionA = document.getElementById("a");
const p = sectionA.querySelector("p");
const ig = document.querySelector("img");
ig.src = "hello brow";
const news = document.createElement("h2");
const isi = document.createTextNode("hello");
news.appendChild(isi);
p.setAttribute("src", "hello");
p.src = "bro";
p.before(news);
p.parentElement;
