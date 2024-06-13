import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import { NavLinkModel } from "./Models/core.model";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ProductsDetailsPage from "./Pages/ProductsDetailsPage/ProductsDetailsPage";
import ErrorPages from "./Pages/ErrorPages/ErrorPages";
import HomePage from "./Pages/HomePage/HomePage";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  // const [products, setProducts] = useState<Product[]>(productsJSON);

  // const addToCart = (selectedProduct: Product) => {
  //   setProducts((prevProducts) => {
  //     return prevProducts.map((product) => {
  //       if (product.id === selectedProduct.id) {
  //         product.inCart = true;
  //         return product;
  //       } else {
  //         return product;
  //       }
  //     });
  //   });
  // };

  // const removeFromCart = (selectedProduct: Product) => {
  //   setProducts((prevProducts) => {
  //     return prevProducts.map((product) =>
  //       product.id === selectedProduct.id
  //         ? { ...product, inCart: false }
  //         : product
  //     );
  //   });
  // };

  // const getProductsInCart = () => products.filter((product) => product.inCart);
  const navLinks: NavLinkModel[] = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/products",
      text: "Products",
    },
    {
      path: "/about",
      text: "About Us",
    },
    {
      path: "/contact",
      text: "Contact",
    },
    {
      path: "/cart",
      text: "Cart",
    },
  ];
  return (
    <section className="App">
      <Header title="E-commerce App" navLinkData={navLinks} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductsDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPages />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
