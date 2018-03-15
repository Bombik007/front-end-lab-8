function converter(eu, usd) {
    let [dollarToUAH, euToUAH, euToUSD] = [
        27.12 * usd,
        33.23 * eu,
        (27.12/33.23).toFixed(2)
    ];

    if (!(dollarToUAH ^ 0 === dollarToUAH)){
        dollarToUAH.toFixed(2);
    }
    if (!(euToUAH ^ 0 === euToUAH)){
        euToUAH.toFixed(2);
    }

    return `${eu} euros are equal ${euToUAH} UAH, ${usd} dollars are equal ${dollarToUAH} UAH one euro is equal ${euToUSD} dollars.`;
}

let euros = prompt("Enter amount of euros");
let dollars = prompt("Enter amount of dollars");
console.log(converter(euros, dollars));