// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let currentColor = document.querySelector("#current-color");

//try let palette = document.querySelectorAll("#palette" .color);

let colors = document.querySelectorAll(".color");
//console.log(palette);

for (const color of colors) {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });
}

const cell = document.querySelectorAll(".cell");

cell.forEach((cell) => {
  cell.addEventListener("mousedown", (e) => {
    console.log(" You are holding the mouse down!");
    cell.style.background = currentColor.style.backgroundColor;
  });
});

//console.log("height", window.innerHeight);
//console.log("width",window.innerWidth);
