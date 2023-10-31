import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center space-y-3 ">
                <h3 className="text-xl text-[#FF3811] font-bold">Service</h3>
                <h1 className="text-5xl font-bold"> Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized <br /> 
                Words which do nt look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    services.map(service=><ServicesCard key={service.id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;