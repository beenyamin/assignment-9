/* eslint-disable react/prop-types */


const OneDetailsCard = ({card}) => {

    const { id,name, image, price, short_description, button_text } = card || {}

    return (
        <div>

<div className="relative " >
               <img className="w-full rounded-b-xl" src={image} alt="" />

               <div className="bg-blend-overlay rounded-b-lg bg-cover bg-fixed p-6 bg-black/50 absolute bottom-0 w-full">
                    <button className="p-2 text-white font-bold rounded-lg">Donate {price}</button>
                </div>
               </div>

               <div className="mx-5 my-10">
                <h3 className="font-extrabold text-3xl text-[#0B0B0B] ">{name} </h3>
                <p className="font-normal text-lg py-4">{short_description}</p>

            </div>



        </div>
    );
};


export default OneDetailsCard;