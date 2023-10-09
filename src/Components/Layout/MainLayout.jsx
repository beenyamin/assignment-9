
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div >
            <div className=' max-w-5xl mx-auto font-Poppins'>

            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>

           <Footer></Footer>
        </div>
    );
};

export default MainLayout;