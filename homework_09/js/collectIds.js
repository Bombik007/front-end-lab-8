const collectIds = arr => {
    let result = getFilteredArray(arr, function(movie) {
            return movie.rating > 3.0;
    });
    return result = getTransformedArray(result, function(movie) {
        return movie.id;
    });
}