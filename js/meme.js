const btnInputImage = document.querySelector('#meme-insert')
const textInput = document.querySelector('#text-input')
const imgMeme = document.querySelector('#imgmeme')
const textMeme = document.querySelector('#text-content')
const buttonFire = document.querySelector('#fire')
const buttonWater = document.querySelector('#water')
const buttonEarth = document.querySelector('#earth')
const canvasMeme = document.querySelector('#meme-image-container')

btnInputImage.addEventListener('change', () => {
  imgMeme.src = window.URL.createObjectURL(btnInputImage.files[0])
});

textInput.addEventListener('input', () => {
  textMeme.textContent = textInput.value
});

buttonFire.addEventListener('click', () => {
  buttonFire.style.border = '5px ridge rgb(250, 33, 33)';
  canvasMeme.style.border = '3px dashed red';
  buttonWater.style.border = '';
  buttonEarth.style.border = '';
})

buttonWater.addEventListener('click', () => {
  buttonFire.style.border = '';
  canvasMeme.style.border = '5px double blue';
  buttonWater.style.border = '5px ridge rgb(33, 48, 250)';
  buttonEarth.style.border = '';
})

buttonEarth.addEventListener('click', () => {
  buttonFire.style.border = '';
  canvasMeme.style.border = '6px groove green';
  buttonWater.style.border = '';
  buttonEarth.style.border = '5px ridge rgb(33, 250, 40)';
})




