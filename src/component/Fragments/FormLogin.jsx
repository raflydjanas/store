import { login } from "../../services/authServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index"

const FormLogin = () => {
    const [LoginFailed, setLoginFailed] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        const data = {        
            username: e.target.username.value,
            password: e.target.password.value,
        }

        login(data, (status, res) => {
            if(status) {
                localStorage.setItem('token', res)
                navigate('/products')
            } else {
                setLoginFailed(res.response.data);
            }
        })

    }
    return (
        <form onSubmit={handleLogin}>
            <InputForm 
                label="Username"
                name="username"
                type="text"
                placeholder="Exemple: john doe"
            />
            <InputForm 
                label="Password"
                name="password"
                type="password"
                placeholder="******"
            />
            <Button type='submit' classname='w-full'>
                Login
            </Button>
            {LoginFailed && <p className="text-red-500 text-center mt-3">{LoginFailed}</p>}
        </form>
    )
}

export default FormLogin;