// Assignment code here
    var uppercasestring = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercasestring= 'abcdefghijklmnopqrstuvwxyz';
    var numericstring = '0123456789';
    let userchoice = []
    //var random = Math.floor(Math.random() * options.length);

    document.getElementById("up");
    document.getElementById("low");
    document.getElementById("num");


    var generateBtn = document.querySelector("#generate");

//var btn = document.querySelector('#generate');

var passwordText = document.querySelector("#password");

//function criteria(el) {
//if (el.id('up') == checked) {
//     el.pwCharSelection = uppercase.variable};
//   if (el.id('low') == checked) {
//     el.pwCharSelection = pwCharSelection + lowercase.variable};
//   if (el.id('num') == checked) {
//     el.pwCharSelection = pwCharSelection + numeric.variable};
// };

function randomPassword(length) {
  console.log(userchoice)
  let randomPassword = ""
  for(let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * userchoice.length)
    let randomCharacter = userchoice[index]
    randomPassword = randomPassword+ randomCharacter
  }
  passwordText.value = randomPassword

}
function generatePassword(length) {
let lowercase = window.confirm("Do you want lowercase?")
if (lowercase === true) {
  userchoice = userchoice.concat(lowercasestring.split(""))
}
console.log(userchoice)

let uppercase = window.confirm("Do you want uppercase?")
if (uppercase === true) {
  userchoice = userchoice.concat(uppercasestring.split(""))
}

let numeric = window.confirm("Do you want numeric?")
if (numeric === true) {
  userchoice = userchoice.concat(numericstring.split(""))
}
randomPassword(length)
}


function startPasswordGenerator() {
  let passwordLngth= window.prompt("Enter Password Length")
  if (passwordLngth < 8) { alert ("Your password is to short"); return;}
  if (passwordLngth > 128) { alert ("Your password is to long"); return;}


  generatePassword(passwordLngth)
    // for (var c = 0; c < passwordText.length; c++) {
    //     //var password = "";
    //     password = password + pwCharSelection.slice(random, 1);
    //   console.log(passwordText)
    // };
    //var password = passLength + passwordText;
  //passwordText.value = password;
};

generateBtn.addEventListener('click', startPasswordGenerator)