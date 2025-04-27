const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});


const searchInput = document.getElementById('search-input');
const placeholderTexts = [
  "Search Areas......",
  "Search Houses....",
  "Search Lands.....",
  "Find your dream home...",
  "Discover new projects..."
];

let currentText = "";
let currentIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let speed = 100;

function typePlaceholder() {
  if (currentIndex >= placeholderTexts.length) {
    currentIndex = 0;
  }

  currentText = placeholderTexts[currentIndex];
  
  if (isDeleting) {
    letterIndex--;
    searchInput.setAttribute("placeholder", currentText.substring(0, letterIndex));
  } else {
    letterIndex++;
    searchInput.setAttribute("placeholder", currentText.substring(0, letterIndex));
  }

  if (!isDeleting && letterIndex === currentText.length) {
    isDeleting = true;
    speed = 100; 
    setTimeout(typePlaceholder, 1000); // Pause before deleting
    return;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    currentIndex++;
  }

  setTimeout(typePlaceholder, speed);
}

// Start typing when page loads
typePlaceholder();



 
 
 
