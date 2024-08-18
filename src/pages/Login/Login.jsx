import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { register, handleSubmit } = useForm()
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit= data=>{
        const email = data.email;
        const password = data.password;

        signIn(email, password)
        .then( result =>{
            console.log(result)
            navigate(from, {replace: true});
            
        })
    }
    return (
        <div>
        <div className="mx-auto md:w-1/3">
            <h2 className="text-3xl mb-6 text-center">Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>     
                <input type="email" {...register('email', {required: true})} placeholder="Email" className="border w-full mb-4 py-2 px-4"/>
                <input type="password" {...register('password')} placeholder="Password" className="border w-full mb-4 py-2 px-4"/>
                 <input className="btn btn-secondary w-full mb-4" type="submit" value="Login" />
            </form>
            <div className="flex gap-3 justify-center mb-5">
                <SocialLogin></SocialLogin>
            </div>
            <p className="text-center mb-5">New here? Please <Link className="text-blue-500" to="/register">Register</Link></p>
        </div>
    </div>
    );
};

export default Login;