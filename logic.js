const incidents = [
  {
    title: "Needle-stick Injury",
    description: "A technician is injured by a contaminated needle.",
    options: ["Report immediately", "Wash hands only", "Ignore incident", "Continue work"],
    correct: 0
  },
  {
    title: "Biohazard Spill",
    description: "Infectious liquid spills on lab floor.",
    options: ["Isolate area", "Cover with tissue", "Ignore spill", "Leave lab"],
    correct: 0
  },
  {
    title: "PPE Failure",
    description: "Gloves tear while handling a pathogen.",
    options: ["Replace PPE", "Continue carefully", "Ignore tear", "Leave lab without reporting"],
    correct: 0
  }
];

let current = 0;
let selectedOption = null;
let totalScore = 0;

function loadIncident() {
  document.getElementById("incidentTitle").innerText =
    incidents[current].title;

  document.getElementById("incidentText").innerText =
    incidents[current].description;

  document.getElementById("progress").innerText =
    `Incident ${current + 1} of ${incidents.length}`;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  incidents[current].options.forEach((opt, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.onclick = () => selectOption(div, index);
    optionsDiv.appendChild(div);
  });

  selectedOption = null;
}

function selectOption(element, index) {
  document.querySelectorAll(".option").forEach(opt =>
    opt.classList.remove("selected"));
  element.classList.add("selected");
  selectedOption = index;
}

function submitResponse() {
  if (selectedOption === null) {
    alert("Please select a response.");
    return;
  }

  if (selectedOption === incidents[current].correct) {
    totalScore += 90;
  } else {
    totalScore += 30;
  }

  current++;

  if (current < incidents.length) {
    loadIncident();
  } else {
    showResult();
  }
}

function showResult() {
  let finalScore = Math.round(totalScore / incidents.length);
  let status = finalScore >= 80 ? "BIOSAFETY COMPLIANT ✔" : "SAFETY VIOLATION ⚠";

  document.querySelector(".card").innerHTML =
    `<h2>Simulation Complete</h2>
     <p>Final Safety Score: <strong>${finalScore}/100</strong></p>
     <p>${status}</p>`;
}

loadIncident();
