import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { title, price, img , _id } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions flex text-[#FF3811]">
                    <p className=""> Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className=""><AiOutlineArrowRight></AiOutlineArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;