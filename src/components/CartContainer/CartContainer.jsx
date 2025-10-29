import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { CreateOrder } from "../../data/firebase";
import FormCheckout from "./FormCheckout";

function CartContainer() {
  const { cartItems, removeItem, clearCart, totalPrice } = useContext(CartContext);
  const [orderCreatedId, setOrderCreatedId] = useState(null);
  const [error, setError] = useState(null);

  async function handleCheckout(buyer) {
    try {
      setError(null);
      const total = totalPrice();
      const newOrderConfirmed = await CreateOrder({ cartItems, total, buyer, date: new Date() });
      setOrderCreatedId(newOrderConfirmed.id);
      clearCart();
    } catch (e) {
      setError(e?.message || "Error al crear la orden");
    }
  }

  if (error) {
    return (
      <div>
        <h2>Error al crear la orden</h2>
        <p>{error}</p>
        <button onClick={() => setError(null)}>Intentar de nuevo</button>
      </div>
    );
  }

  if (orderCreatedId) {
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu id de orden es: <strong>{orderCreatedId}</strong></p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div>
        Tu carrito de compras está vacío <Link to="/"><button>Ir al inicio</button></Link>
      </div>
    );
  }

  return (
    <section>
      <div>
        <h2>Tu carrito de compras:</h2>

        <div style={{ display: "flex", gap: "50px", flexDirection: "column" }}>
          {cartItems.map((itemInCart) => (
            <div key={itemInCart.id}>
              <h4>{itemInCart.title}</h4>
              <img width="120" src={itemInCart.img} alt={itemInCart.title} style={{ borderRadius: "8px" }} />
              <p>Precio unitario: ${itemInCart.price}</p>
              <p>Cantidad: {itemInCart.quantity}</p>
              <strong><p>Precio total: ${itemInCart.quantity * itemInCart.price}</p></strong>
              <button onClick={() => removeItem(itemInCart.id)}>🗑️</button>
              <hr />
            </div>
          ))}
        </div>

        <h4>Total a pagar: ${totalPrice()}</h4>

        <div style={{ marginTop: 24 }}>
          <FormCheckout handleCheckout={handleCheckout} />
        </div>
      </div>
    </section>
  );
}

export default CartContainer;
