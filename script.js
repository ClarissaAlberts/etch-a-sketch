const container = document.querySelector('#container');
let square;

let canvasSize = 16;



createCanvas();
addListener();

function createCanvas() {
    if (canvasSize === NaN || canvasSize <= 0 || canvasSize > 128) {
        return;
    }
    for (let i = 0; i < canvasSize; i++) {
    for (let n = 1; n < canvasSize; n++) {
        createSquare();
    }
    
    const br = document.createElement('br');
    createSquare();
    container.appendChild(br);
}}

function createSquare() {
    square = document.createElement('div');
    square.classList.add('square');
    square.classList.toggle('not-filled');
    square.style.height = 700 / canvasSize + "px";
    square.style.width = 700 / canvasSize + "px";
    container.appendChild(square);
}

function getCanvasSize(){
    let elem = document.querySelectorAll(".square");
    elem.forEach(removeElement);
    let elem2 = container.querySelectorAll("br");
    elem2.forEach(removeElement);
    canvasSize = document.getElementById("canvas-size").value;
    createCanvas();
    addListener();
        }

function removeElement(item) {
    container.removeChild(item);
}

function addListener() {
    const pixel = document.querySelectorAll(".square");
    pixel.forEach(pixel => pixel.addEventListener('click', () => pixel.classList.toggle("filled")));
}
    

                          
function resetCanvas() {
    let elem = document.querySelectorAll(".square");
    elem.forEach(removeClasses);
}

function removeClasses(item) {
    item.classList.remove("filled");
}



//fix reset button