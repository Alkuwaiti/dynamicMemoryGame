const input = document.getElementById("pairsInput")
let ongoingGame = false

let scoreRed = 0
let scoreBlue = 0

const redLight = document.getElementById("redLight");

const blueLight = document.getElementById("blueLight");


// this is a default value for the number of squares, based on the index.html
let inputValue = input.value * 2
console.log(inputValue)
const addHere = document.getElementById("container")

for (i=0; i < inputValue; i++) {
    const iDiv = document.createElement('div')
    iDiv.setAttribute("class", "squares")
    addHere.appendChild(iDiv)
}
scoreBlue = 0
scoreRed = 0
document.getElementById('redScore').textContent = scoreRed;
document.getElementById('blueScore').textContent = scoreBlue;
redLight.classList.add("brighter");
// calling the randomizer
randomizer(inputValue)

// ********* This part needs to be locked when there is an ongoing game *********

// will only work when there isn't an ongoing game
if(!ongoingGame) {
    
    // this listens to CHANGES in the value of number of pairs
    input.addEventListener("change", function() {
        scoreBlue = 0
        scoreRed = 0
        currentPlayer = "red"
        redLight.classList.add("brighter");
        blueLight.classList.remove("brighter");
        document.getElementById('redScore').textContent = scoreRed;
        document.getElementById('blueScore').textContent = scoreBlue;
        // takes the number of pairs and multiplies by 2 to get the total no. of squares
        let inputValue = Math.floor(input.value)
        console.log("INPUT VALUE: " + inputValue)
        inputValue = inputValue * 2
        
        const addHere = document.getElementById("container")
        
        if (inputValue <= 20) {
            // this loop clears the square, for as long as there is a child
            const gridContainer = document.getElementById("container");
                // Check if the screen width is less than or equal to 767px (mobile screens)
            if (window.matchMedia("(max-width: 767px)").matches) {
                gridContainer.style.gridTemplateColumns = "50px 50px";
            } else {
                // Default grid layout for larger screens
                gridContainer.style.gridTemplateColumns = "50px 50px 50px 50px";
            }
            while (addHere.firstChild) {
                addHere.removeChild(addHere.firstChild);
            }
            // this loop adds in squares from the value
            for (i=0; i < inputValue; i++) {
                const iDiv = document.createElement('div')
                iDiv.setAttribute("class", "squares")
                addHere.appendChild(iDiv)
            }
            
            
            
        }
        else if(inputValue <= 30){
            // this loop clears the square, for as long as there is a child
            const gridContainer = document.getElementById("container");
            if (window.matchMedia("(max-width: 767px)").matches) {
                gridContainer.style.gridTemplateColumns = "50px 50px";
            } else {
                // Default grid layout for larger screens
                gridContainer.style.gridTemplateColumns = "50px 50px 50px 50px 50px 50px";
            }
            while (addHere.firstChild) {
                addHere.removeChild(addHere.firstChild);
            }
            // this loop adds in squares from the value
            for (i=0; i < inputValue; i++) {
                const iDiv = document.createElement('div')
                iDiv.setAttribute("class", "squares")
                addHere.appendChild(iDiv)
            }
            
        }
        else if(inputValue <= 40){
            // this loop clears the square, for as long as there is a child
            const gridContainer = document.getElementById("container");
            if (window.matchMedia("(max-width: 767px)").matches) {
                gridContainer.style.gridTemplateColumns = "50px 50px";
            } else {
                // Default grid layout for larger screens
                gridContainer.style.gridTemplateColumns = "50px 50px 50px 50px 50px 50px 50px 50px";
            }
            while (addHere.firstChild) {
                addHere.removeChild(addHere.firstChild);
            }
            // this loop adds in squares from the value
            for (i=0; i < inputValue; i++) {
                const iDiv = document.createElement('div')
                iDiv.setAttribute("class", "squares")
                addHere.appendChild(iDiv)
            }
            
        }
        else if(inputValue <= 60){
            // this loop clears the square, for as long as there is a child
            const gridContainer = document.getElementById("container");
            if (window.matchMedia("(max-width: 767px)").matches) {
                gridContainer.style.gridTemplateColumns = "50px 50px";
            } else {
                // Default grid layout for larger screens
                gridContainer.style.gridTemplateColumns = "50px 50px 50px 50px 50px 50px 50px 50px 50px 50px";
            }
            while (addHere.firstChild) {
                addHere.removeChild(addHere.firstChild);
            }
            // this loop adds in squares from the value
            for (i=0; i < inputValue; i++) {
                const iDiv = document.createElement('div')
                iDiv.setAttribute("class", "squares")
                addHere.appendChild(iDiv)
            } 
        }
        else if(inputValue > 60) {
            // this loop clears the square, for as long as there is a child
            const gridContainer = document.getElementById("container");
            if (window.matchMedia("(max-width: 767px)").matches) {
                gridContainer.style.gridTemplateColumns = "50px 50px";
            } else {
                // Default grid layout for larger screens
                gridContainer.style.gridTemplateColumns = "50px 50px 50px 50px 50px 50px 50px 50px 50px 50px";
            }
            while (addHere.firstChild) {
                addHere.removeChild(addHere.firstChild);
            }
            // this loop adds in squares from the value
            for (i=0; i < 60; i++) {
                const iDiv = document.createElement('div')
                iDiv.setAttribute("class", "squares")
                addHere.appendChild(iDiv)
            }
            alert("It can't be more than 30. Reverting back to 30")
        }
        randomizer(inputValue)

        core()
        
        // const hideInput = document.querySelector(".colsAndRowsFinal");

        // hideInput.style.display = "none";
    })
    
    
}


