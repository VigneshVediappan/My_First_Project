function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString();

    document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);

updateClock();

function sayHello() {
    alert("Welcome to my developer world! 🚀");
}
function showProject(projectName) {
  alert(projectName + " project selected!");
}
function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString();

    document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);
const texts = [
    "Student • Developer • AI Enthusiast",
    "Learning Web Development",
    "Building AI Projects",
    "Exploring Digital Twin Technology"
];

let textIndex = 0;
let charIndex = 0;

function typeText() {
    const typingElement = document.getElementById("typing");

    if (charIndex < texts[textIndex].length) {
        typingElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 80);
    } else {
        setTimeout(deleteText, 1500);
    }
}

function deleteText() {
    const typingElement = document.getElementById("typing");

    if (charIndex > 0) {
        typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 40);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 300);
    }
}

typeText();
const mouseGlow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (event) => {
    mouseGlow.style.left = event.clientX + "px";
    mouseGlow.style.top = event.clientY + "px";
});
// Create animated background particles

const particlesContainer = document.getElementById("particles");

const particleCount = window.innerWidth <= 600 ? 15 : 40;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    const size = 2 + Math.random() * 4;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particlesContainer.appendChild(particle);
}
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 1500);
});
const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .skills-list span"
);

hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursorRing.classList.add("hover");
    });

    element.addEventListener("mouseleave", () => {
        cursorRing.classList.remove("hover");
    });
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.addEventListener("load", () => {
    window.scrollTo(0, 0);

    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 1500);
});
const projectData = {
    tictactoe: {
        title: "🎮 Tic-Tac-Toe with Minimax AI",
        description:
            "A Tic-Tac-Toe game where the computer uses the Minimax algorithm to make intelligent decisions.",
        tech: "Technologies: HTML • CSS • JavaScript • Minimax AI"
    },

    digitaltwin: {
        title: "🏭 AI-Based Digital Twin",
        description:
            "An AI-based Digital Twin concept designed for predictive maintenance and monitoring of industrial machines.",
        tech: "Technologies: AI • IoT • ESP32 • MQTT • Digital Twin"
    },

    price: {
        title: "💰 Price Comparison Website",
        description:
            "A web application concept that compares product prices from multiple websites to help users find better deals.",
        tech: "Technologies: HTML • CSS • JavaScript • APIs"
    }
};

function openProject(project) {

    const data = projectData[project];

    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalDescription").textContent = data.description;
    document.getElementById("modalTech").textContent = data.tech;

    document.getElementById("projectModal").classList.add("active");
}

function closeProject() {
    document.getElementById("projectModal").classList.remove("active");
}