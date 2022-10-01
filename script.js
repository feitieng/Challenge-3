// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

function generatePassword(lower, upper, number, symbol, length) {
  var passLength = prompt("How long the password you want?");
  if (passLength > 128){
    alert("Please enter a number between 8 and 128");
    generatePassword();
   }
  
  else if (passLength < 8){
    alert("Please enter a number between 8 and 128");
    generatePassword();
  }
  else if (isNaN(passLength)){
    alert("Please enter a number between 8 and 128");
    generatePassword();
  }

  var upperCaseUsed = confirm("Do you want to include Upper Case letters?");
  var lowerCaseUsed = confirm("Do you want to include Lower Case letters?");
  var numberUsed = confirm("Do you want to include Numbers?");
  var symbolUsed = confirm("Do you want to include Symbols?");      
  
  if (upperCaseUsed === false && lowerCaseUsed === false && numberUsed === false && symbolUsed === false){
      alert("Please choose one or more criteria.");
      generatePassword();
    }
  
 
 
    var generatedPassword = '';
    var length = passLength.value;
    
    password.innerText = generatePassword(lowerCaseUsed, upperCaseUsed, numberUsed, symbolUsed, passLength);
  
   
    var typesCount = lower + upper + number + symbol;
    var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
         
    // create a loop
    for(let i=0; i<length; i+=typesCount) {
      typesArr.forEach(type => {
        var funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
    
    var finalPassword = generatedPassword.slice(0, length);
    
    return finalPassword;
  }
  
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  
  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  