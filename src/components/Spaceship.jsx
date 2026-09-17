export default function Spaceship({ size = 50 }) {
  return (
    <div className="spaceship" style={{ '--ship-size': `${size}px` }}>
      <div className="spaceship-body">
        <div className="spaceship-window" />
      </div>
      <div className="spaceship-wing spaceship-wing-left" />
      <div className="spaceship-wing spaceship-wing-right" />
      <div className="spaceship-flame" />
    </div>
  );
}
