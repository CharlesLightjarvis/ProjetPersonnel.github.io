const input = document.querySelector("input")
const buttons = document.querySelectorAll("button")

let output = ""


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonContent = button.textContent;
        if (output === "" && buttonContent === "=") {

        } else if (buttonContent === "AC") {
            [output, input.value] = ["", ""];
        } else if (buttonContent === "DEL") {
            [output, input.value] = [output.slice(0, -1), output];
        } else if (output && buttonContent === "=") {
            const resultat = eval(output.replace("%", "/100"));
            input.value = resultat;
            output = resultat;
        } else {
            output += buttonContent;
            input.value = output;
        }
    })
})