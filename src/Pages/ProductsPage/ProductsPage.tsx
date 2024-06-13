import { useContext } from "react";
import "./ProductsPage.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ProductContext from "../../Context/ProductsContext";

function ProductsPage() {
  const { products, addToCart } = useContext(ProductContext);

  return (
    <section className="ProductsPage">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} addToCart={addToCart} />
      ))}
    </section>
  );
}

export default ProductsPage;
