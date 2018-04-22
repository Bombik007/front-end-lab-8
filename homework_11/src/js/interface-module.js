const renderInterface = () => {
    const body = document.getElementById("app"),
        forBtns = document.createElement("div"),
        input = document.createElement("input"),
        funcSymbolsArray = ["+", "-", "x", "/", "="];

    input.id = "userInput";
    input.placeholder = "Enter numbers";
    forBtns.className = "flex-container";

    funcSymbolsArray.forEach(element => {
        const btn = document.createElement("button");
        btn.textContent = element;
        forBtns.appendChild(btn);
    })

    body.appendChild(forBtns);
    body.appendChild(input);
}

export default renderInterface;