import "./CardStats.scss";
function CardStats(props) {
  return (
    <div className="card-stats">
      <h2 className="card-stats-heading">{props.heading}</h2>
      <p className="card-stats-title">{props.title}</p>
    </div>
  );
}

export default CardStats;
