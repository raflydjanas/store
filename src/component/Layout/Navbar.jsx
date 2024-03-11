import Button from "../Elements/Button/Index";
import { FaCartShopping } from "react-icons/fa6";
import { useState, useEffect, useContext } from "react";
import { getUsername } from "../../services/authServices";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DarkMode } from "../../constext/DarkMode";
import { GiMoonBats } from "react-icons/gi";
import { FaSunPlantWilt } from "react-icons/fa6";

const NavBar = () => {
    const [username, setUsername] = useState('');
    const [totalProduct, setTotalProduct] = useState([]);
    const cart = useSelector(state => state.cart.data);
    const navigate = useNavigate();
    const { isDarkMode, setDarkMode } = useContext(DarkMode)


    useEffect(() => {
        const num = cart.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
        setTotalProduct(num);
    }, [cart]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            setUsername(getUsername(token));
        }
    }, [username]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className={`bg-blue-600 p-5 flex items-center justify-between `}>
            <Link to='/products'>
                <div className="cursor-pointer">
                    <h2 className="text-xl text-white font-bold hover:text-slate-300 ">Store</h2>
                </div>
            </Link>
            <div className="flex items-center justify-evenly gap-3 relative">
                <h2 className="text-white text-base font-semibold">
                    {username}
                </h2>
                    {cart.length > 0 && (
                        <div className="bg-red-600 text-white absolute top-0 right-[10rem] h-6 w-5 rounded-full text-center ">
                            <div className="mx-auto my-auto">
                                {totalProduct}
                            </div>
                        </div>
                    )}
                <Link to='/cart'>
                    <FaCartShopping size={20} className="cursor-pointer text-white" />
                </Link>               
                <Button classname='bg-slate-900 ml-4' onClick={handleLogout}>
                    logout
                </Button>
                <Button classname='bg-slate-900 ' onClick={() => setDarkMode(!isDarkMode)}>
                    {isDarkMode ? <FaSunPlantWilt size={23}/> : <GiMoonBats size={23}/>}
                </Button>
            </div>
        </div>
    )
}

export default NavBar;