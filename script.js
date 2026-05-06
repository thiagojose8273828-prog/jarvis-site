// ===============================
// J.A.R.V.I.S CORE - STARK HUD UI
// ===============================

// LOGIN
const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const logoutButton = document.getElementById("logoutButton");

const validUser = "stark";
const validPassword = "1234";

function enterSystem() {
  loginScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");
  localStorage.setItem("jarvis_logged", "true");
}

function exitSystem() {
  appScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  localStorage.removeItem("jarvis_logged");
}

if (localStorage.getItem("jarvis_logged") === "true") {
  enterSystem();
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (username === validUser && password === validPassword) {
    loginMessage.style.color = "#00f0ff";
    loginMessage.textContent = "Acesso autorizado. Inicializando J.A.R.V.I.S...";

    setTimeout(function () {
      enterSystem();
    }, 800);
  } else {
    loginMessage.style.color = "#ff6f8f";
    loginMessage.textContent = "Acesso negado. Usuário ou senha incorretos.";
  }
});

logoutButton.addEventListener("click", exitSystem);

// RELÓGIOS
function updateClocks() {
  const now = new Date();

  const fullTime = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const shortTime = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const loginClock = document.getElementById("loginClock");
  const appClock = document.getElementById("appClock");

  if (loginClock) loginClock.textContent = fullTime;
  if (appClock) appClock.textContent = shortTime;
}

setInterval(updateClocks, 1000);
updateClocks();

