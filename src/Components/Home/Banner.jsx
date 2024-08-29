
const Banner = () => {
    return (
        <div>
           <div className="lg:flex gap-20 px-10 py-5 bg-sky-600">
            <div className="lg:w-[600px]">
                <img className="rounded-full"  src="https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/454278022_1942154246246644_1165266204321906823_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r2U6lq5Il7oQ7kNvgE-jj_8&_nc_ht=scontent.fdac20-1.fna&oh=00_AYC44PGU3TSaFzZ3-UjNjuJNihSM5VZawQr5P01M1IJhPA&oe=66D6A26C" alt="" />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-white mt-16">I am a Mern Stack Web Developer</h1>
                <p className=" text-white text-xl font-bold mb-5">Hi this is Iftikher Lutfur Abdullah . I am a mern stack web developer. I've learned several technologies like JavaScript , React.js , Express.js , MongoDB , Firebase , JWT </p>
                <button>
                <a className="border-2 bg-green-400 py-2 px-2 font-bold rounded-md mt-4" href="">Download CV</a>
                </button>

                <div className="flex mt-12 gap-14">
                    <a href="">Facebook</a>
                    <a href="">GitHub</a>
                    <a href="">Linked In</a>
                    <a href="">Gmail</a>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default Banner;