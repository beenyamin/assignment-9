
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


const SixCard = ({ card }) => {


    const handleAddToDetails = () => { 
        
        const addToDetails = [];

        const detailsPage = JSON.parse(localStorage.getItem('details'))

        if (!detailsPage) {

            addToDetails.push(card)
            localStorage.setItem('details', JSON.stringify(addToDetails))
           


            // swal(' want se details ? Go To details Page!');

        }


        else {

            const isExists = detailsPage.find(card => card.id === id)

            if (!isExists) {
                
                addToDetails.push(...detailsPage, card)
            localStorage.setItem('details', JSON.stringify(addToDetails))
             toast.success('want se details ? Go To details Page!');

            // swal("Great Work!", "You Donated SuccessFully!", "success");

            } else {

                toast.error(' Go To Details Page');
     
                // swal(' Go To Details Page');
            }
            
        }

    
    }

    const { id,name, image, price, short_description, button_text } = card || {}
    return (
        <Link to={'/details'}>

            <div >
                <div className="card w-80 mb-5  lg:w-96 glass">
                    <figure><img src={image} alt="car!" /></figure>

                    <div className="card-body item-center justify-center rounded-b-xl bg-white  ">
                        <h2 className="card-title justify-center text-2xl font-bold ">{name}</h2>
                        <p className='justify-center'>{short_description}</p>
                        <p className='justify-center'> <span className='font-semibold pr-3'>Price:</span>{price}</p>
                       


                        <div className="card-actions justify-center">
                            <button onClick={handleAddToDetails} className="bg-pink-500 rounded text-white px-4 py-2 font font-medium ">{button_text}</button>
                        </div>
                    </div>
                </div>

            </div>

        </Link>
    );
};

export default SixCard;