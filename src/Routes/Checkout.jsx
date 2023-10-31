import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const service= useLoaderData();
    const { title, price, img , _id } = service;
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default Checkout;