// function for a randomizer
function randomizer(x) { // arg passed in is input.value which is the user input
    // creating a list for later use for the randomizer
    const ls = [];
    for (let i = 0; i < x/2; i++) {
        ls.push(i);
    }
    console.log(ls)

// creating a second list for the randomizer
    const ls2 = [];
    for (let i = 0; i < x/2; i++) {
        ls.push(i);
    }
    console.log(ls)
    // get all the div elements
    const divs = document.querySelectorAll('.squares')
    
    i = 0
    while ( ls.length > 0) {
        // generate a random index between 0 and the length of the current list - 1
        const randomIndex = Math.floor(Math.random() * ls.length)

        randomNum = ls[randomIndex]
        currentDiv = divs[i]
        i++;
        if (currentDiv.textContent.trim() === ""){
            currentDiv.textContent = randomNum
            ls.splice(randomIndex, 1)
        }
    }

    i = 0
    while ( ls2.length > 0) {
        // generate a random index between 0 and the length of the current list - 1
        const randomIndex = Math.floor(Math.random() * ls2.length)

        randomNum = ls2[randomIndex]
        currentDiv = divs[i]

        if (currentDiv.textContent.trim() === ""){
            currentDiv.textContent = randomNum
            ls2.splice(randomIndex, 1)
        }
    }
    console.log("HELP")
}
// select all the divs

let currentPlayer = "red"
// declaring for use later on "this"
let firstChoice = ''
let secondChoice = ''
// saving the lights to variables, to add and remove brighter class which indicates player turn 


// redLight.classList.remove("brighter");

// blueLight.classList.add("brighter");

// blueLight.classList.remove("brighter");

