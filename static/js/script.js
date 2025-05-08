document.addEventListener('DOMContentLoaded', () => {
    const genreFilter = document.getElementById('genre-filter');
    const movieCards = document.querySelectorAll('.movie-card');

    genreFilter.addEventListener('change', () => {
        const selectedGenre = genreFilter.value;

        movieCards.forEach(card => {
            const cardGenre = card.getAttribute('data-genre');
            if (selectedGenre === 'all' || cardGenre === selectedGenre) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});