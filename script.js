/*
  script.js
  This file contains the JavaScript for the portfolio page.
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
        for (let link of mobileMenuLinks) {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        }
    }

    // --- Resume Modal Logic ---
    const viewCvButton = document.getElementById('view-cv-button');
    const resumeModal = document.getElementById('resume-modal');
    const closeResumeButton = document.getElementById('close-resume-button');

    if (viewCvButton && resumeModal && closeResumeButton) {
        // Show modal when "View CV" is clicked
        viewCvButton.addEventListener('click', () => {
            resumeModal.classList.remove('hidden');
        });

        // Hide modal when close button is clicked
        closeResumeButton.addEventListener('click', () => {
            resumeModal.classList.add('hidden');
        });

        // Hide modal when clicking on the overlay (the dark background)
        resumeModal.addEventListener('click', (event) => {
            // Check if the clicked element is the modal overlay itself, not its content
            if (event.target === resumeModal) {
                resumeModal.classList.add('hidden');
            }
        });
    }
});

