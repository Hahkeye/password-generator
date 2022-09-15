const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@&%$#!-+/\?~";
const lettersU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const validAnswers = ['yes','y','true','no','n','false'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function promptMeh(){
  var passLenght = validNum(128);
  var stuff=[];
  (validTorF("Do you want to include lowercase letters?")?stuff.push(letters):console.log("no Lower"));
  // var lcase = validTorF("Do you want to include lowercase letters?");
  (validTorF("Do you want to include uppercase letters?")?stuff.push(lettersU):console.log("No Upper"));
  // var ucase = validTorF("Do you want to include uppercase letters?");
  (validTorF("Do you want to include numbers?")?stuff.push(numbers):console.log("No numbers"));
  // var num = validTorF("Do you want to include numbers?");
  (validTorF("Do you want to include special characters?")?stuff.push(symbols):console.log("No numbers"));
  // var spec = validTorF("Do you want to include special characters?");
  // console.log("Lenght:",passLenght," Lcase:",lcase," Ucase:",ucase," Num:",num," Spec:",spec);
  console.log("Length ",passLenght);
  console.log("stuff ",stuff);
  return [passLenght,stuff];
}


function generatePassword(){
  var stufff=promptMeh();
  console.log(stufff);
  var temp = "";
  for(let i=0;i<stufff[0];i++){
    let category = Math.floor(Math.random()*stufff[1].length);
    let sel = Math.floor(Math.random()*stufff[1][category].length);
    temp+=stufff[1][category][sel];
    }
  return temp;
}

function generatePassword(lenght,stuff){
  // var stufff=promptMeh();
  // console.log(stufff);
  var temp = "";
  for(let i=0;i<lenght;i++){
    let category = Math.floor(Math.random()*stuff.length);
    let sel = Math.floor(Math.random()*stuff[category].length);
    temp+=stuff[category][sel];
  }
  return temp;
}


function validNum(number){
  var temp="";
  while (true) {
    temp=prompt("Enter a number less than "+number)
    if( temp<=number && temp>=8){
      return temp;
    }
    else{
      alert("Please input a valid number less than ",number,"and greater than 8.")
    }
  }
}

function validTorF(answers){
  var temp="";
  while (true) {
    temp=prompt(answers)
    if( validAnswers.includes(temp)){
      if(temp == "yes" || temp=="y" || temp=="true"){
        return true;
      }else{
        return false;
      }
      
    }
    else{
      alert("Please input a valid answer.(yes/y/true/no/n/false)")
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var datatest=[letters,lettersU,symbols,numbers];
for(let i=0;i<100;i++){
  var temps=[];
  var numOfC = Math.floor(Math.random()*4)+1;
  console.log("Number of categorsy ",numOfC);

  for(let x=0;x<numOfC;x++){
    // console.log("x ",x);
    temps.push(datatest.pop());
  }
  // Math.floor(Math.random()*4);
  // Math.floor(Math.random()*datatest.length);
  console.log("Data set: ",temps);
  console.log(generatePassword(8,temps));
  temps=[];
  numOfC=0;
  datatest=[letters,lettersU,symbols,numbers]

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
