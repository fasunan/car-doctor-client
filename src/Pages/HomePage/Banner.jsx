
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item h-[600px] relative w-full">
                <img src="https://i.ibb.co/x5gX3xn/1.jpg" className="w-full rounded-xl" />

                <div className="absolute h-full flex items-center left-0 rounded-xl right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className="text-white space-y-7 pl-12 w-1/3  ">

                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn  bg-[#FF3811] border-none btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src="https://i.ibb.co/12hftwM/2.jpg" className="w-full rounded-xl" />

                <div className="absolute h-full flex items-center left-0 rounded-xl right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className="text-white space-y-7 pl-12 w-1/3  ">

                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn  bg-[#FF3811] border-none btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Projects</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src="https://i.ibb.co/ZxvnwSV/3.jpg" className="w-full rounded-xl" />

                <div className="absolute h-full flex items-center left-0 rounded-xl right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className="text-white space-y-7 pl-12 w-1/3  ">

                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn  bg-[#FF3811] border-none btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Projects</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src="https://i.ibb.co/g33kGgY/4.jpg" className="w-full rounded-xl" />

                <div className="absolute h-full flex items-center left-0 rounded-xl right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className="text-white space-y-7 pl-12 w-1/3  ">

                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn  btn-primary bg-[#FF3811] border-none mr-5">Discover More</button>
                            <button className="btn btn-outline  btn-secondary">Latest Projects</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;