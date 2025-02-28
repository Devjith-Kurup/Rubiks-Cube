let angleX = 0;
let angleY = 0; 
let rotationSpeed = 0.05; 
let size = 80;
let dim = 3;
let offset = ((size * (dim  - 1) ))/ 2

class Cubie {
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

 
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    angleY -= rotationSpeed;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    angleY += rotationSpeed;
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    angleX -= rotationSpeed;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    angleX += rotationSpeed; 
  }

  rotateX(angleX);
  rotateY(angleY);

  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      for (let k = 0; k < dim; k++) {
        push();
        let x = size * i - offset;
        let y = size * j - offset;
        let z = size * k - offset;
        translate(x, y, z);
        stroke(0);
        strokeWeight(3);
        Cubie(size);
        pop();
      }
    }
  }
}

function Cubie(size) {
  let r = size / 2;
  beginShape();
    fill("white");
    quad(-r, -r, -r, r, -r, -r, r, -r, r, -r, -r, r);
    fill("yellow");
    quad(-r, r, -r, -r, r, r, r, r, r, r, r, -r);
    fill("green");
    quad(-r, -r, r, r, -r, r, r, r, r, -r, r, r);
    fill("blue");
    quad(-r, -r, -r, -r, r, -r, r, r, -r, r, -r, -r);
    fill("orange");
    quad(-r, -r, -r, -r, -r, r, -r, r, r, -r, r, -r);
    fill("red");
    quad(r, -r, -r, r, r, -r, r, r, r, r, -r, r);
  endShape(CLOSE);
}
