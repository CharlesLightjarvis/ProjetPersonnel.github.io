const input = document.querySelector("input")
const liste = document.querySelector(".li-container")
const button = document.querySelector("button")



const ajouter = () => {
    const li = document.createElement("li");
    if (input.value === "") {
        alert("Vous devez ecrire quelque chose!!!")
    } else {
        li.innerHTML = input.value;
        liste.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        input.value = '';
        stocker();
    }
}

const supprimer = (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check")
        stocker();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        stocker();
    }
}
// lorsque on appuie sur le bouton entrée
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        ajouter();
        stocker();
    }
})

button.addEventListener("click", ajouter)

liste.addEventListener("click", supprimer)

// pour stocker dans le navigateur
const stocker = () => {
    localStorage.setItem("data", liste.innerHTML)
}

const showStocker = () => {
    liste.innerHTML = localStorage.getItem("data")
}

showStocker();