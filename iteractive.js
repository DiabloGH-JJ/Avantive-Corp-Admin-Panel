document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('[id^="num"]');
    const submitButton = document.getElementById('submit-button');
    const ratingCard = document.getElementById('iterative-container');
    const approvalCard = document.getElementById('rating-approval');
    const selectedRatingText = document.getElementById('selected-rating');
    let selectedRating = 0;

    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            ratingButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedRating = parseInt(button.textContent.trim());
        });
    });

    submitButton.addEventListener('click', () => {
        if (selectedRating > 0) {
            ratingCard.style.display = 'none';
            approvalCard.style.display = 'block';
            selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
        } else {
            alert('Please select a rating');
        }
    });

    // Initially hide the approval card
    approvalCard.style.display = 'none';
});