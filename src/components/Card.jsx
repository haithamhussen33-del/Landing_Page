import "../styles/CardStyles.css";

export default function Card({ heading, imgBackground }) {
  return (
    <div className="card-container">
      <div className="card-content">
        <h2>{heading}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit
          saepe accusamus, deserunt reiciendis explicabo nam quod quas
          voluptatibus unde. Alias, sapiente tempora. Maxime possimus sed
          corporis, earum cumque dolorem!
        </p>
      </div>
      <div className="card-img-container">
        <img className="card-img" src={imgBackground} alt="" />
      </div>
    </div>
  );
}
