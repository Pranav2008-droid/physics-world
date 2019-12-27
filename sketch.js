var redlight;
var greenlight;
var bluelight;
var mousePointer;
var coloroff;
var ellipsecoloroff;
var xoff = 0.0;
function setup(){
  createCanvas(400, 400);
}
 function draw(){
  ellipsecoloroff = noise(xoff) * 255;
  coloroff = map(mouseX, 0, width, 0, 255);
  noStroke();
  background(coloroff);
  fill(ellipsecoloroff);
  ellipse(mouseX, mouseY, 10, 10);
  xoff = xoff + 0.01;
 }