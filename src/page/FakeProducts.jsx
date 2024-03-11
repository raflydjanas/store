import Button from "../component/Elements/Button/Index";
import { useContext } from "react";
import { DarkMode } from "../constext/DarkMode";
import { GiFingersCrossed } from "react-icons/gi";


const FakeProductsPage = () => {
    const { isDarkMode } = useContext(DarkMode)
    return (
        <div className={`flex justify-center items-center h-screen ${isDarkMode && 'bg-slate-900'}`}>
            <div className={`flex flex-col justify-center items-center ${isDarkMode && 'text-white'}`}>
                <GiFingersCrossed size={100} />
                <h1 className="text-5xl font-bold text-center">OOPS!</h1>
                <p className=" text-3xl font-semebold text-center py-5">it is just fake products</p>
                <p className=" text-center text-2xl font-semebold">i am sorry about it </p>
                 <Button classname={'mt-5'} onClick={() => window.location.href = '/products'}>BACK HOME</Button>
            </div>
        </div>
    )
}

export default FakeProductsPage;