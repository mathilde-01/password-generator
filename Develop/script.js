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
  var randIndex = Math.floor((Math.random() * arr.length) + 1)
  var randElement = arr[randIndex]
  return randElement

}

// function to get password options from users
function getPwdOptions(){
  var pwdLength = parseInt(prompt("Choose a length between 8 characters and 128 characters:"));
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
  
  for(var i = 0; i < obj.length; i++){
    if(i<guaranteedCharsArr.length){
    result.push(guaranteedCharsArr[i])}
    else {
      result.push(getRandomIndexFromArray(possibleCharsArr))
    }
    
  }
  console.log("Your secured password: " + result);
  
  console.log(possibleCharsArr)
  console.log(guaranteedCharsArr);

  //for loop to randomize result

  var randomResult=[]
  for(var i = 0; i < result.length; i++) {
    var randomized = Math.floor(Math.random() * result.length)
    randomResult = randomResult.concat(randomized[i])
    console.log(randomResult)
  }

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

