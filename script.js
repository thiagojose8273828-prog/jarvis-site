// =======================================================
// J.A.R.V.I.S CORE — Indústrias TH
// Novo script principal
// Login + Painel interno + Progresso das UCs
// Sem redirecionar para home.html
// =======================================================


// =======================================================
// 1. CONFIGURAÇÕES DO SISTEMA
// =======================================================

const USUARIO_CORRETO = "stark";
const SENHA_CORRETA = "1234";

const STORAGE_LOGIN = "jarvis_logado";
const STORAGE_USUARIO = "jarvis_usuario";
const STORAGE_UCS = "jarvis_ucs_concluidas";


// =======================================================
// 2. ELEMENTOS PRINCIPAIS
// =======================================================

const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Compatível com HTML novo e antigo
const loginError =
  document.getElementById("loginError") ||
  document.getElementById("loginMessage");

const logoutBtn =
  document.getElementById("logoutBtn") ||
  document.getElementById("logoutButton");

const userNameDisplay = document.getElementById("userNameDisplay");

const progressPercentText =
  document.getElementById("progressPercentText") ||
  document.getElementById("progressText");

const progressDescription =
  document.getElementById("progressDescription") ||
  document.getElementById("progressDetails");

const generalProgressFill =
  document.getElementById("generalProgressFill") ||
  document.getElementById("progressFill");

const resetProgressBtn = document.getElementById("resetProgressBtn");

const ucCards = document.querySelectorAll(".uc-card");


// =======================================================
// 3. INICIAR SISTEMA
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
  verificarLoginSalvo();
  carregarProgressoUCs();
  atualizarProgressoGeral();
});


// =======================================================
// 4. LOGIN
// =======================================================

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usuarioDigitado = usernameInput.value.trim().toLowerCase();
    const senhaDigitada = passwordInput.value.trim();

    if (usuarioDigitado === USUARIO_CORRETO && senhaDigitada === SENHA_CORRETA) {
      salvarLogin(usuarioDigitado);
      abrirPainel(usuarioDigitado);

      usernameInput.value = "";
      passwordInput.value = "";

      mostrarMensagemLogin("", "normal");
    } else {
      mostrarMensagemLogin("Acesso negado. Usuário ou senha incorretos.", "erro");
      passwordInput.value = "";
    }
  });
}

function salvarLogin(usuario) {
  localStorage.setItem(STORAGE_LOGIN, "true");
  localStorage.setItem(STORAGE_USUARIO, usuario);
}

function verificarLoginSalvo() {
  const estaLogado = localStorage.getItem(STORAGE_LOGIN);
  const usuarioSalvo = localStorage.getItem(STORAGE_USUARIO) || "stark";

  if (estaLogado === "true") {
    abrirPainel(usuarioSalvo);
  } else {
    mostrarLogin();
  }
}

function abrirPainel(usuario) {
  if (!loginScreen || !appScreen) return;

  loginScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");

  const nomeFormatado = formatarNome(usuario);

  if (userNameDisplay) {
    userNameDisplay.textContent = nomeFormatado;
  }

  carregarProgressoUCs();
  atualizarProgressoGeral();
}

function mostrarLogin() {
  if (!loginScreen || !appScreen) return;

  appScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
}

function mostrarMensagemLogin(texto, tipo) {
  if (!loginError) return;

  loginError.textContent = texto;

  if (tipo === "erro") {
    loginError.style.color = "#ff5f7e";
  } else if (tipo === "sucesso") {
    loginError.style.color = "#00eaff";
  } else {
    loginError.style.color = "#9acbd7";
  }
}

function formatarNome(nome) {
  if (!nome) return "Stark";
  return nome.charAt(0).toUpperCase() + nome.slice(1);
}


// =======================================================
// 5. LOGOUT
// =======================================================

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.setItem(STORAGE_LOGIN, "false");

    mostrarLogin();

    if (usernameInput) usernameInput.value = "";
    if (passwordInput) passwordInput.value = "";

    mostrarMensagemLogin("Usuário: stark • Senha: 1234", "normal");
  });
}


// =======================================================
// 6. PROGRESSO DAS UNIDADES CURRICULARES
// =======================================================

