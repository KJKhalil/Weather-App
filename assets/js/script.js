var apiKey = "2ddac0a957bca3b8b3a072c034664ad3"
var previousSearches = [];

var searchHistoryList = function(searchedCity) {
    $('previous-search:contains("' + searchedCity + '")').remove();

    var searchHistory = $('<p>');
    searchHistory.addClass('previous-search');
    searchHistory.text(searchedCity);

    var searchHistoryContainer = $('<div>');
    searchHistoryContainer.addClass('previous-search-container');

    searchHistoryContainer.append(searchHistory);

    var searchHistoryContainerEl = $('#search-history-list');
    searchHistoryContainerEl.append(searchHistoryContainer);

    if (previousSearches.length > 0) {
        var savedSearchHistory = localStorage.getItem('previousSearches');
        previousSearches = JSON.parse(savedSearchHistory);
    }

    previousSearches.push(searchedCity);
    localStorage.setItem('previousSearches', JSON.stringify(previousSearches));

    $('#search-input').val("");
};

var getSearchHistory = function() {
    var storedSearchHistory = localStorage.getItem('previousSearches');

    if (!storedSearchHistory) {
        return false;
    }

    storedSearchHistory = JSON.parse(storedSearchHistory);

    for (var i = 0; i < storedSearchHistory.length; i++) {
        searchHistoryList(storedSearchHistory[i]);
    }
};