// CONTEÚDOS DETALHADOS
const contents = {
  uc1: `
    <h2>UC1 — Requisitos e Funcionalidades</h2>

    <h3>O que são requisitos?</h3>
    <p>
      Requisitos são as necessidades que um sistema precisa atender. Eles mostram
      o que o sistema deve fazer, quais regras deve seguir e quais características
      precisa ter para funcionar corretamente.
    </p>

    <h3>Para que serve?</h3>
    <p>
      Serve para entender o problema antes de criar o sistema. Sem requisitos claros,
      a equipe pode desenvolver algo errado, incompleto ou diferente do que o cliente precisa.
    </p>

    <h3>Exemplo prático</h3>
    <p>
      Em um sistema de login, um requisito funcional seria:
    </p>

    <pre><code>O sistema deve permitir que o usuário faça login usando usuário e senha.</code></pre>

    <p>
      Um requisito não funcional seria:
    </p>

    <pre><code>O sistema deve carregar a página inicial em até 3 segundos.</code></pre>

    <h3>Tipos principais</h3>
    <ul>
      <li><strong>Requisito funcional:</strong> o que o sistema faz.</li>
      <li><strong>Requisito não funcional:</strong> como o sistema deve funcionar.</li>
      <li><strong>Regra de negócio:</strong> condição ou regra que vem da realidade do cliente.</li>
    </ul>

    <h3>Erro comum</h3>
    <p>
      Começar a programar sem entender o que o usuário realmente precisa.
    </p>

    <h3>Resumo rápido</h3>
    <p>
      Requisitos são a base do sistema. Eles transformam uma ideia em um projeto organizado.
    </p>
  `,

  uc2: `
    <h2>UC2 — Gestão de Projetos de TI</h2>

    <h3>O que é gestão de projetos?</h3>
    <p>
      Gestão de projetos é a organização das tarefas, prazos, pessoas, recursos e entregas
      necessárias para concluir um projeto com qualidade.
    </p>

    <h3>Para que serve?</h3>
    <p>
      Serve para evitar atraso, retrabalho, confusão na equipe e perda de controle do projeto.
    </p>

    <h3>Exemplo prático</h3>
    <p>
      Se a equipe precisa criar um site, o projeto pode ser dividido assim:
    </p>

    <pre><code>1. Criar layout
2. Criar HTML
3. Criar CSS
4. Criar JavaScript
5. Testar
6. Publicar no GitHub Pages</code></pre>

    <h3>Scrum</h3>
    <p>
      Scrum é uma metodologia ágil que organiza o trabalho em ciclos chamados sprints.
      Cada sprint possui tarefas, objetivos e uma entrega.
    </p>

    <h3>Kanban</h3>
    <p>
      Kanban é um quadro visual usado para acompanhar o andamento das tarefas.
    </p>

    <pre><code>A Fazer | Em Andamento | Concluído</code></pre>

    <h3>Erro comum</h3>
    <p>
      Tentar fazer tudo ao mesmo tempo sem definir prioridades.
    </p>

    <h3>Resumo rápido</h3>
    <p>
      Gestão de projetos ajuda a equipe a trabalhar com organização, prioridade e foco.
    </p>
  `,

  uc3: `
    <h2>UC3 — Desenvolver Algoritmos</h2>

    <h3>O que é algoritmo?</h3>
    <p>
      Algoritmo é uma sequência de passos usada para resolver um problema.
      Antes de programar, o algoritmo ajuda a organizar o raciocínio.
    </p>

    <h3>Exemplo do dia a dia</h3>
    <pre><code>1. Pegar um copo
2. Colocar água
3. Beber a água</code></pre>

    <h3>Exemplo em JavaScript</h3>
    <pre><code>let senha = "1234";

if (senha === "1234") {
  console.log("Acesso liberado");
} else {
  console.log("Senha incorreta");
}</code></pre>

    <h3>Explicação do código</h3>
    <ul>
      <li><strong>let senha</strong> cria uma variável.</li>
      <li><strong>if</strong> verifica uma condição.</li>
      <li><strong>else</strong> executa uma alternativa quando a condição é falsa.</li>
    </ul>

    <h3>Erro comum</h3>
    <p>
      Confundir <strong>=</strong> com <strong>===</strong>.
    </p>

    <pre><code>// Errado para comparar
if (senha = "1234") { }

// Correto para comparar
if (senha === "1234") { }</code></pre>

    <h3>Resumo rápido</h3>
    <p>
      Algoritmo é o passo a passo lógico para resolver um problema.
    </p>
  `,

  uc4: `
    <h2>UC4 — Programação Estruturada e Orientada a Objetos</h2>

    <h3>Programação estruturada</h3>
    <p>
      É um modelo de programação baseado em sequência, decisão, repetição e funções.
      Ele ajuda a organizar o código em partes menores.
    </p>

    <h3>Programação orientada a objetos</h3>
    <p>
      É um modelo baseado em objetos. Cada objeto possui características e ações.
    </p>

    <h3>Exemplo prático</h3>
    <p>
      Um carro pode ser representado como um objeto.
      Ele possui atributos como modelo e cor, e métodos como acelerar.
    </p>

    <pre><code>class Carro {
  constructor(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
  }

  acelerar() {
    console.log("O carro está acelerando");
  }
}

const carro1 = new Carro("Mustang", "azul");
carro1.acelerar();</code></pre>

    <h3>Conceitos importantes</h3>
    <ul>
      <li><strong>Classe:</strong> modelo para criar objetos.</li>
      <li><strong>Objeto:</strong> item criado a partir da classe.</li>
      <li><strong>Atributo:</strong> característica do objeto.</li>
      <li><strong>Método:</strong> ação que o objeto executa.</li>
    </ul>

    <h3>Erro comum</h3>
    <p>
      Criar classes sem entender a responsabilidade de cada uma.
    </p>

    <h3>Resumo rápido</h3>
    <p>
      Estruturada organiza o código em passos. POO organiza o código em objetos.
    </p>
  `,

  uc5: `
    <h2>UC5 — Desenvolver Aplicações Desktop</h2>

    <h3>O que é aplicação desktop?</h3>
    <p>
      É um sistema feito para rodar em um computador, como programas de estoque,
      vendas, cadastro ou controle interno.
    </p>

    <h3>Para que serve?</h3>
    <p>
      Serve para automatizar tarefas dentro de empresas, escolas, lojas e escritórios.
    </p>

    <h3>Estrutura comum de um sistema desktop</h3>
    <pre><code>Login
Dashboard
Cadastro
Consulta
Edição
Exclusão
Relatórios</code></pre>

    <h3>O que é CRUD?</h3>
    <ul>
      <li><strong>Create:</strong> criar/cadastrar.</li>
      <li><strong>Read:</strong> ler/consultar.</li>
      <li><strong>Update:</strong> atualizar/editar.</li>
      <li><strong>Delete:</strong> excluir.</li>
    </ul>

    <h3>Exemplo prático</h3>
    <p>
      Um sistema de estoque pode permitir cadastrar produtos, alterar quantidade,
      consultar itens e gerar relatórios.
    </p>

    <h3>Erro comum</h3>
    <p>
      Criar tela bonita sem validação de dados.
    </p>

    <h3>Resumo rápido</h3>
    <p>
      Aplicações desktop são programas que rodam no computador para resolver processos internos.
    </p>
  `,

  uc6: `
    <h2>UC6 — Criar e Manter Banco de Dados</h2>

    <h3>O que é banco de dados?</h3>
    <p>
      Banco de dados é um sistema usado para armazenar informações de forma organizada.
      Os dados geralmente ficam separados em tabelas, campos e registros.
    </p>

    <h3>Exemplo de tabela</h3>
    <pre><code>Tabela: alunos

id | nome   | email            | curso
1  | Carlos | carlos@email.com | TI
2  | Ana    | ana@email.com    | Web</code></pre>

    <h3>Criando tabela em SQL</h3>
    <pre><code>CREATE TABLE alunos (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  curso VARCHAR(100)
);</code></pre>

    <h3>Inserindo dados</h3>
    <pre><code>INSERT INTO alunos (id, nome, email, curso)
VALUES (1, 'Carlos', 'carlos@email.com', 'TI');</code></pre>

    <h3>Consultando dados</h3>
    <pre><code>SELECT * FROM alunos;</code></pre>

    <h3>Atualizando dados</h3>
    <pre><code>UPDATE alunos
SET curso = 'Desenvolvimento Web'
WHERE id = 1;</code></pre>

    <h3>Excluindo dados</h3>
    <pre><code>DELETE FROM alunos
WHERE id = 1;</code></pre>

    <h3>Erro comum</h3>
    <p>
      Esquecer o <strong>WHERE</strong> no UPDATE ou DELETE. Isso pode alterar ou apagar todos os registros.
    </p>

    <h3>Resumo rápido</h3>
    <p>
      Banco de dados guarda informações importantes do sistema de forma organizada.
    </p>
  `,

  uc7: `
    <h2>UC7 — Desenvolver Aplicações Web</h2>

    <h3>O que é aplicação web?</h3>
    <p>
      É um sistema acessado pelo navegador, como sites, dashboards, plataformas,
      sistemas de login e lojas virtuais.
    </p>

    <h3>Tecnologias principais</h3>
    <ul>
      <li><strong>HTML:</strong> estrutura da página.</li>
      <li><strong>CSS:</strong> aparência e design.</li>
      <li><strong>JavaScript:</strong> interatividade e lógica.</li>
    </ul>

    <h3>Exemplo de HTML</h3>
    <pre><code>&lt;h1&gt;Meu primeiro site&lt;/h1&gt;
&lt;p&gt;Bem-vindo ao portal de TI.&lt;/p&gt;</code></pre>

    <h3>Exemplo de CSS</h3>
    <pre><code>body {
  background: #020712;
  color: white;
}</code></pre>

    <h3>Exemplo de JavaScript</h3>
    <pre><code>const sistema = "J.A.R.V.I.S";
console.log("Sistema " + sistema + " iniciado.");</code></pre>

    <h3>Erro comum</h3>
    <p>
      Esquecer de conectar os arquivos CSS e JavaScript ao HTML.
    </p>

    <pre><code>&lt;link rel="stylesheet" href="style.css"&gt;
&lt;script src="script.js"&gt;&lt;/script&gt;</code></pre>

    <h3>Resumo rápido</h3>
    <p>
      Aplicações web são sistemas acessados pelo navegador e criados com HTML, CSS e JavaScript.
    </p>
  `,

  ia: `
    <h2>IA — Inteligência Artificial</h2>

    <h3>O que é IA?</h3>
    <p>
      Inteligência Artificial é uma área da tecnologia que cria sistemas capazes de responder,
      analisar, gerar textos, imagens, códigos e automatizar tarefas.
    </p>

    <h3>Exemplos</h3>
    <ul>
      <li>ChatGPT para responder perguntas e gerar códigos.</li>
      <li>Gemini para análise e criação de conteúdo.</li>
      <li>Copilot para ajudar na programação.</li>
      <li>Agentes de IA para executar tarefas automáticas.</li>
    </ul>

    <h3>Exemplo de prompt</h3>
    <pre><code>Explique banco de dados para iniciantes com exemplo em SQL.</code></pre>

    <h3>Resumo rápido</h3>
    <p>
      IA é uma ferramenta poderosa para estudo, programação, pesquisa e automação.
    </p>
  `,

  github: `
    <h2>GitHub — Repositórios e Código</h2>

    <h3>O que é GitHub?</h3>
    <p>
      GitHub é uma plataforma usada para guardar, versionar e publicar projetos de código.
    </p>

    <h3>Conceitos importantes</h3>
    <ul>
      <li><strong>Repositório:</strong> pasta do projeto online.</li>
      <li><strong>Commit:</strong> registro de uma alteração.</li>
      <li><strong>Branch:</strong> ramificação do projeto.</li>
      <li><strong>GitHub Pages:</strong> forma de publicar sites gratuitamente.</li>
    </ul>

    <h3>Resumo rápido</h3>
    <p>
      GitHub é essencial para portfólio, projetos e trabalho em equipe na área de TI.
    </p>
  `,

  automacoes: `
    <h2>Automações — n8n, APIs e Fluxos</h2>

    <h3>O que é automação?</h3>
    <p>
      Automação é usar tecnologia para executar tarefas repetitivas de forma automática.
    </p>

    <h3>Exemplos</h3>
    <ul>
      <li>Enviar e-mail automático.</li>
      <li>Salvar dados de formulário.</li>
      <li>Conectar IA com banco de dados.</li>
      <li>Criar bots e fluxos com n8n.</li>
    </ul>

    <h3>Resumo rápido</h3>
    <p>
      Automações economizam tempo e tornam sistemas mais inteligentes.
    </p>
  `,

  projetos: `
    <h2>Projetos — Portfólio e Entregas</h2>

    <h3>Por que fazer projetos?</h3>
    <p>
      Projetos mostram sua evolução prática. Na TI, portfólio é muito importante para estágio,
      emprego e aprendizado real.
    </p>

    <h3>Ideias de projetos</h3>
    <ul>
      <li>Sistema de login.</li>
      <li>Dashboard Kanban.</li>
      <li>Sistema CRUD.</li>
      <li>Portfólio pessoal.</li>
      <li>Chat com IA.</li>
      <li>Sistema com banco de dados.</li>
    </ul>

    <h3>Resumo rápido</h3>
    <p>
      Projetos são a prova prática de que você sabe aplicar tecnologia.
    </p>
  `
};

