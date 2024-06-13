import { useContext, useState } from "react";
import { Product } from "../../Models/product.model";
import CartItem from "../CartItem/CartItem";
import "./CartList.css";
import ProductContext from "../../Context/ProductsContext";

interface CartListProps {
  cartProducts: Product[];
  removeFromCart: (selectedProduct: Product) => void;
}

function CartList({ cartProducts, removeFromCart }: CartListProps) {
  const { totalPrice } = useContext(ProductContext);
  return (
    <>
      {cartProducts.length > 0 ? (
        <ol className="CartList">
          {cartProducts.map((product, i) => (
            <CartItem
              key={i}
              product={product}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className="total-price">Total: ${totalPrice}</div>
        </ol>
      ) : (
        <h3 className="CartList-heading">No products in cart...</h3>
      )}
    </>
  );
}

export default CartList;
