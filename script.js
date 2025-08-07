const myContainer = document.querySelector(".container");
const myButton = document.querySelector(".gridButton"); 

function createGrid(dimensions) {

    myContainer.textContent = ""; 
    const dimensionsSquared = dimensions ** 2; 
    const myBasis = (100 / dimensions).toString() + "%"; 

    for (let i = 0; i < dimensionsSquared; i++) {
        const myDiv = document.createElement("div");
        myDiv.style.flex = "1 1 " + myBasis;
        myDiv.addEventListener("mouseover", () => {
            myDiv.classList.add("overDiv");
            myDiv.classList.remove("outDiv"); 
        });
        myDiv.addEventListener("mouseout", () => {
            myDiv.classList.add("outDiv");
            myDiv.classList.remove("overDiv"); 
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