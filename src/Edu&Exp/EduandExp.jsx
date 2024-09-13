import Education from "./Education";
import Experience from "./Experience";

const EduandExp = () => {
    return (
        <div className="grid grid-cols-2 mx-5 gap-4 mt-6">
            <Experience/>
            <Education/>
        </div>
    );
};

export default EduandExp;