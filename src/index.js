import "./style.css"
import { paintHome } from "./home.js"
import { paintMenu } from "./menu.js"
import { paintTeam } from "./team.js"
import { paintContact } from "./about.js"

function unpaintContent() {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = '';
}

function addTabListeners() {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        switch (button.id) {
            case "home":
                button.addEventListener("click", () => {
                    unpaintContent();
                    paintHome();
                    button.classList.add("selected");
                    focusButtons(button.id);
                })
                break;
            case "menu":
                button.addEventListener("click", () => {
                    unpaintContent();
                    paintMenu();
                    button.classList.add("selected");
                    focusButtons(button.id);
                })
                break;
            case "team":
                button.addEventListener("click", () => {
                    unpaintContent();
                    paintTeam();
                    button.classList.add("selected");
                    focusButtons(button.id);
                })
                break;
            case "contact":
                button.addEventListener("click", () => {
                    unpaintContent();
                    paintContact();
                    button.classList.add("selected");
                    focusButtons(button.id);
                })
                break;
        }
    })
}

function focusButtons (id) {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        if (button.classList.contains("selected")) {
            button.classList.remove("selected")
        }
        if (button.id === id) {
            button.classList.add("selected");
        }
    })
}

window.onload = function() {
    paintHome();
    addTabListeners();
}