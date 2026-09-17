import { archetypes } from '../data/archetypes';
import { archetypeColors } from '../data/crewmateColors';
import Crewmate from './Crewmate';
import Confetti from './Confetti';

export default function ResultScreen({ winningCode, userName }) {
  const result = archetypes[winningCode];
  const color = archetypeColors[winningCode] || 'red';

  return (
    <div className="screen result-screen">
      <Confetti count={50} />
      <div className="result-box">
        <div style={{ marginBottom: '12px' }}>
          <Crewmate color={color} size={100} pose="celebrate" />
        </div>

        <span className="phase-tag">PROTOCOLO CONCLUÍDO</span>
        <h2>Parabéns, {userName}!</h2>
        <h1 className="result-title">Você é um(a) {result.name}</h1>
        <h3 className="result-role">🎖️ Cargo na nave: {result.shipRole}</h3>

        <p className="result-tagline">{result.tagline}</p>
        <p className="result-description">{result.description}</p>

        <div className="debrief-box">{result.debrief}</div>

        <p className="thanks-text">
          ✅ Seu diagnóstico foi enviado à Central da Nave. Obrigado por
          participar do Among AI: Agentes na Nave Monks!
        </p>
      </div>
    </div>
  );
}
