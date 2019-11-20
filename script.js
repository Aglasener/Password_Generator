var passArray = [];
var charToUse = [];
var specArray = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","^","_","~"];
var numArray = ["1","2","3","4","5","6","7","8","9","0"];
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowcaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



function lengthSelect() {
    var passLength = prompt("Enter your desired password length (must be between 8 and 128 characters)");
    if (passLength >= 8 && passLength <= 128){
        alert("Your chosen length is: " + passLength);
    }
    else{
        alert("You have entered an invalid response, please try again.");
        lengthSelect();
    }
    
    return passLength;        
}

function charSelect() {
    var specChar = confirm("Do you want to use special characters?");
        if (specChar) {
            alert("You have chosen to use special characters!");
            charToUse.push(specArray);
        } 
    var numChar = confirm("Do you want to use numbers?");
        if (numChar) {
            alert("You have chosen to use numeric characters!");
            charToUse.push(numArray);
        }
    var lowerChar = confirm("Do you want to use lowercase characters?");
        if (lowerChar) {
            alert("You have chosen to use lowercase characters!")
            charToUse.push(lowcaseArray);
        }     
    var upperChar = confirm("Do you want to use uppercase characters?");
        if (upperChar) {
            alert("You have chosen to use uppercase characters!");
            charToUse.push(uppercaseArray);
        }
        else if (specChar == false && numChar == false && lowerChar == false && upperChar == false){
            alert("You must choose a character type!");
            charSelect();
        }
}