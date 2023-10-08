import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {

        logOut()
            .then(() => console.log('user sign out'))
            .catch(error => console.error(error))


    }


    return (
        <div>
            <nav className="bg-white my-4 border-gray-200 dark:bg-gray-900">

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <h2 className="flex items-center">
                        <span className=" font-Poppins self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Wed <span className="text-blue-500" >Hub</span> </span>
                    </h2>
                    <div className="flex md:order-2">

                        {

                            user ? <>
                                <span className="font-bold py-3 mr-3">{user.email}</span>
                                

                                <Link to={'/login'}> <button onClick={handleSignOut} type="button" className="text-white bg-blue-700 font-medium rounded-lg  px-4 py-2 ">Log Out</button> </Link>
                            </>

                                : <Link to={"/login"}>

                                    <button type="button" className="text-white bg-blue-700 font-medium rounded-lg  px-4 py-2 ">Login</button>

                                </Link>


                        }





                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                            <span className="sr-only">Open main menu</span>

                        </button>
                    </div>
                    <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


                            <li>
                                <NavLink className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/services'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/details'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Details</NavLink>
                            </li>

                        </ul>


                    </div>
                </div>
            </nav>



        </div>
    );
};

export default Navbar;