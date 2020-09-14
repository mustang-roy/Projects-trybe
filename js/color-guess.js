function createRandom(maxValue) {
  return Math.floor(Math.random()*(maxValue+1))
}

function createRandomColor(){
  const red = createRandom(255)
  const green = createRandom(255)
  const blue = createRandom(255)  

  return `rgb(${red}, ${green}, ${blue})`
}

function createColorBox(color){
  const newElement = document.createElement('div');
  newElement.style.backgroundColor = color;
  newElement.classList.add('ball');
  colorBoard.appendChild(newElement);
}

function destructBoardBox (){
  const elementList = document.querySelectorAll('.ball')
  for (const iterator of elementList) {
    colorBoard.removeChild(iterator);
  }
}

function populateOptions() {
  for (let elemento = 0; elemento < 6; elemento += 1) {
    let color = createRandomColor();
    createColorBox(color);
  }
}

function createColorBoard() {
  destructBoardBox()
  populateOptions()
  selectPremierBall()
}

function restartGame() {
  answerText.textContent = 'Escolha uma cor'
  createColorBoard()
}

function selectPremierBall() {
  let randomBall = document.querySelectorAll('.ball')[createRandom(6)]
  let colorRandomBall = randomBall.style.backgroundColor  
  rgbColor.textContent = colorRandomBall.slice(3)
}

const colorBoard = document.querySelector('#color-board')
const resetGame = document.querySelector('#reset-game')
const answerText = document.querySelector('#answer')
const rgbColor = document.querySelector('#rgb-color')

resetGame.addEventListener('click', restartGame)

createColorBoard()