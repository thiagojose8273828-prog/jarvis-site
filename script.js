// =======================================================
// J.A.R.V.I.S CORE — Indústrias TH
// Script principal atualizado
// Login + Painel Interno + UCs + Modal + Progresso
// Sem depender de home.html
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
const loginMessage = document.getElementById("loginMessage");

const logoutBtn = document.getElementById("logoutBtn");
const userNameDisplay = document.getElementById("userNameDisplay");

const loginClock = document.getElementById("loginClock");
const appClock = document.getElementById("appClock");

const progressPercentText = document.getElementById("progressPercentText");
const progressDescription = document.getElementById("progressDescription");
const generalProgressFill = document.getElementById("generalProgressFill");

const resetProgressBtn = document.getElementById("resetProgressBtn");

const ucCards = document.querySelectorAll(".uc-card");

const contentModal = document.getElementById("contentModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");


// =======================================================
// 3. CONTEÚDOS DAS UCs
// =======================================================

const conteudosUC = {
  uc1: {
    titulo: "UC 1 — Análise de Requisitos",
    conteudo: `
      <h2>Análise de Requisitos</h2>

      <p>
        A Análise de Requisitos é uma etapa fundamental no desenvolvimento de software.
        Ela serve para entender o que o sistema precisa fazer, quais regras deve seguir,
        quais limitações existem e quais necessidades dos usuários precisam ser atendidas.
      </p>

      <h3>O que são requisitos de software?</h3>
      <p>
        Requisitos de software são descrições das funções, características e restrições
        que um sistema deve atender. Eles ajudam a equipe a projetar, implementar,
        testar e manter o sistema corretamente.
      </p>

      <h3>Tipos principais de requisitos</h3>
      <ul>
        <li>
          <strong>Requisitos funcionais:</strong> descrevem o que o sistema deve fazer.
          Exemplo: cadastrar usuários, fazer login, publicar conteúdo ou gerar relatórios.
        </li>

        <li>
          <strong>Requisitos não funcionais:</strong> descrevem como o sistema deve funcionar.
          Exemplo: desempenho, usabilidade, segurança, disponibilidade e acessibilidade.
        </li>

        <li>
          <strong>Requisitos de negócio:</strong> representam os objetivos que o sistema
          precisa alcançar para a empresa ou instituição.
        </li>

        <li>
          <strong>Requisitos de sistema:</strong> definem condições técnicas, como
          compatibilidade com navegadores e capacidade de usuários simultâneos.
        </li>

        <li>
          <strong>Requisitos de usuário:</strong> representam necessidades vistas pelo
          ponto de vista do usuário final.
        </li>
      </ul>

      <h3>Exemplos de requisitos funcionais</h3>
      <pre><code>RF1: O sistema deve permitir o cadastro de usuários.

RF2: O sistema deve permitir que usuários registrados façam login.

RF3: O sistema deve permitir que usuários autenticados publiquem conteúdos.</code></pre>

      <h3>Exemplos de requisitos não funcionais</h3>
      <pre><code>RNF1: O sistema deve responder às interações do usuário em menos de 2 segundos.

RNF2: O sistema deve estar disponível 99,9% do tempo.

RNF3: As informações dos usuários devem ser protegidas durante transmissão e armazenamento.

RNF4: O sistema deve ser escalável para suportar aumento de usuários.</code></pre>

      <h3>Por que isso é importante?</h3>
      <p>
        Sem requisitos bem definidos, o projeto pode sofrer retrabalho, atrasos,
        erros de comunicação e entregas diferentes do que o cliente realmente precisa.
      </p>

      <h3>Resumo para prova</h3>
      <p>
        Requisitos são a base do sistema. Eles indicam o que será desenvolvido,
        como o sistema deve funcionar, quais regras devem ser respeitadas e quais
        necessidades dos usuários serão atendidas.
      </p>

      <h3>Atividade prática</h3>
      <ul>
        <li>Escolha um sistema, como escola, mercado ou aplicativo.</li>
        <li>Liste 5 requisitos funcionais.</li>
        <li>Liste 3 requisitos não funcionais.</li>
        <li>Crie 2 requisitos de usuário.</li>
        <li>Explique por que esses requisitos são importantes.</li>
      </ul>
    `
  },

  uc2: {
    titulo: "UC 2 — Gestão de Projetos",
    conteudo: `
      <h2>Gestão de Projetos</h2>

      <p>
        Gestão de Projetos é a área responsável por organizar tarefas, pessoas,
        prazos, recursos, riscos e entregas para alcançar um objetivo definido.
        Em tecnologia, ela é usada para desenvolver sites, sistemas, aplicativos,
        bancos de dados, automações e soluções digitais.
      </p>

      <h3>O que é um projeto?</h3>
      <p>
        Um projeto é um esforço temporário criado para entregar um produto,
        serviço ou resultado exclusivo. Ele tem início, fim, objetivos específicos,
        recursos limitados e partes interessadas.
      </p>

      <h3>Importância da gestão de projetos</h3>
      <ul>
        <li>Ajuda a alinhar o projeto aos objetivos da organização.</li>
        <li>Controla custos, prazos e riscos.</li>
        <li>Melhora a comunicação entre a equipe.</li>
        <li>Aumenta a eficiência e a produtividade.</li>
        <li>Garante que o resultado entregue tenha qualidade.</li>
        <li>Ajuda a lidar com mudanças e problemas durante o projeto.</li>
      </ul>

      <h3>Fases de um projeto</h3>
      <ol>
        <li>
          <strong>Conceituação:</strong> identificação da ideia, necessidade,
          objetivos e viabilidade.
        </li>

        <li>
          <strong>Planejamento:</strong> definição de escopo, cronograma,
          orçamento, riscos, tarefas e responsabilidades.
        </li>

        <li>
          <strong>Execução:</strong> realização do trabalho planejado pela equipe.
        </li>

        <li>
          <strong>Monitoramento e controle:</strong> acompanhamento do progresso,
          comparação com o plano e correção de desvios.
        </li>

        <li>
          <strong>Encerramento:</strong> entrega final, aceite do cliente,
          documentação e lições aprendidas.
        </li>
      </ol>

      <h3>Metodologia tradicional — Cascata</h3>
      <p>
        A metodologia tradicional, como o modelo Cascata, é sequencial e linear.
        Cada fase precisa terminar antes da próxima começar. Ela valoriza planejamento
        detalhado, documentação extensa e entrega final completa.
      </p>

      <h4>Características da Cascata</h4>
      <ul>
        <li>Processo sequencial.</li>
        <li>Planejamento detalhado no início.</li>
        <li>Documentação forte.</li>
        <li>Mudanças são mais difíceis.</li>
        <li>Entrega geralmente ocorre no final do projeto.</li>
      </ul>

      <h3>Metodologias ágeis</h3>
      <p>
        As metodologias ágeis valorizam flexibilidade, colaboração, feedback
        constante e entregas incrementais. Elas surgiram como resposta aos problemas
        de rigidez das metodologias tradicionais.
      </p>

      <h4>Características das metodologias ágeis</h4>
      <ul>
        <li>Colaboração próxima entre equipe e cliente.</li>
        <li>Flexibilidade para mudanças.</li>
        <li>Entregas em pequenas partes funcionais.</li>
        <li>Comunicação direta.</li>
        <li>Foco em entregar valor ao cliente.</li>
      </ul>

      <h3>Exemplos de métodos ágeis</h3>
      <ul>
        <li>
          <strong>Scrum:</strong> trabalha com ciclos chamados sprints e papéis definidos.
        </li>

        <li>
          <strong>Kanban:</strong> usa quadro visual com colunas como A Fazer,
          Em Andamento e Concluído.
        </li>

        <li>
          <strong>XP:</strong> foca em qualidade de software, testes, comunicação
          e entregas frequentes.
        </li>
      </ul>

      <h3>Kanban</h3>
      <p>
        Kanban é um sistema visual de gerenciamento de fluxo de trabalho. Ele ajuda
        a equipe a enxergar o que precisa ser feito, o que está em andamento e o que
        já foi concluído.
      </p>

      <pre><code>A FAZER:
- Criar login
- Criar cadastro

EM ANDAMENTO:
- Criar painel interno

CONCLUÍDO:
- Tela inicial do site</code></pre>

      <h3>Ágil x Tradicional</h3>
      <table>
        <thead>
          <tr>
            <th>Critério</th>
            <th>Tradicional</th>
            <th>Ágil</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Planejamento</td>
            <td>Detalhado no início</td>
            <td>Iterativo e adaptável</td>
          </tr>

          <tr>
            <td>Mudanças</td>
            <td>Difíceis e caras</td>
            <td>Esperadas e bem-vindas</td>
          </tr>

          <tr>
            <td>Entrega</td>
            <td>No final do projeto</td>
            <td>Em partes frequentes</td>
          </tr>

          <tr>
            <td>Cliente</td>
            <td>Participa menos</td>
            <td>Participa continuamente</td>
          </tr>
        </tbody>
      </table>

      <h3>Resumo para prova</h3>
      <p>
        Gestão de projetos serve para organizar o trabalho e garantir entregas com
        qualidade. A metodologia tradicional é mais rígida e sequencial. A metodologia
        ágil é mais flexível, colaborativa e trabalha com entregas frequentes.
      </p>
    `
  },

  uc3: {
    titulo: "UC 3 — Scrum na Prática",
    conteudo: `
      <h2>Scrum na Prática</h2>

      <p>
        Scrum é um framework ágil usado para gerenciar projetos complexos.
        Ele trabalha com ciclos curtos, entregas incrementais, transparência,
        colaboração, melhoria contínua e foco no cliente.
      </p>

      <h3>Scrum x Cascata</h3>
      <table>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>Cascata / Tradicional</th>
            <th>Scrum / Ágil</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Planejamento</td>
            <td>Detalhado no início, com requisitos fixos</td>
            <td>Iterativo, com requisitos evolutivos</td>
          </tr>

          <tr>
            <td>Time</td>
            <td>Hierárquico e especializado</td>
            <td>Multifuncional e auto-organizado</td>
          </tr>

          <tr>
            <td>Entrega</td>
            <td>Entrega única ao final</td>
            <td>Entregas incrementais a cada sprint</td>
          </tr>

          <tr>
            <td>Mudanças</td>
            <td>Caras e evitadas</td>
            <td>Esperadas e bem-vindas</td>
          </tr>

          <tr>
            <td>Riscos</td>
            <td>Tratados principalmente no início</td>
            <td>Reduzidos por feedback frequente</td>
          </tr>
        </tbody>
      </table>

      <h3>Os 3 pilares do Scrum</h3>
      <ul>
        <li>
          <strong>Transparência:</strong> todos conseguem enxergar o progresso,
          os processos e os impedimentos.
        </li>

        <li>
          <strong>Inspeção:</strong> o trabalho é revisado com frequência para
          encontrar problemas cedo.
        </li>

        <li>
          <strong>Adaptação:</strong> a equipe ajusta o processo e o produto
          para manter o valor e o objetivo.
        </li>
      </ul>

      <h3>5 valores essenciais do Scrum</h3>
      <ul>
        <li><strong>Comprometimento:</strong> dedicação às metas da sprint.</li>
        <li><strong>Coragem:</strong> enfrentar mudanças, desafios e feedbacks.</li>
        <li><strong>Foco:</strong> priorizar o Sprint Backlog e evitar dispersão.</li>
        <li><strong>Abertura:</strong> comunicação clara e transparente.</li>
        <li><strong>Respeito:</strong> valorizar todos os membros do time.</li>
      </ul>

      <h3>Papéis do Scrum</h3>

      <h4>Product Owner</h4>
      <p>
        Representa os stakeholders e o cliente. É responsável por maximizar o valor
        do produto, gerenciar o Product Backlog e definir prioridades.
      </p>

      <h4>Scrum Master</h4>
      <p>
        Facilita o processo Scrum, remove impedimentos, ajuda o time a seguir o
        framework e promove a cultura ágil.
      </p>

      <h4>Time de Desenvolvimento</h4>
      <p>
        Equipe multifuncional e auto-organizada responsável por transformar os itens
        do backlog em incrementos entregáveis.
      </p>

      <h3>Artefatos do Scrum</h3>
      <ul>
        <li>
          <strong>Product Backlog:</strong> lista priorizada de requisitos,
          funcionalidades, melhorias e correções.
        </li>

        <li>
          <strong>Sprint Backlog:</strong> itens escolhidos para serem feitos
          durante uma sprint.
        </li>

        <li>
          <strong>Incremento:</strong> resultado pronto e potencialmente entregável
          ao final da sprint.
        </li>
      </ul>

      <h3>Eventos do Scrum</h3>
      <ul>
        <li>
          <strong>Sprint Planning:</strong> define o que será feito e como será feito
          na sprint.
        </li>

        <li>
          <strong>Daily Scrum:</strong> reunião diária rápida, normalmente de 15 minutos,
          para sincronizar o time.
        </li>

        <li>
          <strong>Sprint Review:</strong> demonstração do incremento para receber feedback.
        </li>

        <li>
          <strong>Sprint Retrospective:</strong> reunião para analisar o que funcionou,
          o que pode melhorar e quais ações tomar.
        </li>
      </ul>

      <h3>Fluxo da Sprint</h3>
      <pre><code>1. Product Backlog
2. Sprint Planning
3. Sprint Backlog
4. Desenvolvimento
5. Daily Scrum
6. Incremento
7. Sprint Review
8. Sprint Retrospective
9. Próxima Sprint</code></pre>

      <h3>Story Points</h3>
      <p>
        Story Points são usados para estimar complexidade relativa, não tempo exato.
        Muitas equipes usam a escala Fibonacci: 1, 2, 3, 5, 8 e 13.
      </p>

      <h3>Boas práticas no Scrum</h3>
      <ul>
        <li>Manter o backlog sempre atualizado.</li>
        <li>Definir uma Definition of Done clara.</li>
        <li>Comunicar impedimentos rapidamente.</li>
        <li>Entregar valor frequentemente.</li>
        <li>Usar retrospectivas para melhorar continuamente.</li>
      </ul>

      <h3>Erros comuns no Scrum</h3>
      <ul>
        <li>Transformar a Daily em reunião de cobrança.</li>
        <li>Começar sprints sem objetivo claro.</li>
        <li>Manter backlog desatualizado.</li>
        <li>Ignorar impedimentos.</li>
        <li>Fazer microgerenciamento do time.</li>
      </ul>

      <h3>Resumo para prova</h3>
      <p>
        Scrum é um framework ágil baseado em transparência, inspeção e adaptação.
        Ele usa papéis, eventos e artefatos para organizar entregas incrementais,
        melhorar a comunicação e entregar valor continuamente.
      </p>
    `
  }
};


