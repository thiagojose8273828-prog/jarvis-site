// ======================================================
// J.A.R.V.I.S CORE - INDÚSTRIAS TH
// SCRIPT PRINCIPAL - FASE 1
// ======================================================

// ===============================
// ELEMENTOS PRINCIPAIS
// ===============================

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

const menuButtons = document.querySelectorAll(".menu-btn");

// ===============================
// LOGIN PADRÃO
// ===============================

const validUser = "stark";
const validPassword = "1234";

// ===============================
// LINHAS DE INICIALIZAÇÃO
// ===============================

const bootLines = [
  "Inicializando protocolo J.A.R.V.I.S CORE...",
  "Carregando núcleo energético da Indústrias TH...",
  "Ativando HUD Reactor...",
  "Sincronizando módulos principais...",
  "Carregando IA Geral local...",
  "Preparando Estudos, Projetos, Agenda e Missões...",
  "Verificando segurança da interface...",
  "Sistema online. Bem-vindo, sr.stark."
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

      showModule("inicio");
      bootJarvis();
    }, 800);
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

  if (terminal) terminal.innerHTML = "";

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
// TERMINAL
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
        setTimeout(nextLine, 360);
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
// MÓDULOS
// ======================================================

function showModule(moduleName) {
  const modules = {
    inicio: document.querySelector("#moduleInicio"),
    ia: document.querySelector("#moduleIa"),
    estudos: document.querySelector("#moduleEstudos"),
    projetos: document.querySelector("#moduleProjetos"),
    agenda: document.querySelector("#moduleAgenda"),
    financas: document.querySelector("#moduleFinancas"),
    habitos: document.querySelector("#moduleHabitos"),
    musica: document.querySelector("#moduleMusica"),
    documentos: document.querySelector("#moduleDocumentos"),
    pesquisa: document.querySelector("#modulePesquisa"),
    missoes: document.querySelector("#moduleMissoes"),
    sistema: document.querySelector("#moduleSistema")
  };

  Object.values(modules).forEach((module) => {
    if (module) {
      module.classList.add("hidden-module");
    }
  });

  if (modules[moduleName]) {
    modules[moduleName].classList.remove("hidden-module");
  }

  menuButtons.forEach((button) => {
    button.classList.remove("active");

    if (button.dataset.module === moduleName) {
      button.classList.add("active");
    }
  });

  addTerminalLine(`Módulo aberto: ${formatModuleName(moduleName)}.`);
}

function formatModuleName(name) {
  const names = {
    inicio: "Início",
    ia: "IA Geral",
    estudos: "Estudos",
    projetos: "Projetos",
    agenda: "Agenda",
    financas: "Finanças",
    habitos: "Saúde/Hábitos",
    musica: "Música/Vibe",
    documentos: "Documentos",
    pesquisa: "Pesquisa",
    missoes: "Missões",
    sistema: "Sistema"
  };

  return names[name] || name;
}

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showModule(button.dataset.module);
  });
});

// ======================================================
// IA GERAL LOCAL
// ======================================================

const aiInput = document.querySelector("#aiInput");
const aiButton = document.querySelector("#aiButton");
const aiAnswer = document.querySelector("#aiAnswer");

function askJarvis() {
  if (!aiInput || !aiAnswer) return;

  const question = aiInput.value.trim();

  if (!question) {
    aiAnswer.innerHTML = "<p>Digite uma pergunta para o J.A.R.V.I.S responder.</p>";
    return;
  }

  const response = generateLocalAnswer(question);

  aiAnswer.innerHTML = `
    <h3>Resposta J.A.R.V.I.S</h3>
    <p>${response}</p>
  `;

  addTerminalLine(`IA Geral processou: "${question}"`);
}

function generateLocalAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes("scrum")) {
    return "Scrum é uma metodologia ágil usada para organizar projetos em ciclos curtos chamados Sprints. Ela ajuda equipes a entregar valor de forma incremental.";
  }

  if (q.includes("kanban")) {
    return "Kanban é um método visual para organizar tarefas. Ele costuma usar colunas como A fazer, Em andamento e Concluído.";
  }

  if (q.includes("backlog")) {
    return "Backlog é uma lista de tarefas, funcionalidades ou demandas de um projeto. Ele deve ser priorizado conforme valor, urgência e dependências.";
  }

  if (q.includes("mvp")) {
    return "MVP significa Produto Mínimo Viável. É a primeira versão funcional de um produto, com apenas o essencial para entregar valor.";
  }

  if (q.includes("html")) {
    return "HTML é a linguagem usada para criar a estrutura de páginas web, como títulos, textos, seções, botões e links.";
  }

  if (q.includes("css")) {
    return "CSS é usado para deixar o site bonito, definindo cores, fontes, layout, animações e responsividade.";
  }

  if (q.includes("javascript") || q.includes("js")) {
    return "JavaScript adiciona interatividade ao site, como login, botões funcionando, respostas, animações e comandos.";
  }

  if (q.includes("finança") || q.includes("dinheiro") || q.includes("gasto")) {
    return "Para organizar finanças, registre entradas, gastos, metas e saldo. O ideal é separar o dinheiro por prioridade: essencial, objetivo e lazer.";
  }

  if (q.includes("rotina") || q.includes("hábitos") || q.includes("habitos")) {
    return "Uma rotina boa começa com poucos hábitos consistentes: dormir melhor, beber água, estudar em horários fixos e revisar suas metas do dia.";
  }

  if (q.includes("música") || q.includes("musica") || q.includes("playlist")) {
    return "Pelo seu estilo, uma boa vibe mistura rap/trap, R&B, indie, funk/brasilidades e músicas noturnas com energia de protagonista.";
  }

  if (q.includes("documento") || q.includes("pdf") || q.includes("texto")) {
    return "Para organizar documentos, o ideal é separar por tema, destacar ideias principais, resumir em tópicos e criar uma conclusão simples.";
  }

  if (q.includes("missão") || q.includes("missao") || q.includes("objetivo")) {
    return "Uma missão deve ser dividida em passos pequenos: objetivo principal, tarefas, prioridade, prazo e acompanhamento.";
  }

  if (q.includes("jarvis")) {
    return "J.A.R.V.I.S CORE é a central inteligente da Indústrias TH, criada para ajudar com perguntas, estudos, projetos, rotina, finanças, documentos e missões.";
  }

  if (q.includes("indústrias th") || q.includes("industrias th")) {
    return "Indústrias TH é a identidade do seu projeto, funcionando como uma central tecnológica criada por sr.stark.";
  }

  return "Ainda não tenho uma resposta completa para isso no modo local. Na Fase 2, com API de IA real, poderei responder perguntas muito mais amplas e complexas.";
}

if (aiButton) {
  aiButton.addEventListener("click", askJarvis);
}

if (aiInput) {
  aiInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      askJarvis();
    }
  });
}

// ======================================================
// ESTUDOS
// ======================================================

const studyButton = document.querySelector("#studyButton");
const studyText = document.querySelector("#studyText");
const studyResult = document.querySelector("#studyResult");

if (studyButton) {
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
      .slice(0, 6);

    studyResult.innerHTML = `
      <strong>Resumo em tópicos:</strong>
      <ul>
        ${sentences.map((sentence) => `<li>${sentence}.</li>`).join("")}
      </ul>
    `;

    addTerminalLine("Texto de estudos organizado em tópicos.");
  });
}

const exerciseTopic = document.querySelector("#exerciseTopic");
const exerciseButton = document.querySelector("#exerciseButton");
const exerciseResult = document.querySelector("#exerciseResult");

if (exerciseButton) {
  exerciseButton.addEventListener("click", () => {
    const topic = exerciseTopic.value.trim();

    if (!topic) {
      exerciseResult.textContent = "Digite um tema para gerar exercícios.";
      return;
    }

    exerciseResult.innerHTML = `
      <strong>Exercícios sobre ${topic}:</strong>
      <ol>
        <li>Explique com suas palavras o que é ${topic}.</li>
        <li>Cite um exemplo prático de uso de ${topic}.</li>
        <li>Qual é a importância de ${topic} no dia a dia?</li>
        <li>Crie um pequeno resumo sobre ${topic}.</li>
      </ol>
    `;

    addTerminalLine(`Exercícios gerados sobre: ${topic}.`);
  });
}

// ======================================================
// PROJETOS
// ======================================================

const projectInput = document.querySelector("#projectInput");
const projectButton = document.querySelector("#projectButton");
const projectResult = document.querySelector("#projectResult");

if (projectButton) {
  projectButton.addEventListener("click", () => {
    const project = projectInput.value.trim();

    if (!project) {
      projectResult.textContent = "Digite uma ideia de projeto.";
      return;
    }

    projectResult.innerHTML = `
      <strong>Checklist para ${project}:</strong>
      <ul>
        <li>Definir objetivo principal.</li>
        <li>Listar funcionalidades essenciais.</li>
        <li>Criar estrutura inicial dos arquivos.</li>
        <li>Desenvolver primeira versão funcional.</li>
        <li>Testar e corrigir erros.</li>
        <li>Publicar ou apresentar o projeto.</li>
      </ul>
    `;

    addTerminalLine(`Checklist criado para o projeto: ${project}.`);
  });
}