function core() {
    divs = document.querySelectorAll(".squares")
    for (let i = 0; i < divs.length; i++) { // adding event listener to all cards using a loop, as it is a dynamic
      divs[i].addEventListener("click", function handleClick() { // number of cards
        console.log(this.innerText);
        this.style.backgroundColor = currentPlayer;
        if (firstChoice === "") {
            firstChoice = this.innerText;
            firstChoiceColor = this.style.backgroundColor;
            firstDiv = this; // Save the first div
            firstDiv.removeEventListener("click", handleClick); // removing event listener after first click
        } else if (secondChoice === "") {
            secondChoice = this.innerText;
            secondChoiceColor = this.style.backgroundColor;
            secondDiv = this; // Save the second div
            secondDiv.removeEventListener("click", handleClick); // removing event listener after second click
            // checks if first div == second div
            if (firstChoice === secondChoice) {
                const sound = new Audio('./mixkit-casino-bling-achievement-2067.wav');
                sound.play(); // play sound ONLY on match
                if (currentPlayer == "red") {
                    scoreRed += 1; // score adding to red if True
                    document.getElementById('redScore').textContent = scoreRed;
                    currentPlayer = "red";
                } else {
                    scoreBlue += 1; // score adding to blue if false
                    document.getElementById('blueScore').textContent = scoreBlue;
                    currentPlayer = "blue";
                }
            } else {
                setTimeout(() => { // flip back the cards after 0.5s
                    firstDiv.style.backgroundColor = "black";
                    secondDiv.style.backgroundColor = "black";
                    firstDiv.addEventListener("click", handleClick);
                    secondDiv.addEventListener("click", handleClick);
                }, 400);
                if (currentPlayer == "red") {
                    currentPlayer = "blue";
                    redLight.classList.remove("brighter"); // removing brighter
                    blueLight.classList.add("brighter"); // adding brighter (to indicate turn)
                }
                else {
                    currentPlayer = "red"
                    blueLight.classList.remove("brighter"); // removing brighter
                    redLight.classList.add("brighter"); // adding brighter (to indicate turn)
                }
            }
            firstChoice = ""; // emptying out to use on next two clicks after comparison
            secondChoice = ""; // emptying out to use on next two clicks after comparison
        }
        console.log("First Choice:", firstChoice);
        console.log("Second Choice:", secondChoice);
        console.log("Blue Score: " + scoreBlue)
        console.log("Red Score: " + scoreRed)
        console.log("max score: " + input.value / 2)

        winningScore = input.value / 2
        console.log("is this working? " + winningScore)
        if (scoreBlue >= winningScore ) { // tie condition
            if (scoreBlue === scoreRed){
            alert(`It's a tie`)
            reset()
            core()
        }
        }
        if (scoreBlue > winningScore || scoreRed > winningScore) { // winning condition for either player
            if (scoreBlue > scoreRed) {
                console.log("pleassssseeee")
                alert(`game over! Blue player won`)
            }
            else if (scoreRed > scoreBlue){
                console.log("pleassssseeee2")
                alert(`game over! Red player won`)
            }
            
            reset()
            
            core()

            randomizer(inputValue)
    }
      });
    }
    

}
core()

function reset() {
    // this loop clears the square, for as long as there is a child
    const gridContainer = document.getElementById("container");
    gridContainer.style.gridTemplateColumns = '50px 50px 50px 50px';
    while (addHere.firstChild) {
        addHere.removeChild(addHere.firstChild);
    }
    // this loop adds in squares from the value
    for (i=0; i < 20; i++) {
        const iDiv = document.createElement('div')
        iDiv.setAttribute("class", "squares")
        addHere.appendChild(iDiv)
    }
    scoreBlue = 0
    scoreRed = 0
    currentPlayer = "red"
    document.getElementById('redScore').textContent = scoreRed;
    document.getElementById('blueScore').textContent = scoreBlue;
}

window.addEventListener('resize', function() { // changes on resize of window (responsiveness)
    if (input.value <= 10) {
        // this loop clears the square, for as long as there is a child
        const gridContainer = document.getElementById("container");
            // Check if the screen width is less than or equal to 767px (mobile screens)
        if (window.matchMedia("(max-width: 767px)").matches) {
            gridContainer.style.gridTemplateColumns = "50px 50px";
        } else {
            // Default grid layout for larger screens
            gridContainer.style.gridTemplateColumns = "50px 50px 50px 50px";
        }
    }
    else if (input.value <= 15) {
        // this loop clears the square, for as long as there is a child
        const gridContainer = document.getElementById("container");
            // Check if the screen width is less than or equal to 767px (mobile screens)
        if (window.matchMedia("(max-width: 767px)").matches) {
            gridContainer.style.gridTemplateColumns = "50px 50px";
        } else {
            // Default grid layout for larger screens
            gridContainer.style.gridTemplateColumns = "50px 50px 50px 50px 50px 50px";
        }
    }
    else if(input.value <= 20){
        // this loop clears the square, for as long as there is a child
        const gridContainer = document.getElementById("container");
        if (window.matchMedia("(max-width: 767px)").matches) {
            gridContainer.style.gridTemplateColumns = "50px 50px";
        } else {
            // Default grid layout for larger screens
            gridContainer.style.gridTemplateColumns = "50px 50px 50px 50px 50px 50px 50px 50px";
        }
    }
    else if(input.value <= 30){
        // this loop clears the square, for as long as there is a child
        const gridContainer = document.getElementById("container");
        if (window.matchMedia("(max-width: 767px)").matches) {
            gridContainer.style.gridTemplateColumns = "50px 50px";
        } else {
            // Default grid layout for larger screens
            gridContainer.style.gridTemplateColumns = "50px 50px 50px 50px 50px 50px 50px 50px 50px 50px";
        }
    }
  });