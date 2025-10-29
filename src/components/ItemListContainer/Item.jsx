import "./item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="producto">
      <h1 className="titulo">{props.title}</h1>
      <img src={props.img} alt={props.title} />
      <p className="detalle">{props.description}</p>
      <p className="detalle">
        <strong>Precio:</strong> ${props.price}
      </p>
      <p className="detalle">
        <strong>Categoría:</strong> {props.category}
      </p>
      <button>
        <Link to= {`/detalle/${props.id}`}>Ver detalle</Link>
      </button>
    </div>
  );
}

export default Item;
