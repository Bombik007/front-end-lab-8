const renderInterface = () => {
    const main = document.createElement("div"),
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

    main.appendChild(input);
    main.appendChild(forBtns);
    document.getElementById("app").appendChild(main);
}

export default renderInterface;