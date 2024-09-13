import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

const Banner = () => {
    return (
        <div>
           <div className="lg:flex gap-20 px-10 py-5 bg-sky-600">
            <div className="lg:w-[600px]">
                <img className="rounded-full"  src="https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/454278022_1942154246246644_1165266204321906823_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r2U6lq5Il7oQ7kNvgE-jj_8&_nc_ht=scontent.fdac20-1.fna&oh=00_AYC44PGU3TSaFzZ3-UjNjuJNihSM5VZawQr5P01M1IJhPA&oe=66D6A26C" alt="" />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-white mt-16">I am a Mern Stack Web Developer</h1>
                <p className=" text-white text-xl font-bold mb-5">Hi this is Iftikher Lutfur Abdullah . I am a mern stack web developer. I Have learned several technologies like JavaScript , React.js , Express.js , MongoDB , Firebase , JWT </p>
                <button>
                <a className="border-2 bg-green-400 py-2 px-2 font-bold rounded-md mt-4" href="">Download CV</a>
                </button>

                <div className="flex mt-12 gap-14">
                    <a href="https://www.facebook.com/Iftikherlutfur"><IoLogoFacebook/></a>
                    <a href="https://github.com/IftikherLutfur"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/iftikher-lutfur-094a41256/"><FaLinkedin />
                    </a>
                    <a href="https://x.com/iftikher2004"><FaSquareXTwitter/></a>
                </div>
            </div>
            </div>
            <div className="border-2 text-2xl flex text-center justify-between py-2 px-3">
                <img className="w-[80px] h-20" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                <img className="w-[80px] h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" alt="" />
                <img className="w-[80px] h-20" src="https://www.shutterstock.com/image-vector/node-js-framework-web-development-260nw-1740811286.jpg" alt="" />
                <img className="w-[80px] h-20" src="https://aglowiditsolutions.com/wp-content/uploads/2018/12/ExpressJS.png" alt="" />
                <img className="w-[80px] h-20" src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" alt="" />
                <img className="w-[80px] h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuawUuQCcq6fD-KpdmL4QixUOyqQqdrVNIDg&s" alt="" />
                
                
                </div> 
        </div>
    );
};

export default Banner;