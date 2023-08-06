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
  const lettersLower = "abcdefghijklmnopqrstuvwxyz"
  const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const specialChar = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
  const numeros = "123456789"
 
  let charChoice = window.prompt("how many characters would you like to have? ");
  let num = parseInt(charChoice);

  let specialCharChoice = window.confirm("Would you like to include special chracters? \nCLick ok for yes and cancel for no.")
  

  let upperChoice = window.confirm("Would you like to include uppercase letters in your password \nClick ok for yes and cancel for no") ;
  let lowerChoice = window.confirm("Would you like to include lower case letters in your password \nClick ok for yes and cancel for no") ;
  let numeroChoice =  window.confirm("Would you like to include numbers in your password \nClick ok for yes and cancel for no") ;





 
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

