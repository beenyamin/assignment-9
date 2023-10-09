/* eslint-disable react/prop-types */

import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const SixCard = ({ card }) => {
 const { id,name, image, price, short_description, button_text } = card || {}
    return (
       

            <div >
                <div className="card w-80 mb-5  lg:w-96 glass">
                    <figure><img src={image} alt="car!" /></figure>

                    <div className="card-body item-center justify-center rounded-b-xl bg-white  ">
                        <h2 className="card-title justify-center text-2xl font-bold ">{name}</h2>
                        <p className='justify-center'>{short_description}</p>
                        <p className='justify-center'> <span className='font-semibold pr-3'>Price:</span>{price}</p>
                    
                        <div className="card-actions justify-center">

                         <Link to={`/details/${id}`}>
                         <button  className="bg-pink-500 rounded text-white px-4 py-2 font font-medium ">{button_text}</button>
                         </Link>

                        
                            
                        </div>
                    </div>
                </div>

            </div>

       
    );
};

export default SixCard;