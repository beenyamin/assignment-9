/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const OneDetailsCard = ({ card }) => {

    const { id, name, image, price, short_description, about } = card || {}

    return (
        <div>

            <div className="relative" >
                <img className="w-full rounded-xl" src={image} alt="" />

            <div className=" rounded-b-lg w-full">
                    <button className="p-2 text-white font-bold rounded-lg">{price}</button>
                </div>
            </div>

            <div className="mx-5 ">
                <h3 className="font-extrabold text-3xl text-[#0B0B0B] ">{name} </h3>
                <p className="font-normal text-lg py-4">{short_description}</p>
                <p className="font-medium"> <span className="font-bold text-xl my-5"> Price:</span> {price}</p> 
                <p> <span className="font-bold text-xl pt-5">Read More :</span> {about}</p>


                <div className="my-10">

                    <h2 className="font-bold text-xl" >Want To Book our Services </h2>
                    <Link to={'/contact'}><button className=" mt-3 rounded font-medium bg-pink-500 px-4 py-2 text-white">Contact Us</button></Link>

                </div>
            </div>





        </div>
    );
};


export default OneDetailsCard;