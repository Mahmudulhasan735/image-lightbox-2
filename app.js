const popup = document.querySelector('.popup')
const popupImg = document.querySelector('.popup img')
const popupClose = document.querySelector('.popup a')
const backdrop = document.querySelector('.backdrop')
const images = document.querySelectorAll('.image')

images.forEach((image, index)=>{
    image.addEventListener('click', (e) =>{
        popup.classList.add('active')
        popupImg.setAttribute('src', e.target.src)
        backdrop.classList.add('active')
    })
})

popupClose.addEventListener('click',()=>{
    popup.classList.remove('active')
    backdrop.classList.remove('active')
})
