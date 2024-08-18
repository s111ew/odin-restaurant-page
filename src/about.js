export const paintContact = () => {
    const mainContent = document.querySelector("#content");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Get in touch to book a table:";

    const contactPhoneTitle = document.createElement("h3");
    contactPhoneTitle.textContent = "Phone:"

    const contactPhoneSpan = document.createElement("p");
    contactPhoneSpan.textContent = "📞 (908) 555-4721"

    const contactEmailTitle = document.createElement("h3");
    contactEmailTitle.textContent = "Email:"

    const contactEmailSpan = document.createElement("p");
    contactEmailSpan.textContent = "artie@vesuvio.com"

    const contactLocationTitle = document.createElement("h3");
    contactLocationTitle.textContent = "Location:"

    const contactLocationFrame = document.createElement("iframe");
    contactLocationFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.683713000272!2d-74.11838578917894!3d40.8129436313116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25602796cd3a1%3A0xdbb479538c781253!2s123%20Ridge%20Rd%2C%20Lyndhurst%2C%20NJ%2007071%2C%20USA!5e0!3m2!1sen!2suk!4v1724016306646!5m2!1sen!2suk"
    contactLocationFrame.width = "100%";
    contactLocationFrame.height = "250px";
    contactLocationFrame.style = "border: 0";
    contactLocationFrame.allowfullscreen = "";
    contactLocationFrame.loading = "lazy";
    contactLocationFrame.referrerpolicy = "no-referrer-when-downgrade";

    let pageElements = [
        contactHeader,
        contactPhoneTitle,
        contactPhoneSpan,
        contactEmailTitle,
        contactEmailSpan,
        contactLocationTitle,
        contactLocationFrame
    ];

    pageElements.forEach(element => {
        contactContainer.appendChild(element)
    })
    
    mainContent.appendChild(contactContainer);
}