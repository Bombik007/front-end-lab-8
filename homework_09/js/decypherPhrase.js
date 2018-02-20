const decypherPhrase = (obj, str) => {
    let decypher = new Object();
    for (let el in obj) {
        decypher[obj[el]] = property;
    }
    return cypherPhrase(decypher, str);
}