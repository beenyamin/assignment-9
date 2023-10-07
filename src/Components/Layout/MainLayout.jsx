
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className=' max-w-5xl mx-auto font-Poppins'>
          <Navbar></Navbar>
           <Outlet></Outlet>

           
            
        </div>
    );
};

export default MainLayout;