// ======================================================
// AGENDA
// ======================================================

const agendaInput = document.querySelector("#agendaInput");
const agendaButton = document.querySelector("#agendaButton");
const agendaList = document.querySelector("#agendaList");

if (agendaButton) {
  agendaButton.addEventListener("click", () => {
    const item = agendaInput.value.trim();

    if (!item) return;

    const li = document.createElement("li");
    li.textContent = item;

    agendaList.appendChild(li);
    agendaInput.value = "";

    addTerminalLine(`Novo lembrete adicionado: ${item}.`);
  });
}

// ======================================================
// FINANÇAS
// ======================================================

const incomeInput = document.querySelector("#incomeInput");
const expenseInput = document.querySelector("#expenseInput");
const financeButton = document.querySelector("#financeButton");
const financeResult = document.querySelector("#financeResult");

if (financeButton) {
  financeButton.addEventListener("click", () => {
    const income = Number(incomeInput.value);
    const expense = Number(expenseInput.value);
    const balance = income - expense;

    financeResult.innerHTML = `
      <strong>Resultado financeiro:</strong>
      <p>Entrada: R$ ${income.toFixed(2)}</p>
      <p>Gasto: R$ ${expense.toFixed(2)}</p>
      <p>Saldo: R$ ${balance.toFixed(2)}</p>
    `;

    addTerminalLine(`Finanças calculadas. Saldo: R$ ${balance.toFixed(2)}.`);
  });
}

const moneyGoalInput = document.querySelector("#moneyGoalInput");
const moneyGoalButton = document.querySelector("#moneyGoalButton");
const moneyGoalList = document.querySelector("#moneyGoalList");

if (moneyGoalButton) {
  moneyGoalButton.addEventListener("click", () => {
    const goal = moneyGoalInput.value.trim();

    if (!goal) return;

    const li = document.createElement("li");
    li.textContent = goal;

    moneyGoalList.appendChild(li);
    moneyGoalInput.value = "";

    addTerminalLine(`Meta financeira criada: ${goal}.`);
  });
}

// ======================================================
// SAÚDE / HÁBITOS
// ======================================================

const habitInput = document.querySelector("#habitInput");
const habitButton = document.querySelector("#habitButton");
const habitList = document.querySelector("#habitList");
const routineButton = document.querySelector("#routineButton");
const routineResult = document.querySelector("#routineResult");

if (habitButton) {
  habitButton.addEventListener("click", () => {
    const habit = habitInput.value.trim();

    if (!habit) return;

    const li = document.createElement("li");
    li.textContent = habit;

    habitList.appendChild(li);
    habitInput.value = "";

    addTerminalLine(`Novo hábito adicionado: ${habit}.`);
  });
}

if (routineButton) {
  routineButton.addEventListener("click", () => {
    routineResult.innerHTML = `
      <strong>Rotina simples sugerida:</strong>
      <ul>
        <li>Manhã: beber água, organizar o dia e revisar prioridades.</li>
        <li>Tarde: focar em tarefas principais e evitar distrações.</li>
        <li>Noite: revisar o que foi feito e preparar o próximo dia.</li>
        <li>Sono: tentar dormir em horário consistente.</li>
      </ul>
    `;

    addTerminalLine("Rotina simples gerada.");
  });
}

// ======================================================
// MÚSICA / VIBE
// ======================================================

const vibeSelect = document.querySelector("#vibeSelect");
const vibeButton = document.querySelector("#vibeButton");
const vibeResult = document.querySelector("#vibeResult");

if (vibeButton) {
  vibeButton.addEventListener("click", () => {
    const vibe = vibeSelect.value;

    const vibes = {
      foco: "Modo Foco: músicas calmas, beats leves, R&B suave e instrumentais.",
      madrugada: "Modo Madrugada: trap melancólico, R&B noturno, Lana, Frank Ocean, The Weeknd e vibe protagonista.",
      treino: "Modo Treino: trap pesado, rap energético, funk acelerado e batidas fortes.",
      protagonista: "Modo Protagonista: músicas estilosas, noturnas, com energia de confiança e evolução."
    };

    vibeResult.innerHTML = `<p>${vibes[vibe]}</p>`;

    addTerminalLine(`Vibe ativada: ${vibe}.`);
  });
}

// ======================================================
// DOCUMENTOS
// ======================================================

const documentText = document.querySelector("#documentText");
const documentButton = document.querySelector("#documentButton");
const documentResult = document.querySelector("#documentResult");

