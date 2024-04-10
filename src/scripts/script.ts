


function moveSlide(){
    const slider = document.querySelector(".range-field") as HTMLInputElement;
    slider.addEventListener('input', (event)=>{
        const inputValue = (event.target as HTMLInputElement).value;

        const rangeValue = (Number(inputValue)/20)*100;
        slider.style.backgroundSize = `${rangeValue}% 100%`;})
    
}

moveSlide();



const upperCase = document.getElementById("upperLetter") as HTMLInputElement;
const lowerCase = document.getElementById("lowerLetter") as HTMLInputElement;
const numbers = document.getElementById("numeral") as HTMLInputElement;
const specialChar = document.getElementById("symbols") as HTMLInputElement;

function checkStrength(event:Event){
    const input = event.target as HTMLInputElement;
    console.log(input.checked? 'hello' : 'hi');
}

upperCase.addEventListener('input', checkStrength);
lowerCase.addEventListener('input', checkStrength);
numbers.addEventListener('input', checkStrength);
specialChar.addEventListener('input', checkStrength);


//function for generating password
// function for copying to clipboard
