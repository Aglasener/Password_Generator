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

