let characters = ["!","@","#","$","%","^","&","*","(",")",":",";"] 
let numbers = [1,2,3,4,5,6,7,8,9,0] 
let smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
let capitalizedLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let passwordEl1 = document.getElementById("password-1")
let passwordEl2 = document.getElementById("password-2")
let passwordEl3 = document.getElementById("password-3")
let passwordEl4 = document.getElementById("password-4")

function rndmCharacter() {
    return characters[Math.floor(Math.random() * characters.length)]
}
function rndmNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}
function rndmSmall() {
    return smallLetters[Math.floor(Math.random() * smallLetters.length)]
}
function rndmCap() {
    return capitalizedLetters[Math.floor(Math.random() * capitalizedLetters.length)]
}

function shufflePassword(password) {
    let pwArray = password.split("")

    let newPw = ""
    for (let i = 0; i < password.length; i++) {
        let index = Math.floor(Math.random() * pwArray.length)
        newPw += pwArray[index]
        pwArray.splice(index, 1);
    }
    return newPw
}

function generatePassword() {
    let pw1 = rndmSmall() + rndmSmall() + rndmSmall() + rndmSmall() + rndmSmall() + rndmCharacter() + rndmNumber() + rndmNumber() + rndmNumber() + rndmSmall()  + rndmSmall() + rndmSmall() + rndmCap() + rndmCap() + rndmCap() + rndmCap() + rndmCharacter() + rndmCharacter()
    let pw2 = rndmSmall() + rndmSmall() + rndmSmall() + rndmSmall() + rndmSmall() + rndmCharacter() + rndmNumber() + rndmNumber() + rndmNumber() + rndmSmall()  + rndmSmall() + rndmSmall() + rndmCap() + rndmCap() + rndmCap() + rndmCap() + rndmCharacter() + rndmCharacter()
    let pw3 = rndmSmall() + rndmSmall() + rndmSmall() + rndmSmall() + rndmSmall() + rndmCharacter() + rndmNumber() + rndmNumber() + rndmNumber() + rndmSmall()  + rndmSmall() + rndmSmall() + rndmCap() + rndmCap() + rndmCap() + rndmCap() + rndmCharacter() + rndmCharacter()
    let pw4 = rndmSmall() + rndmSmall() + rndmSmall() + rndmSmall() + rndmSmall() + rndmCharacter() + rndmNumber() + rndmNumber() + rndmNumber() + rndmSmall()  + rndmSmall() + rndmSmall() + rndmCap() + rndmCap() + rndmCap() + rndmCap() + rndmCharacter() + rndmCharacter()

    passwordEl1.value = shufflePassword(pw1)
    passwordEl2.value = shufflePassword(pw2)
    passwordEl3.value = shufflePassword(pw3)
    passwordEl4.value = shufflePassword(pw4)
}   

function copyClipboard(value) {
    navigator.clipboard.writeText(value);
}