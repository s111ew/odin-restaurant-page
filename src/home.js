export const paintHome = () => {
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