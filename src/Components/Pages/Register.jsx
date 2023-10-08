import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";


const Register = () => {

    const { googlePopUp } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState('');

    const { newUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        setRegisterError('');
        setSignUpSuccess('');


        if (password.length < 6) {
          toast.error('Password should be at least 6 characters!')
            return;

        }
        else if (!/[A-Z]/.test(password)) {

            toast.error(" Your password should have  at Least one Capital letter! ")
            return
        }

        newUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success(' SuccessFully Signed Up!')
            })
            .catch(error => {
                console.error(error);
                toast.error('Registration Failed. Please check your Info');

            })
    }


    const handleGoogleRegister = () => {
        googlePopUp()
            .then(result => {
                console.log(result.user)
                toast.success(' Google Registration Successful');
            })
            .catch(error => {
                console.error(error)
                toast.error('Google Registration failed. Please try again.');
            })
    }





    return (
        <div>


            <div className=" text-center justify-center my-20 bg-green-50  rounded py-4 " >


                <h2 className="text-3xl font-bold my-10 text-center">Please Register</h2>


                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>

                        <input type="text" required name="name" placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input type="email" required name="email" placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="New Password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="w-full text-white font-medium py-2 rounded bg-blue-700">Register</button>
                    </div>


                    {

                        registerError && <p className="bg-red-400 my-5 font-semibold">{registerError}</p>

                    }

                    {

                        signUpSuccess && <p className="text-blue-500 my-5 font-semibold">{signUpSuccess}</p>

                    }

                </form>
                <p className="text-center mt-4">Already have an account? Please <Link className=" underline text-red-400 font-bold" to="/login">Login</Link></p>

                <button onClick={handleGoogleRegister} className="bg-red-400 px-4 font-semibold text-white rounded"><FcGoogle className=""></FcGoogle>Google</button>

            </div>

            <Toaster></Toaster>
     

        </div>
    );
};

export default Register;