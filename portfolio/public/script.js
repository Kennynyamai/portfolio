// Function to slide up elements after a delay
function slideUpAfterDelay() {
    // Select the image and the text elements
    const imageElement = document.querySelector('.appear-image');
    const textElements = document.querySelectorAll('#trigger-section .appear');

    // Show the image immediately
    console.log('Triggering image appearance:', imageElement);
    imageElement.classList.add('animate-slide-up'); // Ensure the image has the animation class

    // Set a timeout for the text elements to appear after 1 second
    setTimeout(() => {
        textElements.forEach(element => {
            console.log('Triggering slide up for element:', element);
            element.classList.remove('hidden-state');
            element.classList.add('animate-slide-up');
        });
    }, 1000); // Delay of 1000 milliseconds (1 second)
}

// Using Intersection Observer API to trigger when sections come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            slideUpAfterDelay();
            observer.unobserve(entry.target); // Unobserve after first trigger to prevent retriggering
        }
    });
});

// Set up observer for the trigger section
const triggerSection = document.querySelector('#trigger-section');
console.log('Setting up observer for:', triggerSection);
observer.observe(triggerSection); // Observe the trigger section

// Function to toggle dropdown visibility with a delay
function toggleDropdown(dropdownButton) {
    const dropdownMenu = dropdownButton.nextElementSibling; // Get the associated dropdown menu
    const svgIcon = dropdownButton.querySelector(".dropdown-icon");

    // Set a delay for toggling the dropdown visibility
    setTimeout(() => {
        // Toggle visibility of the dropdown
        dropdownMenu.classList.toggle("hidden");

        // Rotate the SVG icon
        svgIcon.classList.toggle("rotate-90");
    }, 300); // Adjust the delay time as needed (300 ms in this case)
}

// Add event listeners to all dropdown buttons
document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener("click", function () {
        toggleDropdown(button);
    });
});

// Close dropdown if the user clicks outside of it
window.addEventListener('click', function (event) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const dropdownButton = dropdown.querySelector(".dropdown-button");
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        const svgIcon = dropdownButton.querySelector(".dropdown-icon");

        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add("hidden");
            svgIcon.classList.remove("rotate-90"); // Reset icon rotation
        }
    });
});
