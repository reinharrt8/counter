// Letters
const inputText = document.getElementById('inputText');
const letterCountSpan = document.getElementById('letterCount');

// Add input event listener to input text field
inputText.addEventListener('input', function() {
  const text = inputText.value;
  const letterCount = countLetters(text);
  letterCountSpan.textContent = letterCount;
});

// Count letters only string
// function countLetters(text) {
//   return text.replace(/[^a-zA-Z]/g, '').length;
// }
  
// Count letters all characters
function countLetters(text) {
  return text.length;
}

// Number
const numberSpan = document.getElementById('number');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let currentNumber = 0;

// Update display number
function updateNumber() {
  numberSpan.textContent = currentNumber;
}

incrementButton.addEventListener('click', function() {
  currentNumber++;
  updateNumber();
});

decrementButton.addEventListener('click', function() {
  currentNumber--;
  updateNumber();
});

updateNumber();