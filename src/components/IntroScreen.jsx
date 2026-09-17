import { useState } from 'react';
import Crewmate from './Crewmate';

export default function IntroScreen({ onStart }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Preencha nome e email para iniciar o protocolo.');
      return;
    }
    if (!email.includes('@')) {
      setError('Email inválido. A nave não reconhece esse sinal.');
      return;
    }
    onStart({ name: name.trim(), email: email.trim() });
  }

  return (
    <div className="screen intro-screen">
      <div className="intro-box">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '8px',
          }}
        >
          <Crewmate color="red" size={64} pose="idle" />
          <Crewmate color="cyan" size={64} pose="walk" />
          <Crewmate color="yellow" size={64} pose="idle" />
        </div>

        <h1 className="game-title">AMONG AI</h1>
        <h2 className="game-subtitle">Agentes na Nave Monks</h2>

        <p className="flavor-text">
          A nave está em rota, mas um <strong>Agente de IA desgovernado</strong>{' '}
          se infiltrou no sistema e vem espalhando{' '}
          <em>alucinações e buzzwords vazias</em> pela tripulação.
          <br />
          <br />
          Você foi convocado(a) para o <strong>Protocolo de Diagnóstico</strong>
          . Responda com honestidade — é a única forma de identificar seu papel
          real a bordo e ajudar a expulsar o impostor da nave.
        </p>

        <form onSubmit={handleSubmit} className="intro-form">
          <label>
            Nome do(a) Tripulante
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
            />
          </label>

          <label>
            Email de Acesso à Nave
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@monks.com"
            />
          </label>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="btn-primary">
            🚀 Iniciar Protocolo
          </button>
        </form>
      </div>
    </div>
  );
}
