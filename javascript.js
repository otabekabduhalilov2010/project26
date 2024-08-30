const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const body = document.querySelector('#body')




btn1.onclick = () => {
    body.classList.toggle('dark')
}

photo.onclick = () => {
    body.classList.toggle('red')
}
