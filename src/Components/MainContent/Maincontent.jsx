import { FaPeopleCarry } from 'react-icons/fa';
import { LiaCertificateSolid } from 'react-icons/lia';
import { GiFoodTruck } from 'react-icons/gi';
import { AiOutlineClockCircle} from 'react-icons/ai';
import { GiSpookyHouse} from 'react-icons/gi';
import { BiHappyHeartEyes} from 'react-icons/bi';


const Maincontent = () => {
    return (
        <div className="text-center justify-center ">

            <h2 className="text-3xl font-bold text-pink-500">Why Choose Us ?</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3  mt-5"> 

                <div className='mt-5'>

                     <h2> <FaPeopleCarry  className='w-52 h-16 pl-24 ' ></FaPeopleCarry></h2>
                    <h3 className="text-2xl my-4 font-semibold">Experienced Professionals</h3>
                    <p className="text">we take time to perfect and present your food and beverage options in a way that will wow your guests. We have the skills, experience, and patience to make your vision a reality.</p>

                </div>


                {/* 2 */}
                
                <div className='mt-5'>

               
                     <h2> <LiaCertificateSolid className='w-52 h-16 pl-32 '></LiaCertificateSolid></h2>
                   

                    <h3 className="text-2xl my-4 font-semibold">Work Since 16 Years</h3>
                    <p className="">We are serving Wedding event services since 2006 in all over Uk. We have vast experienced in this field.</p>

                </div>

                {/* 3 */}
                <div className='mt-5'>

                     <h2> <GiFoodTruck className='w-52 h-16 pl-32 '></GiFoodTruck></h2>

                    <h3 className="text-2xl my-4 font-semibold">Less Stress</h3>
                    <p className="">We will assist you in planning for food. A lot of thought goes into what to serve at an event which can be stressful. We can ease this worry and take care of the hard work.</p>


                </div>

                {/* 4 */}
                <div className='mt-10'>

                     
                     <h2> <AiOutlineClockCircle className='w-52 h-16 pl-32 '></AiOutlineClockCircle></h2>

                    <h3 className="text-2xl my-4 font-semibold">Save Time</h3>
                    <p className="">We have full setup Wed Handle service which will save your precious time. We can adapt to any venue environment to make sure your food and beverages fit the scene and look perfect.</p>

                </div>
                {/* 5 */}
                <div className='mt-10'>

                     
                  
                     <h2> <GiSpookyHouse className='w-52 h-16 pl-32 '></GiSpookyHouse></h2>

                    <h3 className="text-2xl my-4 font-semibold"> Community Center </h3>
                    <p className="">We have our own community center which will make your wedding more interesting. So don't think about it. </p>

                </div>

                {/* 6 */}
                <div className='mt-10'>

                  
                     <h2> <BiHappyHeartEyes className='w-52 h-16 pl-32 '></BiHappyHeartEyes></h2>

                    <h3 className="text-2xl my-4 font-semibold"> Customer Satisfaction </h3>
                    <p className="">Our main prime focus is to Made Your Wedding Beautiful and Memorable, so that our customers are happy and get another chance to work again with them. </p>

                </div>






            </div>



            
        </div>
    );
};

export default Maincontent;