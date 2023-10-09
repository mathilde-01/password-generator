// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];


function getRandomIndexFromArray(arr){
  var randIndex = Math.floor(Math.random() * arr.length)
  var randElement = arr[randIndex]
  return randElement

}

// function to get password options from users
function getPwdOptions(){
  var pwdLength = parseInt(prompt("How many characters would you like in your password?"));
  console.log(pwdLength);
  var specialChars = confirm("Would you like special characters?");
  var upperChars = confirm("Would you like uppercased characters?");
  var lowerChars = confirm("Would you like lowercased characters?");
  var numeric = confirm("Would you like a number in your password?");

  var optionsObj = {
    length: pwdLength,
    special: specialChars,
    upper: upperChars,
    lower: lowerChars,
    numeric: numeric,
  }

  return optionsObj
}


function generatePassword(){
  var obj = getPwdOptions()
  console.log(obj)
  var result = []
  var possibleCharsArr = []
  var guaranteedCharsArr = []

  if(obj.special){
    possibleCharsArr = possibleCharsArr.concat(specialCharacters)
    guaranteedCharsArr.push(getRandomIndexFromArray(specialCharacters))
  }

  if(obj.upper) {
    possibleCharsArr = possibleCharsArr.concat(upperCasedCharacters)
    guaranteedCharsArr.push(getRandomIndexFromArray(upperCasedCharacters))
  }

  if(obj.lower) {
    possibleCharsArr = possibleCharsArr.concat(lowerCasedCharacters)
    guaranteedCharsArr.push(getRandomIndexFromArray(lowerCasedCharacters))
  }

  if(obj.numeric) {
    possibleCharsArr = possibleCharsArr.concat(lowerCasedCharacters)
    guaranteedCharsArr.push(getRandomIndexFromArray(numericCharacters))
  }



  // loop thourgh obj.length and push possiblechars to result array
  // for (0;i < obj.length

  for(var i = 0; i <= obj.lengthlenght; i++){
    console.log("Your secured password: " + guaranteedCharsArr[i]);
  }


  result.push(possibleCharsArr)
  
  
  console.log(possibleCharsArr)
  console.log(guaranteedCharsArr);

  return result.join('')
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// // GIVEN I need a new, secure password
// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria

// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password

// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters

// // WHEN asked for character types to include in the password
// // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected

// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria

// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page