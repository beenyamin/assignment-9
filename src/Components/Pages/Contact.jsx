
import { FaFacebookSquare} from 'react-icons/fa';





const Contact = () => {
    return (
        <div className="my-20">

            <div className="hero min-h-screen bg-base-100 rounded">
                <div className="hero-content flex-col  lg:flex-row-reverse ">
                    <div className="text-center lg:text-left ml-6">
                        <h1 className="text-4xl font-bold">Contact Info</h1>
                        <p className="pt-5 font-medium">
                            Contact Info
                            Address
                        </p>
                        <p className="pt-3">D/315, Swaroop Building, Ujwal Nanda Deep Co Operative Housing Society Evershine Nagar, Opposite Ushma Nagar, Evershine Nagar, Malad West, Mumbai, Maharashtra 400064</p>

                        <h2 className="font-medium pt-4">Call Us</h2>
                        <p>9869938745</p>

                        <div >
                        <FaFacebookSquare className='h-10'></FaFacebookSquare>
                        

                            
                             </div>


                    </div>


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Phone Number" className="input input-bordered" required />
                            </div>


                            <textarea placeholder="Which Services Do You Need" className="textarea mt-2 textarea-bordered textarea-lg w-full max-w-xs" ></textarea>



                            <div className="form-control mt-6">
                                <button className="w-full bg-pink-500  text-white rounded font-semibold py-2 text-xl">Submit</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;