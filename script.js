// ===== 1. EVENT HANDLING =====

document.addEventListener("DOMContentLoaded", () => {
    // Button click
    document.querySelectorAll(".contact-button").forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for reaching out!");
        });
    });

    // Hover effect with JS (example)
    const projectButtons = document.querySelectorAll(".project-button");
    projectButtons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = "#680068";
            btn.style.color = "#ffffff";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = "#ffffff";
            btn.style.color = "#000000";
        });
    });

    // Keypress detection
    document.addEventListener("keypress", (e) => {
        console.log(`Key pressed: ${e.key}`);
    });

    // Double click secret
    document.body.addEventListener("dblclick", () => {
        alert("You discovered the secret double-click action! 🎉");
    });

    // Long press action on H1
    const h1 = document.querySelector("h1");
    let pressTimer;
    h1.addEventListener("mousedown", () => {
        pressTimer = setTimeout(() => {
            alert("Long press detected on your name!");
        }, 1000);
    });
    h1.addEventListener("mouseup", () => {
        clearTimeout(pressTimer);
    });


    // ===== 2. INTERACTIVE ELEMENTS =====

    // A button to change text or color
    const overview = document.getElementById("overview");
    const changeBtn = document.createElement("button");
    changeBtn.textContent = "Change Theme";
    changeBtn.className = "contact-button";
    changeBtn.style.marginTop = "20px";
    changeBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = document.body.style.backgroundColor === "#680068" ? "#000000" : "#680068";
    });
    overview.appendChild(changeBtn);

    // Simple image gallery
    const gallerySection = document.createElement("section");
    gallerySection.id = "gallery";
    gallerySection.innerHTML = `
        <h2 style="color:white">Image Gallery</h2>
        <img id="gallery-img" src="https://via.placeholder.com/300" style="max-width:100%;border-radius:10px" alt="Gallery Image">
        <br>
        <button id="next-img" class="contact-button">Next Image</button>
    `;
    document.body.appendChild(gallerySection);

    const galleryImages = [
        "https://via.placeholder.com/300/FF0000",
        "https://via.placeholder.com/300/00FF00",
        "https://via.placeholder.com/300/0000FF"
    ];
    let currentImg = 0;
    document.getElementById("next-img").addEventListener("click", () => {
        currentImg = (currentImg + 1) % galleryImages.length;
        document.getElementById("gallery-img").src = galleryImages[currentImg];
    });

    // Tabs
    const tabSection = document.createElement("section");
    tabSection.id = "tabs";
    tabSection.innerHTML = `
        <div style="text-align:center;margin-top:50px">
            <button class="contact-button" onclick="showTab('tab1')">Tab 1</button>
            <button class="contact-button" onclick="showTab('tab2')">Tab 2</button>
            <div id="tab1" class="tab" style="color:white; margin-top:20px">This is Tab 1 content.</div>
            <div id="tab2" class="tab" style="color:white; margin-top:20px; display:none">This is Tab 2 content.</div>
        </div>
    `;
    document.body.appendChild(tabSection);
});

function showTab(tabId) {
    document.querySelectorAll(".tab").forEach(tab => tab.style.display = "none");
    document.getElementById(tabId).style.display = "block";
}

// ===== 3. FORM VALIDATION =====

// Simulate adding a simple form for validation
const formSection = document.createElement("section");
formSection.id = "form-section";
formSection.innerHTML = `
    <h2 style="color:white">Contact Form</h2>
    <form id="contact-form">
        <input type="text" id="name" placeholder="Your Name" required><br><br>
        <input type="email" id="email" placeholder="Email" required><br><br>
        <input type="password" id="password" placeholder="Password" required><br><br>
        <button type="submit" class="contact-button">Submit</button>
        <p id="feedback" style="color:yellow"></p>
    </form>
`;
document.body.appendChild(formSection);

document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");

    if (!email.includes("@") || !email.includes(".")) {
        feedback.textContent = "Invalid email format.";
        return;
    }
    if (password.length < 8) {
        feedback.textContent = "Password must be at least 8 characters.";
        return;
    }

    feedback.textContent = "Form submitted successfully!";
});

// Real-time feedback
["email", "password"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => {
        document.getElementById("feedback").textContent = "";
    });
});