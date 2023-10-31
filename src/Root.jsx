import { Outlet } from "react-router-dom";
import Navbar from "./Pages/HomePage/Navbar";
import Footer from "./Pages/HomePage/Footer";

const Root = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          
        </div>
    );
};

export default Root;