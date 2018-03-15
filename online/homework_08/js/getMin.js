function getMin() {
    let result = Infinity;
    for (let i = 0; i <= arguments.length; i++) {
        result = (arguments[i] < result) ? arguments[i] : result;
    }
    return result;
}