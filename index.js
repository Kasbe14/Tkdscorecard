let homepoint = document.getElementById("home-point-text")
homepoint.textContent = 0
let guestPoint = document.getElementById("guest-point-text")
guestPoint.textContent = 0
let countH = 0
let countG = 0

let homeOne = document.getElementById("home1")
let guestOne = document.getElementById("guest1")
let homeTwo = document.getElementById("home2")
let guestTwo = document.getElementById("guest2")
let homeThree = document.getElementById("home3")
let guestThree = document.getElementById("guest3")

homeOne.addEventListener("click", function add1(){
     countH += 1
        homepoint.textContent = countH
} )
guestOne.addEventListener("click", function add1() {
    countG += 1
    guestPoint.textContent = countG
})
homeTwo.addEventListener("click", function add2(){
     countH += 2
        homepoint.textContent = countH
} )
guestTwo.addEventListener("click", function add2() {
    countG += 2
    guestPoint.textContent = countG
})
homeThree.addEventListener("click", function add3(){
     countH += 3
        homepoint.textContent = countH
} )
guestThree.addEventListener("click", function add3() {
    countG += 3
    guestPoint.textContent = countG
})

document.getElementById("reset-ptn").addEventListener("click", function reset() {
    countG = 0
    countH = 0
    guestPoint.textContent = countG
    homepoint.textContent = countH
})
function high(){
    
}
  