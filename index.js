let homeEl =document.getElementById("home-el")
let count = parseInt(homeEl.innerText, 10)

function homeAdd1() {
    count += 1
    homeEl.innerText = count
}

function homeAdd2() {
    count += 2
    homeEl.innerText = count
}

function homeAdd3() {
    count += 3
    homeEl.innerText = count
}

let guestEl =document.getElementById("guest-el")
let guestCount = parseInt(guestEl.innerText, 10)

function guestAdd1() {
    guestCount += 1
    guestEl.innerText = guestCount
}

function guestAdd2() {
    guestCount += 2
    guestEl.innerText = guestCount
}

function guestAdd3() {
    guestCount += 3
    guestEl.innerText = guestCount
}