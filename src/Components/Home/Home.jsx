import EduandExp from "../../Edu&Exp/EduandExp";
import Details from "../Details/Details";
import GetInTouch from "../GetInTouch";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

import Banner from "./Banner";

const Home = () => {
    return (
        <div className="text-white bg-slate-800">
           <Banner/>
           <Details/>
           <EduandExp></EduandExp> 
           <Slider/>
           <GetInTouch/>
        </div>
    );
};

export default Home;