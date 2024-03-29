// Part 1
console.log("Hello World");

// Part 2
// Function to set section height
function setSectionHeight() {
    // create variables
    var image = document.getElementById('indeximg');
    var section = document.getElementById('index');

    section.style.height = image.clientHeight + 'px';
}

// Call the function initially
setSectionHeight();

// Add event listener for window resize
window.addEventListener('resize', setSectionHeight);
