// Grid
let vLines = [1, 3, 7, 12, 21, 29, 32];
let hLines = [1, 5, 11, 13, 16, 19, 27, 32];


function draw() {
  background(colour.W);
  
  // Draw lines
  fill(colour.Y);
  vLines.forEach(c => rect(c * grid, 0, grid, height));
  hLines.forEach(r => rect(0, r * grid, wide, grid));
  
}
