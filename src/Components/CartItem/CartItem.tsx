import { Product } from "../../Models/product.model";
import "./CartItem.css";

interface CartItemProps {
  product: Product;
  removeFromCart: (selectedProduct: Product) => void;
}

function CartItem({ product, removeFromCart }: CartItemProps) {
  return (
    <li className="CartItem">
      <strong>{product.title}</strong>
      <span>
        ${product.price}
        <button
          className="cartItemBtn"
          onClick={() => {
            removeFromCart(product);
          }}
          style={{ marginLeft: "20px" }}
        >
          ❌
        </button>
      </span>
    </li>
  );
}

export default CartItem;
