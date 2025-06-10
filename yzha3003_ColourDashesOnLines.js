let grid  = 20;
let wide = 34 * grid;
let height = wide;

let colour = {
    W : '#ffffff',
    Y : '#f6e64b',
    R : '#b33025',
    B : '#2d59b5',
    G : '#d8d8d8',
};

function draw() {
    background(colour.W);
    colourDashesOnLines();
}

function colourDashesOnLines() {
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
  }
  /*
  Referencing MDN, I using JavaScript’s array.forEach() to loop 
  through the grid-index arrays because it performs the same 
  iteration as a classic for loop but is cleaner and more readable.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  */