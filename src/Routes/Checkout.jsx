
import { Link, useLoaderData } from "react-router-dom";


const Checkout = () => {
    const service= useLoaderData();
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
                    <Link to={`/book/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;