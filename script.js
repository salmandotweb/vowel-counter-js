const checkBtn = document.querySelector(".checkBtn");
const result = document.querySelector(".result");
const form = document.querySelector(".container");
const input = document.querySelector(".input");

checkBtn.addEventListener("click", countVowel);
form.addEventListener("submit", countVowel);

function countVowel(e) {
  e.preventDefault();

  let vowels = 0;
  let inputValue = input.value.toLowerCase();

  for (i = 0; i < inputValue.length; i++) {
    let letter = inputValue[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      vowels++;
    }
  }

  result.innerHTML = `${inputValue.toUpperCase()} has ${vowels} vowels.`;
  form.reset();
}