// =======================================================
// 4. INICIALIZAÇÃO
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
  verificarLoginSalvo();
  carregarProgressoUCs();
  atualizarProgressoGeral();
  atualizarRelogios();
});


// =======================================================
// 5. LOGIN
// =======================================================

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usuarioDigitado = usernameInput.value.trim().toLowerCase();
    const senhaDigitada = passwordInput.value.trim();

    if (usuarioDigitado === USUARIO_CORRETO && senhaDigitada === SENHA_CORRETA) {
      mostrarMensagemLogin("Acesso autorizado. Inicializando J.A.R.V.I.S...", "sucesso");

      localStorage.setItem(STORAGE_LOGIN, "true");
      localStorage.setItem(STORAGE_USUARIO, usuarioDigitado);

      setTimeout(() => {
        abrirPainel(usuarioDigitado);

        usernameInput.value = "";
        passwordInput.value = "";
      }, 600);
    } else {
      mostrarMensagemLogin("Acesso negado. Usuário ou senha incorretos.", "erro");
      passwordInput.value = "";
    }
  });
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

  if (userNameDisplay) {
    userNameDisplay.textContent = formatarNome(usuario);
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
  if (!loginMessage) return;

  loginMessage.textContent = texto;

  if (tipo === "erro") {
    loginMessage.style.color = "#ff5f7e";
  } else if (tipo === "sucesso") {
    loginMessage.style.color = "#00eaff";
  } else {
    loginMessage.style.color = "#9acbd7";
  }
}


