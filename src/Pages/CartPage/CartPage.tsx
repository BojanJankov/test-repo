import { useContext } from "react";
import CartList from "../../Components/CartList/CartList";
import "./CartPage.css";
import ProductContext from "../../Context/ProductsContext";
import { Product } from "../../Models/product.model";

function CartPage() {
  const { getProductsInCart, removeFromCart } = useContext(ProductContext);

  const products: Product[] = getProductsInCart();
  return (
    <section className="CartPage">
      <div className="cart-page-heading">
        <h2>Cart</h2>
      </div>
      <div className="page-content">
        <CartList cartProducts={products} removeFromCart={removeFromCart} />
      </div>
    </section>
  );
}

export default CartPage;
