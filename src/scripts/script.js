function moveSlide() {
    var slider = document.querySelector(".range-field");
    slider.addEventListener('input', function (event) {
        var inputValue = event.target.value;
        var rangeValue = (Number(inputValue) / 20) * 100;
        slider.style.backgroundSize = "".concat(rangeValue, "% 100%");
    });
}
moveSlide();
var upperCase = document.getElementById("upperLetter");
var lowerCase = document.getElementById("lowerLetter");
var numbers = document.getElementById("numeral");
var specialChar = document.getElementById("symbols");
function checkStrength(event) {
    var input = event.target;
    console.log(input.checked ? 'hello' : 'hi');
}
upperCase.addEventListener('input', checkStrength);
lowerCase.addEventListener('input', checkStrength);
numbers.addEventListener('input', checkStrength);
specialChar.addEventListener('input', checkStrength);
