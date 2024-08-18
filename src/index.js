import "./style.css"
import { paintHome } from "./home.js"
import { paintMenu } from "./menu.js"
import { paintTeam } from "./team.js"
import { paintContact } from "./about.js"
import "./images/DreaHeadshot.jpg"
import "./images/BuccoHeadshot.jpg"
import "./images/CharmaineHeadshot.jpg"
import "./images/FurioHeadshot.jpeg"

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
                })
                break;
            case "menu":
                button.addEventListener("click", () => {
                    unpaintContent();
                    paintMenu();
                    button.classList.add("selected");
                })
                break;
            case "team":
                button.addEventListener("click", () => {
                    unpaintContent();
                    paintTeam();
                    button.classList.add("selected");
                })
                break;
            case "contact":
                button.addEventListener("click", () => {
                    unpaintContent();
                    paintContact();
                    button.classList.add("selected");
                })
                break;
        }
    })
}

window.onload = function() {
    paintHome();
    addTabListeners();
}