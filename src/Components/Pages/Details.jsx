import { useEffect, useState } from "react";
import OneDetailsCard from "../DetailsCard/OneDetailsCard";

const Details = () => {

  const [detailsItem, setDetailsItem] = useState([])
  const [noDataFound, setNoDAtaFound] = useState("")
  const [seeAll, setSeeAll] = useState(false)

  useEffect(() => {
    const detailsPage = JSON.parse(localStorage.getItem('details'));
    if (detailsPage) {
      setDetailsItem(detailsPage)
    } else {
      setNoDAtaFound('Go To Home ==> choose One Service ! Then You Can See Service Details Here')

    }

  }, [])


  console.log(detailsItem)
  console.log(seeAll)


  return (
    <div>

      {

        noDataFound ? <p className=' h-64 font-bold text-2xl flex justify-center items-center'>{noDataFound} </p> :
          <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mx-auto w-10/12'>

              {seeAll ? 
                detailsItem.map(card => <OneDetailsCard key={card.id} card={card}></OneDetailsCard>) :

                detailsItem.slice(0, 6).map(card => <OneDetailsCard key={card.id} card={card}></OneDetailsCard>)}

            </div>

          </div>

      }




    </div>
  );
};

export default Details;