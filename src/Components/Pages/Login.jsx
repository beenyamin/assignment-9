import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";



const Login = () => {

    const { loginUser, googlePopUp } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setLoginError('');
        setLoginSuccess('');


        if (password.length < 6) {
            toast.error('Password should be at least 6 characters!')
            return;

        }
        else if (!/[A-Z]/.test(password)) {
            toast.error(" Your password should have  at Least one Capital letter! ")
            return
        }

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success(' SuccessFully Log in!')

            })
            .catch(error => {
                console.error(error)
                toast.error('Login failed. Please check your Email And Password');
            })
    }

    const handleGoogleLogin = () => {
        googlePopUp()
            .then(result => {
                console.log(result.user)
                toast.success('Successfully logged in with Google!');
            })
            .catch(error => {
                console.error(error)
                toast.error('Google login failed. Please try again.');
            })
    }


    return (

        <div className="">

    <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold"> Login Now!</h1>
            </div>
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">

            <form onSubmit={handleLogin}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Your Email" required className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" required className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <button className="w-full bg-blue-700  text-white rounded font-semibold py-2 text-xl">Log in</button>
                </div>


                {
                    loginError && <p className="bg-red-400 my-5 font-semibold">{loginError}</p>
                }

                {
                    loginSuccess && <p className="text-blue-500 my-5 font-semibold">{loginSuccess}</p>
                }

            </form>

            <p className="text-center mt-4">Do not have an account? Please <Link className=" underline text-red-400   font-bold" to={'/register'}>Register</Link></p>


         <div className=" w-3/6 ml-24 ">  

         <button onClick={handleGoogleLogin} className="  btn btn-warning "> Google Login </button>



         </div>
        </div>

        
    

    </div>

    
        </div>
    </div>




            <Toaster></Toaster>


        </div>
    );
};

export default Login;