let database;
let drawing = [];
let currentPath = [];

function setup(){
  canvas = createCanvas (windowWidth,windowHeight);
  canvas.mousePressed(startPath);
  canvas.touchStarted(startPath);
  canvas.parent('canvascontainer');

  // canvas.mouseReleased(endPath);

  // let saveButton = select('#saveButton');
  // saveButton.mousePressed(saveDrawing);
}

function startPath() {
  currentPath = [];
  drawing.push(currentPath);

}

// function endPath(){
//
// }

function draw(){
  background(0);

  if (mouseIsPressed) {
    let point = {
      x: mouseX,
      y: mouseY
    }
    currentPath.push(point);
  }

  stroke(255);
  strokeWeight(12);
  noFill();

  for (let i = 0; i < drawing.length; i++){  
    let path = drawing[i];
    beginShape();
    for (let j = 0; j < path.length; j++){
      vertex(path[j].x, path[j].y)
    }
    endShape();
  }
}
