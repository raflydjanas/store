import { useState, useEffect, useContext } from "react";
import { getProducts } from "../services/services.products";
import { useSelector } from "react-redux";
import NavBar from "../component/Layout/Navbar";
import Button from "../component/Elements/Button/Index";
import { DarkMode } from "../constext/DarkMode";
import { IoIosStar } from "react-icons/io";
import { AiFillAlert } from "react-icons/ai";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.data);
  const [products, setProducts] = useState({});
  const [totalCart, setTotalCart] = useState(0);
  const { isDarkMode } = useContext(DarkMode);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.quantity;
      }, 0);
      setTotalCart(sum);
    }
  }, [cart, products]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, [cart, products]);

  return (
    <>
      <NavBar />
      <div className={`flex min-h-screen justify-center items-center p-10 md:w-full ${isDarkMode && "bg-slate-900"}`}>
        <div className="grid grid-cols-1 md:grid-cols-auto sm:grid sm:grid-cols-1 gap-6 justify-center">
          {products.length > 0 && cart.length > 0 ? (
            cart.map((item) => {
              const product = products.find((product) => product.id === item.id);
              return (
                <div key={item.id}>
                  <div className="bg-slate-700 border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8  lg:space-y-6 xl:space-y-8">
                    <h3 className="text-lg flex justify-end text-cyan-500">jumlah item: {item.quantity}</h3>
                    <div className="flex items-center space-x-4">
                      <img src={product.image} alt={product.title} width="88" height="88" className="flex-none rounded-lg bg-slate-100" loading="lazy" />
                      <div className="min-w-0 flex-auto space-y-1 font-semibold">
                        <p className="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
                          <abbr title="Episode">{product.title}</abbr>
                          {totalCart}
                        </p>
                        <p className="mb-5">${product.price}</p>
                        <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate max-w-[25rem]">{product.description.substring(0, 150)} ...</h2>
                        <p className="text-slate-400 dark:text-slate-50 text-lg flex items-center justify-start">
                          <IoIosStar style={{ color: "orange" }} />
                          {product.rating.rate} / review {product.rating.count}
                        </p>
                      </div>
                    </div>
                    <div className="h-1 w-[10rem] 2xl:w-[30rem] lg:w-[15rem] md:w-[9rem] mx-auto bg-slate-500"></div>
                    <div className="text-right mt-3">
                      <Button onClick={() => (window.location.href = `/fake`)}>Buy Now</Button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={`text-center bg-slate-800 py-7 px-10 rounded-sm ${!isDarkMode && "bg-slate-900"}`}>
              <div className="">
                <AiFillAlert className="text-center text-[5rem] mx-auto" color="red" />
              </div>
              <h1 className="text-[3rem] text-blue-600 my-3 ">opps!</h1>
              <h2 className="text-[1.6rem] text-slate-600">No item in cart</h2>
              <h3 className="text-[1.6rem] text-slate-600">please back to home and then add to cart rigth now</h3>
              <p className="text-[1.6rem] text-slate-600">thank you for your cooperation</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
