const getFilteredArray = (array, func) => {
    let result = [];
    forEach(arr, function(el) {
        if (func(el)) {
            result.push(el);
        }
    });
    return result;
}