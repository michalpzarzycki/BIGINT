let number1 = 0;
let number2 = 0;
let digits = [number1,number2]
document.querySelector(".backBtn").addEventListener('click', (e) => {
    document.querySelector(".resultPopup").style.display = "none"
    document.querySelector(".resultBorder").style.display="none"
    document.querySelector(".popupShade").style.display="none"

})

document.querySelector(".calcBtn").addEventListener('click', (e) => {
    e.preventDefault()
    function change() {
        let x =  sumStrings(digits[0], digits[1]).split("").map(x =>  0 + Math.floor((9 - 0) * Math.random())).join("")
        document.querySelector(".resultDigits").innerHTML = `<p>${x}</p>`

    }
let x = setInterval(change, 50)
function cleared() {
    clearInterval(x)
    document.querySelector(".resultDigits").innerHTML = `<p>${sumStrings(digits[0], digits[1])}</p>`

}
setTimeout(cleared, 2000)
    document.querySelector(".resultPopup").style.display = "block"
    document.querySelector(".resultBorder").style.display="block"
    document.querySelector(".popupShade").style.display="block"
    document.querySelector('.resultHeader').textContent = 'Calculating...'

    setTimeout(() => {
        document.querySelector('.resultHeader').style.backgroundColor = 'green'
        document.querySelector('.resultHeader').textContent = 'Result'
        document.querySelector('.resultInfo').textContent = `Result.length = ${sumStrings(digits[0], digits[1]).length}`

    }, 3000)

})

document.getElementById("1").addEventListener('keyup', (e) => {
digits[0] = e.target.value
})

document.getElementById("2").addEventListener('keyup', (e) => {
    digits[1] = e.target.value;

})



function sumStrings(a,b) { 
  
    let asplit = a.split("").reverse();
    let bsplit = b.split("").reverse();
    let bigger = asplit.length > bsplit.length ? asplit.length : bsplit.length
    let sum = []
    for(let i=0; i< bigger; i++) {
        if(typeof asplit[i] === 'string' && typeof bsplit[i]==='string') {
            sum.push(parseInt(asplit[i])+parseInt(bsplit[i]))
        } else {
            sum.push(typeof asplit[i] ==='string' ? parseInt(asplit[i]) : parseInt(bsplit[i]))
        }
    }
    sum = sum.map(x => x.toString())
    for(let j=0; j<sum.length-1; j++) {
        if(sum[j]>9) {
            sum[j+1] = parseInt(sum[j+1])
            sum[j+1] +=parseInt(sum[j][0])
            sum[j+1] = sum[j+1].toString()
           
            sum[j] = sum[j][1]
        } 
    }
    let res2 = []
    let count = ''
    let res = sum.reverse()
  if(res[0]==0) {
  
    res.shift()
  }
    return res.join("")
   
}












