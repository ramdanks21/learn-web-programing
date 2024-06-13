const button = document.createElement("button");
const textButton = document.createTextNode("Button");
button.prepend(textButton);
button.setAttribute("type", "button");
const oldButton = document.getElementsByClassName("change")[0];
oldButton.after(button);
button.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  console.log(r);
  document.body.style.background = "rgb(" + r + "," + r + "," + r + ")";
});

const sMerah = document.querySelector("input[name=sMerah]");
// const sMerah = document.getElementsByClassName('sMerah')[0];
const range = document.querySelectorAll("input");

for (let i = 0; i < range.length; i++) {
  range[i].addEventListener("input", function () {
    const r = range[0].value;
    const g = range[1].value;
    const b = range[2].value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}
