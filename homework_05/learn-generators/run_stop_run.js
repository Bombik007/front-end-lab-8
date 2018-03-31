function *range(from, to) {
    let i = from;
    for (i; i <= to; i++) {
        yield i;
    }
}


for (let r of range(5, 10)) {
    console.log(r);
}