window.onload = function() {
    const searchBar = document.getElementById('search-bar');
    searchBar.focus();

    searchBar.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const query = e.target.value;
            if (query) {
                window.location.href = `https://search.brave.com/search?q=${encodeURIComponent(query)}`;
            }
        }
    });
};
