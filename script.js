// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the navbar element
    const navbar = document.querySelector('.navbar');

    // Select all section elements
    const sections = document.querySelectorAll('section');

    // Listen for the scroll event
    window.addEventListener('scroll', () => {
        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Check each section's position and update the active link
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // If the current scroll position is within the section, update the active link
                const sectionId = section.id;
                updateActiveLink(sectionId);
            }
        });
    });

    // Function to update the active link
    function updateActiveLink(activeSectionId) {
        // Select all nav links
        const navLinks = document.querySelectorAll('.nav-links a');

        // Remove the 'active' class from all links
        navLinks.forEach((link) => {
            link.classList.remove('active');
        });

        // Add the 'active' class to the corresponding link
        const activeLink = document.querySelector(`.nav-links a[href="#${activeSectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Add a click event listener to each link
    navLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Get the target section's ID from the link's href attribute
            const targetSectionId = link.getAttribute('href').substring(1);

            // Scroll to the target section with smooth animation
            document.getElementById(targetSectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function updateActiveLink(activeSectionId) {
    // Select all nav links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Remove the 'active' class from all links
    navLinks.forEach((link) => {
        link.classList.remove('active');
    });

    // Add the 'active' class to the corresponding link
    const activeLink = document.querySelector(`.nav-links a[href="#${activeSectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
