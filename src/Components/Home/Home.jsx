import EduandExp from "../../Edu&Exp/EduandExp";
import Details from "../Details/Details";
import Services from "../Services/Services";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="text-white bg-slate-800">
           <Banner/>
           <Details/>
           <EduandExp></EduandExp> 
           <Services/>
        </div>
    );
};

export default Home;