// ======================================================
// J.A.R.V.I.S - INDÚSTRIAS TH
// Script principal do sistema
// ======================================================

// ---------- Elementos principais ----------
const loginScreen = document.querySelector("#loginScreen");
const systemScreen = document.querySelector("#systemScreen");

const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector("#loginButton");
const logoutButton = document.querySelector("#logoutButton");
const loginMessage = document.querySelector("#loginMessage");

const terminal = document.querySelector("#terminal");
const statusText = document.querySelector("#statusText");
const startButton = document.querySelector("#startButton");
const cards = document.querySelectorAll(".card");

const clock = document.querySelector("#clock");

const questionInput = document.querySelector("#questionInput");
const askButton = document.querySelector("#askButton");
const answerBox = document.querySelector("#answerBox");

const commandInput = document.querySelector("#commandInput");
const commandButton = document.querySelector("#commandButton");

const menuButtons = document.querySelectorAll(".menu-btn");

// ---------- Configurações ----------
const validUser = "stark";
const validPassword = "1234";

const bootLines = [
  "Inicializando protocolo J.A.R.V.I.S...",
  "Carregando núcleo energético da Indústrias TH...",
  "Ativando partículas azuis...",
  "Sincronizando módulos: pesquisa, estudos, agenda e sistema...",
  "Verificando segurança da interface...",
  "Conectando ao núcleo Stark...",
  "Interface online. Bem-vindo, sr.stark."
];

let lineIndex = 0;

// ======================================================
// LOGIN
// ======================================================

function login() {
  const user = usernameInput.value.trim().toLowerCase();
  const pass = passwordInput.value.trim();

  if (user === validUser && pass === validPassword) {
    loginMessage.textContent = "Acesso autorizado. Inicializando sistema...";
    loginMessage.classList.remove("error");
    loginMessage.classList.add("success");

    setTimeout(() => {
      loginScreen.classList.add("hidden");
      systemScreen.classList.remove("hidden");

      bootJarvis();
      showModule("inicio");
    }, 900);
  } else {
    loginMessage.textContent = "Acesso negado. Usuário ou senha incorretos.";
    loginMessage.classList.remove("success");
    loginMessage.classList.add("error");
  }
}

function logout() {
  systemScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");

  usernameInput.value = "";
  passwordInput.value = "";
  loginMessage.textContent = "";

  if (terminal) {
    terminal.innerHTML = "";
  }

  if (statusText) {
    statusText.textContent = "INICIALIZANDO...";
    statusText.classList.remove("online");
  }
}

if (loginButton) {
  loginButton.addEventListener("click", login);
}

if (logoutButton) {
  logoutButton.addEventListener("click", logout);
}

if (passwordInput) {
  passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      login();
    }
  });
}

// ======================================================
// TERMINAL / BOOT
// ======================================================

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
      terminal.scrollTop = terminal.scrollHeight;

      if (callback) callback();
    }
  }, 28);
}

function addTerminalLine(text) {
  if (!terminal) return;

  const line = document.createElement("p");
  line.classList.add("terminal-line");
  line.textContent = text;
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}

function bootJarvis() {
  if (!terminal) return;

  terminal.innerHTML = "";
  lineIndex = 0;

  if (statusText) {
    statusText.textContent = "CARREGANDO...";
    statusText.classList.remove("online");
  }

  cards.forEach((card) => {
    card.classList.remove("active");
  });

  function nextLine() {
    if (lineIndex < bootLines.length) {
      typeLine(bootLines[lineIndex], () => {
        lineIndex++;
        setTimeout(nextLine, 380);
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
    }, index * 150);
  });

  typeLine("Todos os módulos principais foram carregados com sucesso.");
  typeLine("Digite 'ajuda' no terminal para visualizar os comandos disponíveis.");
}

if (startButton) {
  startButton.addEventListener("click", bootJarvis);
}

// ======================================================
// MENU INTERATIVO
// ======================================================

