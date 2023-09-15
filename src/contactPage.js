function createContactPage() {
    const content = document.getElementById("content");

    const contactsDiv = document.createElement("div")
    contactsDiv.classList.add("contacts-div")

    const titleLogo = document.createElement("h1");
    titleLogo.classList.add("title-logo")
    titleLogo.textContent = "Alchemy Lab"

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";
    heading.classList.add("contacts-title")

    const message = document.createElement("p");
    message.textContent = "If you have any questions or feedback, feel free to get in touch with us.";

    const form = document.createElement("form");

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("required", "true");

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("required", "true");

    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Message:";
    const messageTextarea = document.createElement("textarea");
    messageTextarea.setAttribute("id", "message");
    messageTextarea.setAttribute("name", "message");
    messageTextarea.setAttribute("rows", "4");
    messageTextarea.setAttribute("required", "true");

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Send";

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageTextarea);
    form.appendChild(submitButton);

    contactsDiv.appendChild(titleLogo)
    contactsDiv.appendChild(heading);
    contactsDiv.appendChild(message);
    contactsDiv.appendChild(form);

    content.appendChild(contactsDiv)
}

export {createContactPage}