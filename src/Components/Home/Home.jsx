import EduandExp from "../../Edu&Exp/EduandExp";
import Services from "../Services/Services";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
           <Banner/>
           <EduandExp></EduandExp> 
           <Services/>
        </div>
    );
};

export default Home;