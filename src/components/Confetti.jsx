const COLORS = [
  '#ff4757',
  '#17d8d8',
  '#ffd93d',
  '#2ed573',
  '#a55eea',
  '#ff9f43',
];

export default function Confetti({ count = 40 }) {
  const pieces = Array.from({ length: count }, (_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 1.5;
    const duration = 3 + Math.random() * 2;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const rotate = Math.random() > 0.5 ? '0%' : '50%';

    return (
      <div
        key={i}
        className="confetti-piece"
        style={{
          left: `${left}%`,
          backgroundColor: color,
          borderRadius: rotate,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  return <>{pieces}</>;
}
