const container = document.querySelector('#container');
let square;
let grid = true;
let canvasSize = 16;
let color = "#1a1a1a";
let outlineColor = "#1a1a1a";




createCanvas();
addListener();

let black = document.getElementById("black-color");
let red = document.getElementById("red-color");
let blue = document.getElementById("blue-color");
let green = document.getElementById("green-color");
let yellow = document.getElementById("yellow-color");
let orange = document.getElementById("orange-color");
let purple = document.getElementById("purple-color");


black.addEventListener("click", function() {
    black.classList.add("color-active");
    color = "#1a1a1a";
    outlineColor = "#1a1a1a";
    red.classList.remove("color-active");
    blue.classList.remove("color-active");
    green.classList.remove("color-active");
    yellow.classList.remove("color-active");
    orange.classList.remove("color-active");
    purple.classList.remove("color-active");
});


red.addEventListener("click", function() {
    red.classList.add("color-active");
    color = "#ed3f3f";
    outlineColor = "#ed3f3f";
    black.classList.remove("color-active");
    blue.classList.remove("color-active");
    green.classList.remove("color-active");
    yellow.classList.remove("color-active");
    orange.classList.remove("color-active");
    purple.classList.remove("color-active");
});

blue.addEventListener("click", function() {
    blue.classList.add("color-active");
    color = "#3ba9ed";
    outlineColor = "#3ba9ed";
    black.classList.remove("color-active");
    red.classList.remove("color-active");
    green.classList.remove("color-active");
    yellow.classList.remove("color-active");
    orange.classList.remove("color-active");
    purple.classList.remove("color-active");
});

green.addEventListener("click", function() {
    green.classList.add("color-active");
    color = "#33e648";
    outlineColor = "#33e648";
    black.classList.remove("color-active");
    red.classList.remove("color-active");
    blue.classList.remove("color-active");
    yellow.classList.remove("color-active");
    orange.classList.remove("color-active");
    purple.classList.remove("color-active");
});

yellow.addEventListener("click", function() {
    yellow.classList.add("color-active");
    color = "#ffe733";
    outlineColor = "#ffe733";
    black.classList.remove("color-active");
    red.classList.remove("color-active");
    blue.classList.remove("color-active");
    green.classList.remove("color-active");
    orange.classList.remove("color-active");
    purple.classList.remove("color-active");
});

orange.addEventListener("click", function() {
    orange.classList.add("color-active");
    color = "#ff9c15";
    outlineColor = "#ff9c15";
    black.classList.remove("color-active");
    red.classList.remove("color-active");
    blue.classList.remove("color-active");
    green.classList.remove("color-active");
    yellow.classList.remove("color-active");
    purple.classList.remove("color-active");
});

purple.addEventListener("click", function() {
    purple.classList.add("color-active");
    color = "#c033ff";
    outlineColor = "#c033ff";
    black.classList.remove("color-active");
    red.classList.remove("color-active");
    blue.classList.remove("color-active");
    green.classList.remove("color-active");
    yellow.classList.remove("color-active");
    orange.classList.remove("color-active");
});



//function that creates "pixels" on the board according to the value of variable canvasSize which is 16 by default, but can be changed with user input
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


//function that creates each individual "pixel" and sizes them depending on how many total "pixels" there are
function createSquare() {
    square = document.createElement('div');
    square.setAttribute('id','square');
    square.classList.toggle('not-filled');
    square.style.height = 700 / canvasSize + "px";
    square.style.width = 700 / canvasSize + "px";
    container.appendChild(square);
}

//loop function that removes previous "pixels" and adds new "pixels" according to user input
function getCanvasSize(){
    let elem = document.querySelectorAll("#square");
    elem.forEach(removeElement);
    let elem2 = container.querySelectorAll("br");
    elem2.forEach(removeElement);
    canvasSize = document.getElementById("canvas-size").value;
    createCanvas();
    addListener();
        }

const notFilled = container.querySelector(".not-filled");

//function that is used in the function above to remove child elements
function removeElement(item) {
    container.removeChild(item);
}

//loop function that adds a listener to every "pixel"
function addListener() {
    const pixel = document.querySelectorAll("#square");
    pixel.forEach(fillListener);
}

//function that is called by the function above to add a mouesdown listener to every "pixel" and cause it to be "filled in" when user clicks on a pixel
function fillListener(item) {
    item.addEventListener('mousedown', function() {
        if (item.className === "not-filled") {
            item.classList.replace("not-filled", "filled");
            item.style.backgroundColor = color;
            if (grid == true) {
            item.style.outline = "1px solid " + outlineColor;
            }
        }
        else if (item.className === "filled") {
            item.classList.replace("filled", "not-filled");
            item.style.backgroundColor = "#faf7f7";
            if (grid == true) {
            item.style.outline = "1px solid #e8e7e7";
            }
        }
    });
    
}


//loop function that removes the "filled" classes from every "pixel" using the function below this one
function resetCanvas() {
    let elem = document.querySelectorAll("#square");
    elem.forEach(removeClasses);
}

//function that removes the "filled" class
function removeClasses(item) {
    item.classList.remove("filled");
    item.classList.add("not-filled");
    item.style.backgroundColor = "#faf7f7";
    item.style.outline = "1px solid #e8e7e7";
}

//loop function that calls the function below this one when the "grid off" button is pressed
function gridButton() {
    let elem = document.querySelectorAll("#square");
    elem.forEach(toggleGrid);
    if (grid == false) {
        let gridBtn =
        document.getElementById("grid-button");
        gridBtn.innerText = "Grid On";
    }
    else  if (grid == true) {
        let gridBtn =
        document.getElementById("grid-button");
        gridBtn.innerText = "Grid Off";
    }
}

//function that removes the grid, and adds it back if there is no grid
function toggleGrid(item) {
    if (item.style.outline !== "none") {
        item.style.outline = "none";
        grid = false;
    }
    else if (item.className === "not-filled" && item.style.outline == "none") {
        item.style.outline = "1px solid #e8e7e7";
        grid = true;
    }
    else if (item.className === "filled" && item.style.outline == "none") {
        item.style.outline = "1px solid " + item.style.backgroundColor;
        grid = true;
    }
}


