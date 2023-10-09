import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Banner from "../Header/Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";
import Maincontent from "../MainContent/Maincontent";
import HappyCustomer from "../MainContent/HappyCustomer";



const Home = () => {
  
    const card =useLoaderData ()

    return (
        <div>

           <div className="">  

           <Banner></Banner> 
           <ServiceCard card = {card}></ServiceCard>
           <Maincontent></Maincontent>
           <HappyCustomer></HappyCustomer>


           
           </div>

            <Footer></Footer>
            
   

        </div>
    );
};

export default Home;