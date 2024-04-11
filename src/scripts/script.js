//Selectors
var slider = document.querySelector(".range-field");
var upperCase = document.getElementById("upperLetter");
var lowerCase = document.getElementById("lowerLetter");
var numbers = document.getElementById("numeral");
var specialChar = document.getElementById("symbols");
var generateButton = document.querySelector(".button-generate");
var generatedPassword = document.querySelector(".generated-password");
var copy = document.querySelector(".copy");
var copied = document.querySelector(".copied");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var strengthStages = document.querySelector(".strength-stages");
var strengthCheck = 0;
//changing the range of the slider
function moveSlide() {
    slider.addEventListener('input', function (event) {
        var inputValue = event.target.value;
        var rangeValue = (Number(inputValue) / 20) * 100;
        // if(Number(inputValue) > 8){
        //   strengthCheck += 1;  
        // }else{
        //     strengthCheck -= 1;
        // }
        slider.style.backgroundSize = "".concat(rangeValue, "% 100%");
    });
}
//function for checking strength
function checkStrength(event) {
    var input = event.target;
}
//function for generating password
function generatePassword() {
    var sliderValue = slider.value;
    var upperCaseValue = upperCase.checked;
    var lowerCaseValue = lowerCase.checked;
    var numbValue = numbers.checked;
    var specialCharValue = specialChar.checked;
    if (!upperCaseValue && !lowerCaseValue && !numbValue && !specialCharValue) {
        alert("Please select an option to generate password");
        return;
    }
    var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    var digits = "1234567890";
    var specialCharacters = '#$!&@*()<>?:~[]$|';
    var validCharacters = '';
    if (upperCaseValue) {
        validCharacters += upperCaseChar;
    }
    if (lowerCaseValue) {
        validCharacters += lowerCaseChar;
    }
    if (numbValue) {
        validCharacters += digits;
    }
    if (specialCharValue) {
        validCharacters += specialCharacters;
    }
    // const validCharacters= upperCaseChar + lowerCaseChar + digits + specialCharacters;
    var password = '';
    for (var i = 0; i < Number(sliderValue); i++) {
        var randomIndex = Math.floor(Math.random() * validCharacters.length);
        password += validCharacters[randomIndex];
    }
    generatedPassword.value = password;
}
// function for copying to clipboard
copy.addEventListener('click', function () {
    if (!generatedPassword.value) {
        alert("Generate password first!");
        return;
    }
    var textArea = document.createElement("textarea");
    textArea.value = generatedPassword.value;
    //textArea.style.display = "none";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    copied.style.display = "inline-block";
});
//Event listeners
upperCase.addEventListener('input', function () {
    if (upperCase.checked === true) {
        strengthCheck += 1;
    }
    else {
        strengthCheck -= 1;
    }
    showColor();
});
lowerCase.addEventListener('input', function () {
    if (lowerCase.checked === true) {
        strengthCheck += 1;
    }
    else {
        strengthCheck -= 1;
    }
    showColor();
});
numbers.addEventListener('input', function () {
    if (numbers.checked === true) {
        strengthCheck += 1;
    }
    else {
        strengthCheck -= 1;
    }
    showColor();
});
specialChar.addEventListener('input', function () {
    if (specialChar.checked === true) {
        strengthCheck += 1;
    }
    else {
        strengthCheck -= 1;
    }
    showColor();
});
generateButton.addEventListener('click', function () {
    generatePassword();
});
//function for applying colors
function showColor() {
    // if(Number(inputValue) < 8){
    //     strengthCheck -= 2;
    // }else if(Number(inputValue) >= 16){
    //     strengthCheck += 1;
    // }
    switch (strengthCheck) {
        case 1:
            box1.style.background = "#F64A4A";
            box2.style.background = "#18171F";
            box3.style.background = "#18171F";
            box4.style.background = "#18171F";
            strengthStages.innerText = "TOO WEAK!";
            break;
        case 2:
            box1.style.background = "#FB7C58";
            box2.style.background = "#FB7C58";
            box3.style.background = "#18171F";
            box4.style.background = "#18171F";
            strengthStages.innerText = "WEAK";
            break;
        case 3:
            box1.style.background = "#F8CD65";
            box2.style.background = "#F8CD65";
            box3.style.background = "#F8CD65";
            box4.style.background = "#18171F";
            strengthStages.innerText = "MEDIUM";
            break;
        case 4:
            box1.style.background = "#A4FFAF";
            box2.style.background = "#A4FFAF";
            box3.style.background = "#A4FFAF";
            box4.style.background = "#A4FFAF";
            strengthStages.innerText = "STRONG";
            break;
        default:
            box1.style.background = "#18171F";
            box2.style.background = "#18171F";
            box3.style.background = "#18171F";
            box4.style.background = "#18171F";
    }
}
moveSlide();
