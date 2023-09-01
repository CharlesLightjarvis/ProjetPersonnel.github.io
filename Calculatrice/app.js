const input = document.querySelector("input");
const buttons = document.querySelectorAll("button")

let output = "";

const calculer = (button) => {
    const value = button.textContent;
    if (value === "=" && output === "") {
        // input.value = ""; 
    } else if (value === "=" && output) {
        const resultat = eval(output.replace("%", "/100"));
        input.value = resultat;
        output = resultat;
    } else if (value === "AC") {
        [output, input.value] = ["", ""];
    } else if (value === "DEL") {
        output = output.slice(0, -1);
        input.value = output;
    }
    else {
        output += value;
        input.value = output;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => calculer(button))
    // const value = button.textContent;
    // if (value === "=" && output === "") {
    //     // input.value = ""; 
    // } else if (value === "=" && output) {
    //     const resultat = eval(output.replace("%", "/100"));
    //     input.value = resultat;
    //     output = resultat;
    // } else if (value === "AC") {
    //     [output, input.value] = ["", ""];
    // } else if (value === "DEL") {
    //     output = output.slice(0, -1);
    //     input.value = output;
    // }
    // else {
    //     output += value;
    //     input.value = output;
    // }
})