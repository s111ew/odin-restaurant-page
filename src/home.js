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

    const specialsContainer = document.createElement("div");
    specialsContainer.classList.add("specials-container");

    const specialsTitle = document.createElement("h3")
    specialsTitle.textContent = "This week's specials:"
    specialsContainer.appendChild(specialsTitle);

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("home-header-container");

    function createSpecial(name, description) {

        const specialItem = document.createElement("span");
        specialItem.classList.add("specials-dish");
        specialItem.textContent = name;

        const specialItemDesc = document.createElement("span");
        specialItemDesc.classList.add("specials-desc");
        specialItemDesc.textContent = description;

        specialsContainer.appendChild(specialItem);
        specialsContainer.appendChild(specialItemDesc);
    }

    const specials = [
        { name: "Zuppa di Mussels", description: "Fresh mussels steamed in a garlic and white wine broth with a touch of tomato" },
        { name: "Fried Zucchini Flowers", description: "Delicate zucchini flowers stuffed with ricotta, lightly battered and fried" },
        { name: "Tiramisu", description: "Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream" }
    ]

    specials.forEach(special => {
        createSpecial(special.name, special.description);
    })

    headerContainer.appendChild(homeHeader);
    headerContainer.appendChild(homeHeaderSpan);

    homeContainer.appendChild(headerContainer);
    homeContainer.appendChild(homePara);
    homeContainer.appendChild(specialsContainer)
    
    mainContent.appendChild(homeContainer);
}