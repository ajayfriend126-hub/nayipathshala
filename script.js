document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.getElementById("themeToggle");

    toggleBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "☀️";
        } else {
            toggleBtn.textContent = "🌙";
        }

    });

});

// Navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Scroll reveal animation
const cards = document.querySelectorAll(".solution-card");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add("show");
        }
    });
});

// Wait until page fully loads
document.addEventListener("DOMContentLoaded", function () {

    function revealOnScroll() {
        const reveals = document.querySelectorAll(".reveal");

        reveals.forEach(function (element) {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);

    // Run once on load
    revealOnScroll();
});

// Mentor stagger reveal
document.addEventListener("DOMContentLoaded", function () {

    const mentorCards = document.querySelectorAll(".mentor-card");

    function revealMentors() {
        mentorCards.forEach((card, index) => {
            const windowHeight = window.innerHeight;
            const elementTop = card.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 200); // 200ms delay each
            }
        });
    }

    window.addEventListener("scroll", revealMentors);
    revealMentors();
});

// ================= MENTOR AUTO SLIDER =================

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".mentor-slider");

    if (!slider) return;

    let scrollAmount = 0;
    const cardWidth = slider.querySelector(".mentor-card").offsetWidth + 30; 
    // 30 = gap size

    function autoSlide() {

        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0; // reset to start
        } else {
            scrollAmount += cardWidth;
        }

        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    setInterval(autoSlide, 3000); // 3 second
});


// ================= HOME MENTOR AUTO SLIDER =================

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".home-mentor-slider");

    if (!slider) return;

    let scrollAmount = 0;
    const cardWidth = slider.querySelector(".home-mentor-card").offsetWidth + 30;

    function autoSlide() {

        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0;
        } else {
            scrollAmount += cardWidth;
        }

        slider.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    setInterval(autoSlide, 3000); // 3 seconds
});

// Pricing Toggle

const toggle = document.getElementById("priceToggle");
const prices = document.querySelectorAll(".price");

if (toggle) {
    toggle.addEventListener("change", () => {
        prices.forEach(price => {
            const month = price.getAttribute("data-month");
            const quarter = price.getAttribute("data-quarter");

            if (toggle.checked) {
                price.innerHTML = `₹${quarter} / Quarter`;
            } else {
                price.innerHTML = `₹${month} / Month`;
            }
        });
    });
}

// FAQ Accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(btn => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

// Fake Seat Counter

let seats = 12;
const seatDisplay = document.getElementById("seatCount");

if (seatDisplay) {
    setInterval(() => {
        if (seats > 5) {
            seats--;
            seatDisplay.textContent = seats;
        }
    }, 8000);
}
toggle.addEventListener("change", () => {
    document.querySelectorAll(".pricing-toggle span")[1]
        .style.color = toggle.checked ? "#2563eb" : "";
});

// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const form = document.getElementById("mentorForm");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload
    popup.style.display = "flex";
    form.reset(); // clear form
});

function closePopup() {
    popup.style.display = "none";
}

function switchRole(role) {
    document.getElementById("loginTitle").innerText = role + " Login";
}
function switchRole(role) {
    document.getElementById("loginTitle").innerText = role + " Login";
}

function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("forgotForm").style.display = "none";
    document.getElementById("registerForm").style.display = "flex";
    document.getElementById("loginTitle").innerText = "Create Account";
}

function showForgot() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("forgotForm").style.display = "flex";
    document.getElementById("loginTitle").innerText = "Reset Password";
}

function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("forgotForm").style.display = "none";
    document.getElementById("loginForm").style.display = "flex";
    document.getElementById("loginTitle").innerText = "Student Login";
}

let currentRole = "Student";

function switchRole(role) {
    currentRole = role;
    document.getElementById("loginTitle").innerText = role + " Login";
}
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if(currentRole === "Student") {
        window.location.href = "student-dashboard.html";
    }
    else if(currentRole === "Tutor") {
        window.location.href = "tutor-dashboard.html";
    }
    else if(currentRole === "Admin") {
        window.location.href = "admin-dashboard.html";
    }
});
function openTutorSearch() {
    document.getElementById("searchModal").style.display = "flex";

    fetch("search-tutor.html")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");

            const searchSection = doc.querySelector(".search-section");
            document.getElementById("searchContent").innerHTML = searchSection.outerHTML;

            const script = document.createElement("script");
            script.src = "js/search-tutor.js";
            document.body.appendChild(script);
        });
}

function closeTutorSearch() {
    document.getElementById("searchModal").style.display = "none";
}
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}