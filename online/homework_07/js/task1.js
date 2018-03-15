let naturalNumber = +(prompt("Enter a natural number"));
let fragmentCount = 1;
let fragment = "[~]";

for (let i = 0; i < naturalNumber; i++) {
    let amountOfSpaces = (naturalNumber - 1 - i) * 3;
    console.log(" ".repeat(amountOfSpaces) + fragment.repeat(fragmentCount));
    fragmentCount += 2;
}