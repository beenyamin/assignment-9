import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="">

            <div className=" text-center justify-center my-20 bg-green-50  rounded py-4 " >
                <h2 className="text-3xl font-bold my-10 text-center">Please Login</h2>
                <form  className=" md:w-3/4 lg:w-1/2 mx-auto">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account? Please <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
            </div>





        </div>
    );
};

export default Login;