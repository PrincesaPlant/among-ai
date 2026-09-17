export default function Crewmate({
  color = 'red',
  size = 80,
  animated = true,
  pose = 'idle',
}) {
  return (
    <div
      className={`crewmate crewmate-${color} ${
        animated ? 'crewmate-animated' : ''
      } crewmate-${pose}`}
      style={{ '--crewmate-size': `${size}px` }}
    >
      <div className="crewmate-backpack" />
      <div className="crewmate-body">
        <div className="crewmate-visor" />
      </div>
      <div className="crewmate-legs">
        <div className="crewmate-leg" />
        <div className="crewmate-leg" />
      </div>
    </div>
  );
}
