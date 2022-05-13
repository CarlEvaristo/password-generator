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
    let numDigits = document.getElementById("pwLength").value;
    passwordEl1.value = ""
    passwordEl2.value = ""
    passwordEl3.value = ""
    passwordEl4.value = ""
    for (let i=0; i<numDigits; i++) {
        let passwordDataTypes = [rndmCharacter(), rndmNumber(), rndmSmall(), rndmCap()]
        passwordEl1.value += passwordDataTypes[Math.floor(Math.random() * 4)]

        passwordDataTypes = [rndmCharacter(), rndmNumber(), rndmSmall(), rndmCap()]
        passwordEl2.value += passwordDataTypes[Math.floor(Math.random() * 4)]

        passwordDataTypes = [rndmCharacter(), rndmNumber(), rndmSmall(), rndmCap()]
        passwordEl3.value += passwordDataTypes[Math.floor(Math.random() * 4)]

        passwordDataTypes = [rndmCharacter(), rndmNumber(), rndmSmall(), rndmCap()]
        passwordEl4.value += passwordDataTypes[Math.floor(Math.random() * 4)]
    } 
}   

function copyClipboard(value) {
    navigator.clipboard.writeText(value);
}