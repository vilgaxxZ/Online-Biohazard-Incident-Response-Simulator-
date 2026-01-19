function evaluateResponse() {

  const incident = document.getElementById("incidentSelect").value;
  const response = document.getElementById("responseSelect").value;
  let score = 0;
  let message = "";

  if (incident === "" || response === "") {
    document.getElementById("result").innerHTML =
      "⚠ Please select both incident and response.";
    return;
  }

  if (incident === "needle") {
    if (response === "report") {
      score = 95;
      message = "Correct response. Immediate reporting prevents infection risk.";
    } else {
      score = 30;
      message = "Unsafe response. Needle-stick injuries must be reported.";
    }
  }

  else if (incident === "spill") {
    if (response === "isolate") {
      score = 90;
      message = "Correct response. Isolating the spill prevents contamination.";
    } else {
      score = 25;
      message = "Incorrect response. Biohazard spills must be isolated immediately.";
    }
  }

  else if (incident === "ppe") {
    if (response === "replace") {
      score = 92;
      message = "Correct response. PPE failure requires immediate replacement.";
    } else {
      score = 20;
      message = "Unsafe behavior. PPE failure increases exposure risk.";
    }
  }

  let status = (score >= 80) ? "BIOSAFETY COMPLIANT ✔" : "SAFETY VIOLATION ⚠";

  document.getElementById("result").innerHTML =
    `<p>Safety Score: ${score}/100</p>
     <p>${message}</p>
     <p><strong>${status}</strong></p>`;
}

