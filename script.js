/*
  script.js
  This file contains the JavaScript for the portfolio page.
  Its main function is to handle the toggling of the mobile navigation menu.
*/

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get the button and the menu elements from the DOM
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if both elements exist to avoid errors
    if (mobileMenuButton && mobileMenu) {
        // Add a click event listener to the menu button
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the menu to show/hide it
            mobileMenu.classList.toggle('hidden');
        });

        // Get all the links within the mobile menu
        const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
        
        // Loop through each link
        for (let link of mobileMenuLinks) {
            // Add a click event listener to each link
            link.addEventListener('click', () => {
                // When a link is clicked, hide the menu
                mobileMenu.classList.add('hidden');
            });
        }
    }
});
