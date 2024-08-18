export const paintTeam = () => {
    const mainContent = document.querySelector("#content");

    const teamContainer = document.createElement("div");
    teamContainer.classList.add("team-container");
    const teamHeader = document.createElement("h2");
    teamHeader.textContent = "Meet our friendly team:";
    teamContainer.appendChild(teamHeader);

    const teamGrid = document.createElement("div");
    teamGrid.classList.add("team-grid");

    function createTeamItem(image, name, job) {
        const teamItem = document.createElement("div");
        teamItem.classList.add("team-item");

        const teamItemImage = document.createElement("img");
        teamItemImage.classList.add("team-image")
        teamItemImage.src = image;

        const teamItemName = document.createElement("span");
        teamItemName.textContent = name;
        teamItemName.classList.add("team-name");

        const teamItemJob = document.createElement("span");
        teamItemJob.textContent = job;
        teamItemJob.classList.add("team-job")

        teamItem.appendChild(teamItemImage);
        teamItem.appendChild(teamItemName)
        teamItem.appendChild(teamItemJob);
        return teamItem;
    }

    const teamItems = [
        { image: "./images/BuccoHeadshot.jpg", name: "Artie Bucco", job: "Head Chef" },
        { image: "./images/CharmaineHeadshot.jpg", name: "Charmaine Bucco", job: "Maître d'" },
        { image: "./images/DreaHeadshot.jpg", name: "Adriana La Cerva", job: "Server" },
        { image: "./images/FurioHeadshot.jpeg", name: "Furio Giunta", job: "Cheese Specialist" },
    ];

    teamItems.forEach(item => {
        const teamItem = createTeamItem(item.image, item.name, item.job);
        teamGrid.appendChild(teamItem);
    });

    teamContainer.appendChild(teamGrid);
    mainContent.appendChild(teamContainer);
}