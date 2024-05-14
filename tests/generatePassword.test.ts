import { generatePassword } from '../src/scripts/script';

describe('generatePassword', () => {
    beforeAll(() => {
      document.body.innerHTML = `
        <button id="copy">Copy</button>
        <input id="generatedPassword" type="text" value="">
        <input id="upperLetter" type="checkbox">
        <input id="lowerLetter" type="checkbox">
        <input id="numeral" type="checkbox">
        <input id="symbols" type="checkbox">
        <input class="generated-password">
        <input id="slider" type="range" value="8">
      `;
      const copyButton = document.createElement('button');
      copyButton.id = 'copy';
    });
  
    test('should generate a password with the correct length and character types', () => {
      const copy =  document.querySelector(".copy") as HTMLImageElement;
      const upperCase = document.getElementById('upperLetter') as HTMLInputElement;
      const lowerCase = document.getElementById('lowerLetter') as HTMLInputElement;
      const numbers = document.getElementById('numeral') as HTMLInputElement;
      const specialChar = document.getElementById('symbols') as HTMLInputElement;
      const generatedPassword = document.querySelector('.generated-password') as HTMLInputElement;
      const slider = document.getElementById('slider') as HTMLInputElement;

      
      upperCase.checked = true;
      lowerCase.checked = true;
      numbers.checked = true;
      specialChar.checked = true;
      slider.value = '10';  
      generatePassword();
  
      expect(generatedPassword.value.length).toBe(10);
      expect(generatedPassword.value).toMatch(/[A-Z]/);
      expect(generatedPassword.value).toMatch(new RegExp('[a-z]'));
      expect(generatedPassword.value).toMatch(new RegExp('[0-9]'));
      expect(generatedPassword.value).toMatch(new RegExp('[$#&@*()<>?:~[]|]'));
    });
  });