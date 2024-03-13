import { useSelector } from "react-redux";
import CartProducts from "../component/Fragments/CartProducts";
import NavBar from "../component/Layout/Navbar";
import { getProducts } from "../services/services.products";
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../constext/DarkMode";

const ProductsPage = () => {
  const { isDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  });

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  return (
    <>
      <NavBar />
      <div className={` flex justify-center items-center ${isDarkMode && "bg-slate-900"}`}>
        <div className="flex flex-wrap justify-center p-6 md:w-full">
          {products.map((product) => (
            <CartProducts key={product.id}>
              <CartProducts.Header image={product.image} id={product.id} />
              <CartProducts.Body title={product.title}>{product.description}</CartProducts.Body>
              <CartProducts.Footer price={product.price} id={product.id} />
            </CartProducts>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
