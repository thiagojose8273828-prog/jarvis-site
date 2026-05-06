// ===========================================
// J.A.R.V.I.S CORE — Sistema de Estudos
// Login + Dashboard + Conteúdos + Progresso
// ===========================================

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

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  if (usernameInput) usernameInput.value = "";
  if (passwordInput) passwordInput.value = "";

  loginMessage.style.color = "#9acbd7";
  loginMessage.textContent = "Usuário: stark • Senha: 1234";
}

if (localStorage.getItem("jarvis_logged") === "true") {
  enterSystem();
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (username === validUser && password === validPassword) {
    loginMessage.style.color = "#00eaff";
    loginMessage.textContent = "Acesso autorizado. Inicializando J.A.R.V.I.S...";

    setTimeout(function () {
      enterSystem();
    }, 700);
  } else {
    loginMessage.style.color = "#ff5f7e";
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

// CONTEÚDOS
const contents = {
  uc1: `
    <h2>UC1 — Requisitos de Software</h2>

    <h3>O que são requisitos?</h3>
    <p>
      Requisitos são as necessidades, regras e funcionalidades que um sistema precisa atender.
      Eles explicam o que o sistema deve fazer, como deve funcionar e quais problemas precisa resolver.
    </p>

    <h3>Por que requisitos são importantes?</h3>
    <p>
      Antes de programar, a equipe precisa entender o que o cliente quer. Sem requisitos claros,
      o projeto pode ter retrabalho, atraso, erro de comunicação e entrega incompleta.
    </p>

    <h3>Tipos de requisitos</h3>
    <ul>
      <li><strong>Requisitos funcionais:</strong> mostram o que o sistema deve fazer.</li>
      <li><strong>Requisitos não funcionais:</strong> mostram como o sistema deve funcionar.</li>
      <li><strong>Regras de negócio:</strong> regras específicas da empresa ou instituição.</li>
      <li><strong>Stakeholders:</strong> pessoas interessadas no sistema, como alunos, empresas e instituição.</li>
    </ul>

    <h3>Exemplos práticos</h3>
    <pre><code>Requisito funcional:
O sistema deve permitir que o aluno faça cadastro.

Requisito não funcional:
O sistema deve carregar a tela inicial em até 3 segundos.

Regra de negócio:
A empresa só pode publicar vagas após ter cadastro aprovado.</code></pre>

    <h3>História de usuário</h3>
    <p>
      História de usuário é uma forma simples de escrever uma necessidade.
    </p>

    <pre><code>Como aluno,
quero me cadastrar no sistema,
para poder acessar vagas de estágio.</code></pre>

    <h3>Imagens conceituais</h3>
    <div class="image-concepts">
      <div class="concept-image">Checklist de requisitos</div>
      <div class="concept-image">Cliente e analista</div>
      <div class="concept-image">Fluxograma do sistema</div>
    </div>

    <h3>Atividade prática</h3>
    <ul>
      <li>Escolha um sistema, como escola, mercado ou aplicativo.</li>
      <li>Liste 5 requisitos funcionais.</li>
      <li>Liste 3 requisitos não funcionais.</li>
      <li>Crie 3 histórias de usuário.</li>
      <li>Identifique os stakeholders.</li>
    </ul>

    <h3>Resumo para prova</h3>
    <p>
      Requisitos são a base de qualquer sistema. Eles ajudam a equipe a entender o que deve ser feito,
      evitam retrabalho e tornam o projeto mais organizado.
    </p>
  `,

  uc2: `
    <h2>UC2 — Gestão de Projetos</h2>

    <h3>O que é gestão de projetos?</h3>
    <p>
      Gestão de projetos é a organização de tarefas, prazos, pessoas, recursos e entregas
      para alcançar um objetivo. Em TI, isso pode envolver sites, sistemas, aplicativos,
      bancos de dados e automações.
    </p>

    <h3>Conceitos principais</h3>
    <ul>
      <li><strong>Projeto:</strong> trabalho temporário com objetivo definido.</li>
      <li><strong>Escopo:</strong> define o que será feito e o que não será feito.</li>
      <li><strong>Backlog:</strong> lista de tarefas e funcionalidades.</li>
      <li><strong>Sprint:</strong> ciclo curto de trabalho em métodos ágeis.</li>
      <li><strong>Kanban:</strong> quadro visual para acompanhar tarefas.</li>
      <li><strong>Scrum:</strong> framework ágil para organizar entregas.</li>
      <li><strong>Cascata:</strong> modelo tradicional, sequencial e rígido.</li>
    </ul>

    <h3>Exemplo de backlog</h3>
    <pre><code>Projeto: Sistema de Gestão de Estágios

1. Cadastro de usuário
2. Login
3. Cadastro de vagas
4. Listagem de vagas
5. Candidatura a vagas
6. Visualização de candidatos
7. Aprovação ou rejeição
8. Notificações
9. Relatórios</code></pre>

    <h3>Exemplo de Kanban</h3>
    <pre><code>A FAZER:
- Cadastro de usuário
- Login

EM ANDAMENTO:
- Cadastro de vagas

CONCLUÍDO:
- Protótipo da tela inicial</code></pre>

    <h3>Ágil x Cascata</h3>
    <ul>
      <li><strong>Ágil:</strong> flexível, com entregas frequentes e participação do cliente.</li>
      <li><strong>Cascata:</strong> rígido, sequencial e com mudanças mais difíceis.</li>
    </ul>

    <h3>Imagens conceituais</h3>
    <div class="image-concepts">
      <div class="concept-image">Quadro Kanban</div>
      <div class="concept-image">Equipe planejando</div>
      <div class="concept-image">Linha do tempo do projeto</div>
    </div>

    <h3>Atividade prática</h3>
    <ul>
      <li>Monte um backlog com 8 funcionalidades.</li>
      <li>Separe as tarefas por prioridade.</li>
      <li>Crie uma Sprint com 3 tarefas principais.</li>
      <li>Monte um quadro Kanban.</li>
      <li>Compare Ágil e Cascata.</li>
    </ul>

    <h3>Resumo para prova</h3>
    <p>
      Gestão de projetos ajuda a equipe a trabalhar com organização, reduzir riscos,
      controlar prazos e entregar valor ao cliente.
    </p>
  `,

  uc3: `
    <h2>UC3 — Algoritmos</h2>

    <h3>O que é algoritmo?</h3>
    <p>
      Algoritmo é uma sequência de passos usada para resolver um problema.
      Antes de programar, o algoritmo ajuda a organizar o raciocínio.
    </p>

    <h3>Exemplo do dia a dia</h3>
    <pre><code>Algoritmo para beber água:

1. Pegar um copo
2. Abrir a torneira
3. Colocar água no copo
4. Beber a água</code></pre>

    <h3>Conceitos principais</h3>
    <ul>
      <li><strong>Variável:</strong> espaço para guardar valores.</li>
      <li><strong>Condicional:</strong> decisão usando if e else.</li>
      <li><strong>Laço de repetição:</strong> repete uma ação várias vezes.</li>
      <li><strong>Vetor:</strong> lista com vários valores.</li>
      <li><strong>Função:</strong> bloco de código reutilizável.</li>
      <li><strong>Fluxograma:</strong> desenho que representa o algoritmo.</li>
    </ul>

    <h3>Exemplo em JavaScript</h3>
    <pre><code>let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}</code></pre>

    <h3>Explicação</h3>
    <p>
      O programa verifica se a idade é maior ou igual a 18. Se for, mostra
      "Maior de idade". Caso contrário, mostra "Menor de idade".
    </p>

    <h3>Erro comum</h3>
    <pre><code>// Errado para comparar:
if (senha = "1234") { }

// Certo para comparar:
if (senha === "1234") { }</code></pre>

    <h3>Imagens conceituais</h3>
    <div class="image-concepts">
      <div class="concept-image">Fluxograma</div>
      <div class="concept-image">Blocos de lógica</div>
      <div class="concept-image">Código JavaScript</div>
    </div>

    <h3>Atividade prática</h3>
    <ul>
      <li>Crie um algoritmo para calcular a média de um aluno.</li>
      <li>Crie um algoritmo para verificar se um número é par ou ímpar.</li>
      <li>Faça um fluxograma de uma decisão simples.</li>
      <li>Crie um laço que conte de 1 até 10.</li>
    </ul>

    <h3>Resumo para prova</h3>
    <p>
      Algoritmos são a base da programação. Eles ensinam a resolver problemas
      usando lógica, sequência, decisão e repetição.
    </p>
  `,

  uc4: `
    <h2>UC4 — Programação</h2>

    <h3>O que é programação?</h3>
    <p>
      Programação é a criação de instruções para o computador executar.
      Com ela é possível criar sites, sistemas, aplicativos, jogos e automações.
    </p>

    <h3>Programação estruturada</h3>
    <p>
      É baseada em sequência, decisão, repetição e funções. Ela organiza o código
      de forma lógica e direta.
    </p>

    <h3>Programação orientada a objetos</h3>
    <p>
      É baseada em objetos. Cada objeto possui características e ações.
    </p>

    <h3>Conceitos principais</h3>
    <ul>
      <li><strong>Classe:</strong> modelo para criar objetos.</li>
      <li><strong>Objeto:</strong> elemento criado a partir da classe.</li>
      <li><strong>Atributo:</strong> característica do objeto.</li>
      <li><strong>Método:</strong> ação que o objeto executa.</li>
      <li><strong>Função:</strong> bloco de código reutilizável.</li>
    </ul>

    <h3>Exemplo em JavaScript</h3>
    <pre><code>class Aluno {
  constructor(nome, curso) {
    this.nome = nome;
    this.curso = curso;
  }

  apresentar() {
    return "Meu nome é " + this.nome + " e faço " + this.curso;
  }
}

const aluno1 = new Aluno("Sr. Stark", "TI");

console.log(aluno1.apresentar());</code></pre>

    <h3>Exemplo prático</h3>
    <p>
      Um aluno pode ter nome, curso e idade. Ele também pode executar ações,
      como apresentar-se ou consultar notas.
    </p>

    <h3>Imagens conceituais</h3>
    <div class="image-concepts">
      <div class="concept-image">Código na tela</div>
      <div class="concept-image">Diagrama de classe</div>
      <div class="concept-image">Símbolo de programação</div>
    </div>

    <h3>Atividade prática</h3>
    <ul>
      <li>Crie uma classe chamada Produto.</li>
      <li>Adicione os atributos nome e preço.</li>
      <li>Crie um método para mostrar os dados do produto.</li>
      <li>Crie dois objetos diferentes.</li>
    </ul>

    <h3>Resumo para prova</h3>
    <p>
      Programação transforma ideias em sistemas reais. A orientação a objetos ajuda
      a organizar o código usando classes, objetos, atributos e métodos.
    </p>
  `,

  uc5: `
    <h2>UC5 — Desktop</h2>

    <h3>O que é aplicação desktop?</h3>
    <p>
      Aplicações desktop são programas instalados no computador. Elas podem ser usadas
      para cadastro, controle de estoque, vendas, relatórios e gestão interna.
    </p>

    <h3>O que é CRUD?</h3>
    <ul>
      <li><strong>Create:</strong> criar ou cadastrar.</li>
      <li><strong>Read:</strong> ler, buscar ou listar.</li>
      <li><strong>Update:</strong> atualizar ou editar.</li>
      <li><strong>Delete:</strong> excluir.</li>
    </ul>

    <h3>Exemplo prático</h3>
    <pre><code>Sistema de cadastro de alunos:

C - Cadastrar aluno
R - Listar alunos
U - Editar dados do aluno
D - Excluir aluno</code></pre>

    <h3>Exemplo em JavaScript</h3>
    <pre><code>let alunos = [];

function cadastrarAluno(nome) {
  alunos.push(nome);
}

function listarAlunos() {
  console.log(alunos);
}

function excluirAluno(nome) {
  alunos = alunos.filter(aluno => aluno !== nome);
}

cadastrarAluno("Sr. Stark");
listarAlunos();</code></pre>

    <h3>Estrutura comum de um sistema desktop</h3>
    <pre><code>Login
Dashboard
Cadastro
Consulta
Edição
Exclusão
Relatórios</code></pre>

    <h3>Imagens conceituais</h3>
    <div class="image-concepts">
      <div class="concept-image">Tela de cadastro</div>
      <div class="concept-image">Sistema instalado</div>
      <div class="concept-image">Botões salvar, editar e excluir</div>
    </div>

    <h3>Atividade prática</h3>
    <ul>
      <li>Crie uma tela de cadastro de cliente.</li>
      <li>Liste quais campos ela deve ter.</li>
      <li>Explique onde entra o CRUD.</li>
      <li>Monte um exemplo com criar, listar, editar e excluir.</li>
    </ul>

    <h3>Resumo para prova</h3>
    <p>
      Sistemas desktop são importantes para empresas e ambientes administrativos.
      O CRUD é a base de muitos sistemas de cadastro.
    </p>
  `,

  uc6: `
    <h2>UC6 — Banco de Dados</h2>

    <h3>O que é banco de dados?</h3>
    <p>
      Banco de dados é uma estrutura usada para armazenar informações de forma organizada.
      Ele pode guardar alunos, empresas, vagas, produtos, usuários, senhas, mensagens e relatórios.
    </p>

    <h3>Conceitos principais</h3>
    <ul>
      <li><strong>Tabela:</strong> estrutura que armazena dados em linhas e colunas.</li>
      <li><strong>Campo:</strong> coluna da tabela.</li>
      <li><strong>Registro:</strong> linha da tabela.</li>
      <li><strong>Chave primária:</strong> identificação única de cada registro.</li>
      <li><strong>Chave estrangeira:</strong> relação entre tabelas.</li>
      <li><strong>SQL:</strong> linguagem usada para manipular dados.</li>
    </ul>

    <h3>Exemplo de tabela</h3>
    <pre><code>Tabela: alunos

id | nome      | curso | email
1  | Sr. Stark | TI    | stark@email.com</code></pre>

    <h3>Criando tabela em SQL</h3>
    <pre><code>CREATE TABLE alunos (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  curso VARCHAR(100),
  email VARCHAR(100)
);</code></pre>

    <h3>Inserindo dados</h3>
    <pre><code>INSERT INTO alunos (id, nome, curso, email)
VALUES (1, 'Sr. Stark', 'TI', 'stark@email.com');</code></pre>

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
      Esquecer o WHERE no UPDATE ou DELETE pode alterar ou apagar todos os registros.
    </p>

    <h3>Imagens conceituais</h3>
    <div class="image-concepts">
      <div class="concept-image">Banco de dados</div>
      <div class="concept-image">Tabelas conectadas</div>
      <div class="concept-image">Servidor de dados</div>
    </div>

    <h3>Atividade prática</h3>
    <ul>
      <li>Crie uma tabela chamada empresas.</li>
      <li>Defina pelo menos 4 campos.</li>
      <li>Escolha uma chave primária.</li>
      <li>Crie um comando INSERT.</li>
      <li>Crie um comando SELECT.</li>
    </ul>

    <h3>Resumo para prova</h3>
    <p>
      Banco de dados guarda informações de forma organizada. SQL é usado para criar,
      consultar, atualizar e excluir dados.
    </p>
  `,

  uc7: `
    <h2>UC7 — Web</h2>

    <h3>O que é desenvolvimento web?</h3>
    <p>
      Desenvolvimento web é a criação de páginas, sistemas e aplicações que funcionam
      no navegador. A base da web é formada por HTML, CSS e JavaScript.
    </p>

    <h3>Tecnologias principais</h3>
    <ul>
      <li><strong>HTML:</strong> estrutura da página.</li>
      <li><strong>CSS:</strong> aparência e design.</li>
      <li><strong>JavaScript:</strong> interatividade e lógica.</li>
      <li><strong>API:</strong> comunicação entre sistemas.</li>
      <li><strong>Responsividade:</strong> adaptação para celular, tablet e computador.</li>
      <li><strong>GitHub Pages:</strong> publicação de sites estáticos.</li>
    </ul>

    <h3>Exemplo de HTML</h3>
    <pre><code>&lt;section class="card"&gt;
  &lt;h2&gt;J.A.R.V.I.S&lt;/h2&gt;
  &lt;p&gt;Sistema de estudos inteligente.&lt;/p&gt;
  &lt;button&gt;Acessar&lt;/button&gt;
&lt;/section&gt;</code></pre>

    <h3>Exemplo de CSS</h3>
    <pre><code>.card {
  background: #06111f;
  border: 1px solid #00eaff;
  border-radius: 16px;
  padding: 24px;
  color: white;
}</code></pre>

    <h3>Exemplo de JavaScript</h3>
    <pre><code>function abrirUnidade(nome) {
  alert("Abrindo unidade: " + nome);
}</code></pre>

    <h3>Erro comum</h3>
    <p>
      Esquecer de conectar os arquivos CSS e JavaScript ao HTML.
    </p>

    <pre><code>&lt;link rel="stylesheet" href="style.css"&gt;
&lt;script src="script.js"&gt;&lt;/script&gt;</code></pre>

    <h3>Imagens conceituais</h3>
    <div class="image-concepts">
      <div class="concept-image">HTML CSS JS</div>
      <div class="concept-image">Site responsivo</div>
      <div class="concept-image">Navegador conectado</div>
    </div>

    <h3>Atividade prática</h3>
    <ul>
      <li>Crie uma página com título, texto e botão.</li>
      <li>Estilize com CSS usando cores escuras.</li>
      <li>Adicione uma função JavaScript ao botão.</li>
      <li>Teste no navegador.</li>
      <li>Publique no GitHub Pages.</li>
    </ul>

    <h3>Resumo para prova</h3>
    <p>
      Web é a área responsável por criar sites e sistemas acessados pelo navegador.
      HTML estrutura, CSS estiliza e JavaScript adiciona inteligência e interação.
    </p>
  `,

  ia: `
    <h2>IA — Inteligência Artificial</h2>

    <h3>O que é IA?</h3>
    <p>
      Inteligência Artificial é uma área da tecnologia que cria sistemas capazes de responder,
      analisar, gerar textos, imagens, códigos e automatizar tarefas.
    </p>

    <h3>Exemplos de uso</h3>
    <ul>
      <li>ChatGPT para respostas, estudo, textos e códigos.</li>
      <li>Gemini para conteúdo, pesquisa e análise.</li>
      <li>DeepSeek para programação e raciocínio técnico.</li>
      <li>Copilot para auxiliar no desenvolvimento.</li>
      <li>Agentes de IA para executar tarefas automáticas.</li>
    </ul>

    <h3>Exemplo de prompt</h3>
    <pre><code>Explique banco de dados para iniciantes com exemplo em SQL.</code></pre>

    <h3>Aplicação no J.A.R.V.I.S</h3>
    <p>
      O J.A.R.V.I.S pode evoluir para usar IA com API, conectar respostas automáticas,
      classificar perguntas e gerar conteúdos personalizados.
    </p>

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
      Ele é muito usado por programadores, empresas e estudantes de tecnologia.
    </p>

    <h3>Conceitos principais</h3>
    <ul>
      <li><strong>Repositório:</strong> pasta do projeto online.</li>
      <li><strong>Commit:</strong> registro de uma alteração.</li>
      <li><strong>Branch:</strong> ramificação do projeto.</li>
      <li><strong>Pull Request:</strong> solicitação para juntar alterações.</li>
      <li><strong>GitHub Pages:</strong> forma de publicar sites gratuitamente.</li>
    </ul>

    <h3>Fluxo básico</h3>
    <pre><code>1. Criar repositório
2. Enviar arquivos
3. Fazer commit
4. Ativar GitHub Pages
5. Acessar o link publicado</code></pre>

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
      Ela economiza tempo, reduz erros e conecta sistemas diferentes.
    </p>

    <h3>Exemplos de automação</h3>
    <ul>
      <li>Enviar e-mail automático.</li>
      <li>Salvar dados de formulário.</li>
      <li>Conectar IA com banco de dados.</li>
      <li>Criar bots e fluxos com n8n.</li>
      <li>Conectar site com API.</li>
    </ul>

    <h3>Fluxo exemplo</h3>
    <pre><code>Usuário pergunta no site
        ↓
Webhook recebe a pergunta
        ↓
n8n envia para uma IA
        ↓
IA gera a resposta
        ↓
Resposta volta para o site</code></pre>

    <h3>Resumo rápido</h3>
    <p>
      Automações tornam sistemas mais inteligentes, rápidos e úteis.
    </p>
  `,

  projetos: `
    <h2>Projetos — Portfólio e Entregas</h2>

    <h3>Por que fazer projetos?</h3>
    <p>
      Projetos mostram sua evolução prática. Na área de TI, portfólio é muito importante
      para estágio, emprego e aprendizado real.
    </p>

    <h3>Ideias de projetos</h3>
    <ul>
      <li>Sistema de login.</li>
      <li>Dashboard Kanban.</li>
      <li>Sistema CRUD.</li>
      <li>Portfólio pessoal.</li>
      <li>Chat com IA.</li>
      <li>Sistema com banco de dados.</li>
      <li>Site de estudos com conteúdo organizado.</li>
    </ul>

    <h3>Projeto recomendado</h3>
    <pre><code>J.A.R.V.I.S CORE

Funções:
- Login
- Dashboard
- Conteúdos por UC
- Pesquisa
- Módulos extras
- Progresso das UCs
- Integração futura com IA</code></pre>

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

// PROGRESSO DAS UCs
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const progressDetails = document.getElementById("progressDetails");

const totalUCsProgress = 7;

let completedUCs = JSON.parse(localStorage.getItem("jarvis_completed_ucs")) || [];

function saveProgress() {
  localStorage.setItem("jarvis_completed_ucs", JSON.stringify(completedUCs));
}

function updateProgress() {
  const completedCount = completedUCs.length;
  const percent = Math.round((completedCount / totalUCsProgress) * 100);

  if (progressFill) {
    progressFill.style.width = `${percent}%`;
  }

  if (progressText) {
    progressText.textContent = `${percent}%`;
  }

  if (progressDetails) {
    progressDetails.textContent = `${completedCount} de ${totalUCsProgress} UCs concluídas.`;
  }

  document.querySelectorAll(".unit-card").forEach(function (card) {
    const key = card.getAttribute("data-content");

    if (completedUCs.includes(key)) {
      card.classList.add("completed");
    } else {
      card.classList.remove("completed");
    }
  });
}

function completeUC(ucKey) {
  if (!completedUCs.includes(ucKey)) {
    completedUCs.push(ucKey);
    saveProgress();
    updateProgress();
  }

  const button = document.querySelector(`[data-complete-uc="${ucKey}"]`);

  if (button) {
    button.classList.add("done");
    button.textContent = "UC concluída ✓";
  }
}

function openModal(contentKey) {
  if (!contents[contentKey]) return;

  const isUC = contentKey.startsWith("uc");
  const completed = isUC && completedUCs.includes(contentKey);

  let completeButton = "";

  if (isUC) {
    completeButton = `
      <div class="complete-uc-box">
        <p>
          Quando terminar de estudar esta unidade, clique no botão abaixo
          para atualizar seu progresso.
        </p>

        <button 
          class="complete-uc-button ${completed ? "done" : ""}" 
          data-complete-uc="${contentKey}"
        >
          ${completed ? "UC concluída ✓" : "Concluir UC"}
        </button>
      </div>
    `;
  }

  modalContent.innerHTML = contents[contentKey] + completeButton;
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

modalContent.addEventListener("click", function (event) {
  const button = event.target.closest("[data-complete-uc]");

  if (!button) return;

  const ucKey = button.getAttribute("data-complete-uc");
  completeUC(ucKey);
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
    const keywords = normalizeText(
      item.getAttribute("data-keywords") || item.innerText
    );

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

// INICIAR PROGRESSO
updateProgress();

console.log("J.A.R.V.I.S CORE carregado com progresso das UCs.");
