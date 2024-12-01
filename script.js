// Get elements
const galleryItems = document.querySelectorAll('.gallery-item img');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const popupImage = popupContent.querySelector('img');
const closeBtn = document.querySelector('.popup .close');
const prevBtn = document.querySelector('.popup .prev');
const nextBtn = document.querySelector('.popup .next');

// Collect all the images from the gallery
const images = Array.from(galleryItems).map(item => item.src);
let currentIndex = 0;

// Show the popup when an image is clicked
galleryItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default image behavior
        currentIndex = index;
        popupImage.src = images[currentIndex]; // Set the popup image to the clicked image
        popup.style.display = 'flex'; // Show the popup
        setTimeout(() => popup.style.opacity = 1, 10); // Add fade-in effect
    });
});

// Close the popup when clicking the close button
closeBtn.addEventListener('click', () => {
    popup.style.opacity = 0; // Fade-out the popup
    setTimeout(() => popup.style.display = 'none', 300); // Hide the popup after fade-out
});

// Close the popup when clicking outside the image area
popup.addEventListener('click', (e) => {
    if (e.target === popup) { // Close only if the background is clicked
        closeBtn.click();
    }
});

// Navigate to the previous image
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    popupImage.src = images[currentIndex]; // Update the image in the popup
});

// Navigate to the next image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    popupImage.src = images[currentIndex]; // Update the image in the popup
});
