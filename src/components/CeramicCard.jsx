import { Link } from "react-router-dom";

export default function CeramicCard({ name, img, description, id }) {
  return (
    <div className="ceramic-card">
      <div className="ceramic-img-wrapper">
        <img src={img} alt={name} className="ceramic-img" />
      </div>

      <h3 className="ceramic-name">{name}</h3>
      <p className="ceramic-description">{description}</p>

      <Link to={`/products/${id}`} className="ceramic-btn">
        المزيد من التفاصيل
      </Link>
    </div>
  );
}
