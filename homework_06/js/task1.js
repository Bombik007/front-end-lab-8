function triangleTpSqr(a, b, c) {
    [a, b, c] = [Number(a), Number(b), Number(c)];
    if ((a > 0) && (b > 0) && (c > 0)) {
        let type;
        let p = a + b + c;
        let square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        
        if (!((square ^ 0) === square)) {
            square = square.toFixed(2);
        }

        if (((a*a) + (b*b) == (c*c)) ||
                ((b*b) + (c*c) == (a*a)) ||
                ((c*c) + (a*a) ==(b*b))) {
            type = "right";
        } else if (a == b && b == c) {
            type = "equilateral";
        } else if ((a == b) || (b == c) || (a == c)) {
            type = "isosceles";
        } else {
            type = "scalene";
        }

        return `Type of triangle is ${type} triangle and square is ${square}`;
            
    } else {
        return "Incorrect data";
    }
}

let [value1, value2, value3] = [
    prompt("Enter first int"),
    prompt("Enter second int"),
    prompt("Enter third int")
];
console.log(triangleTpSqr(value1, value2, value3));