if (documentButton) {
  documentButton.addEventListener("click", () => {
    const text = documentText.value.trim();

    if (!text) {
      documentResult.textContent = "Cole um documento ou texto primeiro.";
      return;
    }

    const words = text.split(/\s+/).length;
    const preview = text.slice(0, 220);

    documentResult.innerHTML = `
      <strong>Documento analisado:</strong>
      <p>Total aproximado de palavras: ${words}</p>
      <p><strong>Início do texto:</strong> ${preview}${text.length > 220 ? "..." : ""}</p>
      <p>Sugestão: separe o documento em introdução, desenvolvimento e conclusão.</p>
    `;

    addTerminalLine("Documento organizado.");
  });
}

// ======================================================
// PESQUISA
// ======================================================

const researchInput = document.querySelector("#researchInput");
const researchButton = document.querySelector("#researchButton");
const researchResult = document.querySelector("#researchResult");

if (researchButton) {
  researchButton.addEventListener("click", () => {
    const topic = researchInput.value.trim();

    if (!topic) {
      researchResult.textContent = "Digite um tema de pesquisa.";
      return;
    }

    researchResult.innerHTML = `
      <strong>Roteiro de pesquisa sobre ${topic}:</strong>
      <ol>
        <li>Definir o conceito principal de ${topic}.</li>
        <li>Buscar exemplos práticos.</li>
        <li>Listar vantagens e desvantagens.</li>
        <li>Comparar com temas relacionados.</li>
        <li>Criar um resumo final em tópicos.</li>
      </ol>
    `;

    addTerminalLine(`Roteiro de pesquisa criado sobre: ${topic}.`);
  });
}

// ======================================================
// MISSÕES
// ======================================================

const missionInput = document.querySelector("#missionInput");
const missionButton = document.querySelector("#missionButton");
const missionResult = document.querySelector("#missionResult");
const missionList = document.querySelector("#missionList");

if (missionButton) {
  missionButton.addEventListener("click", () => {
    const mission = missionInput.value.trim();

    if (!mission) {
      missionResult.textContent = "Digite uma missão primeiro.";
      return;
    }

    missionResult.innerHTML = `
      <strong>Plano de ação para: ${mission}</strong>
      <ol>
        <li>Definir o resultado esperado.</li>
        <li>Dividir a missão em tarefas pequenas.</li>
        <li>Priorizar o que deve ser feito primeiro.</li>
        <li>Executar uma etapa por vez.</li>
        <li>Revisar o progresso no final do dia.</li>
      </ol>
    `;

    const li = document.createElement("li");
    li.textContent = mission;
    missionList.appendChild(li);

    missionInput.value = "";

    addTerminalLine(`Missão criada: ${mission}.`);
  });
}

// ======================================================
// COMANDOS DO TERMINAL
// ======================================================

const commandInput = document.querySelector("#commandInput");
const commandButton = document.querySelector("#commandButton");

function runCommand() {
  const command = commandInput.value.trim().toLowerCase();

  if (!command) return;

  addTerminalLine(`> ${command}`);
  commandInput.value = "";

  const commands = {
    ajuda: "Comandos: ajuda, status, ia, estudos, projetos, agenda, financas, habitos, musica, documentos, pesquisa, missoes, sistema, limpar, reiniciar.",
    status: "J.A.R.V.I.S CORE ONLINE | Núcleo estável | HUD Reactor ativo | API IA prevista para Fase 2."
  };

  if (commands[command]) {
    addTerminalLine(commands[command]);
    return;
  }

  if (command === "ia") return showModule("ia");
  if (command === "estudos") return showModule("estudos");
  if (command === "projetos") return showModule("projetos");
  if (command === "agenda") return showModule("agenda");
  if (command === "financas") return showModule("financas");
  if (command === "habitos") return showModule("habitos");
  if (command === "musica") return showModule("musica");
  if (command === "documentos") return showModule("documentos");
  if (command === "pesquisa") return showModule("pesquisa");
  if (command === "missoes") return showModule("missoes");
  if (command === "sistema") return showModule("sistema");

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
// PARTÍCULAS
// ======================================================

function createParticles() {
  const container = document.querySelector(".particles");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < 90; i++) {
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

// ======================================================
// RELÓGIO
// ======================================================

function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  if (clock) {
    clock.textContent = time;
  }
}

// ======================================================
// INICIALIZAÇÃO
// ======================================================

window.addEventListener("load", () => {
  createParticles();
  updateClock();
  setInterval(updateClock, 1000);

  if (loginScreen && systemScreen) {
    loginScreen.classList.remove("hidden");
    systemScreen.classList.add("hidden");
  }
});
