import AuthLayout from "../component/Layout/AuthLayout";
import FormLogin from "../component/Fragments/FormLogin";

const LoginPage = () => {

    return (
        <AuthLayout title='Login' type='login'>
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage;