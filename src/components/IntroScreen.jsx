import { useState } from "react";
import Crewmate from "./Crewmate";

export default function IntroScreen({ onStart }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();

    if (!name.trim() || !cleanEmail) {
      setError("Preencha nome e email para iniciar o protocolo.");
      return;
    }
    if (!cleanEmail.endsWith("@monks.com")) {
      setError("Use seu e-mail @monks.com para entrar na nave.");
      return;
    }
    onStart({ name: name.trim(), email: cleanEmail });
  }

  return (
    <div className="screen intro-screen">
      <div className="intro-box">
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "8px" }}>
          <Crewmate color="red" size={64} pose="idle" />
          <Crewmate color="cyan" size={64} pose="walk" />
          <Crewmate color="yellow" size={64} pose="idle" />
        </div>

        <h1 className="game-title">AMONG AI</h1>
        <h2 className="game-subtitle">Agentes na Nave Monks</h2>

        <p className="flavor-text">
          A nave está em rota, mas um <strong>Agente de IA desgovernado</strong> se infiltrou
          no sistema e vem espalhando <em>alucinações e buzzwords vazias</em> pela tripulação.
          <br /><br />
          Você foi convocado(a) para o <strong>Protocolo de Diagnóstico</strong>.
          Responda com honestidade — é a única forma de identificar seu papel real a bordo
          e ajudar a expulsar o impostor da nave.
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
            Email Monks
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.nome@monks.com"
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
