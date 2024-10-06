// let random = Math.floor(Math.random() * 100)
// let items =  document.getElementById("urok_3")

// let button = document.querySelector('.click')

// button.onclick = () => {
//     button.textContent = "h"

// }

// button.ondblclick = () => {
//     button.textContent = "j"
// }

let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
let random = document.querySelector('#ran')
let reset = document.querySelector('#rst')
let counter = document.querySelector('#counter')

let value = 10
let rst_value = value
counter.textContent = value

inc.onclick = () => {
    value++
    counter.textContent = value
}
dec.onclick = () => {
    value--
    counter.textContent = value
}
ran.onclick = () => {
    value = Math.floor(Math.random() * 100)
    counter.textContent = value
}
rst.onclick = () => {
    value = rst_value
    counter.textContent = value
}


