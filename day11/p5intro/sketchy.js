console.log("is this thing on?")

function setup() {
    createCanvas(innerWidth, innerHeight)
    background(200, 100, 0)
}

function draw() {

    let red = map(mouseX, 0, width, 0, 255)
    fill(red, 0, 0)
    strokeWeight(1)
    stroke(mouseX, mouseY, 255)
    rect(mouseX, mouseY, mouseX, mouseY)
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight)
}