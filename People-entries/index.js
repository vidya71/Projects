
let cnt = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment(){
    count = count + 1
    cnt.textContent = count
}

function save(){
    let countSt = count + " - "
    saveEl.textContent += countSt
    count = 0
    cnt.textContent = 0
}