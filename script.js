const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@&%$#!-+/\?~";
const lettersU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const validAnswers = ['yes','y','true','no','n','false'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


function validNum(number){ //Prompts the user until they enter a valid number.
  var tempInput="";
  while (true) {
    tempInput=prompt("Please input a valid number less than "+number+" and greater than 8.")
    if( tempInput<=number && tempInput>=8){
      return tempInput;
    }
    else{
      alert("Please input a valid number less than "+number+" and greater than 8.")
    }
  }
}


function promptMeh(){ // function to collect user input for the various selections
  var passLenght = validNum(128);
  var charPool=[];
  (confirm("Do you want to include lowercase letters?")?charPool.push(letters):console.log("no Lower"));
  (confirm("Do you want to include uppercase letters?")?charPool.push(lettersU):console.log("No Upper"));
  (confirm("Do you want to include numbers?")?charPool.push(numbers):console.log("No numbers"));
  (confirm("Do you want to include special characters?")?charPool.push(symbols):console.log("No numbers"));
  ((charPool.length==0) ? promptMeh():console.log("asdasd"))
  return [passLenght,charPool];
}

function shuffle(target) {//Takes in a string and shuffles it.
  console.log("Pre shuffle: ",target);
  target = target.split(""),
  num = target.length;

  for(var x = num - 1; x > 0; x--) { //iterates backawrds and randomly replaces.
    var y = Math.floor(Math.random() * (x + 1));
    var temp = target[x];
    target[x] = target[y];
    target[y] = temp;
  }
  console.log("Post shuffle: ",target);
  return target.join("");
}


function generatePassword(){//Make sure it chooses one from atleast every category and shuffle
  var data=promptMeh();
  var temp = "";
  let category = 0;
  for(let i=0;i<data[0];i++){
    if(i<data[1].length){
      category = i;
    }else{
      category = Math.floor(Math.random()*data[1].length);
    }
    let sel = Math.floor(Math.random()*data[1][category].length);
    temp+=data[1][category][sel];
  }

  return shuffle(temp);
}

function writePassword() { //writes password out to the browser
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  navigator.clipboard.writeText(password);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
