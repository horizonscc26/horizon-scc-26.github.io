const trackCards = document.querySelectorAll(".track-card");

trackCards.forEach(card => {

    const button = card.querySelector(".track-toggle");

    button.addEventListener("click", () => {

        const isOpen = card.classList.contains("open");

        // Close all other tracks
        trackCards.forEach(otherCard => {
            otherCard.classList.remove("open");
        });

        // Open the clicked track
        if (!isOpen) {
            card.classList.add("open");
        }

    });

});