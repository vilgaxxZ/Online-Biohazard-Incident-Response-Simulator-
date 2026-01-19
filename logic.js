function respond(action) {
  let score = 0;
  let message = "";

  if (action === "report") {
    score = 95;
    message = "Correct response. Immediate reporting ensures safety, treatment, and compliance with biosafety protocols.";
  } else {
    score = 20;
    message = "Unsafe and unethical response. Ignoring exposure risks severe health and legal consequences.";
  }

  document.getElementById("result").innerHTML =
    `<h3>Safety Score: ${score}/100</h3><p>${message}</p>`;
}
