document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const backToTopButton = document.getElementById('back-to-top');
const sections = document.querySelectorAll('section');

// Create the IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Fade-in when section is visible
        }
    });
}, {
    threshold: 0.1
});

// Start observing all sections
sections.forEach(section => {
    section.classList.add('fade-in'); // Add initial fade-in class for the effect
    observer.observe(section);        // Observe each section
});

// Show or hide the back-to-top button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block"; // Show the button when scrolled 200px down
    } else {
        backToTopButton.style.display = "none"; // Hide when near the top
    }
};

// When the back-to-top button is clicked
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
    });

    // Reset sections for fade-in when scrolling down again
    sections.forEach(section => {
        section.classList.remove('visible'); // Remove the 'visible' class from all sections
    });

    // Disconnect and re-observe sections after scrolling to the top
    observer.disconnect(); // Temporarily stop observing
    setTimeout(() => {
        sections.forEach(section => {
            observer.observe(section); // Re-observe sections after scroll resets
        });
    }, 500); // Slight delay to allow the page to scroll to the top
});

// Modal related functionality

// Get the modal
var modal = document.getElementById("shareModal");

// Get the button that opens the modal
var btn = document.getElementById("shareButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block"; // Show modal
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none"; // Hide modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide modal
    }
}
