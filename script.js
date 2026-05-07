// =======================================================
// J.A.R.V.I.S CORE — Indústrias TH
// Script principal atualizado
// Login + Painel Interno + 7 UCs + Modal + Progresso
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
// 3. CONTEÚDOS DAS 7 UCs
// =======================================================

const conteudosUC = {
  uc1: {
    titulo: "UC 1 — Análise de Requisitos",
    conteudo: `
      <h2>Resumo da UC</h2>
      <p>
        A Análise de Requisitos é uma etapa fundamental no desenvolvimento de sistemas.
        Ela serve para entender o que o sistema precisa fazer, quais problemas ele deve
        resolver, quais usuários vão utilizá-lo e quais regras precisam ser respeitadas.
      </p>

      <p>
        Os requisitos funcionam como base para projeto, implementação, teste e manutenção
        do software. Quando são bem definidos, a equipe evita erros, retrabalho, atrasos
        e problemas de comunicação com o cliente.
      </p>

      <h3>O que são requisitos de software?</h3>
      <p>
        Requisitos de software são descrições das funções, características, restrições
        e necessidades que um sistema deve atender.
      </p>

      <ul>
        <li>O que o sistema deve fazer?</li>
        <li>Quem vai usar o sistema?</li>
        <li>Quais funções são obrigatórias?</li>
        <li>Quais regras precisam ser seguidas?</li>
        <li>Como o sistema deve se comportar?</li>
      </ul>

      <h3>Requisitos funcionais</h3>
      <p>
        Requisitos funcionais descrevem as funções que o sistema deve executar.
        Eles mostram aquilo que o sistema precisa fazer na prática.
      </p>

      <pre><code>RF01 — Cadastro de aluno
O sistema deve permitir que o aluno realize cadastro informando nome, e-mail, telefone, curso e senha.

RF02 — Login de usuário
O sistema deve permitir que alunos, empresas e administradores façam login com e-mail e senha.

RF03 — Cadastro de vagas
O sistema deve permitir que empresas cadastrem vagas de estágio.

RF04 — Candidatura a vagas
O sistema deve permitir que o aluno se candidate a uma vaga disponível.

RF05 — Visualização de candidatos
O sistema deve permitir que a empresa visualize os alunos inscritos em suas vagas.</code></pre>

      <h3>Requisitos não funcionais</h3>
      <p>
        Requisitos não funcionais descrevem como o sistema deve funcionar. Eles estão
        ligados à qualidade, desempenho, segurança, usabilidade e confiabilidade.
      </p>

      <pre><code>RNF01 — Segurança
O sistema deve proteger os dados dos usuários.

RNF02 — Desempenho
O sistema deve carregar as páginas principais em poucos segundos.

RNF03 — Usabilidade
O sistema deve ter interface simples, clara e fácil de usar.

RNF04 — Disponibilidade
O sistema deve estar disponível para acesso durante a maior parte do tempo.

RNF05 — Responsividade
O sistema deve funcionar em computador, tablet e celular.</code></pre>

      <h3>Requisitos de negócio</h3>
      <p>
        Requisitos de negócio representam os objetivos principais da empresa, instituição
        ou cliente que solicita o sistema.
      </p>

      <pre><code>RN01 — Melhorar o controle de estágios
A instituição deseja controlar melhor os alunos em estágio.

RN02 — Facilitar a comunicação
O sistema deve melhorar a comunicação entre alunos, empresas e instituição.

RN03 — Aumentar oportunidades
O sistema deve ajudar os alunos a encontrar vagas de estágio.

RN04 — Organizar informações
A instituição precisa centralizar dados de alunos, empresas, vagas e candidaturas.</code></pre>

      <h3>Requisitos de sistema</h3>
      <p>
        Requisitos de sistema descrevem características técnicas ou operacionais que o sistema
        precisa ter para funcionar corretamente.
      </p>

      <pre><code>RS01 — Sistema Web
O sistema deve funcionar em navegador de internet.

RS02 — Banco de dados
O sistema deve armazenar informações de alunos, empresas, vagas e candidaturas.

RS03 — Controle de acesso
O sistema deve ter diferentes níveis de acesso para aluno, empresa e instituição.

RS04 — Compatibilidade
O sistema deve funcionar nos principais navegadores.</code></pre>

      <h3>Requisitos de usuário</h3>
      <p>
        Requisitos de usuário descrevem necessidades dos usuários finais em linguagem simples.
      </p>

      <pre><code>RU01 — Como aluno, quero me cadastrar no sistema para acessar vagas de estágio.

RU02 — Como empresa, quero cadastrar vagas para encontrar candidatos.

RU03 — Como instituição, quero acompanhar os estágios para controlar a situação dos alunos.

RU04 — Como aluno, quero receber notificações sobre minhas candidaturas.</code></pre>

      <h3>Exemplo geral aplicado</h3>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Exemplo</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Funcional</td>
            <td>O sistema deve permitir que o aluno se candidate a uma vaga.</td>
          </tr>

          <tr>
            <td>Não funcional</td>
            <td>O sistema deve ser fácil de usar e carregar rapidamente.</td>
          </tr>

          <tr>
            <td>Negócio</td>
            <td>A instituição deseja melhorar o controle das candidaturas.</td>
          </tr>

          <tr>
            <td>Usuário</td>
            <td>Como aluno, quero visualizar vagas disponíveis.</td>
          </tr>
        </tbody>
      </table>

      <h3>Conclusão da UC 1</h3>
      <p>
        A Análise de Requisitos ajuda a entender as necessidades do cliente, organizar
        as funcionalidades do sistema e evitar problemas durante o desenvolvimento.
        Sem requisitos bem definidos, o projeto pode sofrer com falhas, atrasos,
        retrabalho e insatisfação do cliente.
      </p>
    `
  },

  uc2: {
    titulo: "UC 2 — Gestão de Projetos",
    conteudo: `
      <h2>Resumo da UC</h2>
      <p>
        Gestão de Projetos é a área responsável por planejar, organizar, acompanhar
        e controlar um projeto do início ao fim. Ela ajuda a equipe a cumprir prazos,
        controlar recursos, reduzir riscos e entregar um resultado de qualidade.
      </p>

      <h3>O que é projeto?</h3>
      <p>
        Projeto é um esforço temporário realizado para criar um produto, serviço ou
        resultado exclusivo. Ele possui começo, meio, fim, objetivos, recursos, prazos
        e partes interessadas.
      </p>

      <h3>Exemplos de projeto</h3>
      <ul>
        <li>Criar um sistema de gestão de estágios.</li>
        <li>Desenvolver um site institucional.</li>
        <li>Construir um aplicativo de controle financeiro.</li>
        <li>Implantar uma rede de computadores em uma empresa.</li>
        <li>Organizar um evento escolar.</li>
      </ul>

      <h3>Importância da gestão de projetos</h3>
      <ul>
        <li>Organiza tarefas.</li>
        <li>Define prioridades.</li>
        <li>Controla prazos.</li>
        <li>Reduz riscos.</li>
        <li>Melhora a comunicação.</li>
        <li>Acompanha o progresso.</li>
        <li>Evita retrabalho.</li>
      </ul>

      <h3>Objetivos da gestão de projetos</h3>
      <ul>
        <li>Cumprir o prazo.</li>
        <li>Controlar custos.</li>
        <li>Garantir qualidade.</li>
        <li>Organizar a equipe.</li>
        <li>Reduzir riscos.</li>
        <li>Atender às necessidades do cliente.</li>
      </ul>

      <h3>Modelo Cascata / Waterfall</h3>
      <p>
        O modelo Cascata é uma metodologia tradicional em que as fases acontecem em
        sequência. Primeiro levanta requisitos, depois planeja, desenvolve, testa,
        entrega e faz manutenção.
      </p>

      <ol>
        <li>Levantamento de requisitos</li>
        <li>Planejamento</li>
        <li>Projeto / Design</li>
        <li>Desenvolvimento</li>
        <li>Testes</li>
        <li>Entrega</li>
        <li>Manutenção</li>
      </ol>

      <h4>Vantagens do Cascata</h4>
      <ul>
        <li>Fácil de entender.</li>
        <li>Etapas bem definidas.</li>
        <li>Funciona bem com requisitos estáveis.</li>
        <li>Ajuda na documentação.</li>
      </ul>

      <h4>Desvantagens do Cascata</h4>
      <ul>
        <li>É pouco flexível.</li>
        <li>Mudanças podem gerar retrabalho.</li>
        <li>O cliente vê o resultado mais no final.</li>
        <li>Erros podem ser descobertos tarde.</li>
      </ul>

      <h3>Metodologias ágeis</h3>
      <p>
        Metodologias ágeis são formas de gerenciar projetos com flexibilidade,
        colaboração e entregas frequentes. Elas permitem corrigir erros cedo,
        receber feedback e adaptar o projeto.
      </p>

      <h3>Scrum dentro da Gestão de Projetos</h3>
      <p>
        Scrum é um framework ágil que organiza o trabalho em ciclos chamados Sprints.
        Ele trabalha com entregas contínuas, times auto-organizados, transparência,
        inspeção, adaptação e foco no cliente.
      </p>

      <h4>Scrum x Cascata</h4>
      <table>
        <thead>
          <tr>
            <th>Critério</th>
            <th>Scrum</th>
            <th>Cascata</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Tipo</td>
            <td>Ágil</td>
            <td>Tradicional</td>
          </tr>

          <tr>
            <td>Entrega</td>
            <td>Por partes, a cada Sprint</td>
            <td>Geralmente no final</td>
          </tr>

          <tr>
            <td>Mudanças</td>
            <td>Mais fácil de adaptar</td>
            <td>Mais difícil de alterar</td>
          </tr>

          <tr>
            <td>Cliente</td>
            <td>Participa frequentemente</td>
            <td>Participa menos durante o desenvolvimento</td>
          </tr>
        </tbody>
      </table>

      <h4>3 pilares do Scrum</h4>
      <ul>
        <li><strong>Transparência:</strong> todos enxergam o andamento, tarefas e problemas.</li>
        <li><strong>Inspeção:</strong> a equipe verifica constantemente o progresso.</li>
        <li><strong>Adaptação:</strong> o time ajusta o plano quando necessário.</li>
      </ul>

      <h4>Valores do Scrum</h4>
      <ul>
        <li>Comprometimento</li>
        <li>Foco</li>
        <li>Coragem</li>
        <li>Respeito</li>
        <li>Abertura</li>
      </ul>

      <h4>Papéis do Scrum</h4>
      <ul>
        <li><strong>Product Owner:</strong> representa o cliente e prioriza o Product Backlog.</li>
        <li><strong>Scrum Master:</strong> ajuda a equipe a seguir o Scrum e remove impedimentos.</li>
        <li><strong>Time de Desenvolvimento:</strong> constrói, testa e entrega o produto.</li>
      </ul>

      <h4>Artefatos do Scrum</h4>
      <ul>
        <li><strong>Product Backlog:</strong> lista priorizada do que precisa ser feito.</li>
        <li><strong>Sprint Backlog:</strong> tarefas escolhidas para uma Sprint específica.</li>
        <li><strong>Incremento:</strong> parte pronta e funcional entregue no fim da Sprint.</li>
      </ul>

      <h4>Eventos do Scrum</h4>
      <ul>
        <li><strong>Sprint Planning:</strong> planejamento do que será feito na Sprint.</li>
        <li><strong>Daily Scrum:</strong> reunião rápida diária de alinhamento.</li>
        <li><strong>Sprint Review:</strong> apresentação do que foi entregue.</li>
        <li><strong>Sprint Retrospective:</strong> análise de melhorias para a próxima Sprint.</li>
      </ul>

      <h4>Story Points</h4>
      <p>
        Story Points são pontos usados para estimar esforço, complexidade, risco e
        tamanho de uma tarefa. Eles não representam exatamente horas.
      </p>

      <h4>Burndown Chart</h4>
      <p>
        Burndown Chart é um gráfico que mostra quanto trabalho ainda falta ao longo
        da Sprint. A linha deve descer até perto de zero.
      </p>

      <h3>Kanban</h3>
      <p>
        Kanban é uma metodologia visual usada para controlar o fluxo de trabalho.
        Geralmente usa colunas como A Fazer, Em Andamento e Concluído.
      </p>

      <pre><code>A FAZER:
- Criar tela de login
- Criar tela de vagas

EM ANDAMENTO:
- Testar cadastro

CONCLUÍDO:
- Levantar requisitos
- Definir usuários</code></pre>

      <h3>XP — Extreme Programming</h3>
      <p>
        XP é uma metodologia ágil focada em qualidade de código, testes, feedback
        rápido, programação em dupla, simplicidade e melhoria contínua.
      </p>

      <h3>Ágil x Tradicional</h3>
      <table>
        <thead>
          <tr>
            <th>Critério</th>
            <th>Ágil</th>
            <th>Tradicional</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Flexibilidade</td>
            <td>Alta</td>
            <td>Baixa</td>
          </tr>

          <tr>
            <td>Mudanças</td>
            <td>Aceita mudanças</td>
            <td>Mudanças são difíceis</td>
          </tr>

          <tr>
            <td>Entregas</td>
            <td>Frequentes</td>
            <td>Geralmente no final</td>
          </tr>

          <tr>
            <td>Cliente</td>
            <td>Participa continuamente</td>
            <td>Participa mais no início e no final</td>
          </tr>
        </tbody>
      </table>

      <h3>Exemplo aplicado ao Sistema de Gestão de Estágios</h3>
      <p>
        No modelo Cascata, a equipe tentaria definir todos os requisitos no começo,
        desenvolver tudo e entregar apenas no final. No método ágil, a equipe poderia
        entregar primeiro cadastro e login, depois vagas, depois candidatura, recebendo
        feedback do cliente a cada etapa.
      </p>

      <h3>Conclusão da UC 2</h3>
      <p>
        A Gestão de Projetos é essencial para organizar tarefas, prazos, recursos e
        pessoas. A metodologia tradicional é útil quando o projeto muda pouco. Já as
        metodologias ágeis são melhores quando existe mudança, colaboração e necessidade
        de entregar valor aos poucos.
      </p>
    `
  },

  uc3: {
    titulo: "UC 3 — Desenvolver Algoritmos",
    conteudo: `
      <h2>Resumo da UC</h2>
      <p>
        A UC Desenvolver Algoritmos ensina a criar soluções lógicas para problemas
        usando passos organizados. Antes de programar em JavaScript, Python ou Java,
        é importante saber pensar como programador.
      </p>

      <h3>O que é algoritmo?</h3>
      <p>
        Um algoritmo é uma sequência de passos organizados para resolver um problema
        ou realizar uma tarefa. Usamos algoritmos até no dia a dia.
      </p>

      <pre><code>Exemplo: fazer café
1. Pegar a xícara.
2. Colocar café.
3. Colocar água quente.
4. Misturar.
5. Beber.</code></pre>

      <h3>Algoritmo na programação</h3>
      <p>
        Na programação, algoritmo é o caminho lógico usado para resolver um problema
        computacional. O computador precisa de instruções claras, organizadas e em
        ordem correta.
      </p>

      <h3>Importância dos algoritmos</h3>
      <ul>
        <li>Entender melhor o problema.</li>
        <li>Organizar ideias.</li>
        <li>Criar sequência lógica.</li>
        <li>Evitar erros no código.</li>
        <li>Facilitar testes.</li>
        <li>Transformar problemas em soluções.</li>
      </ul>

      <h3>Lógica de programação</h3>
      <p>
        Lógica de programação é a capacidade de pensar em passos para resolver
        problemas usando raciocínio lógico.
      </p>

      <h3>Entrada, processamento e saída</h3>
      <table>
        <thead>
          <tr>
            <th>Etapa</th>
            <th>Função</th>
            <th>Exemplo</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Entrada</td>
            <td>Dados recebidos</td>
            <td>Nota 1 e Nota 2</td>
          </tr>

          <tr>
            <td>Processamento</td>
            <td>Cálculo ou verificação</td>
            <td>Calcular média</td>
          </tr>

          <tr>
            <td>Saída</td>
            <td>Resultado apresentado</td>
            <td>Aprovado ou Reprovado</td>
          </tr>
        </tbody>
      </table>

      <h3>Exemplo completo: média do aluno</h3>
      <pre><code>Problema:
Calcular a média de um aluno e informar se foi aprovado.

Regras:
Se a média for maior ou igual a 6, aprovado.
Se for menor que 6, reprovado.

Passos:
1. Iniciar.
2. Ler nome do aluno.
3. Ler primeira nota.
4. Ler segunda nota.
5. Calcular média.
6. Verificar se média >= 6.
7. Mostrar resultado.
8. Finalizar.</code></pre>

      <h3>Pseudocódigo</h3>
      <p>
        Pseudocódigo é uma forma de escrever o algoritmo em linguagem parecida
        com português, mas organizada como programação.
      </p>

      <pre><code>Início
  Leia nome
  Leia nota1
  Leia nota2

  media = (nota1 + nota2) / 2

  Se media >= 6 então
      Escreva "Aluno aprovado"
  Senão
      Escreva "Aluno reprovado"
  FimSe
Fim</code></pre>

      <h3>Fluxograma</h3>
      <p>
        Fluxograma é uma representação visual do algoritmo. Ele usa símbolos para
        mostrar início, fim, processos, decisões, entradas, saídas e setas.
      </p>

      <table>
        <thead>
          <tr>
            <th>Símbolo</th>
            <th>Função</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Oval</td>
            <td>Início ou fim</td>
          </tr>

          <tr>
            <td>Retângulo</td>
            <td>Processo ou ação</td>
          </tr>

          <tr>
            <td>Losango</td>
            <td>Decisão</td>
          </tr>

          <tr>
            <td>Paralelogramo</td>
            <td>Entrada ou saída</td>
          </tr>
        </tbody>
      </table>

      <h3>Estruturas de decisão</h3>
      <pre><code>Se idade >= 18 então
   Escreva "Maior de idade"
Senão
   Escreva "Menor de idade"
FimSe</code></pre>

      <h3>Estruturas de repetição</h3>
      <pre><code>Início
  Para numero de 1 até 5 faça
      Escreva numero
  FimPara
Fim</code></pre>

      <h3>Exemplo prático: algoritmo de login</h3>
      <pre><code>Início
  Leia usuario
  Leia senha

  Se usuario == "stark" e senha == "1234" então
      Escreva "Acesso permitido"
  Senão
      Escreva "Usuário ou senha incorretos"
  FimSe
Fim</code></pre>

      <h3>Exemplo prático: verificar vaga de estágio</h3>
      <pre><code>Início
  Leia idade
  Leia matriculado

  Se idade >= 16 e matriculado == "sim" então
      Escreva "Aluno pode se candidatar"
  Senão
      Escreva "Aluno não pode se candidatar"
  FimSe
Fim</code></pre>

      <h3>Exemplo em JavaScript</h3>
      <pre><code>let nota1 = 8;
let nota2 = 6;

let media = (nota1 + nota2) / 2;

if (media >= 6) {
  console.log("Aluno aprovado");
} else {
  console.log("Aluno reprovado");
}</code></pre>

      <h3>Diferença entre algoritmo, pseudocódigo e código</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Explicação</th>
            <th>Exemplo</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Algoritmo</td>
            <td>Sequência de passos</td>
            <td>Passos para calcular média</td>
          </tr>

          <tr>
            <td>Pseudocódigo</td>
            <td>Algoritmo escrito em linguagem simples</td>
            <td>Leia nota1</td>
          </tr>

          <tr>
            <td>Código</td>
            <td>Algoritmo em linguagem de programação</td>
            <td>JavaScript, Python, Java</td>
          </tr>
        </tbody>
      </table>

      <div class="uc-extra-link">
        <h3>Material de Apoio</h3>
        <p>
          Para reforçar os estudos desta UC, acesse o curso gratuito de Algoritmos
          e Lógica de Programação do professor Gustavo Guanabara, na plataforma Curso em Vídeo.
        </p>

        <a href="https://www.cursoemvideo.com/curso/curso-de-algoritmo/" target="_blank" rel="noopener noreferrer">
          Acessar Curso de Algoritmo — Gustavo Guanabara
        </a>
      </div>

      <h3>Conclusão da UC 3</h3>
      <p>
        Desenvolver algoritmos é essencial para aprender programação. Com algoritmos,
        o aluno aprende a resolver problemas antes de escrever código, usando lógica,
        pseudocódigo e fluxogramas.
      </p>
    `
  },

  uc4: {
    titulo: "UC 4 — Analisar Programação Estruturada e Orientada a Objetos",
    conteudo: `
      <h2>Resumo da UC</h2>
      <p>
        Esta UC ensina a entender diferentes formas de organizar um programa.
        Essas formas são chamadas de paradigmas de programação. Dois dos mais
        importantes são a programação estruturada e a programação orientada a objetos.
      </p>

      <h3>O que são paradigmas de programação?</h3>
      <p>
        Paradigmas de programação são modelos de pensar e organizar o código.
        Eles mostram como o programador estrutura a solução de um problema.
      </p>

      <ul>
        <li>Programação estruturada</li>
        <li>Programação orientada a objetos</li>
        <li>Programação funcional</li>
        <li>Programação procedural</li>
        <li>Programação orientada a eventos</li>
      </ul>

      <h3>Programação Estruturada</h3>
      <p>
        Programação estruturada é baseada em uma sequência organizada de comandos.
        Ela usa sequência, decisão, repetição e funções.
      </p>

      <h4>Características</h4>
      <ul>
        <li>Código organizado em blocos.</li>
        <li>Execução passo a passo.</li>
        <li>Uso de decisões.</li>
        <li>Uso de repetições.</li>
        <li>Uso de funções.</li>
      </ul>

      <h4>Estrutura sequencial</h4>
      <pre><code>let nome = "Stark";
let idade = 18;

console.log(nome);
console.log(idade);</code></pre>

      <h4>Estrutura de decisão</h4>
      <pre><code>let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}</code></pre>

      <h4>Estrutura de repetição</h4>
      <pre><code>for (let numero = 1; numero <= 5; numero++) {
  console.log(numero);
}</code></pre>

      <h4>Funções</h4>
      <pre><code>function calcularMedia(nota1, nota2) {
  let media = (nota1 + nota2) / 2;
  return media;
}

console.log(calcularMedia(8, 6));</code></pre>

      <h3>Programação Orientada a Objetos</h3>
      <p>
        POO é um paradigma que organiza o programa com base em objetos.
        Um objeto representa algo do mundo real ou do sistema, como aluno,
        empresa, vaga, produto ou usuário.
      </p>

      <h4>Classe</h4>
      <p>
        Classe é como um modelo ou molde para criar objetos. Ela define atributos
        e métodos que os objetos terão.
      </p>

      <h4>Objeto</h4>
      <p>
        Objeto é uma representação concreta criada a partir de uma classe.
      </p>

      <h4>Atributos</h4>
      <p>
        Atributos são características de um objeto, como nome, idade, curso e e-mail.
      </p>

      <pre><code>let aluno = {
  nome: "Stark",
  idade: 18,
  curso: "Técnico em TI"
};</code></pre>

      <h4>Métodos</h4>
      <p>
        Métodos são ações que um objeto pode executar.
      </p>

      <pre><code>let aluno = {
  nome: "Stark",
  curso: "Técnico em TI",

  apresentar: function() {
    console.log("Meu nome é " + this.nome + " e faço " + this.curso);
  }
};

aluno.apresentar();</code></pre>

      <h3>Princípios da POO</h3>
      <ul>
        <li><strong>Abstração:</strong> representar apenas o que é importante para o sistema.</li>
        <li><strong>Encapsulamento:</strong> proteger dados e controlar acesso.</li>
        <li><strong>Herança:</strong> reaproveitar características de uma classe em outra.</li>
        <li><strong>Polimorfismo:</strong> permitir comportamentos diferentes para métodos parecidos.</li>
      </ul>

      <h3>Diferença entre Programação Estruturada e POO</h3>
      <table>
        <thead>
          <tr>
            <th>Critério</th>
            <th>Estruturada</th>
            <th>Orientada a Objetos</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Organização</td>
            <td>Sequência de comandos e funções</td>
            <td>Classes e objetos</td>
          </tr>

          <tr>
            <td>Foco</td>
            <td>Passos para resolver problema</td>
            <td>Representação de objetos do sistema</td>
          </tr>

          <tr>
            <td>Melhor para</td>
            <td>Problemas menores e diretos</td>
            <td>Sistemas maiores e complexos</td>
          </tr>

          <tr>
            <td>Exemplo</td>
            <td>Calcular média</td>
            <td>Sistema com alunos, empresas e vagas</td>
          </tr>
        </tbody>
      </table>

      <h3>Exemplo aplicado ao Sistema de Estágios</h3>
      <pre><code>Objetos possíveis:
- Aluno
- Empresa
- Vaga
- Candidatura
- Instituição
- Relatório</code></pre>

      <h4>Exemplo usando classe em JavaScript</h4>
      <pre><code>class Aluno {
  constructor(nome, curso) {
    this.nome = nome;
    this.curso = curso;
  }

  apresentar() {
    console.log("Aluno: " + this.nome + " | Curso: " + this.curso);
  }
}

let aluno1 = new Aluno("Stark", "Técnico em TI");

aluno1.apresentar();</code></pre>

      <h4>Situação-problema resolvida</h4>
      <pre><code>class Aluno {
  constructor(nome, idade, matriculado) {
    this.nome = nome;
    this.idade = idade;
    this.matriculado = matriculado;
  }

  podeCandidatar() {
    if (this.idade >= 16 && this.matriculado === true) {
      return this.nome + " pode se candidatar à vaga.";
    } else {
      return this.nome + " não pode se candidatar à vaga.";
    }
  }
}

let aluno1 = new Aluno("Stark", 18, true);

console.log(aluno1.podeCandidatar());</code></pre>

      <h3>Conclusão da UC 4</h3>
      <p>
        A programação estruturada é direta e trabalha com sequência, decisões,
        repetições e funções. A programação orientada a objetos organiza sistemas
        em classes e objetos, sendo muito útil em projetos maiores.
      </p>
    `
  },

  uc5: {
    titulo: "UC 5 — Desenvolver Aplicações Desktop",
    conteudo: `
      <h2>Resumo da UC</h2>
      <p>
        A UC Desenvolver Aplicações Desktop ensina a criar programas que funcionam
        diretamente no computador, sem depender obrigatoriamente de um navegador.
      </p>

      <h3>O que é uma aplicação desktop?</h3>
      <p>
        Uma aplicação desktop é um programa desenvolvido para ser executado em um
        computador com Windows, Linux ou macOS.
      </p>

      <h3>Exemplos de aplicações desktop</h3>
      <ul>
        <li>Sistema de cadastro de alunos</li>
        <li>Sistema de controle de estoque</li>
        <li>Sistema de vendas</li>
        <li>Editor de texto</li>
        <li>Calculadora</li>
        <li>Sistema de gestão de estágios</li>
      </ul>

      <h3>Diferença entre Desktop, Web e Mobile</h3>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Onde roda</th>
            <th>Exemplo</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desktop</td>
            <td>Computador</td>
            <td>Sistema de estoque</td>
          </tr>

          <tr>
            <td>Web</td>
            <td>Navegador</td>
            <td>Site J.A.R.V.I.S</td>
          </tr>

          <tr>
            <td>Mobile</td>
            <td>Celular ou tablet</td>
            <td>Aplicativo de banco</td>
          </tr>
        </tbody>
      </table>

      <h3>Importância das aplicações desktop</h3>
      <ul>
        <li>Mais desempenho em alguns casos.</li>
        <li>Funcionamento local.</li>
        <li>Acesso a arquivos do computador.</li>
        <li>Integração com impressoras.</li>
        <li>Uso em redes internas.</li>
      </ul>

      <h3>IDE — Ambiente de Desenvolvimento</h3>
      <p>
        IDE é o programa usado para escrever, organizar, testar e executar códigos.
      </p>

      <table>
        <thead>
          <tr>
            <th>Projeto</th>
            <th>Linguagem</th>
            <th>IDE indicada</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desktop em Java</td>
            <td>Java</td>
            <td>Eclipse ou NetBeans</td>
          </tr>

          <tr>
            <td>Desktop em C#</td>
            <td>C#</td>
            <td>Visual Studio</td>
          </tr>

          <tr>
            <td>Sistema simples em Python</td>
            <td>Python</td>
            <td>PyCharm ou VS Code</td>
          </tr>
        </tbody>
      </table>

      <h3>Desenvolvimento do código</h3>
      <p>
        Depois de entender os requisitos, o desenvolvedor escreve o código conforme
        o que foi planejado.
      </p>

      <pre><code>function cadastrarAluno(nome, curso) {
  if (nome === "" || curso === "") {
    return "Preencha todos os campos.";
  }

  return "Aluno cadastrado com sucesso.";
}

console.log(cadastrarAluno("Stark", "Técnico em TI"));</code></pre>

      <h3>Interface da aplicação desktop</h3>
      <p>
        Interface é a parte visual da aplicação, onde o usuário interage com o sistema.
      </p>

      <pre><code>Tela de cadastro:
Nome:
E-mail:
Curso:
Senha:

[Salvar]
[Cancelar]</code></pre>

      <h3>Banco de dados em aplicações desktop</h3>
      <p>
        Muitas aplicações precisam guardar dados. O banco de dados permite armazenar,
        consultar, alterar e excluir informações.
      </p>

      <h4>Exemplo de tabela</h4>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>email</th>
            <th>curso</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Stark</td>
            <td>stark@email.com</td>
            <td>Técnico em TI</td>
          </tr>
        </tbody>
      </table>

      <pre><code>INSERT INTO alunos (nome, email, curso)
VALUES ('Stark', 'stark@email.com', 'Técnico em TI');</code></pre>

      <h3>Testes da aplicação</h3>
      <ul>
        <li>Teste de funcionalidade.</li>
        <li>Teste de validação.</li>
        <li>Teste de interface.</li>
        <li>Teste de conexão com banco.</li>
        <li>Teste de erro.</li>
      </ul>

      <h3>Versionamento com Git</h3>
      <pre><code>git init
git add .
git commit -m "Primeira versão do projeto"
git status
git push</code></pre>

      <h3>Disponibilização da aplicação</h3>
      <ul>
        <li>Gerar arquivo executável.</li>
        <li>Criar instalador.</li>
        <li>Enviar projeto para o GitHub.</li>
        <li>Criar documentação.</li>
        <li>Explicar como instalar e usar.</li>
      </ul>

      <h3>Ciclo de desenvolvimento de uma aplicação desktop</h3>
      <pre><code>1. Analisar requisitos
2. Escolher a IDE
3. Planejar telas e banco de dados
4. Escrever o código
5. Conectar com banco de dados
6. Testar funcionalidades
7. Corrigir erros
8. Versionar no Git
9. Disponibilizar a aplicação</code></pre>

      <h3>Exemplo de estrutura de pastas</h3>
      <pre><code>sistema-desktop/
├── src/
│   ├── main.js
│   ├── cadastro.js
│   └── login.js
├── database/
│   └── banco.db
├── assets/
│   └── imagens/
├── README.md
└── package.json</code></pre>

      <h3>Checklist de testes</h3>
      <pre><code>[ ] O login funciona?
[ ] O cadastro salva os dados?
[ ] Os campos obrigatórios estão validados?
[ ] A conexão com banco de dados funciona?
[ ] O sistema mostra mensagens de erro claras?
[ ] O projeto está versionado no Git?
[ ] O README explica como executar?</code></pre>

      <h3>Conclusão da UC 5</h3>
      <p>
        Esta UC ensina a transformar requisitos, algoritmos e programação em um
        sistema funcional para computador, com código, interface, banco de dados,
        testes, versionamento e disponibilização.
      </p>
    `
  },

  uc6: {
    titulo: "UC 6 — Banco de Dados",
    conteudo: `
      <h2>Resumo da UC</h2>
      <p>
        Banco de Dados ensina a criar, organizar, armazenar, consultar, editar e
        manter informações dentro de um sistema.
      </p>

      <h3>O que é banco de dados?</h3>
      <p>
        Banco de dados é um local usado para armazenar informações de forma organizada.
        Ele permite guardar, consultar, alterar e excluir dados.
      </p>

      <h3>Exemplos de dados em um sistema de estágios</h3>
      <ul>
        <li>Alunos</li>
        <li>Empresas</li>
        <li>Vagas</li>
        <li>Candidaturas</li>
        <li>Usuários</li>
        <li>Relatórios</li>
      </ul>

      <h3>Importância do banco de dados</h3>
      <ul>
        <li>Organizar informações.</li>
        <li>Evitar perda de dados.</li>
        <li>Facilitar consultas.</li>
        <li>Permitir alterações.</li>
        <li>Gerar relatórios.</li>
        <li>Melhorar a segurança.</li>
      </ul>

      <h3>Tipos de banco de dados</h3>
      <ul>
        <li>Banco de dados relacional.</li>
        <li>Banco de dados não relacional.</li>
        <li>Banco de dados local.</li>
        <li>Banco de dados em nuvem.</li>
      </ul>

      <h3>Banco de dados relacional</h3>
      <p>
        Organiza informações em tabelas com linhas e colunas. É muito usado em
        sistemas administrativos, escolares e empresariais.
      </p>

      <ul>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>SQLite</li>
        <li>SQL Server</li>
        <li>Oracle Database</li>
      </ul>

      <h4>Exemplo de tabela alunos</h4>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>email</th>
            <th>curso</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Stark</td>
            <td>stark@email.com</td>
            <td>Técnico em TI</td>
          </tr>
        </tbody>
      </table>

      <h3>Banco de dados não relacional</h3>
      <p>
        Banco não relacional, ou NoSQL, não organiza os dados obrigatoriamente
        em tabelas tradicionais. Pode usar documentos, chave-valor ou outros formatos.
      </p>

      <ul>
        <li>MongoDB</li>
        <li>Firebase Firestore</li>
        <li>Redis</li>
        <li>Cassandra</li>
      </ul>

      <pre><code>{
  "nome": "Stark",
  "curso": "Técnico em TI",
  "email": "stark@email.com"
}</code></pre>

      <h3>Diferença entre relacional e não relacional</h3>
      <table>
        <thead>
          <tr>
            <th>Critério</th>
            <th>Relacional</th>
            <th>Não Relacional</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Organização</td>
            <td>Tabelas</td>
            <td>Documentos, chave-valor ou coleções</td>
          </tr>

          <tr>
            <td>Linguagem comum</td>
            <td>SQL</td>
            <td>Varia conforme o banco</td>
          </tr>

          <tr>
            <td>Exemplo</td>
            <td>MySQL, PostgreSQL</td>
            <td>MongoDB, Firebase</td>
          </tr>
        </tbody>
      </table>

      <h3>O que é SGBD?</h3>
      <p>
        SGBD significa Sistema Gerenciador de Banco de Dados. Ele é o software
        responsável por criar, controlar, consultar, alterar e proteger os dados.
      </p>

      <table>
        <thead>
          <tr>
            <th>Situação</th>
            <th>SGBD indicado</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Projeto escolar simples</td>
            <td>SQLite</td>
          </tr>

          <tr>
            <td>Sistema web com muitos usuários</td>
            <td>MySQL ou PostgreSQL</td>
          </tr>

          <tr>
            <td>Aplicativo com dados em tempo real</td>
            <td>Firebase</td>
          </tr>

          <tr>
            <td>Sistema flexível com documentos</td>
            <td>MongoDB</td>
          </tr>
        </tbody>
      </table>

      <h3>Tabelas, campos e registros</h3>
      <ul>
        <li><strong>Tabela:</strong> conjunto de informações, como alunos ou vagas.</li>
        <li><strong>Campo:</strong> coluna da tabela, como nome, email ou curso.</li>
        <li><strong>Registro:</strong> linha da tabela com dados cadastrados.</li>
      </ul>

      <h3>Chave primária</h3>
      <p>
        Chave primária identifica cada registro de forma única. Normalmente é o campo id.
      </p>

      <h3>Chave estrangeira</h3>
      <p>
        Chave estrangeira cria ligação entre duas tabelas.
      </p>

      <pre><code>Tabela candidaturas:
id | aluno_id | vaga_id | status

aluno_id liga a candidatura ao aluno.
vaga_id liga a candidatura à vaga.</code></pre>

      <h3>Relacionamentos</h3>
      <ul>
        <li><strong>Um para um:</strong> um usuário possui um perfil.</li>
        <li><strong>Um para muitos:</strong> uma empresa cadastra várias vagas.</li>
        <li><strong>Muitos para muitos:</strong> vários alunos podem se candidatar a várias vagas.</li>
      </ul>

      <h3>Criação de banco de dados</h3>
      <pre><code>CREATE DATABASE sistema_estagios;</code></pre>

      <h3>Criação de tabelas</h3>
      <pre><code>CREATE TABLE alunos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  email VARCHAR(100),
  curso VARCHAR(100)
);

CREATE TABLE empresas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  cnpj VARCHAR(20),
  email VARCHAR(100)
);

CREATE TABLE vagas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100),
  descricao TEXT,
  empresa_id INT,
  FOREIGN KEY (empresa_id) REFERENCES empresas(id)
);</code></pre>

      <h3>Comandos SQL principais</h3>
      <pre><code>CREATE — criar banco ou tabela
INSERT — inserir dados
SELECT — consultar dados
UPDATE — atualizar dados
DELETE — excluir dados</code></pre>

      <h4>Exemplos SQL</h4>
      <pre><code>INSERT INTO alunos (nome, email, curso)
VALUES ('Stark', 'stark@email.com', 'Técnico em TI');

SELECT * FROM alunos;

UPDATE alunos
SET curso = 'Desenvolvimento de Sistemas'
WHERE id = 1;

DELETE FROM alunos
WHERE id = 1;</code></pre>

      <h3>CRUD</h3>
      <table>
        <thead>
          <tr>
            <th>Letra</th>
            <th>Significado</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>C</td>
            <td>Create</td>
            <td>Criar / cadastrar</td>
          </tr>

          <tr>
            <td>R</td>
            <td>Read</td>
            <td>Ler / consultar</td>
          </tr>

          <tr>
            <td>U</td>
            <td>Update</td>
            <td>Atualizar / editar</td>
          </tr>

          <tr>
            <td>D</td>
            <td>Delete</td>
            <td>Excluir</td>
          </tr>
        </tbody>
      </table>

      <h3>Manutenção do banco de dados</h3>
      <ul>
        <li>Atualizar dados.</li>
        <li>Corrigir registros.</li>
        <li>Excluir informações incorretas.</li>
        <li>Criar backups.</li>
        <li>Controlar permissões.</li>
        <li>Otimizar consultas.</li>
      </ul>

      <h3>Backup e segurança</h3>
      <p>
        Backup é uma cópia de segurança dos dados. A segurança protege informações
        dos usuários com senhas fortes, permissões, proteção de dados e cuidado
        com comandos perigosos.
      </p>

      <h3>Exemplo de consulta com relacionamento</h3>
      <pre><code>SELECT alunos.nome, vagas.titulo, candidaturas.status
FROM candidaturas
JOIN alunos ON candidaturas.aluno_id = alunos.id
JOIN vagas ON candidaturas.vaga_id = vagas.id;</code></pre>

      <h3>Checklist de banco de dados</h3>
      <pre><code>[ ] O banco foi criado corretamente?
[ ] As tabelas seguem os requisitos?
[ ] Cada tabela possui chave primária?
[ ] Os relacionamentos foram definidos?
[ ] Os dados estão sendo salvos?
[ ] As consultas funcionam?
[ ] Existe backup?
[ ] O banco está protegido?</code></pre>

      <h3>Conclusão da UC 6</h3>
      <p>
        Banco de Dados é essencial para sistemas, pois ensina como armazenar,
        organizar, consultar, editar e proteger informações. Essa UC se conecta
        diretamente com aplicações desktop e web.
      </p>
    `
  },

  uc7: {
    titulo: "UC 7 — Desenvolver Aplicações Web",
    conteudo: `
      <h2>Resumo da UC</h2>
      <p>
        Desenvolver Aplicações Web ensina a criar sites, sistemas e plataformas que
        funcionam por navegadores como Chrome, Edge e Firefox.
      </p>

      <p>
        Nesta UC, o aluno aprende HTML, CSS, JavaScript, formulários, responsividade,
        conexão com banco, testes, Git, GitHub e publicação online.
      </p>

      <h3>O que é uma aplicação web?</h3>
      <p>
        Aplicação web é um sistema que roda em navegador e pode ser acessado pela
        internet ou por uma rede interna. Diferente de uma aplicação desktop, ela
        pode ser acessada por um link.
      </p>

      <h3>Exemplos de aplicações web</h3>
      <ul>
        <li>Site institucional</li>
        <li>Sistema de login</li>
        <li>Loja virtual</li>
        <li>Plataforma de cursos</li>
        <li>Sistema escolar</li>
        <li>Sistema de gestão de estágios</li>
        <li>Painel administrativo</li>
        <li>Dashboard</li>
      </ul>

      <h3>Diferença entre site e aplicação web</h3>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Característica</th>
            <th>Exemplo</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Site</td>
            <td>Mostra informações</td>
            <td>Página de apresentação</td>
          </tr>

          <tr>
            <td>Aplicação Web</td>
            <td>Permite interação com dados</td>
            <td>Sistema com login e painel</td>
          </tr>

          <tr>
            <td>Plataforma Web</td>
            <td>Sistema mais completo</td>
            <td>AVA, loja virtual, sistema escolar</td>
          </tr>
        </tbody>
      </table>

      <h3>Tecnologias principais da web</h3>
      <ul>
        <li><strong>HTML:</strong> estrutura da página.</li>
        <li><strong>CSS:</strong> estilo visual da página.</li>
        <li><strong>JavaScript:</strong> interatividade e lógica.</li>
      </ul>

      <h4>Exemplo de HTML</h4>
      <pre><code>&lt;h1&gt;J.A.R.V.I.S CORE&lt;/h1&gt;
&lt;p&gt;Painel interno de estudos&lt;/p&gt;
&lt;button&gt;Abrir conteúdo&lt;/button&gt;</code></pre>

      <h4>Exemplo de CSS</h4>
      <pre><code>.card {
  background: #0b1020;
  border-radius: 16px;
  padding: 20px;
  color: white;
}</code></pre>

      <h4>Exemplo de JavaScript</h4>
      <pre><code>function abrirConteudo() {
  alert("Conteúdo aberto com sucesso!");
}</code></pre>

      <h3>IDE para desenvolvimento web</h3>
      <p>
        IDE é o ambiente usado para escrever, organizar e testar códigos.
        Para desenvolvimento web, uma das IDEs mais usadas é o Visual Studio Code.
      </p>

      <ul>
        <li>Visual Studio Code</li>
        <li>WebStorm</li>
        <li>Sublime Text</li>
        <li>Replit</li>
        <li>CodeSandbox</li>
      </ul>

      <h3>Estrutura de uma aplicação web</h3>
      <pre><code>projeto-web/
├── index.html
├── style.css
├── script.js
├── img/
│   └── imagens-do-site.png
└── README.md</code></pre>

      <h3>Desenvolvimento da interface web</h3>
      <p>
        A interface é a parte visual que o usuário vê e utiliza. Ela precisa ser bonita,
        organizada, clara, responsiva, fácil de usar e compatível com diferentes telas.
      </p>

      <h3>Elementos de interface</h3>
      <ul>
        <li>Tela de login</li>
        <li>Menu</li>
        <li>Botões</li>
        <li>Cards</li>
        <li>Painel interno</li>
        <li>Barra de progresso</li>
        <li>Formulários</li>
        <li>Mensagens de status</li>
      </ul>

      <h3>Estilo da aplicação web</h3>
      <p>
        Aplicar estilo significa transformar uma página simples em uma interface
        visualmente agradável. O estilo é feito principalmente com CSS.
      </p>

      <pre><code>button {
  background: linear-gradient(135deg, #00b7ff, #006eff);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  cursor: pointer;
}</code></pre>

      <h3>Responsividade</h3>
      <p>
        Responsividade é a capacidade da aplicação se adaptar a computador, notebook,
        tablet e celular.
      </p>

      <pre><code>@media (max-width: 768px) {
  .card {
    width: 100%;
    padding: 16px;
  }
}</code></pre>

      <h3>Formulários web</h3>
      <p>
        Formulários são usados para receber dados do usuário, como login, cadastro,
        pesquisa, contato, cadastro de vaga e candidatura.
      </p>

      <pre><code>&lt;form&gt;
  &lt;input type="text" placeholder="Nome"&gt;
  &lt;input type="email" placeholder="E-mail"&gt;
  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>

      <h3>Validação de dados</h3>
      <pre><code>function validarLogin(usuario, senha) {
  if (usuario === "" || senha === "") {
    return "Preencha usuário e senha.";
  }

  return "Dados preenchidos corretamente.";
}</code></pre>

      <h3>Frontend, Backend e Banco de Dados</h3>
      <table>
        <thead>
          <tr>
            <th>Parte</th>
            <th>Função</th>
            <th>Exemplos</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Frontend</td>
            <td>Interface que o usuário vê</td>
            <td>HTML, CSS, JavaScript</td>
          </tr>

          <tr>
            <td>Backend</td>
            <td>Processamento e regras do sistema</td>
            <td>Node.js, PHP, Python, Java</td>
          </tr>

          <tr>
            <td>Banco de Dados</td>
            <td>Armazenamento das informações</td>
            <td>MySQL, Firebase, PostgreSQL</td>
          </tr>
        </tbody>
      </table>

      <h3>Exemplo de funcionamento de login web</h3>
      <pre><code>1. Usuário digita usuário e senha no frontend.
2. JavaScript envia os dados para o backend.
3. Backend verifica as informações no banco.
4. Banco retorna se o usuário existe.
5. Sistema libera ou bloqueia o acesso.</code></pre>

      <h3>Testes em aplicações web</h3>
      <ul>
        <li>Login</li>
        <li>Botões</li>
        <li>Links</li>
        <li>Formulários</li>
        <li>Responsividade</li>
        <li>Design</li>
        <li>Banco de dados</li>
        <li>Mensagens de erro</li>
        <li>Compatibilidade com navegadores</li>
      </ul>

      <h3>Checklist de testes</h3>
      <pre><code>[ ] O login funciona?
[ ] Os botões abrem o conteúdo correto?
[ ] O layout está bonito no celular?
[ ] Os links funcionam?
[ ] Os formulários validam os dados?
[ ] A conexão com banco de dados funciona?
[ ] As mensagens de erro são claras?
[ ] O site funciona no Chrome, Edge e Firefox?
[ ] O projeto está salvo no GitHub?</code></pre>

      <h3>Versionamento com Git e GitHub</h3>
      <pre><code>git init
git add .
git commit -m "Atualização da aplicação web"
git status
git push</code></pre>

      <h3>Disponibilização da aplicação web</h3>
      <ul>
        <li>GitHub Pages</li>
        <li>Vercel</li>
        <li>Netlify</li>
        <li>Render</li>
        <li>Firebase Hosting</li>
        <li>Servidor próprio</li>
      </ul>

      <h3>GitHub Pages</h3>
      <p>
        GitHub Pages permite publicar sites diretamente a partir de um repositório
        do GitHub. É ideal para HTML, CSS, JavaScript, portfólios e projetos escolares.
      </p>

      <h3>Ciclo de desenvolvimento de uma aplicação web</h3>
      <pre><code>1. Analisar os requisitos
2. Planejar o layout
3. Criar o HTML
4. Estilizar com CSS
5. Adicionar interatividade com JavaScript
6. Conectar com banco de dados, se necessário
7. Testar funcionalidades
8. Corrigir erros
9. Versionar com Git
10. Publicar a aplicação</code></pre>

      <h3>Exemplo aplicado: Site J.A.R.V.I.S CORE</h3>
      <p>
        No J.A.R.V.I.S CORE, usamos HTML para estruturar a tela de login e o painel,
        CSS para criar o visual escuro e azul tecnológico, JavaScript para controlar
        login, botões, progresso e conteúdo das UCs, e GitHub Pages para publicação.
      </p>

      <h4>Exemplo de card HTML</h4>
      <pre><code>&lt;section class="uc-card"&gt;
  &lt;h2&gt;UC 7 — Desenvolver Aplicações Web&lt;/h2&gt;
  &lt;p&gt;Conteúdo sobre HTML, CSS, JavaScript e publicação online.&lt;/p&gt;
  &lt;button&gt;Abrir conteúdo&lt;/button&gt;
&lt;/section&gt;</code></pre>

      <h3>Conclusão da UC 7</h3>
      <p>
        Desenvolver Aplicações Web prepara o aluno para criar projetos reais como
        sites, plataformas online, sistemas escolares, painéis administrativos,
        lojas virtuais e aplicações com login.
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
console.log("UCs carregadas:", Object.keys(conteudosUC).length);
