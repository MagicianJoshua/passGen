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


function generatePassword() {
  var allChoice = [];

  var lettersLower = "abcdefghijklmnopqrstuvwxyz";
  var lettersLower = Array.from(lettersLower);
  // console.log(lettersLower);

  var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lettersUpper = Array.from(lettersUpper);
  // console.log(lettersUpper);

  var specialChar = " !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";
  var specialChar = Array.from(specialChar);
  // console.log(specialChar);

  var numeros = "123456789";
  var numeros = Array.from(numeros);
  // console.log(numeros);

  let charChoice = window.prompt("how many characters would you like to have? ");
  let num = parseInt(charChoice);
  
  let specialCharChoice = window.confirm("Would you like to include special chracters? \nCLick ok for yes and cancel for no.")
  if (specialCharChoice === true) {
    allChoice.push(specialChar);
    console.log(allChoice);
  }
  
  
  let upperChoice = window.confirm("Would you like to include uppercase letters in your password \nClick ok for yes and cancel for no") ;
  if (upperChoice === true) {
    allChoice.push(lettersUpper);
    console.log(allChoice);
  }

  let numeroChoice =  window.confirm("Would you like to include numbers in your password \nClick ok for yes and cancel for no") ;
  if (numeroChoice === true) {
    allChoice.push(numeros);
    console.log(allChoice);
  }

  let lowerChoice = window.confirm("Would you like to include lower case letters in your password \nClick ok for yes and cancel for no") ;
  if (lowerChoice === true) {
    allChoice.push(lettersLower);
    console.log(allChoice);
  }
  


 
  // if (typeof num  == "number"){ 
  //   window.alert("Generating password");
  // } 
  // else {
  //   window.alert("Please enter a number.");
  // }

  // for (i = 0; i < num ; i ++) {
  //   let rand = Math.floor(Math.random() * letters.length);
  //   pass.push(letters[rand])
  // } 
  // var numPass = pass.toString();
  // numPass = numPass.replaceAll("," ,"");
  // window.alert(numPass);

}

