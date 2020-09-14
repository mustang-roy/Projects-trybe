function createRandomColor(){
  const red = Math.floor(Math.random()*256)
  const green = Math.floor(Math.random()*256)
  const blue = Math.floor(Math.random()*256)  

  return `rgb(${red}, ${green}, ${blue})`
}

function createColorBox(color){
  let newElement = document.createElement('div');
  console.log(color);
  newElement.style.backgroundColor = color;
  newElement.classList.add('ball');
  colorBoard.appendChild(newElement);
}


function populateOptions() {
  for (let elemento = 0; elemento < 6; elemento += 1) {
    let color = createRandomColor();
    createColorBox(color);
  }
}

const colorBoard = document.querySelector('#color-board')
const resetGame = document.querySelector('#reset-game')