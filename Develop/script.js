

// Assignment Code
var generateBtn = document.querySelector("#generate");

const length = 8;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "123456789";
const characters = "`~!@#$%^&*()-_=+{}[]/|<>/?";

const allChars = lowerCase + upperCase + numbers + characters;



// Write password to the #password input
function writePassword(){
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  let password = "";
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += characters[Math.floor(Math.random() * characters.length)];

  while(length >= password.length){
  password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordText.value = password;
}


  // for (let i = 0; i <= length; i++) {
  //   const randomIndex =
  //   Math.floor(Math.random() * characters.length); password += characters.charAt(randomIndex);
  // }
  //   return password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Confirm buttons

var options = ["Yes", "No"];

var generatePassword = function() {
  console.log("fired generatePassword function")
  var userChoice = window.prompt("Does your password require at least 8 characters?");


}

// Clear the concole on every refresh
console.clear();



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page