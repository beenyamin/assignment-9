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

        <div className="item-center justify-center">

            <div className=" text-center">

                <div className="  my-20 rounded py-4 " >
                    <h2 className="text-3xl font-bold my-10 text-center">Please Login</h2>

                    <form onSubmit={handleLogin} className=" md:w-1/4 lg:w-1/2 mx-auto ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="w-full text-white font-medium py-2 rounded bg-blue-700">Login</button>
                        </div>

                        {

                           loginError && <p className="bg-red-400 my-5 font-semibold">{  loginError}</p>

                        }

                        {

                            loginSuccess && <p className="text-blue-500 my-5 font-semibold">{loginSuccess}</p>

                        }



                    </form>


                    <p className="text-center mt-4">Do not have an account? Please <Link className=" underline text-red-400   font-bold" to={'/register'}>Register</Link></p>

                    <button onClick={handleGoogleLogin} className="bg-red-400 px-4 font-semibold text-white rounded"><FcGoogle className=""></FcGoogle>Google</button>

                </div>

            </div>

            <Toaster></Toaster>


        </div>
    );
};

export default Login;