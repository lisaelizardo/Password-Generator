// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterAmountNumber = document.getElementById
('characterAmountNumber')
var includeUppercase = document.getElementById
('includeUppercase')
var includeLowercase = document.getElementById
('includeLowercase')
var includeNumbers = document.getElementById
('includeNumbers')
var includeSpecialCharaters = document.getElementById
('includeSpecialCharaters')

var Special = document.getElementById("passwordGeneratorSpecial")

var uppercase_char_codes = arrayFromLowToHigh (65, 90)
var lowercase_char_codes = arrayFromLowToHigh (97, 122)
var number_char_codes = arrayFromLowToHigh (48, 57)
var symbol_char_codes = arrayFromLowToHigh (33, 47).concat(
  arrayFromLowToHigh(58, 64)
)

Form.addEventListener("click", function(e) {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeLowercase = includeLowercaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSpecialCharacters = includeSpecialCharactersElement.checked
  var password = generatePassword(characterAmount, includeLowercase, 
    includeUppercase, includeNumbers, includeSpecialCharacters);
});
// Write password to the #password input
function genPassword(characterAmountNumber, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters) {
  var passwordText = document.querySelector("#password");
  let charCodes = lowercase_char_codes
  if (includeUppercase) charCodes = charCodes.concat(uppercase_char_codes)
  if (includeSpecialCharaters) charCodes = charCodes.concat(symbol_char_codes)
  if (includeNumbers) charCodes = charCodes.concat (number_char_codes)

  var passwordCharacters = []
  for (let i = 0; i <characterAmount, i++)
  var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
  passwordCharacters.push(String.fromCharCode(characterCode))

}

function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

document.getElementById("password").value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);