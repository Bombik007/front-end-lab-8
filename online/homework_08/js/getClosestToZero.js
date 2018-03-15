function getClosestToZero() {
	let ind;
    let closest = Infinity;
    for (let i = 0; i < arguments.length; i++) {
		if (Math.abs(arguments[i]) < closest) {
			closest = Math.abs(arguments[i]);
			ind = i;
        }
    }
    return arguments[ind];
}