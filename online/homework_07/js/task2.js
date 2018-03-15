let playGame = confirm("Do you want to play a game?");
let nextRound = true;
let attempt = 3;
let range = 5;
let totalPrize = 0;
let possiblePrize = 10;
let reservedPrize;


while (playGame && nextRound) {
    let randomValue = Math.floor(Math.random() * (range + 1));
    reservedPrize = possiblePrize;
    while (attempt) {
        let userInput = Number(prompt(`Enter a number from 0 to ${range}\n
                        Attempts left: ${attempt}\n
                        Total prize: ${totalPrize}\n
                        Possible prize on current attempt: ${possiblePrize}`));
        if (userInput === randomValue) {
                attempt = 3;
                totalPrize += possiblePrize;
                possiblePrize = reservedPrize * 3;
                range *= 2;
                nextRound = confirm("Do you want to continue?");
                break;
        } else {
            attempt -= 1;
            possiblePrize = Math.floor(possiblePrize/2);
        }
    }

    if (!nextRound || !attempt) {
        console.log( `Thank you for the game. Your prize is ${totalPrize}`);
        nextRound = confirm("Do you want to again?");
        totalPrize = 0;
        attempt = 3;
        possiblePrize = 10;
        continue;
    }
}

if (!playGame) {
    console.log("You did not become a millionaire`");
}