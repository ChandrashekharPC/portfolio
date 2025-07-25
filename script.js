/*
  script.js
  This file contains all the JavaScript for the portfolio page.
  Its functions are to handle the mobile menu and the resume modal.
*/

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Logic ---
    // Selects the necessary elements for the mobile menu functionality.
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Checks if the menu elements exist to prevent errors.
    if (mobileMenuButton && mobileMenu) {
        // Adds a click listener to the hamburger button to toggle the menu's visibility.
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Gets all links within the mobile menu to add click listeners.
        const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
        // Loops through each link in the mobile menu.
        for (let link of mobileMenuLinks) {
            // Adds a listener so that when a menu link is clicked, the menu closes.
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        }
    }

    // --- Resume Modal Logic ---
    // Selects the necessary elements for the resume modal.
    const viewCvButton = document.getElementById('view-cv-button');
    const resumeModal = document.getElementById('resume-modal');
    const closeResumeButton = document.getElementById('close-resume-button');

    // Checks if the modal elements exist to prevent errors.
    if (viewCvButton && resumeModal && closeResumeButton) {
        // Adds a listener to the "View CV" button to display the modal.
        viewCvButton.addEventListener('click', () => {
            resumeModal.classList.remove('hidden');
        });

        // Adds a listener to the close button inside the modal to hide it.
        closeResumeButton.addEventListener('click', () => {
            resumeModal.classList.add('hidden');
        });

        // Adds a listener to the modal's dark background overlay.
        resumeModal.addEventListener('click', (event) => {
            // Hides the modal only if the click is on the overlay itself, not its content.
            if (event.target === resumeModal) {
                resumeModal.classList.add('hidden');
            }
        });
    }
});
