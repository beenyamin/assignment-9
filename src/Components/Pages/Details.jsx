import { useEffect, useState } from "react";
import OneDetailsCard from "../DetailsCard/OneDetailsCard";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

  const [card, setCard] = useState({})
    const { id } = useParams()
    const sixCard = useLoaderData()

    useEffect(() => {
        const FindCard = sixCard?.find(card => card.id == id)
        setCard(FindCard)

    }, [id, sixCard])

    console.log(card)

    return (
        <div className=" mx-auto w-11/12 "> 
    <OneDetailsCard card ={card}></OneDetailsCard>

        </div>
    );
};

export default Details;