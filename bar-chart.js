"use strict";
window.addEventListener("DOMContentLoaded", setHeight);

// makes an empty array, defines min and max numbers for random calculations
const myArray = [];
const min = 0;
const max = 32;
// makes random numbers for the graph which shows up when page loaded
for (let i = 0, t = 39; i < t; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    myArray.push(randomNumber)
}
// makes 40 div elements in #container and sets height for each of them
function setHeight() {
    for (let i = 0; i < 40; i++) {

        const partOfBar = document.createElement("div")
        partOfBar.classList.add("bar");
        document.querySelector("#container").appendChild(partOfBar);

        let bar;
        bar = document.querySelector(`#container > div:nth-child(${i + 1})`);
        bar.style.setProperty("--height", myArray[i]);
    }
    // goes to delay function
    timer();
}

function timer() {
    setTimeout(function () {
        pushNewValue();
    }, 1000);
}

// pushes random number between 0-32 at the end of array
function pushNewValue() {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const pushingValue = myArray.push(randomNumber);
    console.log(myArray)
    //console.log(randomNumber)

    // each seconds makes div at the end of #container
    const partOfBar = document.createElement("div")
    partOfBar.classList.add("bar");
    document.querySelector("#container").appendChild(partOfBar);

    // removes first element from an array each second
    // removes first div from #container each second
    myArray.shift();
    const firstBar = document.querySelector("#container > .bar")
    firstBar.parentNode.removeChild(firstBar)

    // for just made div at the end of #container gives height property
    let bar;
    bar = document.querySelector("#container > div:last-child");
    bar.style.setProperty("--height", randomNumber);

    // back to timer function for this to happen in repeat
    timer();
}