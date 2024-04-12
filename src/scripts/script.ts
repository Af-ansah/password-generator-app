//Selectors
const slider = document.querySelector(".range-field") as HTMLInputElement;
const upperCase = document.getElementById("upperLetter") as HTMLInputElement;
const lowerCase = document.getElementById("lowerLetter") as HTMLInputElement;
const numbers = document.getElementById("numeral") as HTMLInputElement;
const specialChar = document.getElementById("symbols") as HTMLInputElement;
const generateButton =  document.querySelector(".button-generate") as HTMLButtonElement;
const generatedPassword = document.querySelector(".generated-password") as HTMLInputElement;
const copy = document.querySelector(".copy") as HTMLImageElement;
const copied = document.querySelector(".copied") as HTMLSpanElement;
const box1 = document.querySelector(".box1") as HTMLDivElement;
const box2 = document.querySelector(".box2") as HTMLDivElement;
const box3 = document.querySelector(".box3") as HTMLDivElement;
const box4 = document.querySelector(".box4") as HTMLDivElement;
const strengthStages = document.querySelector(".strength-stages") as HTMLSpanElement

let strengthCheck = 0;


//changing the range of the slider
function moveSlide(){
    slider.addEventListener('input', (event)=>{
    const inputValue = (event.target as HTMLInputElement).value;
    const rangeValue = (Number(inputValue)/20)*100;
    slider.style.backgroundSize = `${rangeValue}% 100%`;
    if(Number(inputValue) === 0){
        alert("Pease increase the character length");
        generateButton.disabled = true;
       
    }else{
        generateButton.disabled = false;
    }
 })
}

//function for generating password
function generatePassword(){

    const sliderValue = slider.value;
    const upperCaseValue = upperCase.checked;
    const lowerCaseValue = lowerCase.checked;
    const numbValue = numbers.checked;
    const specialCharValue =specialChar.checked;
    if(!upperCaseValue && !lowerCaseValue && !numbValue && !specialCharValue){
        alert("Please select an option to generate password");
        return;
    }
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const digits ="1234567890";
    const specialCharacters = '#$!&@*()<>?:~[]$|';
    let validCharacters = '';

    if(upperCaseValue ){
        validCharacters += upperCaseChar ;
    }
    if(lowerCaseValue ){
        validCharacters +=lowerCaseChar;
    }
    if(numbValue){
        validCharacters += digits;
    }
    if(specialCharValue){
        validCharacters += specialCharacters;
    }

    let password ='';
    for(let i=0; i< Number(sliderValue); i++){
        const randomIndex = Math.floor(Math.random()*validCharacters.length  );
        password += validCharacters[randomIndex];
    }
    generatedPassword.value = password;
}

// function for copying to clipboard
copy.addEventListener('click', () => {
    if(!generatedPassword.value){
      alert("Generate password first!");
      return;
    }
    const textArea = document.createElement("textarea");
    textArea.value = generatedPassword.value;
    document.body.appendChild(textArea);
    textArea.select()
    document.execCommand('copy');
    document.body.removeChild(textArea);
    copied.style.display = "inline-block";
} )

//Event listeners
 upperCase.addEventListener('input',() =>{
    if(upperCase.checked === true){
      strengthCheck += 1;
    }else{
        strengthCheck -=1;
    }
    showColor();
 });
lowerCase.addEventListener('input', () => {
    if(lowerCase.checked === true){
        strengthCheck += 1;
      }else{
        strengthCheck -=1;
    } 
    showColor();
});
numbers.addEventListener('input', () =>{
    if(numbers.checked === true){
        strengthCheck += 1;
      }else{
        strengthCheck -=1;
    }
    showColor();
   });

specialChar.addEventListener('input', () =>{
    if(specialChar.checked === true){
        strengthCheck += 1;
      }else{
        strengthCheck -=1;
    }
    showColor();
   });
generateButton.addEventListener('click', () => {
    generatePassword()
});

//function for  strength check colors
function showColor(){
    switch(strengthCheck){
     case 1:
        box1.style.background = "#F64A4A";
        box2.style.background = "#18171F";
        box3.style.background = "#18171F";
        box4.style.background = "#18171F";
        strengthStages.innerText = "TOO WEAK!"
        break;
     case 2:
        box1.style.background = "#FB7C58";
        box2.style.background = "#FB7C58";
        box3.style.background = "#18171F";
        box4.style.background = "#18171F";
        strengthStages.innerText = "WEAK"
        break;
    case 3:
        box1.style.background = "#F8CD65";
        box2.style.background = "#F8CD65";
        box3.style.background = "#F8CD65";
        box4.style.background = "#18171F";
        strengthStages.innerText = "MEDIUM"
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