function submitName() {
  const name = document.getElementById("visitorName").value.trim();

  if (!name) {
    alert("Please enter your name first!");
    return;
  }

  // Send name to backend (Vercel API)
  fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  // Save to localStorage (optional)
  localStorage.setItem("visitorName", name);

  // Redirect to resume page
  window.location.href = "resume.html";
}
