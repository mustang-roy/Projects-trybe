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

function changeColor(item) {
  let selectColor = document.querySelector('.selected');
  let style = window.getComputedStyle(selectColor)['background-color']
  item.style.backgroundColor = style
}



const canvasElement = document.querySelector('.canvas')
createCanvas(10)