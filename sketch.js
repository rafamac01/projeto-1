function setup() {
    createCanvas(400, 400);
    background("rgb(4,201,219)")
  }
  
  function draw() {
    ;
    stroke("green");
    fill("blue");
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }