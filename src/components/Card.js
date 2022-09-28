import CardStats from "./CardStats";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.cover}
        alt="baby blue pattern wallpaper"
        className="card-cover"
      />
      <img
        src={props.person}
        alt="black man wearing a jacket"
        className="card-person"
      />
      <h1 className="card-heading">
        {props.fName} <span className="card-age">{props.age}</span>
      </h1>
      <p className="card-city">{props.city}</p>
      <div className="card-details">
        <CardStats heading={`80K`} title="Followers" />
        <CardStats heading={`803K`} title="Likes" />
        <CardStats heading={`1.4K`} title="Photos" />
      </div>
    </div>
  );
}

export default Card;
