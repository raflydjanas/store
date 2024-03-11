import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/slice";
import Button from "../Elements/Button/Index"

const CartProducts = ({ children }) => {
    return (
        <div className="w-full max-w-xs bg-slate-800 border border-gray-500 shadow rounded-lg mx-3 my-2 flex flex-col justify-between hover:scale-110 transition duration-300">
            {children}
        </div>
    )
}

const Header = ({ image, id }) => {
    return (
        <Link to={`/product/${id}`}>
            <img src={image} alt="products" className="w-full p-8 rounded-t-lg h-[20rem]"/>
        </Link>
    )
}

const Body = ({ title, children }) => {
    return (
        <div className="px-5 pb-5 h-full text-white">
            <p className="text-base font-semibold mb-3">{title.substring(0, 25)} ...</p>
            {children.substring(0, 120)} ...
        </div>
    )
}

const Footer = ({ price, id }) => {
    const formateUsd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price)
    const dispatch = useDispatch();
   
    return (
        <div className="flex flex-col  items-start justify-center py-5 px-4">
            <span className="text-3xl font-bold text-white mb-5">
                {formateUsd}
            </span>
            <div className="h-[0.1rem] min-w-[15rem] my-5 mx-auto bg-slate-500"></div>
            <div className="flex gap-3">
                <Button onClick={() => window.location.href = `/fake`}>buy now</Button>
                <Button onClick={() => dispatch(addToCart({id, quantity: 1}))}>add to cart</Button>
            </div>
        </div>
    )
}

CartProducts.Header = Header;
CartProducts.Body = Body;
CartProducts.Footer = Footer;
export default CartProducts;
