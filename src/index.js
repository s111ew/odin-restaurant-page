import "./style.css"
import { paintMenu } from "./menu.js"
import { paintTeam } from "./team.js"
// import paintTeam from "./team.js"
// import paintAbout from "./about.js"

//window on load => paint Home page, home page tab = focussed,
//                  add event listeners to tabs,

//on tab click => unpaint #content, paint content related to tab

function paintHome() {
    const mainContent = document.querySelector("#content");
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    const homeHeader = document.createElement("h2");
    homeHeader.textContent = "Welcome to Nuovo Vesuvio!";

    const homeHeaderSpan = document.createElement("h3");
    homeHeaderSpan.textContent = "(formerly Vesuvio)";

    const homePara = document.createElement("p");
    homePara.textContent = `Your go-to spot for
          authentic Italian cuisine in North Jersey 🇮🇹. Led by Head Chef Artie
          Bucco 👨‍🍳, we have been serving classic Italian dishes with a modern twist
          since 1999. Whether it's homemade pasta 🍝, fresh seafood 🍤, or a juicy
          steak 🥩, Nuovo Vesuvio offers a true taste of Italy in a cozy, welcoming
          setting. Buon appetito! 🍽️`;

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("home-header-container")

    headerContainer.appendChild(homeHeader);
    headerContainer.appendChild(homeHeaderSpan);

    homeContainer.appendChild(headerContainer);
    homeContainer.appendChild(homePara);
    
    mainContent.appendChild(homeContainer);
}

function unpaintContent() {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = '';
}

// function addTabListeners() {
//     const homeButton = document.querySelector('#home');
//     const menuButton = document.querySelector('#menu');
//     const teamButton = document.querySelector('#team');
//     const aboutButton = document.querySelector('#about');

// }

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
            case "about":
                button.addEventListener("click", () => {
                    unpaintContent();
                    paintAbout();
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