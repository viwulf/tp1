function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(250, 250, 250, 128);

  // Bloque 1
  push();
  fill(0);
  ellipse(mouseX, 40, 40, 40);
  pop();
  
  // Bloque 2
  push();
  fill(0);
  ellipse(50, 50, 50, 50);
  ellipse(40, mouseX, 40, 40);
  ellipse(50, 40, 40, 50);
  ellipse(30, mouseY, 30, 40);
  pop();
  
  // Bloque 3
  push();
  fill(255,255,255,100);
  let angle = frameCount / 15;
  let x = 100 + 50 * cos(angle);
  let y = 100 + 50 * sin(angle);
  ellipse(x, y, 400, 400);
  pop();

  // Bloque 4
  push();
  fill(100);
  ellipse(300, 300, 200, 450);
  pop();

  // Bloque 5
  push();
  fill(188, 188, 188, 188);
  ellipse(200, 200, 125, 125 * sin(frameCount / 15));
  pop();
  
  // Bloque 6
  push();
  fill(128, 128, 128, 128);
  ellipse (250, 250, 150, 150* sin(frameCount / 15));
  pop();
  
  // Bloque 7
  push();
  fill(255, 255, 255, 128); // blanco semitransparente
  rect(0, 0, 100, 100);
    rect(28, 485, 28,485 );

  pop();
  
  // Bloque 8
  push();
  fill(255, 255, 255, 128); // blanco semitransparente 
  rect(100, 100, 299, 200);
  pop();
  
  // Visualización de las coordenadas del ratón
  push();
  textSize(16);
  fill(0);
  text("x: " + mouseX + ", y: " + mouseY, mouseX + 10, mouseY + 10);
  pop();
}

function mouseClicked() {
  console.log("x: " + mouseX + ", y: " + mouseY);
}
