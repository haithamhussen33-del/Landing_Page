import "../styles/CardStyles.css";

export default function Card({ leftCard, rightCard }) {
  return (
    <div className="tow-card-container">
      <div className="left-card-container">
      <div className="left-card-content">
        <h2>{leftCard.heading}</h2>
        <p>
        {leftCard.description}
        </p>
      </div>
      <div className="left-card-img-container">
        <img className="left-card-img" src={leftCard.imgback} alt="" loading="lazy" />
      </div>
    </div>
    <div className="right-card-container">
      <div className="right-card-content">
        <h2>{rightCard.heading}</h2>
        <p>
        {rightCard.description}
        </p>
      </div>
      <div className="right-card-img-container">
        <img className="right-card-img" src={rightCard.imgback} alt="" loading="lazy" />
      </div>
    </div>

    </div>
   
  );
}
