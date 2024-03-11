import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getDetailsProducts }  from "../services/services.products";
import { DarkMode } from "../constext/DarkMode";
import { CgLogOut } from "react-icons/cg";

const DetailProductPage = () => {
    const { isDarkMode } = useContext(DarkMode)
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getDetailsProducts(id, (data) => {
            setProduct(data);
        }) 
    }, [id])

    return (
        <>
            
            <div className={`w-100 min-h-screen flex items-center justify-center relative ${isDarkMode && "bg-slate-900"}`}>
                <Link to='/products'>
                <div className="absolute top-[10rem] left-[20rem]  right-0">
                    <CgLogOut size={35}/>
                </div>
                </Link>
                {Object.keys(product).length > 0 && (
                    <div className="flex font-sans max-w-3xl shadow-2xl text-slate-500 shadow-slate-200 hover:scale-125 hover:transition hover:duration-500">
                    <div className="flex-none w-48 relative">
                        <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    </div>
                    <form className="flex-auto p-6 text-slate-600">
                        <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-500">
                            {product.category}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            ${product.price}
                        </div>
                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            {product.title}
                        </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        {product.description}
                        </div>
                        <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            Buy now
                            </button>
                            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                            Add to bag
                            </button>
                        </div>
                        </div>
                        <p className="text-sm text-slate-700">
                        rating {product.rating.rate} / reviews {product.rating.count}
                        </p>
                    </form>
                    </div>
                )}
            </div>
        </>
    )
}

export default DetailProductPage;