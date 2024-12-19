const container = document.querySelector(".container")


// This sets up the intial grid.  Want to change it to be the function later
for (let i = 0; i < 16; i++) {
  let column = document.createElement("div");
  column.classList.add("column");
  for (let j = 0; j < 16; j++) {
      let row = document.createElement("div");
      row.classList.add("square");
      column.appendChild(row);
  }

  container.appendChild(column);
}