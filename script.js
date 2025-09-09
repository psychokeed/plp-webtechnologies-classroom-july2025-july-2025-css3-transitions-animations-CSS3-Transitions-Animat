// 📚 Part 2: Functions, Scope & Return Values

// Global variable
let animationCount = 0;

// Function with parameters + return
function calculateArea(width, height) {
  return width * height;
}

// Function to log area calculation
function logBoxArea() {
  let localWidth = 100;
  let localHeight = 50;
  let area = calculateArea(localWidth, localHeight);
  console.log(`Box area is: ${area} (Local Scope Used)`);
}

// Call function to demonstrate scope
logBoxArea();

// 📚 Part 3: Combining CSS + JS

const box = document.querySelector('.box');
const animateBtn = document.getElementById('animateBtn');
const popupBtn = document.getElementById('popupBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Reusable function to toggle animation
function toggleAnimation(element, className) {
  element.classList.toggle(className);
  animationCount++;
  console.log(`Animation triggered ${animationCount} times`);
}

// Trigger box animation
animateBtn.addEventListener('click', () => {
  toggleAnimation(box, 'animate');
});

// Show popup
popupBtn.addEventListener('click', () => {
  popup.classList.add('show');
});

// Close popup
closePopup.addEventListener('click', () => {
  popup.classList.remove('show');
});
