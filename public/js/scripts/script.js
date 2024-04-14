var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
        slider.style.backgroundSize = "".concat(rangeValue, "% 100%");
        if (Number(inputValue) === 0) {
            alert("Pease increase the character length");
            generateButton.disabled = true;
        }
        else {
            generateButton.disabled = false;
        }
    });
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
    var password = '';
    for (var i = 0; i < Number(sliderValue); i++) {
        var randomIndex = Math.floor(Math.random() * validCharacters.length);
        password += validCharacters[randomIndex];
    }
    generatedPassword.value = password;
}
// function for copying to clipboard
copy.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!generatedPassword.value) {
                    alert("Generate password first!");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, copyToClipboard(generatedPassword.value)];
            case 1:
                _a.sent();
                copied.style.display = "inline-block";
                return [2 /*return*/];
        }
    });
}); });
function copyToClipboard(value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, navigator.clipboard.writeText(value)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
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
//function for  strength check colors
function showColor() {
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
