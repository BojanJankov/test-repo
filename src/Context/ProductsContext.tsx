import { createContext, useEffect, useState } from "react";
import { Product } from "../Models/product.model";

interface ContextType {
  products: Product[];
  addToCart: (selectedProduct: Product) => void;
  removeFromCart: (selectedProduct: Product) => void;
  getProductsInCart: () => Product[];
  totalPrice: number;
}

const ProductContext = createContext<ContextType>({
  products: [],
  addToCart() {},
  removeFromCart() {},
  getProductsInCart() {},
});

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (selectedProduct: Product) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === selectedProduct.id) {
          product.inCart = true;
          setTotalPrice(totalPrice + product.price);
          return product;
        } else {
          return product;
        }
      });
    });
  };

  const removeFromCart = (selectedProduct: Product) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === selectedProduct.id) {
          setTotalPrice(totalPrice - product.price);
          return { ...product, inCart: false };
        } else {
          return product;
        }
      });
    });
  };

  const getProductsInCart = () => {
    return products.filter((product) => product.inCart);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addToCart,
        removeFromCart,
        getProductsInCart,
        totalPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
