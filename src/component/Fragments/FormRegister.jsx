import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index"

const FormRegister = () => {

    return (
        <form>
            <InputForm 
                label="Username"
                name="username"
                type="text"
                placeholder="Exemple: johndoe"
            />
            <InputForm 
                label="Email"
                name="email"
                type="email"
                placeholder="Exemple: 0KpJ9@example.com"
            />
            <InputForm 
                label="Password"
                name="Password"
                type="password"
                placeholder="******"
            />
            <Button type='submit' classname='w-full'>
                Register
            </Button>
        </form>
    )
}

export default FormRegister;