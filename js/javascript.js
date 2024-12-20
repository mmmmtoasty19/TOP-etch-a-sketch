const container = document.querySelector(".container")
const btn = document.querySelector("#newGrid")

// let gridNum = 16;


function createGrid (gridNum) {
  for (let i = 0; i < gridNum; i++){
    const row = document.createElement("div");
    row.classList.add("row");
      for (let j = 0; j < gridNum; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseenter", updateColor);
        row.appendChild(square);
      }
    container.appendChild(row);  
  }
}

function updateColor (event){
  event.target.classList.add("changecolor")
}


function updateGrid() {
  const userResponse = prompt("Enter Number of Squares per Side (100 or less");

  if (userResponse < 1 || userResponse > 100) {
    alert("No Negatives or numbers above 100");
    return;
  }

  container.querySelectorAll("div").forEach(e => e.remove());

  createGrid(parseInt(userResponse));
  
}


btn.addEventListener("click", updateGrid);

// Initialize grid on start up 
createGrid(16) 