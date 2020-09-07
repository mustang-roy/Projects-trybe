function createCanvas(value) {
  value = Number(value)

  for (let index = 0; index < value; index += 1) {
    let rowElement = document.createElement('div')
    rowElement.className = 'tr'
    for (let index2 = 0; index2 < value; index2 += 1) {
      let itemElement = document.createElement('div')
      itemElement.className = 'td'
      rowElement.appendChild(itemElement)
    }    
    canvasElement.appendChild(rowElement)
  }

  canvasElement.style.width = `${value * 40}px`
}

const canvasElement = document.querySelector('.canvas')
createCanvas(5)