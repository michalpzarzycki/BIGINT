document.querySelector(".backBtn").addEventListener('click', (e) => {
    document.querySelector(".resultPopup").style.display = "none"
    document.querySelector(".resultBorder").style.display="none"
    document.querySelector(".popupShade").style.display="none"

})

document.querySelector(".calcBtn").addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector(".resultPopup").style.display = "block"
    document.querySelector(".resultBorder").style.display="block"
    document.querySelector(".popupShade").style.display="block"
    setTimeout(() => {
        document.querySelector('.resultHeader').style.backgroundColor = 'green'
    }, 3000)

})

document.getElementById("1").addEventListener('keyup', (e) => {
console.log(e.target.value)
})

document.getElementById("2").addEventListener('keyup', (e) => {
    console.log(e.target.value)

})