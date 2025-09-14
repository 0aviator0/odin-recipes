const size = 600;
let gridSize = 15;
let cell = {
    row: []
};
let sketchpad = document.getElementById("sketchpad");
let acSize = gridSize * gridSize;
let cellSize = Math.floor((size / gridSize)-2);
console.log(cellSize);

function setup() {
    for(let i = 0; i < acSize; i++) {
        cell.row[i]= document.createElement("div");
        cell.row[i].classList.add("cell");
        cell.row[i].style.width = `${cellSize}px`;
        cell.row[i].style.height = `${cellSize}px`;
        cell.row[i].style.border = "1px solid black";
        cell.row[i].style.opacity = "0.1";
        sketchpad.appendChild(cell.row[i]);
    }
};
setup();
function hover(){
    for(let i = 0; i < acSize; i++) {
        cell.row[i].addEventListener("mouseover", function(){
            cell.row[i].style.backgroundColor = "black";
            cell.row[i].style.opacity = parseFloat(cell.row[i].style.opacity) + 0.1;
        });
    }
}
hover();

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    for(let i = 0; i < acSize; i++) {
        cell.row[i].style.backgroundColor = "white";
        cell.row[i].style.opacity = "0.1";
    }
});

let resizeButton = document.getElementById("resize");
resizeButton.addEventListener("click", function(){
    let newSize = prompt("Enter new grid size (max 100): ");
    if(newSize !== null){
        if(newSize > 100){
            alert("Size too large! Please enter a number less than or equal to 100.");
        } else if (newSize < 1){
            alert("Size too small! Please enter a number greater than or equal to 1.");
        } else {
            gridSize = newSize;
            acSize = gridSize * gridSize;
            cellSize = Math.floor((size / gridSize)-2);
            sketchpad.innerHTML = "";
            cell.row = [];
            setup();
            hover();
        }
    }
});

let color = document.getElementById("color");
color.addEventListener("mouseover", function(){
    for(let i = 0; i < acSize; i++) {
        cell.row[i].addEventListener("mouseover", function(){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.row[i].style.backgroundColor = `#${randomColor}`;
            cell.row[i].style.opacity = parseFloat(cell.row[i].style.opacity) + 0.1;
        });
    }
});

let black = document.getElementById("black");
black.addEventListener("click", function(){
    hover();
});
