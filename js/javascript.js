const container = document.querySelector(".container")

let gridNum = 16;


function createGrid () {
  for (let i = 0; i < gridNum; i++){
    const row = document.createElement("div");
    row.classList.add("row");
      for (let j = 0; j < gridNum; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
      }
    container.appendChild(row);  
  }
}


createGrid()