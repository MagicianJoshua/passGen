// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  //This if statement makes sure that the generatePassword function doesnt return an undefined value, if it does, it will write password over agian.
    if (password === undefined){
      writePassword();
    return;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var choiceTracker = 0; //This variable keeps track of the choices the user makes, if they dont use any characters then 
  var allChoice = []; //This is an array that will store arrays if the user wants the specified option in the password
  var password = [];//this is an array that will store the characters we randomly select
  var arrayChoice = [];

  //This next section im just initializing the arrays in which to chose from, im taking them from an string and turning 
  //them into an array because i was too lazy to make them an array and add every single quotation marl and comma.

  var lettersLower = "abcdefghijklmnopqrstuvwxyz";
  var lettersLower = Array.from(lettersLower); 

  var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lettersUpper = Array.from(lettersUpper);
  
  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var specialChar = Array.from(specialChar);
 
  var numeros = "123456789";
  var numeros = Array.from(numeros);
  
  //charChoice is the variable i use to see how many characters the user wants to include in the password.
  var charChoice = window.prompt( "how many characters would you like to have? ");
  
  var num = parseInt(charChoice); //Num is what we use to turn the string into a number.

  //This if statement checks to see if the users input is a number and if they put in something that isnt a number it asks them to enter one.
  if (isNaN(num) === true) {
    window.alert("Please enter a number.");
      console.log(isNaN("Isnan " + num));
        return;
  }
  
  //This if statement checks to see if the number is bigger than 8 but smaller than 128.
  if (num < 8 || num > 128){
    window.alert("Please select a number between 8 and 128");
      return;
  }

  //this variable is asking if the user wants special characters, if they say yes
  //we add the specialChar array to the arracyChoice array.
  var specialCharChoice = window.confirm(
    "Would you like to include special chracters? \nCLick ok for yes and cancel for no."
  );
  if (specialCharChoice === true) { 
    allChoice.push(specialChar);
      choiceTracker++;
  }

  //This upperChoice variable is asking the user if they want uppercase characters in there password
  //if they do the uppercase array will be added to the arrayChoice array.
  var upperChoice = window.confirm(
    "Would you like to include uppercase letters in your password \nClick ok for yes and cancel for no"
  );
  if (upperChoice === true) {
    allChoice.push(lettersUpper);
      choiceTracker++;
  }

  //this numeroChoice variable is asking the user if they want numbers to be in the password
  // if they say yes the numeros array is added to the arrayChoice array
  var numeroChoice = window.confirm(
    "Would you like to include numbers in your password \nClick ok for yes and cancel for no"
  );
  if (numeroChoice === true) {
      allChoice.push(numeros);
        choiceTracker++;
  }

  //This lowerChoice array is asking the user if they want lowercase letters in the password
  // if they say yes the lettersLower array is added to the arrayChoice array
  var lowerChoice = window.confirm(
    "Would you like to include lower case letters in your password \nClick ok for yes and cancel for no"
  );
  if (lowerChoice === true) {
      allChoice.push(lettersLower);
        choiceTracker++;
  }

  //this if statement makes sure the user picks atleast one option and if they dont it asks them to pick an option.
  if (choiceTracker <= 0){
      window.alert("Please pick atleast one option");
  }else {
    passLoop();
    return passCheck();
  }

  
  
   //this passloop function is resposible for generating a random password
function passLoop() {
  for (i = 0; i < num ; i++) {
      let randArray = Math.floor(Math.random() * allChoice.length);                
         arrayChoice = allChoice[randArray];
            let randCHar = Math.floor(Math.random() * arrayChoice.length );          
           password.push(arrayChoice[randCHar]);
  }
}

  //This pass check function checks the password to see if it meets all the requirments specified by the user and if not it generates a new one.
function passCheck(){
  for ( i = 0; i < allChoice.length; i++){
    
    let currentArray = allChoice[i]
    let containsUserChoice = password.some(r=> currentArray.includes(r));
      if (containsUserChoice === false) {
        password = [];
        passLoop();
        passCheck();
      }
  }
  var passString = password.toString();
  var passString = passString.replace(/,/g,"")
  return passString;
  }

}