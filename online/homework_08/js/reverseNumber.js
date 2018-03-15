const reverseNumber = (num) => {
    let result = parseInt(num.toString().split("").reverse().join(""));
        result = (num < 0) ? (result * -1) : result;
        return result;
}