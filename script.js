// js/script.js – One tiny file that powers ALL 7 pages

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Find ALL joke buttons on the page (works on every page automatically)
  const jokeButtons = document.querySelectorAll(".joke-btn");

  // Add click listener to every joke button
  jokeButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Get the joke text from data-joke attribute
      const joke = this.getAttribute("data-joke");

      // Show the cute alert
      alert("Inside joke: " + joke + " ♡");
    });
  });

  // Optional: Add a little sparkle when clicking the Next button
  const nextBtn = document.querySelector(".next-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => this.style.transform = "", 150);
    });
  }
});