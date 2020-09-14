function createRandomColor(){
  const red = Math.floor(Math.random()*256)
  const green = Math.floor(Math.random()*256)
  const blue = Math.floor(Math.random()*256)  

  return `(${red}, ${green}, ${blue})`
}


function populateOptions() {
  for (let elemento = 0; elemento < 6; elemento += 1) {
    let color = createRandomColor();
    createElement(color);
  }
}

const colorBoard = document.querySelector('#color-board')