function showModule(moduleName) {
  // Remove ativo dos botões
  menuButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Ativa botão clicado pelo texto
  menuButtons.forEach((button) => {
    const buttonText = button.textContent.trim().toLowerCase();

    if (
      buttonText === moduleName ||
      (moduleName === "inicio" && buttonText === "início")
    ) {
      button.classList.add("active");
    }
  });

  // Esconde todas as áreas que existirem
  const sections = {
    inicio: document.querySelector(".hero"),
    pesquisa: document.querySelector(".search-area"),
    estudos: document.querySelector("#moduleEstudos"),
    projetos: document.querySelector("#moduleProjetos"),
    agenda: document.querySelector("#moduleAgenda"),
    sistema: document.querySelector("#moduleSistema")
  };

  Object.values(sections).forEach((section) => {
    if (section) section.classList.add("hidden-module");
  });

  // Mostra módulo escolhido
  const selected = sections[moduleName];

  if (selected) {
    selected.classList.remove("hidden-module");
  }

  // Mantém terminal visível sempre
  const terminalArea = document.querySelector(".terminal-area");
  if (terminalArea) terminalArea.classList.remove("hidden-module");

  addTerminalLine(`Módulo aberto: ${formatModuleName(moduleName)}.`);
}

function formatModuleName(name) {
  const names = {
    inicio: "Início",
    pesquisa: "Pesquisa",
    estudos: "Estudos",
    projetos: "Projetos",
    agenda: "Agenda",
    sistema: "Sistema"
  };

  return names[name] || name;
}

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.textContent.trim().toLowerCase();

    if (text === "início") showModule("inicio");
    if (text === "pesquisa") showModule("pesquisa");
    if (text === "estudos") showModule("estudos");
    if (text === "projetos") showModule("projetos");
    if (text === "agenda") showModule("agenda");
    if (text === "sistema") showModule("sistema");
  });
});

// ======================================================
// CRIAÇÃO AUTOMÁTICA DOS MÓDULOS
// Caso o HTML ainda não tenha essas áreas, o JS cria.
// ======================================================

function createExtraModules() {
  const mainPanel = document.querySelector(".main-panel");
  if (!mainPanel) return;

  if (!document.querySelector("#moduleEstudos")) {
    const estudos = document.createElement("section");
    estudos.id = "moduleEstudos";
    estudos.className = "module-area hidden-module";
    estudos.innerHTML = `
      <h2>Modo Estudos</h2>
      <p>Área para organizar matérias, resumos e tarefas escolares.</p>

      <div class="tool-grid">
        <div class="tool-card">
          <h3>Resumo rápido</h3>
          <textarea id="studyText" placeholder="Cole um texto aqui para organizar em tópicos..."></textarea>
          <button id="studyButton">Organizar texto</button>
          <div id="studyResult" class="tool-result">Aguardando conteúdo...</div>
        </div>

        <div class="tool-card">
          <h3>Matérias</h3>
          <ul>
            <li>Gestão de Projetos</li>
            <li>Química</li>
            <li>Filosofia</li>
            <li>Biologia</li>
          </ul>
        </div>
      </div>
    `;
    mainPanel.appendChild(estudos);
  }

  if (!document.querySelector("#moduleProjetos")) {
    const projetos = document.createElement("section");
    projetos.id = "moduleProjetos";
    projetos.className = "module-area hidden-module";
    projetos.innerHTML = `
      <h2>Projetos</h2>
      <p>Central para acompanhar sites, códigos e sistemas da Indústrias TH.</p>

      <div class="tool-grid">
        <div class="tool-card">
          <h3>Projeto ativo</h3>
          <p><strong>J.A.R.V.I.S Web System</strong></p>
          <p>Status: Em desenvolvimento</p>
          <p>Objetivo: Criar uma central inteligente pessoal.</p>
        </div>

        <div class="tool-card">
          <h3>Próximas melhorias</h3>
          <ul>
            <li>Login avançado</li>
            <li>Pesquisa com IA real</li>
            <li>Agenda interativa</li>
            <li>Banco de dados</li>
          </ul>
        </div>
      </div>
    `;
    mainPanel.appendChild(projetos);
  }

  if (!document.querySelector("#moduleAgenda")) {
    const agenda = document.createElement("section");
    agenda.id = "moduleAgenda";
    agenda.className = "module-area hidden-module";
    agenda.innerHTML = `
      <h2>Agenda</h2>
      <p>Área para organizar compromissos, lembretes e datas importantes.</p>

      <div class="tool-card">
        <h3>Adicionar lembrete local</h3>
        <div class="agenda-form">
          <input type="text" id="agendaInput" placeholder="Ex: Estudar UC2 às 19h">
          <button id="agendaButton">Adicionar</button>
        </div>
        <ul id="agendaList" class="agenda-list">
          <li>Dia das Mães — 10/05</li>
          <li>Corpus Christi — 04/06</li>
        </ul>
      </div>
    `;
    mainPanel.appendChild(agenda);
  }

  if (!document.querySelector("#moduleSistema")) {
    const sistema = document.createElement("section");
    sistema.id = "moduleSistema";
    sistema.className = "module-area hidden-module";
    sistema.innerHTML = `
      <h2>Sistema</h2>
      <p>Status geral do J.A.R.V.I.S da Indústrias TH.</p>

      <div class="system-grid">
        <div class="system-card">
          <span>Sistema</span>
          <strong>Online</strong>
        </div>

        <div class="system-card">
          <span>Núcleo</span>
          <strong>Estável</strong>
        </div>

        <div class="system-card">
          <span>Energia</span>
          <strong>100%</strong>
        </div>

        <div class="system-card">
          <span>Interface</span>
          <strong>Azul Neon</strong>
        </div>
      </div>
    `;
    mainPanel.appendChild(sistema);
  }
}

