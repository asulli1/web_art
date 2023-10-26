console.log ("hello world!")

let a = 2;
let b = 3;

let c = a + b;

let myName = "abby"

console.log (c);
console.log (myName);

//for(let i=0; i<10; i++) {
//    console.log(i)


//store refrence to myButton here from id in html
let myButton = document.getElementById("myButton")

//add event listener that listens for a certain event ex. scroll, switch windows, click, etc.
myButton.addEventListener("click", function(){

// double checking by printing to console lol
    console.log("button was clicked")

//store refrence to myCircle here from id in html
    let myCircle = document.getElementById("myCircle")

 // change color of circle
myCircle.style.backgroundColor = "blue"
})

