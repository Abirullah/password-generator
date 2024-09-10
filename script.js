

// function generatePassword() {
//     var alphabets = document.getElementById('alphabets').value;
//     var numbers = document.getElementById('numbers').value;
//     var symbols = document.getElementById('symbols').value;
//     var passwordLength = parseInt(document.getElementById('passwordLength').value);
//     var pass= document.getElementsByClassName('display');

//     var allChars = alphabets + numbers + symbols;
//     var password = '';

//     if (allChars.length === 0 || isNaN(passwordLength)) {
//         alert('Please fill out all fields correctly.');
//         return;
//     }

//     for (var i = 0; i < passwordLength; i++) {
//         var randomIndex = Math.floor(Math.random() * allChars.length);
//         password += allChars[randomIndex];
//     }

//     document.getElementById('generatedPassword').textContent = password;
//     password.value = pass;
// }




function password1() {
    var alphabets = document.getElementById('alphabets').value;
    var numbers = document.getElementById('numbers').value;
    var symbols = document.getElementById('symbols').value;
    var passwordLength = parseInt(document.getElementById('passwordLength').value);
    
    // Correctly reference the display element
    var passDisplay = document.getElementsByClassName('display')[0];

    var allChars = alphabets + numbers + symbols;
    var password = '';

    if (allChars.length === 0 || isNaN(passwordLength)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    // Set the generated password to the display field
    // document.getElementById('generatedPassword').textContent = password;
    passDisplay.textContent = password; // Use .textContent or .value if it's an input
}






