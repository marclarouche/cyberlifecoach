// scripts.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Select the menu icon and navigation links
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
  
    // Ensure both elements exist to avoid errors
    if (menuIcon && navLinks) {
      // Add a click event listener to the menu icon
      menuIcon.addEventListener('click', function() {
        // Toggle the 'open' class on the navigation links
        navLinks.classList.toggle('open');
        
        // Toggle the 'active' class on the menu icon for animation
        menuIcon.classList.toggle('active');
      });
    }
  });
  