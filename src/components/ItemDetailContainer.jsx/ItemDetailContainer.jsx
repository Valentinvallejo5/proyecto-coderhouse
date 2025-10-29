import { useParams } from "react-router-dom";
import { getProductById } from "../../data/firebase";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import ItemCount from "./ItemCount";

function ItemDetailContainer() {
  const { idParam } = useParams();
  const [product, setProduct] = useState({ loading: true });
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    getProductById(idParam).then((response) => setProduct(response));
  }, [idParam]);

  if (product.loading) return <h2>Cargando...</h2>;

  function handleAddToCart(count) {
    addItem(product, count);
}


  return (
    <div className="producto">
      <h1 className="titulo">{product.title}</h1>
      <img src={product.img} alt={product.title} />
      <p className="detalle">{product.description}</p>
      <p className="detalle">
        <strong>Precio:</strong> ${product.price}
      </p>
      <p className="detalle">
        <strong>Categoría:</strong> {product.category}
      </p>
      <ItemCount max={product.stock ?? 99} min={1} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemDetailContainer;
