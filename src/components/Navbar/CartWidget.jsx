import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

function CartWidget() {
  const { cartCountItems } = useContext(CartContext);
  return (
    <div style={{ fontSize: "20px" }}>
      🛒 {cartCountItems()}
    </div>
  );
}

export default CartWidget;

