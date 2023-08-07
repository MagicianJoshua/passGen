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
  var allChoice = []; //This is an array that will store arrays if the user wants the specified option in the password
  var password = [];
  var lettersLower = "abcdefghijklmnopqrstuvwxyz";
  var lettersLower = Array.from(lettersLower); // took a string and turned it into an array because i was to lazy to add every single comma

  // console.log(lettersLower);

  var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lettersUpper = Array.from(lettersUpper);
  // console.log(lettersUpper);

  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var specialChar = Array.from(specialChar);
  // console.log(specialChar);

  var numeros = "123456789";
  var numeros = Array.from(numeros);
  // console.log(numeros);

  const charChoice = window.prompt(
    "how many characters would you like to have? "
  );
  const num = parseInt(charChoice);

  if (isNaN(num) === true) {
    //This if statement checks to see if the const num is a number if it is not the user will be asked
    //please select a number
    window.prompt("Please enter a number.");
    console.log(isNaN("Isnan " + num));
    generatePassword();
    return;
  } else {
    console.log(num);
    console.log(isNaN("Isnan " + num));
  }

  const specialCharChoice = window.confirm(
    //this const is asking if the user wants special characters and 
    "Would you like to include special chracters? \nCLick ok for yes and cancel for no."
  );

  if (specialCharChoice === true) { //if the user wants special characters we add it to the array if not we skip it
    allChoice.push(specialChar);
    // console.log(allChoice);
  }

  const upperChoice = window.confirm(
    "Would you like to include uppercase letters in your password \nClick ok for yes and cancel for no"
  );

  if (upperChoice === true) {//if the user wants uppercase letters we add it to the array if not we skip it
    allChoice.push(lettersUpper);
    // console.log(allChoice);
  }

  const numeroChoice = window.confirm(
    "Would you like to include numbers in your password \nClick ok for yes and cancel for no"
  );

  if (numeroChoice === true) {//if the user wants numbers we add it to the array if not we skip it
    allChoice.push(numeros);
    // console.log(allChoice);
  }

  const lowerChoice = window.confirm(
    "Would you like to include lower case letters in your password \nClick ok for yes and cancel for no"
  );

  if (lowerChoice === true) {//if the user wants lowercase letters we add it to the array if not we skip it
    allChoice.push(lettersLower);
    // console.log(allChoice);
  }

  // if (typeof num  == "number"){
  //   window.alert("Generating password");
  // }
  // else {
  //   window.alert("Please enter a number.");
  // }

  // first i want to selec the array in the array we are going to pick, which has a mxiumum value of allchoice.length
  // the after we select an array inside the array we need to pick a number.
  // we then need to find a way to include everything the user wanted.

  for (i = 0; i < num ; i++) {
    let randArray = Math.floor(Math.random() * allChoice.length);
    let arrayChoice = allChoice[randArray];
    let randCHar = Math.floor(Math.random() * arrayChoice.length );
    password.push(arrayChoice[randCHar]);
  }
  console.log(password);
  }