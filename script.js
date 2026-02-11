function openBox() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("box").classList.remove("hidden");
}

function showProposal() {
  document.getElementById("box").classList.add("hidden");
  document.getElementById("proposal").classList.remove("hidden");
  typeText();
}

function typeText() {
  const text = "Will you be my Valentine? 💖";
  let i = 0;
  const typing = setInterval(() => {
    document.getElementById("typingText").innerHTML += text[i];
    i++;
    if (i === text.length) clearInterval(typing);
  }, 100);
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}

function sayYes() {
  document.getElementById("proposal").classList.add("hidden");
  document.getElementById("success").classList.remove("hidden");
}
