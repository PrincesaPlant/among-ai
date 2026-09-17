export const phases = [
  {
    id: 1,
    title: 'Sala de Comunicações',
    subtitle: 'Aquecimento Express — Mito, Fato & Buzzwords',
    icon: '📡',
    flavorText:
      'Os sinais da nave estão confusos. Antes de tudo, precisamos calibrar sua frequência de conhecimento.',
  },
  {
    id: 2,
    title: 'Sala de Máquinas',
    subtitle: 'Um Dia Normal na Monks',
    icon: '⚙️',
    flavorText:
      'As engrenagens do dia a dia não param. Mostre como você opera sob pressão.',
  },
  {
    id: 3,
    title: 'Central de Dados',
    subtitle: 'Detetive de Prompts & Fluxos',
    icon: '🔍',
    flavorText:
      'Há padrões suspeitos nos registros da nave. Investigue com precisão.',
  },
  {
    id: 4,
    title: 'Ponte de Comando',
    subtitle: 'Estratégia, Escolhas & Cultura',
    icon: '🚀',
    flavorText:
      'Última etapa antes da ejeção do impostor. Mostre sua visão de comando.',
  },
];

export const questions = [
  {
    id: 1,
    phase: 1,
    text: 'Sobre "IA Agêntica", qual frase melhor descreve seu momento atual?',
    options: [
      {
        key: 'A',
        text: 'Sei que o termo existe e está na moda, mas ainda estou descobrindo como funciona na prática.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Já utilizo IAs para executar tarefas diretas e automações simples no meu dia a dia de trabalho.',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Entendo que a IA agêntica envolve criar fluxos encadeados onde a IA toma decisões sequenciais com autonomia.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Já crio ou incentivo o uso de fluxos com múltiplos agentes para resolver processos inteiros do time.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 2,
    phase: 1,
    text: 'Se um colega pedir no Slack: "Pode me mandar esse material em Markdown (MD) ou JSON?", qual é a sua reação?',
    options: [
      {
        key: 'A',
        text: 'Fico em dúvida sobre o significado das siglas e pergunto como ele prefere receber a informação.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Peço para a própria IA converter o meu texto para o formato solicitado e envio o arquivo.',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Entendo a diferença: uso Markdown para leitura/documentação e JSON para integração com dados/ferramentas.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Envio no formato correto e ensino o colega a pedir para a IA gerar essa saída automaticamente.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 3,
    phase: 1,
    text: 'Quando ouve falar de conceitos como MCP (Model Context Protocol) ou integrações diretas da IA com ferramentas:',
    options: [
      {
        key: 'A',
        text: 'Acho curioso, mas meu foco principal ainda é aprender a fazer bons prompts no chat.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Uso extensões e conectores prontos para integrar a IA às minhas ferramentas de rotina (ex: Drive, Notion).',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Avalio como essas conexões podem eliminar etapas manuais no fluxo estratégico da área.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Testo integrações avançadas e compartilho casos de uso práticos para o time aplicar.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 4,
    phase: 1,
    text: 'Mito ou Fato: "Para ter o melhor resultado, o prompt deve conter todas as informações possíveis de uma só vez."',
    options: [
      {
        key: 'A',
        text: 'Fato: quanto mais texto eu escrever na primeira mensagem, mais completa será a resposta.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Mito: um prompt objetivo com contexto claro costuma ser mais eficiente do que blocos gigantes de texto.',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Mito: o segredo é a construção modular (interagir em etapas/camadas) alinhada ao objetivo final.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Mito: a eficiência vem de estruturar o prompt com papéis, restrições e regras de formato reaproveitáveis.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 5,
    phase: 2,
    text: 'Cenário da Apresentação Express: Você tem 2 horas para estruturar uma apresentação para a liderança sobre a eficiência de um projeto. Como você aciona a IA?',
    options: [
      {
        key: 'A',
        text: 'Peço para a IA listar tópicos gerais sobre o assunto para ter ideias do que colocar nos slides.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Copio minhas anotações do projeto, jogo na IA e peço para ela gerar a estrutura slide por slide.',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Subo os dados brutos na IA para que ela cruze resultados com objetivos do negócio e sugira uma narrativa estratégica.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Uso um modelo de prompt pré-testado para extrair a estrutura e disponibilizo esse padrão para o time.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 6,
    phase: 2,
    text: 'Cenário do Mapeamento de Processos: Seu time precisa organizar o fluxo do próximo trimestre para evitar gargalos de tempo. Qual é a sua atitude?',
    options: [
      {
        key: 'A',
        text: 'Pergunto à IA quais são as melhores práticas de mercado sobre gestão de tempo e organização.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Monto um prompt detalhado com a rotina atual e peço para a IA identificar tarefas repetitivas que podem ser otimizadas.',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Desenho um fluxo sistêmico conectando as entregas do time para que a IA apoie cada passagem de bastão.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Identifico o principal gargalo do grupo, crio um guia prático de resolução com IA e rodo um alinhamento com a equipe.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 7,
    phase: 2,
    text: 'Cenário da Dúvida no Slack: Um colega desabafa que está há horas tentando fazer a IA gerar uma planilha e ela só devolve texto desconexo. O que você faz?',
    options: [
      {
        key: 'A',
        text: 'Recomendo que ele tente reescrever a pergunta de um jeito mais simples.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Envio para ele o prompt exato que eu uso para formatar dados em tabela com facilidade.',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Explico como a IA interpreta dados estruturados para que ele entenda onde a lógica do prompt dele travou.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Agendo um papo rápido de 10 minutos para ajustar a dúvida dele e documento a solução no canal do time.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 8,
    phase: 2,
    text: 'Cenário da Reunião Longa: Você acabou de sair de um alinhamento de 1 hora com vários pontos de discussão. Como organiza o desdobramento?',
    options: [
      {
        key: 'A',
        text: 'Leio minhas anotações manuais e peço à IA apenas para corrigir o português do meu resumo.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Copio a transcrição bruta na IA e solicito uma ata curta com a lista de tarefas e responsáveis.',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Passo a transcrição pedindo um plano de ação estruturado por prioridade, impacto e prazos estratégicos.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Aplico um template padronizado de ata automatizada e compartilho com todos os participantes do encontro.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 9,
    phase: 2,
    text: 'Cenário da Análise de Dados: Você recebe uma planilha complexa com métricas da campanha e precisa tirar conclusões rápidas.',
    options: [
      {
        key: 'A',
        text: 'Olho os números manualmente e uso a IA para tirar dúvidas sobre termos técnicos que não conheço.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Subo os dados na IA e pergunto: "Quais são os 5 principais insights dessa planilha?".',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Peço para a IA cruzar as métricas com as metas da empresa e apontar riscos de performance.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Crio um fluxo de análise que o time possa replicar sempre que receber planilhas parecidas.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 10,
    phase: 3,
    text: 'O Caso do Deck Visual: Um profissional enviou o prompt: "Faça um deck visual e completo para a diretoria sobre o projeto X". Ele recebeu apenas texto corrido. O que faltou?',
    options: [
      {
        key: 'A',
        text: 'Dizer o tom de voz e pedir por favor na instrução.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Definir o formato de saída (ex: divisão por slides, tópicos) e o nível de síntese esperado.',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Conectar a solicitação com o objetivo de negócio e o perfil executivo dos diretores.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Estruturar o prompt com contexto, papéis, limites de tamanho e tags de formatação.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 11,
    phase: 3,
    text: 'O Caso da Alucinação: A IA gerou uma resposta super convincente, mas com dados que não batem com a realidade da empresa. Como evita isso?',
    options: [
      {
        key: 'A',
        text: 'Tento fazer a mesma pergunta em outro horário para ver se a resposta muda.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Adiciono no prompt a regra: "Responda apenas com base nos documentos que eu anexar".',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Forneço fontes validadas, delimito o escopo de atuação e defino critérios claros de checagem.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Crio uma instrução customizada (Custom Instructions/Projects) que impede alucinações no trabalho do time.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 12,
    phase: 3,
    text: 'Sequência de Criação: Ao iniciar um projeto do zero com apoio da IA, qual sequência de passos representa melhor o seu modo de trabalhar?',
    options: [
      {
        key: 'A',
        text: 'Começo fazendo perguntas livres no chat conforme as ideias vão surgindo.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Defino o objetivo, preparo o contexto/arquivos e peço para a IA gerar a primeira versão operacional.',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Mapeio o objetivo de negócio, divido o projeto em etapas lógicas e uso a IA para validar cada fase.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Estruturo o roteiro de prompts para o projeto e documento as melhores abordagens para consulta futura do time.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 13,
    phase: 4,
    text: 'Ao escolher qual modelo ou ferramenta de IA utilizar para uma tarefa:',
    options: [
      {
        key: 'A',
        text: 'Uso a ferramenta que já está aberta no meu navegador no momento.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Escolho com base na tarefa prática (ex: uma IA melhor para texto, outra para imagens ou código).',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Avalio a janela de contexto, privacidade de dados e capacidade de raciocínio lógico exigida pelo problema.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Testo novos modelos no lançamento, comparo performances e indico a melhor opção para cada perfil do time.',
        archetype: 'MUL',
      },
    ],
  },
  {
    id: 14,
    phase: 4,
    text: 'Como você organiza seus prompts e aprendizados do dia a dia?',
    options: [
      {
        key: 'A',
        text: 'Não costumo salvar; quando preciso, escrevo uma mensagem nova na hora.',
        archetype: 'EXP',
      },
      {
        key: 'B',
        text: 'Tenho um bloco de notas pessoal com os comandos que funcionaram bem para mim.',
        archetype: 'CON',
      },
      {
        key: 'C',
        text: 'Organizo uma biblioteca estruturada por tipo de entrega e objetivo de trabalho.',
        archetype: 'EST',
      },
      {
        key: 'D',
        text: 'Alimento o repositório central do time/projeto para garantir que todos aproveitem os prompts testados.',
        archetype: 'MUL',
      },
    ],
  },
];
