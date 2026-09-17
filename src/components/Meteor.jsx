export default function Meteor({ top, size, duration, delay }) {
  return (
    <div
      className="meteor"
      style={{
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="meteor-tail" />
    </div>
  );
}
