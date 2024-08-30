document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const optionsContainer = document.querySelector('.bi-two-options');

    // Function to update arrow visibility
    function updateArrows() {
        const isAtStart = optionsContainer.scrollLeft === 1;
        const isAtEnd = optionsContainer.scrollWidth <= optionsContainer.clientWidth + optionsContainer.scrollLeft;

        leftArrow.style.display = isAtStart ? 'none' : 'flex';
        rightArrow.style.display = isAtEnd ? 'none' : 'flex';
    }

    // Scroll to the left
    leftArrow.addEventListener('click', () => {
        optionsContainer.scrollBy({ left: -200, behavior: 'smooth' });
        setTimeout(updateArrows, 300); // Update arrows after scrolling
    });

    // Scroll to the right
    rightArrow.addEventListener('click', () => {
        optionsContainer.scrollBy({ left: 200, behavior: 'smooth' });
        setTimeout(updateArrows, 300); // Update arrows after scrolling
    });

    // Check arrows visibility on window resize and load
    window.addEventListener('resize', updateArrows);
    updateArrows(); // Initial check
});