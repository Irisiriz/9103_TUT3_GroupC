// Member A qzha6629: Set colour palette, and canvas wide, height, background
// Member B pluo0398: Yellow Grid
// Member C xgao0847: Blocks
// Member D yzha3003: Colour Dashes On Lines

/**** Member A ****/
// Canvas and grid set up
let grid  = 20;
let wide = 34 * grid;
let height = wide;

// Colour palette
let colour = {
  // White
  W : '#ffffff',
  // Yellow
  Y : '#f6e64b',
  // Red
  R : '#b33025',
  // Blue
  B : '#2d59b5',
  // Grey
  G : '#d8d8d8',
};
/**** Member A ****/

/**** Member B ****/
// Indices of vertical and horizontal yellow grid lines
let vLines = [1, 3, 7, 12, 21, 29, 32];
let hLines = [1, 5, 11, 13, 16, 19, 27, 32];
/**** Member B ****/

/**** Member C ****/
// Big blocks
let blocks = [
  {col: 1, row:  4, w: 1, h: 1, colour: colour.G},
  {col: 1, row: 10, w: 3, h: 3, colour: colour.R},
  {col: 1, row: 26, w: 3, h: 3, colour: colour.R},
  {col: 5, row: 22, w: 1, h: 1, colour: colour.G},
  
  {col: 9, row:  1, w: 1, h: 1, colour: colour.G},
  {col: 10, row:  4, w: 1, h: 1, colour: colour.R},
  {col: 11, row:  7, w: 3, h: 6, colour: colour.B},
  {col: 11, row:  9, w: 1, h: 2, colour: colour.R},
  {col: 11, row: 15, w: 1, h: 1, colour: colour.G},
  
  {col: 11, row: 22, w: 3, h: 3, colour: colour.R},
  {col: 11, row: 28, w: 1, h: 1, colour: colour.G},
  {col: 15, row: 28, w: 1, h: 1, colour: colour.B},
];
/**** Member C ****/

/**** Member A ****/
function setup() {
  createCanvas(wide, height);
  // Stop the code in draw() from running repeatedly
  noLoop();
}

function draw() {
  background(colour.W);
  /**** Member A ****/

  /**** Member B ****/
  // Draw vertical and horizontal yellow grid lines
  fill(colour.Y);
  vLines.forEach(c => rect(c * grid, 0, grid, height));
  hLines.forEach(r => rect(0, r * grid, wide, grid));
  /**** Member B ****/

  /**** Member D ****/
  // Draw colour dots that on yellow lines
  colourDashesOnLines();
  //**** Member D ****/

  /**** Member C ****/
  // Draw big blocks
  blocks.forEach(b => {
    fill(b.colour);
    rect(b.col * grid, b.row * grid, b.w * grid, b.h * grid);
  });
}
/**** Member C ****/

/**** Member D ****/
function colourDashesOnLines() {
  // Set base colours
  let accent = [colour.Y, colour.R, colour.B, colour.G];

  vLines.forEach((c, idx) => {
    for (let r = 0; r < height/grid; r++) {
      if (random() < 0.33) {
        fill(accent[(r + idx) % accent.length]);
        rect(c * grid, r * grid, grid, grid);
      }
    }
  });
  
  hLines.forEach((r, idx) => {
    for (let c = 0; c < wide/grid; c++) {
      if (random() < 0.33) {
        fill(accent[(c + idx + 2) % accent.length]);
        rect(c * grid, r * grid, grid, grid);
      }
    }
  });
  /*
  Referencing MDN, I using JavaScript’s array.forEach() to loop 
  through the grid-index arrays because it performs the same 
  iteration as a classic for loop but is cleaner and more readable.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  */
}
/**** Member D ****/