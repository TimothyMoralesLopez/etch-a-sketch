const myContainer = document.querySelector(".container");
const myButton = document.querySelector(".gridButton"); 

function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor() {
    let randomColor = "#"; 
    let colorCodeArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

    for (let i = 0; i < 6; i++) {
        const randomNum = generateRandomNum(0, colorCodeArr.length - 1); 
        randomColor += colorCodeArr[randomNum]; 
    }

    return randomColor; 
}

function createGrid(dimensions) {

    myContainer.textContent = ""; 
    const dimensionsSquared = dimensions ** 2; 
    const myBasis = (100 / dimensions).toString() + "%"; 

    for (let i = 0; i < dimensionsSquared; i++) {
        const myDiv = document.createElement("div");
        myDiv.style.flex = "1 1 " + myBasis;
        myDiv.addEventListener("mouseover", () => {
            myDiv.style.backgroundColor = generateRandomColor();
        });
        myDiv.addEventListener("mouseout", () => {
            myDiv.style.backgroundColor = "white"; 
        }); 
        myContainer.appendChild(myDiv); 
    }
}

myButton.addEventListener("click", () => {
    let userInput = prompt("Please enter a number between 1 and 100"); 
    while (userInput > 100 || userInput < 1) {
        userInput = prompt("That number is not within range. Please try again"); 
    }
    createGrid(userInput); 
}); 