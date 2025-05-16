// ===== EVENT HANDLING =====

document.addEventListener("DOMContentLoaded", () => {
    // Button click for contact buttons
    document.querySelectorAll(".contact_button").forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for reaching out!");
        });
    });

    // Hover effect for project buttons
    document.querySelectorAll(".project_button").forEach(btn => {
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
    if (h1) {
        let pressTimer;
        h1.addEventListener("mousedown", () => {
            pressTimer = setTimeout(() => {
                alert("Long press detected on your name!");
            }, 1000);
        });
        h1.addEventListener("mouseup", () => {
            clearTimeout(pressTimer);
        });
        h1.addEventListener("mouseleave", () => {
            clearTimeout(pressTimer);
        });
    }

    // =====  INTERACTIVE ELEMENTS =====

    // A button to change text or color
    const overview = document.getElementById("overview");
    if (overview) {
        const changeBtn = document.createElement("button");
        changeBtn.textContent = "Change Theme";
        changeBtn.className = "contact_button";
        changeBtn.style.marginTop = "20px";
        changeBtn.addEventListener("click", () => {
            document.body.style.backgroundColor = document.body.style.backgroundColor === "rgb(104, 0, 104)" ? "#000000" : "#680068";
        });
        overview.appendChild(changeBtn);
    }

    // Simple image gallery
    const gallerySection = document.createElement("section");
    gallerySection.id = "gallery";
    gallerySection.innerHTML = `
        <h2 style="color:white">Image Gallery</h2>
        <img id="gallery-img" src="https://via.placeholder.com/300" style="max-width:100%;border-radius:10px" alt="Gallery Image">
        <br>
        <button id="next-img" class="contact_button">Next Image</button>
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
            <button class="contact_button" onclick="showTab('tab1')">Tab 1</button>
            <button class="contact_button" onclick="showTab('tab2')">Tab 2</button>
            <div id="tab1" class="tab" style="color:white; margin-top:20px">This is Tab 1 content.</div>
            <div id="tab2" class="tab" style="color:white; margin-top:20px; display:none">This is Tab 2 content.</div>
        </div>
    `;
    document.body.appendChild(tabSection);

    // ===== FORM VALIDATION =====
    const form = document.getElementById('contactForm');
    if (form) {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const feedback = document.getElementById('formFeedback');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = emailInput.value;
            const password = passwordInput.value;

            if (!email.match(/^\S+@\S+\.\S+$/)) {
                feedback.textContent = 'Please enter a valid email address.';
                feedback.style.color = 'red';
                return;
            }

            if (password.length < 8) {
                feedback.textContent = 'Password must be at least 8 characters long.';
                feedback.style.color = 'red';
                return;
            }

            feedback.textContent = 'Form submitted successfully!';
            feedback.style.color = 'green';
        });

        // Real-time feedback while typing password
        passwordInput.addEventListener('input', function () {
            if (this.value.length < 8) {
                feedback.textContent = 'Password too short.';
                feedback.style.color = 'orange';
            } else {
                feedback.textContent = '';
            }
        });
    }
});

// Make showTab globally accessible for inline onclick
function showTab(tabId) {
    document.querySelectorAll(".tab").forEach(tab => tab.style.display = "none");
    document.getElementById(tabId).style.display = "block";
}
