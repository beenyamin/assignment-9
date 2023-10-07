import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";


const Login = () => {

    const { loginUser, googlePopUp } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleLogin = () => {
        googlePopUp()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (

        <div className="w-8/12">

            <div className=" text-center justify-center my-20 bg-green-50  rounded py-4 " >
                <h2 className="text-3xl font-bold my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account? Please <Link className= " underline text-pink-400  font-bold" to={'/register'}>Register</Link></p>

                <button onClick={handleGoogleLogin} className="bg-pink-400 px-4 rounded ">Google</button>

            </div>


        </div>
    );
};

export default Login;