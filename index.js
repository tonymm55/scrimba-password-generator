let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", "{", "}", "-", "+", "=", "[", "]", "|", "~", "`", "@"]

let passElOne = document.querySelector("#pass-el-one");
let passElTwo = document.querySelector("#pass-el-two");
let passElThree = document.querySelector("#pass-el-three");
let passElFour = document.querySelector("#pass-el-four");
let generateBtn = document.querySelector("#generate")
let lengthValue = document.querySelector("#length-value")

// Get random letter from characters array
function randomCharacter() {
    let randomNumber = Math.floor(Math.random() * characters.length);
    return characters[randomNumber];
}

// Set password length, default to 15 if not specified or less than 15 characters
function setPasswordLength() {
    let inputValue = lengthValue.value;
    let length = inputValue === "" ? 12 : parseInt(inputValue);
    return Math.max(length, 12);

}
    

// Generate a random password of given length
function generatePassword(passwordLength) {
    let password = "";
    for (let i = 0; i < passwordLength; i++){
        password += randomCharacter();
    }
    return password;
}

// Render password to screen
function renderPassword() {
  passElOne.textContent = generatePassword(setPasswordLength());
  passElTwo.textContent = generatePassword(setPasswordLength());
  passElThree.textContent = generatePassword(setPasswordLength());
  passElFour.textContent = generatePassword(setPasswordLength());
}


// Copy password to copy to clipboard
function copyToClipboard(e) {
    let password = e.target.textContent;
    navigator.clipboard.writeText(password).then(() => {
            console.log("Password copied to clipboard successfully: " + password);
            alert("Password copied to clipboard successfully!");
    }).catch(err => {
      console.error("Failed to copy password: " + err);
      alert("Failed to copy password. Please try again.");
    });
}

// Event listeners 
document.addEventListener("DOMContentLoaded", function() {
  passElOne.addEventListener("click", copyToClipboard);
  passElTwo.addEventListener("click", copyToClipboard);
  passElThree.addEventListener("click", copyToClipboard);
  passElFour.addEventListener("click", copyToClipboard);
  generateBtn.addEventListener("click", renderPassword);
});

// function testAlert() {
//   alert("This is a test alert!");
// }
// testAlert();

