import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";


const Register = () => {

    const {newUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        newUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
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
                        <input type="password" required name="password" placeholder="Type Password" className="input input-bordered" />
                     
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? Please <Link className= " underline text-pink-400 font-bold" to="/login">Login</Link></p>
            </div>






        </div>
    );
};

export default Register;