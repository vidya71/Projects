let scoreH = document.getElementById("home-el")
let scoreG = document.getElementById("guest-el")
let countH = 0
let countG = 0

function oneH(){
    countH += 1
    scoreH.textContent = countH
}
function twoH(){
    countH += 2
    scoreH.textContent = countH
}
function threeH(){
    countH += 3
    scoreH.textContent = countH
}
function oneG(){
    countG += 1
    scoreG.textContent = countG
}
function twoG(){
    countG += 2
    scoreG.textContent = countG
}
function threeG(){
    countG += 3
    scoreG.textContent = countG
}


function save(){
    let draw = countH - countG
    let final  = countH - countG 
    draw == 0 ?  saveElH.textContent = "MATCH DRAW": (final > 0 ? saveElH.textContent = "HOME WON" : saveElH.textContent = "GUEST WON") 

}

function reset(){
    countH = 0
    countG = 0
    scoreG.textContent = countG
    scoreH.textContent = countH
    saveElH.textContent = ""
}