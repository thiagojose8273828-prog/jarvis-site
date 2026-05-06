// ===============================
// J.A.R.V.I.S CORE - SCRIPT SYSTEM
// Portal de Apoio em Tecnologia da Informação
// ===============================

// ELEMENTOS PRINCIPAIS
const searchInput = document.getElementById("searchInput");
const searchableItems = document.querySelectorAll(".searchable");
const cards = document.querySelectorAll(".card, .project-item");

// RELÓGIO DO SISTEMA
function updateClock() {
  const clockElement = document.getElementById("systemClock");

  if (!clockElement) return;

  const now = new Date();

  const time = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const date = now.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  clockElement.textContent = `${date} • ${time}`;
}

setInterval(updateClock, 1000);
updateClock();


// SAUDAÇÃO AUTOMÁTICA
function setGreeting() {
  const greetingElement = document.getElementById("greetingText");

  if (!greetingElement) return;

  const hour = new Date().getHours();

  let greeting = "Bem-vindo ao J.A.R.V.I.S CORE";

  if (hour >= 5 && hour < 12) {
    greeting = "Bom dia, operador. Sistema J.A.R.V.I.S ativo.";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Boa tarde, operador. Central de TI operacional.";
  } else {
    greeting = "Boa noite, operador. Núcleo J.A.R.V.I.S em execução.";
  }

  greetingElement.textContent = greeting;
}

setGreeting();


// EFEITO DE DIGITAÇÃO
function typeWriter(elementId, text, speed = 35) {
  const element = document.getElementById(elementId);

  if (!element) return;

  element.textContent = "";

  let index = 0;

  function write() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(write, speed);
    }
  }

  write();
}

typeWriter(
  "typeText",
  "Portal de apoio em Tecnologia da Informação inicializado com sucesso.",
  35
);


// NORMALIZAR TEXTO
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}


// PESQUISA INTERNA
function searchPortal() {
  if (!searchInput) return;

  const searchValue = normalizeText(searchInput.value);
  let visibleCount = 0;

  searchableItems.forEach(function (item) {
    const itemText = normalizeText(item.innerText);

    if (itemText.includes(searchValue)) {
      item.classList.remove("hidden");
      visibleCount++;
    } else {
      item.classList.add("hidden");
    }
  });

  updateSearchStatus(visibleCount, searchValue);
}

if (searchInput) {
  searchInput.addEventListener("input", searchPortal);
}


// STATUS DA PESQUISA
function updateSearchStatus(count, searchValue) {
  const resultElement = document.getElementById("searchResult");

  if (!resultElement) return;

  if (searchValue === "") {
    resultElement.textContent = "Digite um termo para pesquisar no portal.";
    return;
  }

  if (count === 0) {
    resultElement.textContent = "Nenhum conteúdo encontrado para essa pesquisa.";
  } else if (count === 1) {
    resultElement.textContent = "1 conteúdo encontrado.";
  } else {
    resultElement.textContent = `${count} conteúdos encontrados.`;
  }
}


// FILTRO POR CATEGORIA
const filterButtons = document.querySelectorAll("[data-filter]");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active-filter");
    });

    button.classList.add("active-filter");

    searchableItems.forEach(function (item) {
      const category = item.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });

    if (searchInput) {
      searchInput.value = "";
    }

    updateSearchStatus(0, "");
  });
});


// CLIQUE NOS CARDS
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    cards.forEach(function (otherCard) {
      if (otherCard !== card) {
        otherCard.classList.remove("active-card");
      }
    });

    card.classList.toggle("active-card");
  });
});


// BOTÕES PARA ABRIR CONTEÚDO COMPLETO
const openContentButtons = document.querySelectorAll(".open-content");

openContentButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.stopPropagation();

    const targetId = button.getAttribute("data-target");
    const targetPanel = document.getElementById(targetId);

    if (!targetPanel) return;

    targetPanel.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    targetPanel.classList.add("active-card");

    setTimeout(function () {
      targetPanel.classList.remove("active-card");
    }, 1800);
  });
});


// CONTADOR DE CONTEÚDOS
function updateCounters() {
  const totalUCs = document.getElementById("totalUCs");
  const totalExtras = document.getElementById("totalExtras");
  const totalProjects = document.getElementById("totalProjects");

  const ucItems = document.querySelectorAll('[data-category="uc"]');
  const extraItems = document.querySelectorAll('[data-category="extra"]');
  const projectItems = document.querySelectorAll('[data-category="project"]');

  if (totalUCs) totalUCs.textContent = ucItems.length;
  if (totalExtras) totalExtras.textContent = extraItems.length;
  if (totalProjects) totalProjects.textContent = projectItems.length;
}

updateCounters();


// BOTÃO VOLTAR AO TOPO
const backToTopButton = document.createElement("button");
backToTopButton.id = "backToTop";
backToTopButton.textContent = "↑";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", function () {
  if (window.scrollY > 450) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// EFEITO DE PARTÍCULAS
function createParticles() {
  const particleArea = document.createElement("div");
  particleArea.className = "particles-area";
  document.body.appendChild(particleArea);

  for (let i = 0; i < 45; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = 4 + Math.random() * 8 + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";
    particle.style.opacity = Math.random();

    particleArea.appendChild(particle);
  }
}

createParticles();


// STATUS DO SISTEMA
function setSystemStatus() {
  const statusElement = document.getElementById("jarvisStatus");

  if (!statusElement) return;

  const statuses = [
    "Sistema online",
    "Núcleo de TI ativo",
    "Base carregada",
    "Portal operacional",
    "Modo Stark ativo"
  ];

  let index = 0;

  setInterval(function () {
    statusElement.textContent = statuses[index];
    index = (index + 1) % statuses.length;
  }, 3000);
}

setSystemStatus();


// BOOT LOG DO J.A.R.V.I.S
function runBootLog() {
  const bootLog = document.getElementById("bootLog");

  if (!bootLog) return;

  const messages = [
    "Inicializando núcleo J.A.R.V.I.S...",
    "Carregando unidades curriculares...",
    "Sincronizando módulos de TI...",
    "Ativando interface Reator Arc...",
    "Conteúdos detalhados carregados...",
    "Sistema pronto para operação."
  ];

  let index = 0;

  const interval = setInterval(function () {
    if (index < messages.length) {
      const line = document.createElement("p");
      line.textContent = "> " + messages[index];
      bootLog.appendChild(line);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 700);
}

runBootLog();


// MODO FOCO
const focusButton = document.getElementById("focusModeButton");

if (focusButton) {
  focusButton.addEventListener("click", function () {
    document.body.classList.toggle("focus-mode");

    if (document.body.classList.contains("focus-mode")) {
      focusButton.textContent = "Desativar Modo Foco";
    } else {
      focusButton.textContent = "Ativar Modo Foco";
    }
  });
}


// MENSAGEM NO CONSOLE
console.log("J.A.R.V.I.S CORE inicializado com sucesso.");
console.log("Portal de Apoio em Tecnologia da Informação ativo.");
