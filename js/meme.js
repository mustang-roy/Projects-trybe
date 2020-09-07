const btnInputImage = document.querySelector('#meme-insert')
const textInput = document.querySelector('#text-input')
const imgMeme = document.querySelector('#imgmeme')
const textMeme = document.querySelector("#text-content")

btnInputImage.addEventListener('change', () => {
  imgMeme.src = window.URL.createObjectURL(btnInputImage.files[0])
});

textInput.addEventListener('input', () => {
  textMeme.textContent = textInput.value
});



