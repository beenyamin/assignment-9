import React from 'react';
import SixCard from './SixCard';

const ServiceCard = ({card}) => {
    return (
        <div className='text-center justify-center'>
            <h2 className='text-3xl font-bold text-pink-500'>Our Services</h2>

            <div className= 'my-10 w-11/12 ml-14 mx-auto  grid grid-cols-1 lg:grid-cols-2 '>

                {
                    card?.map (card => <SixCard key={card.id} card={card}></SixCard>)
                }
            </div>


        </div>
    );
};

export default ServiceCard;