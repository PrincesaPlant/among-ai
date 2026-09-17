import Crewmate from './Crewmate';

export default function PhaseIntro({ phase, color, onContinue }) {
  return (
    <div className="screen phase-intro-screen">
      <div className="phase-intro-box">
        <div style={{ marginBottom: '12px' }}>
          <Crewmate color={color} size={90} pose="walk" />
        </div>
        <div className="phase-icon">{phase.icon}</div>
        <span className="phase-tag">FASE {phase.id} DE 4</span>
        <h2>{phase.title}</h2>
        <h3>{phase.subtitle}</h3>
        <p className="flavor-text">{phase.flavorText}</p>
        <button className="btn-primary" onClick={onContinue}>
          Avançar para a sala →
        </button>
      </div>
    </div>
  );
}
