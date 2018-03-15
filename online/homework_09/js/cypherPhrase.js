const cypherPhrase = (obj, str) => {
    let arrStr = str.split("");
    return getTransformedArray(arrStr, function (letter) {
        return letter in obj ? obj[letter] : letter;
    }).join('');
};