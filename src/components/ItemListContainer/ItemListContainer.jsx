import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../data/firebase";
import { getProducts } from "../../data/firebase"
import { useParams } from "react-router-dom";
import Item from "./Item";
import "./ItemListContainer.css";


function ItemListContainer(props) {
  const { categParam } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!categParam) {
      console.log("1. Petición de todos los productos");
      getProducts()
        .then((respuesta) => {
          console.log("3. Datos recibidos...", respuesta);
          setProducts(respuesta);
        })
        .catch((error) => alert(`Error: ${error}`));
    } else {
      console.log("Petición filtrada por categoría:", categParam);
      getProductsByCategory(categParam)
        .then((response) => setProducts(response))
        .catch((error) => alert(`Error: ${error}`));
    }
  }, [categParam]);

  return (
    <div className="productos">
      <h1 className="mensaje">{props.mensaje}</h1>
      <p>Nuestros productos</p>
      <div className="fila-4">
        {products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
