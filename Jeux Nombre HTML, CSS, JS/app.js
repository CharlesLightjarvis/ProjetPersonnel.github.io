/* /* /* console.log(typeof "Charles") */

/* renvoyer une lettre de son nom en random*/
/* const monNom = "CharlesLightJarvis"

console.log(monNom.charAt(Math.floor(Math.random() * monNom.length))) */

/* let joueur1 = "feuille";
let ordi = "ciseaux";

switch (joueur1) {
    case ordi:
        console.log("Egalité");
        break;

    case "pierre":
        if (ordi === "feuille") {
            console.log("ordi a gagné");
        } else {
            console.log("joueur1 a gagné");
        }
        break;

    case "feuille":
        if (ordi === "ciseaux") {
            console.log("Ordi a gagné");
        } else {
            console.log("joueur1 a gagné");
        }
        break;

    default:
        if (ordi === "pierre") {
            console.log("ordi a gagné");
 /*        } else {
            console.log("joueur1 a gagné");
        }
} */


/* let salut = prompt("Entrez votre Nom")
if (salut) {
    console.log(`Ton nom est ${salut}`)
} else {
    console.log("tu nas pas entré ton nom")
} */

/* const somme = (num1, num2) => {
    return num1 + num2;
}

console.log(somme(5, 5)) */


/* const ArrayA = [1, 2, 3, 4]
const ArrayB = [6, 7, 8, 9]

const ArrayC = ArrayA + ArrayB

console.log(ArrayC) */

// const h2 = document.querySelector("nav h2");

/* function doSomething() {
    alert("fait quelque chose");
} */

/* h2.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.textContent = "Js est compliqué"
}); */

// const nom = document.getElementById("name");
// const button = document.getElementById("btn");
// const nom2 = document.getElementById("name2");


// button.addEventListener("click", () => {
//     event.preventDefault();
//     const inputValue = nom.value.toLowerCase();
//     nom2.value = inputValue.toUpperCase();
// })

// recuperez les elements du DOM

const input = document.querySelector("input");
const p1 = document.querySelector(".p1");
const button = document.querySelector("button");
const chanceRestante = document.querySelector(".chance");

// chiffre généré par hasard pour le trouver dans le jeu

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);
let chance = 10;

//evenement pour le button check

button.addEventListener("click", () => {
    //on decremente le nombre de chance
    chance--;
    // on recupere la valuer de l'input
    let inputValue = parseInt(input.value);
    // si l'input est egal au chiffre random on change le texte et on disable l'input
    if (inputValue === randomNum) {

        [p1.textContent, input.disabled] = ["Felicitations", true];
        [button.textContent, p1.style.color] = ["Rejouer?", "red"];
        button.addEventListener("click", () => {
            window.location.reload();
        })
        // on regarde si le nombre entré est superieur et inferieur a 100
    } else if (inputValue > randomNum && inputValue < 100) {

        [p1.textContent, chanceRestante.textContent] = ["Votre Nombre est trop grand", chance];
        p1.style.color = "red";

        // on regarde si le nombre entré est inferieur au random et sup a 0

    } else if (inputValue < randomNum && inputValue > 0) {

        [p1.textContent, chanceRestante.textContent] = ["Votre Nombre est trop petit", chance];
        p1.style.color = "blue";

        // on regarde si le nombre entré est inferieur a 0 et sup a 100
    } else if (inputValue < 0 || inputValue > 100) {
        [p1.textContent, p1.style.color, chanceRestante.textContent] = ["Entrez un nombre Positif et inferieur a 100", "green", chance];
    }
    // si la chance est egale a 0
    if (chance === 0) {
        [button.textContent, input.disabled] = ["Rejouer?", "true"];
        [p1.textContent, p1.style.color] = ["Vous avez Perdu", "purple"];
    }

    if (chance < 0) {
        window.location.reload();
    }
}
)