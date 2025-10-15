function initializeGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const mainDisplay = document.getElementById('main-display');
    const mainText = document.getElementById('main-text');

    // Add tabindex to all thumbnails
    thumbnails.forEach((img, index) => {
        img.setAttribute('tabindex', 0);

        // Mouse events
        img.addEventListener('mouseover', () => {
            mainDisplay.style.backgroundImage = `url('${img.src}')`;
            mainText.textContent = img.alt;
        });
        img.addEventListener('mouseleave', () => {
            mainDisplay.style.backgroundImage = '';
            mainText.textContent = 'Hover or focus on a photo to see it here!';
        });

        // Keyboard events
        img.addEventListener('focus', () => {
            mainDisplay.style.backgroundImage = `url('${img.src}')`;
            mainText.textContent = img.alt;
        });
        img.addEventListener('blur', () => {
            mainDisplay.style.backgroundImage = '';
            mainText.textContent = 'Hover or focus on a photo to see it here!';
        });
    });

    console.log("Gallery initialized with tabindex and event listeners!");
}
