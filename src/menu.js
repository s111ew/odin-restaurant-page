function paintMenu() {
    const mainContent = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    const menuHeader = document.createElement("h2");
    menuHeader.textContent = "Check out our tasty dishes...";
    menuContainer.appendChild(menuHeader);

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    function createMenuItem(id, emoji, name) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.id = id;

        const menuItemImage = document.createElement("span");
        menuItemImage.textContent = emoji;

        const menuItemSpan = document.createElement("span");
        menuItemSpan.textContent = name;

        menuItem.appendChild(menuItemImage);
        menuItem.appendChild(menuItemSpan);
        return menuItem;
    }

    const menuItems = [
        { id: "menu-item-1", emoji: "🥗", name: "Antipast'" },
        { id: "menu-item-2", emoji: "🫓", name: "Bruschett'" },
        { id: "menu-item-3", emoji: "🧆", name: "Arancin'" },
        { id: "menu-item-4", emoji: "🥩", name: "Steak & Fries" },
        { id: "menu-item-5", emoji: "🥘", name: "Pollo Marsal'" },
        { id: "menu-item-6", emoji: "🍝", name: "Spaghetti & Gravy" },
    ];

    menuItems.forEach(item => {
        const menuItem = createMenuItem(item.id, item.emoji, item.name);
        menuGrid.appendChild(menuItem);
    });

    menuContainer.appendChild(menuGrid);
    mainContent.appendChild(menuContainer);
}