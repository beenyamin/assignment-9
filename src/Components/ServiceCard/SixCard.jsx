import React from 'react';

const SixCard = ({ card }) => {

    const {  name, image, price, short_description, button_text } = card || {}
    return (
        <div >
    
            <div className="card w-80 mb-5  lg:w-96 glass">
                <figure><img src={image} alt="car!" /></figure>

                <div className="card-body item-center justify-center rounded-b-xl bg-white  ">
                    <h2 className="card-title justify-center  ">{name}</h2>
                    <p className='justify-center'>{short_description}</p>
                    <p className='justify-center'> <span className='font-semibold pr-3'>Price:</span>{price}</p>


                    <div className="card-actions justify-center">
                        <button className="bg-pink-500 rounded text-white px-4 py-3 font font-medium ">{button_text}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SixCard;