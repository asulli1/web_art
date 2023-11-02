function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    rectMode(CORNER)
    angleMode(DEGREES)
    background(0, 0, 0)
}


function draw() {
    background(0)
    fill(240, 50, 90, 127)
    stroke(0, map(mouseX, 0, width, 0, 200), 180, 127)
    strokeWeight(2)

    push()
    translate(mouseX -width/2, mouseY -height/2)

    // rotateX(map(mouseX, 0, width, 0, 360))
    // rotateY(map(mouseX, 0, width, 0, 360))

    rotateX(frameCount * 10)
    rotateY(frameCount * 10)

    // scale(map(mouseX, 0, width, 0.1, 2))
    // scale(frameCount/1000)

    torus(30, 15)
    pop()
}

function windowResized () {
    resizeCanvas (windowWidth, windowHeight)
    
    rect(random(width), random(height), 20, 20)
    console.log(width, height)
    console.log("window resized!")
}