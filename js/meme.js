const btnInputImage = document.querySelector('#meme-insert')
const imgMeme = document.querySelector('#imgmeme')

btnInputImage.addEventListener('change', () => {
  imgMeme.src = window.URL.createObjectURL(btnInputImage.files[0])
})

// imgMeme.src = btnInputImage.value

console.log(btnInputImage)

