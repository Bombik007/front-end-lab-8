import Calculate from "./calculating-module";
import renderInterface from "./interface-module";
import style from "../styles/styles.css";

renderInterface();

const btnsArray = document.getElementsByTagName("button"),
    userInput = document.getElementById("userInput"),
    value = userInput.value

const equals = () => {



    
    let valueArr = value.split(" ");
    if (valueArr[1] == "+") value = Calculate.adding(Number(valueArr[0]), Number(valueArr[2]));
    if (valueArr[1] == "-") value = Calculate.diminution(Number(valueArr[0]), Number(valueArr[2]));
    if (valueArr[1] == "*") value = Calculate.multiply(Number(valueArr[0]), Number(valueArr[2]));
    if (valueArr[1] == "/") value = Calculate.division(Number(valueArr[0]), Number(valueArr[2]));
}

for (let element of btnsArray) {
    element.addEventListener("click", (e) => {
        if (e.target.textContent == "=") equals();
        value = `${value} ${e.target.textContent} `;
    })
}