// ======================================================
// PESQUISA J.A.R.V.I.S
// ======================================================

function askJarvis() {
  if (!questionInput || !answerBox) return;

  const question = questionInput.value.trim();

  if (!question) {
    answerBox.innerHTML = "<p>Digite uma pergunta para o J.A.R.V.I.S responder.</p>";
    return;
  }

  const response = generateLocalAnswer(question);

  answerBox.innerHTML = `
    <h3>Resposta J.A.R.V.I.S</h3>
    <p>${response}</p>
  `;

  addTerminalLine(`Pesquisa executada: "${question}"`);
}

function generateLocalAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes("scrum")) {
    return "Scrum é uma metodologia ágil usada para organizar projetos em ciclos curtos chamados Sprints. Ela trabalha com papéis como Product Owner, Scrum Master e equipe de desenvolvimento.";
  }

  if (q.includes("kanban")) {
    return "Kanban é um método visual de organização de tarefas. Normalmente usa colunas como A fazer, Em andamento e Concluído.";
  }

  if (q.includes("backlog")) {
    return "Backlog é a lista de funcionalidades, tarefas ou demandas de um projeto. Ele deve ser priorizado conforme valor, urgência e dependências.";
  }

  if (q.includes("mvp")) {
    return "MVP significa Produto Mínimo Viável. É a primeira versão funcional de um sistema, contendo apenas o essencial para entregar valor ao usuário.";
  }

  if (q.includes("html")) {
    return "HTML é a linguagem usada para criar a estrutura de uma página web, como títulos, textos, botões, seções e links.";
  }

  if (q.includes("css")) {
    return "CSS é usado para estilizar o site, definindo cores, layout, animações, fontes e aparência visual.";
  }

  if (q.includes("javascript") || q.includes("js")) {
    return "JavaScript é a linguagem que adiciona interatividade ao site, como botões funcionando, animações, login e respostas dinâmicas.";
  }

  if (q.includes("jarvis")) {
    return "J.A.R.V.I.S é o sistema inteligente da Indústrias TH, criado para auxiliar em estudos, projetos, agenda, pesquisas e organização pessoal.";
  }

  if (q.includes("indústrias th") || q.includes("industrias th")) {
    return "Indústrias TH é a identidade principal deste projeto, funcionando como a central tecnológica criada por sr.stark.";
  }

  return "Ainda não tenho uma resposta completa para isso no modo local. Posso registrar essa pergunta como missão futura ou abrir uma busca externa quando o sistema evoluir com API.";
}