function formatarNome(nome) {
  if (!nome) return "Stark";

  return nome.charAt(0).toUpperCase() + nome.slice(1);
}


// =======================================================
// 6. LOGOUT
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
// 7. PROGRESSO DAS UCs
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

      if (miniProgressFill) {
        miniProgressFill.style.width = "100%";
      }
    } else {
      card.classList.remove("completed");

      if (status) status.textContent = "Em andamento";

      if (completeBtn) {
        completeBtn.textContent = "Concluir UC";
        completeBtn.disabled = false;
      }

      if (miniProgressFill) {
        miniProgressFill.style.width = "35%";
      }
    }
  });
}


function atualizarProgressoGeral() {
  const totalUCs = ucCards.length;
  const ucsConcluidas = pegarUCsConcluidas();

  const totalConcluidas = ucsConcluidas.filter((ucId) => {
    return document.querySelector(`.uc-card[data-uc="${ucId}"]`);
  }).length;

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
// 8. BOTÕES DAS UCs
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
      const ucId = card.dataset.uc;
      abrirConteudoUC(ucId);
    });
  }
});


// =======================================================
// 9. RESETAR PROGRESSO
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
// 10. MODAL DE CONTEÚDO
// =======================================================

function abrirConteudoUC(ucId) {
  const uc = conteudosUC[ucId];

  if (!uc || !contentModal || !modalContent) {
    return;
  }

  const ucsConcluidas = pegarUCsConcluidas();
  const concluida = ucsConcluidas.includes(ucId);

  modalContent.innerHTML = `
    <div class="modal-title-area">
      <p class="system-label">Base de conhecimento</p>
      <h2>${uc.titulo}</h2>
    </div>

    <div class="modal-content-body">
      ${uc.conteudo}
    </div>

    <div class="modal-actions">
      <button
        type="button"
        class="complete-modal-btn ${concluida ? "done" : ""}"
        data-modal-complete="${ucId}"
        ${concluida ? "disabled" : ""}
      >
        ${concluida ? "UC Concluída" : "Concluir UC"}
      </button>
    </div>
  `;

  contentModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}


function fecharModal() {
  if (!contentModal || !modalContent) return;

  contentModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
  modalContent.innerHTML = "";
}


if (closeModal) {
  closeModal.addEventListener("click", fecharModal);
}


if (contentModal) {
  contentModal.addEventListener("click", (event) => {
    if (event.target === contentModal) {
      fecharModal();
    }
  });
}


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    fecharModal();
  }
});


if (modalContent) {
  modalContent.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-modal-complete]");

    if (!btn) return;

    const ucId = btn.dataset.modalComplete;

    concluirUC(ucId);

    btn.textContent = "UC Concluída";
    btn.disabled = true;
    btn.classList.add("done");
  });
}


// =======================================================
// 11. RELÓGIOS
// =======================================================

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

  if (loginClock) {
    loginClock.textContent = horaCompleta;
  }

  if (appClock) {
    appClock.textContent = horaCurta;
  }
}

setInterval(atualizarRelogios, 1000);


// =======================================================
// 12. LOG DO SISTEMA
// =======================================================

console.log("J.A.R.V.I.S CORE carregado com sucesso.");
console.log("Login: stark");
console.log("Senha: 1234");