function pegarUCsConcluidas() {
  const dadosSalvos = localStorage.getItem(STORAGE_UCS);

  if (!dadosSalvos) {
    return [];
  }

  try {
    return JSON.parse(dadosSalvos);
  } catch (error) {
    console.error("Erro ao carregar progresso das UCs:", error);
    return [];
  }
}

function salvarUCsConcluidas(lista) {
  localStorage.setItem(STORAGE_UCS, JSON.stringify(lista));
}

function concluirUC(ucId) {
  let ucsConcluidas = pegarUCsConcluidas();

  if (!ucsConcluidas.includes(ucId)) {
    ucsConcluidas.push(ucId);
    salvarUCsConcluidas(ucsConcluidas);
  }

  carregarProgressoUCs();
  atualizarProgressoGeral();
}

function carregarProgressoUCs() {
  const ucsConcluidas = pegarUCsConcluidas();

  ucCards.forEach((card) => {
    const ucId = card.dataset.uc;

    const status = card.querySelector(".uc-status");
    const completeBtn = card.querySelector(".complete-uc-btn");
    const miniProgressFill = card.querySelector(".mini-progress-fill");

    if (ucsConcluidas.includes(ucId)) {
      card.classList.add("completed");

      if (status) status.textContent = "Concluída";
      if (completeBtn) {
        completeBtn.textContent = "UC Concluída";
        completeBtn.disabled = true;
      }
      if (miniProgressFill) miniProgressFill.style.width = "100%";
    } else {
      card.classList.remove("completed");

      if (status) status.textContent = "Em andamento";
      if (completeBtn) {
        completeBtn.textContent = "Concluir UC";
        completeBtn.disabled = false;
      }
      if (miniProgressFill) miniProgressFill.style.width = "35%";
    }
  });
}

function atualizarProgressoGeral() {
  const totalUCs = ucCards.length;
  const ucsConcluidas = pegarUCsConcluidas();
  const totalConcluidas = ucsConcluidas.length;

  const porcentagem =
    totalUCs === 0 ? 0 : Math.round((totalConcluidas / totalUCs) * 100);

  if (progressPercentText) {
    progressPercentText.textContent = `${porcentagem}%`;
  }

  if (progressDescription) {
    progressDescription.textContent =
      `${totalConcluidas} de ${totalUCs} unidades curriculares concluídas.`;
  }

  if (generalProgressFill) {
    generalProgressFill.style.width = `${porcentagem}%`;
  }
}


// =======================================================
// 7. BOTÕES DAS UCs
// =======================================================

ucCards.forEach((card) => {
  const completeBtn = card.querySelector(".complete-uc-btn");
  const openBtn = card.querySelector(".open-content-btn");

  if (completeBtn) {
    completeBtn.addEventListener("click", () => {
      const ucId = card.dataset.uc;
      concluirUC(ucId);
    });
  }

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      const tituloUC = card.querySelector("h3")?.textContent || "Unidade Curricular";
      alert(`Abrindo conteúdo de: ${tituloUC}`);
    });
  }
});


// =======================================================
// 8. RESETAR PROGRESSO
// =======================================================

if (resetProgressBtn) {
  resetProgressBtn.addEventListener("click", () => {
    const confirmar = confirm("Deseja realmente resetar o progresso das UCs?");

    if (confirmar) {
      localStorage.removeItem(STORAGE_UCS);

      carregarProgressoUCs();
      atualizarProgressoGeral();
    }
  });
}


// =======================================================
// 9. RELÓGIO OPCIONAL
// Funciona se existir loginClock ou appClock no HTML
// =======================================================

const loginClock = document.getElementById("loginClock");
const appClock = document.getElementById("appClock");

function atualizarRelogios() {
  const agora = new Date();

  const horaCompleta = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const horaCurta = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  if (loginClock) loginClock.textContent = horaCompleta;
  if (appClock) appClock.textContent = horaCurta;
}

setInterval(atualizarRelogios, 1000);
atualizarRelogios();


// =======================================================
// 10. LOG DO SISTEMA
// =======================================================

console.log("J.A.R.V.I.S CORE carregado com sucesso.");
console.log("Login: stark");
console.log("Senha: 1234");
