// -------- Tutor Data --------
const tutors = [
    {
        name: "Mohit Kumar",
        class: "9",
        subjects: ["Mathematics"],
        state: "Bihar",
        district: "Saharsa"
    },
    {
        name: "Kanhaiya Kumar",
        class: "10",
        subjects: ["Science", "Chemistry"],
        state: "Bihar",
        district: "Madhepura"
    }
];

// -------- State Data --------
const states = {
    India: ["Bihar", "Uttar Pradesh"]
};

const districts = {
    Bihar: ["Saharsa", "Madhepura", "Patna"],
    "Uttar Pradesh": ["Lucknow", "Kanpur"]
};

// -------- Load States --------
function loadStates() {
    const stateSelect = document.getElementById("stateFilter");
    stateSelect.innerHTML = '<option value="">Select State</option>';

    states["India"].forEach(state => {
        stateSelect.innerHTML += `<option value="${state}">${state}</option>`;
    });
}

// -------- Load Districts --------
function loadDistricts() {
    const selectedState = document.getElementById("stateFilter").value;
    const districtSelect = document.getElementById("districtFilter");

    districtSelect.innerHTML = '<option value="">Select District</option>';

    if (districts[selectedState]) {
        districts[selectedState].forEach(d => {
            districtSelect.innerHTML += `<option value="${d}">${d}</option>`;
        });
    }
}

// -------- Add Second Subject --------
function addSecondSubject() {
    document.getElementById("subjectFilter2").style.display = "block";
}

// -------- Search Logic --------
function searchTutor() {
    const classValue = document.getElementById("classFilter").value;
    const subject1 = document.getElementById("subjectFilter").value;
    const subject2 = document.getElementById("subjectFilter2").value;
    const state = document.getElementById("stateFilter").value;
    const district = document.getElementById("districtFilter").value;

    const resultDiv = document.getElementById("tutorResults");
    resultDiv.innerHTML = "";

    const filtered = tutors.filter(tutor =>
        (classValue === "" || tutor.class === classValue) &&
        (subject1 === "" || tutor.subjects.includes(subject1)) &&
        (subject2 === "" || tutor.subjects.includes(subject2)) &&
        (state === "" || tutor.state === state) &&
        (district === "" || tutor.district === district)
    );

    if (filtered.length === 0) {
        resultDiv.innerHTML = "<p>No tutor available in selected area.</p>";
        return;
    }

    filtered.forEach(tutor => {
        resultDiv.innerHTML += `
            <div class="tutor-card">
                <h3>${tutor.name}</h3>
                <p>Class: ${tutor.class}</p>
                <p>Subjects: ${tutor.subjects.join(", ")}</p>
                <p>District: ${tutor.district}</p>
                <button class="primary-btn">Book Tutor</button>
            </div>
        `;
    });
}

// Auto load states on page load
window.onload = loadStates;

let selectedTutor = "";

function openBooking(name) {
    selectedTutor = name;
    document.getElementById("bookingPopup").style.display = "flex";
}

function closeBooking() {
    document.getElementById("bookingPopup").style.display = "none";
}

function confirmBooking() {
    const name = document.getElementById("studentName").value;
    const phone = document.getElementById("studentPhone").value;

    if(name === "" || phone === "") {
        alert("Please fill all details.");
        return;
    }

    alert(`Booking request sent to ${selectedTutor}`);
    closeBooking();
}

