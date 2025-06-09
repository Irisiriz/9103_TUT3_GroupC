// Colour Dashes On Lines by yzha3003
colourDashesOnLines();

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