if (askButton) {
  askButton.addEventListener("click", askJarvis);
}

if (questionInput) {
  questionInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      askJarvis();
    }
  });
}

// ======================================================
// COMANDOS DO TERMINAL
// ======================================================

function runCommand() {
  if (!commandInput) return;

  const command = commandInput.value.trim().toLowerCase();

  if (!command) return;

  addTerminalLine(`> ${command}`);
  commandInput.value = "";

  if (command === "ajuda") {
    addTerminalLine("Comandos disponíveis: ajuda, status, pesquisa, estudos, projetos, agenda, sistema, limpar, reiniciar.");
    return;
  }

  if (command === "status") {
    addTerminalLine("J.A.R.V.I.S ONLINE | Núcleo estável | Energia 100% | Rede ativa.");
    return;
  }

  if (command === "pesquisa") {
    showModule("pesquisa");
    return;
  }

  if (command === "estudos") {
    showModule("estudos");
    return;
  }

  if (command === "projetos") {
    showModule("projetos");
    return;
  }

  if (command === "agenda") {
    showModule("agenda");
    return;
  }

  if (command === "sistema") {
    showModule("sistema");
    return;
  }

  if (command === "limpar") {
    terminal.innerHTML = "";
    return;
  }

  if (command === "reiniciar") {
    bootJarvis();
    return;
  }

  addTerminalLine("Comando não reconhecido. Digite 'ajuda' para ver os comandos.");
}

if (commandButton) {
  commandButton.addEventListener("click", runCommand);
}

if (commandInput) {
  commandInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      runCommand();
    }
  });
}

// ======================================================
// FERRAMENTAS DOS MÓDULOS
// ======================================================

function setupDynamicTools() {
  const studyButton = document.querySelector("#studyButton");
  const studyText = document.querySelector("#studyText");
  const studyResult = document.querySelector("#studyResult");

  if (studyButton && studyText && studyResult) {
    studyButton.addEventListener("click", () => {
      const text = studyText.value.trim();

      if (!text) {
        studyResult.textContent = "Cole um texto primeiro para organizar.";
        return;
      }

      const sentences = text
        .split(".")
        .map((item) => item.trim())
        .filter((item) => item.length > 0)
        .slice(0, 5);

      studyResult.innerHTML = `
        <strong>Resumo em tópicos:</strong>
        <ul>
          ${sentences.map((sentence) => `<li>${sentence}.</li>`).join("")}
        </ul>
      `;

      addTerminalLine("Texto de estudos organizado em tópicos.");
    });
  }

  const agendaButton = document.querySelector("#agendaButton");
  const agendaInput = document.querySelector("#agendaInput");
  const agendaList = document.querySelector("#agendaList");

  if (agendaButton && agendaInput && agendaList) {
    agendaButton.addEventListener("click", () => {
      const item = agendaInput.value.trim();

      if (!item) return;

      const li = document.createElement("li");
      li.textContent = item;
      agendaList.appendChild(li);

      agendaInput.value = "";

      addTerminalLine(`Novo lembrete adicionado: ${item}`);
    });
  }
}

// ======================================================
// PARTÍCULAS / RELÓGIO
// ======================================================

function createParticles() {
  const container = document.querySelector(".particles");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < 80; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${5 + Math.random() * 7}s`;

    const size = 2 + Math.random() * 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    container.appendChild(particle);
  }
}

function updateClock() {
  if (!clock) return;

  const now = new Date();

  const time = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  clock.textContent = time;
}

// ======================================================
// INICIALIZAÇÃO
// ======================================================

window.addEventListener("load", () => {
  createParticles();
  createExtraModules();
  setupDynamicTools();
  updateClock();
  setInterval(updateClock, 1000);

  // Garante que o sistema comece na tela de login
  if (loginScreen && systemScreen) {
    loginScreen.classList.remove("hidden");
    systemScreen.classList.add("hidden");
  }
});
