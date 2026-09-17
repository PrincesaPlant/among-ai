import { useEffect, useState } from 'react';
import Spaceship from './Spaceship';
import Meteor from './Meteor';

export default function SpaceScene({ progress = 0 }) {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const initial = Array.from({ length: 5 }, (_, i) => createMeteor(i));
    setMeteors(initial);

    const interval = setInterval(() => {
      setMeteors((prev) => {
        const next = createMeteor(Date.now());
        const filtered = prev.slice(-6);
        return [...filtered, next];
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  function createMeteor(seed) {
    return {
      id: seed,
      top: Math.random() * 85,
      size: 10 + Math.random() * 16,
      duration: 2.5 + Math.random() * 2,
      delay: 0,
    };
  }

  // A nave sobe conforme o progresso avança (de 88% até 4% do topo)
  const shipTop = 88 - progress * 84;

  return (
    <div className="space-scene">
      <div className="space-track-line" />

      {meteors.map((m) => (
        <Meteor
          key={m.id}
          top={m.top}
          size={m.size}
          duration={m.duration}
          delay={m.delay}
        />
      ))}

      <div className="spaceship-track" style={{ top: `${shipTop}%` }}>
        <Spaceship size={50} />
      </div>
    </div>
  );
}
