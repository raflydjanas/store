import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, type }) => {
    return (
        <div className="flex h-screen items-center justify-center bg-slate-900">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl text-center font-bold text-blue-600 mb-2">{title}</h1>
                <p className="text-base text-slate-400 mb-4 text-center">
                    {type === 'login' ? 'welcome back, login your account now' : 'welcome, please enter your details and register your account'}
                </p>
                {children}
                <p className="text-md text-slate-400 text-center mt-5">
                    {type === 'login' ? "Don't have an account ? " : " Already have an account ? "}
                    {type === 'login' ? (
                        <Link to='/register' className="text-blue-600 font-bold">
                            Register
                        </Link>   
                    ):(
                        <Link to='/' className="text-blue-600 font-bold">
                            Login
                        </Link>
                    )}
                </p>
            </div>
        </div>
    )
}

export default AuthLayout;