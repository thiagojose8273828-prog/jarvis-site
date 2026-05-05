// J.A.R.V.I.S. - script principal

const bootLines = [
  "Inicializando protocolo J.A.R.V.I.S...",
  "Carregando interface azul e preta...",
  "Verificando módulos do sistema...",
  "Conectando ao núcleo Stark...",
  "Sistema online. Bem-vindo, sr.stark."
];

const terminal = document.querySelector("#terminal");
const statusText = document.querySelector("#statusText");
const startButton = document.querySelector("#startButton");
const cards = document.querySelectorAll(".card");

let lineIndex = 0;

function typeLine(text, callback) {
  if (!terminal) return;

  const line = document.createElement("p");
  line.classList.add("terminal-line");
  terminal.appendChild(line);

  let charIndex = 0;

  const typing = setInterval(() => {
    line.textContent += text.charAt(charIndex);
    charIndex++;

    if (charIndex >= text.length) {
      clearInterval(typing);
      if (callback) callback();
    }
  }, 35);
}

function bootJarvis() {
  if (!terminal) return;

  terminal.innerHTML = "";
  lineIndex = 0;

  function nextLine() {
    if (lineIndex < bootLines.length) {
      typeLine(bootLines[lineIndex], () => {
        lineIndex++;
        setTimeout(nextLine, 450);
      });
    } else {
      activateSystem();
    }
  }

  nextLine();
}

function activateSystem() {
  if (statusText) {
    statusText.textContent = "J.A.R.V.I.S. ONLINE";
    statusText.classList.add("online");
  }

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("active");
    }, index * 180);
  });
}

function createParticles() {
  const container = document.querySelector(".particles");
  if (!container) return;

  for (let i = 0; i < 45; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${5 + Math.random() * 7}s`;

    container.appendChild(particle);
  }
}

function updateClock() {
  const clock = document.querySelector("#clock");
  if (!clock) return;

  const now = new Date();

  const time = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  clock.textContent = time;
}

if (startButton) {
  startButton.addEventListener("click", bootJarvis);
}

createParticles();
updateClock();
setInterval(updateClock, 1000);

window.addEventListener("load", () => {
  setTimeout(bootJarvis, 600);
});