// MODAL
const modal = document.getElementById("contentModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const contentButtons = document.querySelectorAll("[data-content]");

function openModal(contentKey) {
  if (!contents[contentKey]) return;

  modalContent.innerHTML = contents[contentKey];
  modal.classList.remove("hidden");
}

function closeContentModal() {
  modal.classList.add("hidden");
  modalContent.innerHTML = "";
}

contentButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const key = button.getAttribute("data-content");
    openModal(key);
  });
});

closeModal.addEventListener("click", closeContentModal);

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeContentModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeContentModal();
  }
});

// PESQUISA
const searchInput = document.getElementById("searchInput");
const searchableItems = document.querySelectorAll(".searchable");
const searchStatus = document.getElementById("searchStatus");

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

searchInput.addEventListener("input", function () {
  const value = normalizeText(searchInput.value.trim());
  let found = 0;

  searchableItems.forEach(function (item) {
    const keywords = normalizeText(item.getAttribute("data-keywords") || item.innerText);

    if (value === "" || keywords.includes(value)) {
      item.classList.remove("no-results");
      found++;
    } else {
      item.classList.add("no-results");
    }
  });

  if (value === "") {
    searchStatus.textContent = "Digite algo para pesquisar no portal.";
  } else if (found === 0) {
    searchStatus.textContent = "Nenhum módulo encontrado.";
  } else if (found === 1) {
    searchStatus.textContent = "1 módulo encontrado.";
  } else {
    searchStatus.textContent = `${found} módulos encontrados.`;
  }
});

// CONTADORES
const totalUnits = document.getElementById("totalUnits");
const totalModules = document.getElementById("totalModules");

if (totalUnits) {
  totalUnits.textContent = document.querySelectorAll(".unit-card").length;
}

if (totalModules) {
  totalModules.textContent = document.querySelectorAll(".quick-card").length;
}

console.log("J.A.R.V.I.S CORE - Stark HUD Interface carregada.");
