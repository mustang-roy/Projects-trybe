function createCanvas(value) {
  value = Number(value)

  for (let index = 0; index < value; index += 1) {
    let rowElement = document.createElement('div')
    rowElement.className = 'tr'
    for (let index2 = 0; index2 < value; index2 += 1) {
      let itemElement = document.createElement('div')
      itemElement.className = 'td'
      itemElement.addEventListener('click', () => {changeColor(itemElement)})
      rowElement.appendChild(itemElement)
    }    
    canvasElement.appendChild(rowElement)
  }

  canvasElement.style.width = `${value * 40}px`
}

function destructCanvas() {
  let elementChild = document.querySelectorAll('.tr')
  for (let item of elementChild) {
    canvasElement.removeChild(item)
  }
}

function clearCanvas() {
  let elementsClear = document.querySelectorAll('.td')

  for (let item of elementsClear) {
    item.style.backgroundColor = 'rgb(255, 255, 255)'
  }
}

function changeColor(item) {
  let selectColor = document.querySelector('.selected');
  let style = window.getComputedStyle(selectColor)['background-color']
  item.style.backgroundColor = style;
}

function selectColor(color) {
  paletteElement = document.querySelector('.selected');
  paletteElement.classList.remove('selected');
  color.classList.add('selected')
}

const canvasElement = document.querySelector('.canvas')
const colorOne = document.querySelector('.color1')
const colorTwo = document.querySelector('.color2')
const colorThree = document.querySelector('.color3')
const colorFour = document.querySelector('.color4')
const clearButton = document.querySelector('#clear-board')

colorOne.addEventListener('click', () => {selectColor(colorOne)})
colorTwo.addEventListener('click', () => {selectColor(colorTwo)})
colorThree.addEventListener('click', () => {selectColor(colorThree)})
colorFour.addEventListener('click', () => {selectColor(colorFour)})
clearButton.addEventListener('click', clearCanvas)

createCanvas(5)

