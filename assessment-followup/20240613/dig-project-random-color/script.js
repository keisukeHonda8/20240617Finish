"use strict";
// please do not delete the 'use strict' line above

//set
document.getElementById("color-button").addEventListener("click", changeColor);
const colors = [
  "#FF1F91",
  "#FF24B6",
  "#F215FF",
  "#AA1BFF",
  "#761AFF",
  "#6E1BFF",
  "#4422FF",
  "#1BFAFF",
  "#23FFB5",
  "#23FF17",
  "#F8FF26",
  "#FFF021",
  "#23FF17",
];

//func
function changeColor() {
  console.log("Button clicked!");
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}

//func
const ikaButton = document.getElementById("ika");
ikaButton.addEventListener("click", ikaAnimation);
function ikaAnimation() {
  const ika = new Object();
  ika.list = ["ᔦఠఠᔨ", "ᔦ⚯ᔨ", "ᔦꙬᔨ", "ᔦ⊝⊝ᔨ", "ᔦ°ω°ᔨ", "ᔦ๑°ω°๑ᔨ"];
  ika.count = 0;
  ika.limit = 100;
  ika.set = function () {
    const span = document.createElement("span");
    span.className = "ika";
    span.style.left = Math.random() * 100 + "%";
    span.style.top = Math.random() * 100 + "%";
    span.style.transform = "rotate(" + (Math.random() * 120 - 60) + "deg)";
    span.style.color = colors[Math.floor(Math.random() * colors.length)];
    span.textContent = ika.list[ika.count++ % ika.list.length];
    document.body.appendChild(span);
    if (document.querySelectorAll(".ika").length >= ika.limit) {
      clearInterval(ika.tmr);
      alert("侵略完了！");
    }
  };
  ika.tmr = setInterval(ika.set, 250);
}
