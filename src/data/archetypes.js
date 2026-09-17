export const archetypeOrder = ['MUL', 'EST', 'CON', 'EXP'];

export const archetypes = {
  EXP: {
    code: 'EXP',
    name: 'Monks Exploradores',
    emoji: '🔍',
    shipRole: 'Tripulante Novato(a)',
    tagline:
      'Você acabou de embarcar nessa nave — e isso não é problema nenhum!',
    description:
      'Você está iniciando o contato com a IA, entendendo as possibilidades e testando os primeiros experimentos no dia a dia. Nada de errado nisso: todo grande comandante de nave já foi tripulante novato um dia. Seu radar está ligado, sua curiosidade é o seu maior combustível — agora é hora de acelerar os testes!',
    debrief:
      '🛰️ Relatório da Nave: nenhum sinal de sabotagem encontrado — só um tripulante ainda calibrando os instrumentos. Continue explorando!',
  },
  CON: {
    code: 'CON',
    name: 'Monks Construtores',
    emoji: '⚙️',
    shipRole: 'Engenheiro(a) de Bordo',
    tagline:
      'Suas mãos já estão na engrenagem — e a máquina roda melhor com você nela.',
    description:
      'Você aplica a IA de forma autônoma em tarefas práticas e operacionais, sempre de olho na eficiência do fluxo. É o tipo de tripulante que resolve, executa e entrega — sem depender de ninguém pra fazer o motor girar. A nave sente a diferença quando você está de plantão.',
    debrief:
      '🛰️ Relatório da Nave: engrenagens funcionando a todo vapor. Este tripulante mantém a nave em movimento — sem drama, sem alucinação.',
  },
  EST: {
    code: 'EST',
    name: 'Monks Estrategistas',
    emoji: '🧩',
    shipRole: 'Engenheiro(a)-Chefe',
    tagline:
      'Você não olha só pra engrenagem — você olha pro mapa da galáxia inteira.',
    description:
      'Você integra a IA à lógica de negócio e ao planejamento, conectando tarefas isoladas a um propósito sistêmico maior. Enquanto muitos resolvem o problema na frente deles, você já está pensando três órbitas à frente — conectando pontos que a maioria nem percebeu que existiam.',
    debrief:
      '🛰️ Relatório da Nave: rota estratégica traçada com precisão. Este tripulante enxerga o sistema — e não apenas a tarefa.',
  },
  MUL: {
    code: 'MUL',
    name: 'Monks Multiplicadores',
    emoji: '🚀',
    shipRole: 'Comandante da Nave',
    tagline:
      'Você não é só tripulante — você já está treinando a próxima geração de comando.',
    description:
      'Você domina tecnicamente a IA e, mais do que isso, compartilha esse conhecimento, fortalecendo a cultura de inovação de toda a tripulação. Se existe um impostor tentando espalhar confusão pela nave, é gente como você que organiza a defesa, documenta o antídoto e ensina todo mundo a reconhecer a ameaça.',
    debrief:
      '🛰️ Relatório da Nave: comando confirmado. Este tripulante não apenas navega — ele guia toda a frota.',
  },
};

export function getWinningArchetype(counts) {
  let max = -1;
  let winners = [];

  for (const code of Object.keys(counts)) {
    if (counts[code] > max) {
      max = counts[code];
      winners = [code];
    } else if (counts[code] === max) {
      winners.push(code);
    }
  }

  if (winners.length === 1) return winners[0];

  for (const code of archetypeOrder) {
    if (winners.includes(code)) return code;
  }
  return winners[0];
}
