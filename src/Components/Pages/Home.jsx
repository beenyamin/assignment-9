import Footer from "../Footer/Footer";
import Banner from "../Header/Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";



const Home = () => {
    return (
        <div>

         
           <div className="">  <Banner></Banner> 

           <ServiceCard></ServiceCard>
           
           </div>


            <Footer></Footer>
            
   

        </div>
    );
};

export default Home;