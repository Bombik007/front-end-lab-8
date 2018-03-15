const getTransformedArray = (arr, func) => {
    let result =[];
    forEach(arr, function(el) {
        result.push(func(el))
    });
    return result;
}
