
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 relative">
                    <img src="https://i.ibb.co/tBkDbcf/person.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/318qyZW/parts.jpg" className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />

                    </div>
                    <div className="w-1/2">
                        <h3 className="text-3xl text-[#FF3811] font-bold">About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-primary bg-[#FF3811] border-none">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;