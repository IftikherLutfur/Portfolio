import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const Services = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 2,
          spacing: 15,
        },
      })
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-5">THE SERVICES I PROVIDED</h1>
            <div ref={sliderRef} className="keen-slider">

      <div className="keen-slider__slide number-slide1 border-[5px] shadow-lg border-orange-500 bg-black text-white px-8 py-20 rounded-md m-4">
        <h1 className="text-xl font-bold text-center">Full Stack Web Development <small>(MERN-Stack)</small></h1>
        <li>Design and development of complete web applications using MongoDB, Express.js, React.js, and Node.js.</li>
        <li>Custom web solutions tailored to meet client needs, from user interfaces to backend architecture.</li>
        </div>
      <div className="keen-slider__slide number-slide1 border-[5px] shadow-lg border-orange-500 bg-black text-white px-8 py-20 rounded-md m-4">
        <h1 className="text-xl font-bold text-center">Frontend Development</h1>
        <li>Building responsive and dynamic user interfaces using React.js.</li>
        <li>Implementing modern design principles with HTML, CSS, and Tailwind CSS.</li>
        <li>Integration of third-party APIs and services to enhance website functionality.</li>
        </div>
      <div className="keen-slider__slide number-slide1 border-[5px] shadow-lg border-orange-500 bg-black text-white px-8 py-20 rounded-md m-4">
        <h1 className="text-xl font-bold text-center">Backend Development</h1>
        <li>Developing robust server-side applications using Node.js and Express.js.</li>
        <li>Database management and integration with MongoDB for efficient data storage and retrieval.</li>
        <li>Implementation of RESTful APIs to ensure smooth communication between the frontend and backend.</li>
        </div>
      <div className="keen-slider__slide number-slide1 border-[5px] shadow-lg border-orange-500 bg-black text-white px-8 py-20 rounded-md m-4">
        <h1 className="text-xl font-bold text-center">Authentication and Security</h1>
        <li>Implementing secure authentication systems using Firebase and JWT (JSON Web Token).</li>
        <li>Ensuring data protection through SSL/TLS encryption and secure coding practices..</li>
       
        </div>
      <div className="keen-slider__slide number-slide1 border-[5px] shadow-lg border-orange-500 bg-black text-white px-8 py-20 rounded-md m-4">
        <h1 className="text-xl font-bold text-center">E-commerce Development</h1>
        <li>Creating fully functional online shopping platforms with payment gateway integration (e.g., SSLCommerz)..</li>
        <li>Setting up product catalogs, shopping carts, and order management systems.</li>
        </div>
      <div className="keen-slider__slide number-slide1 border-[5px] shadow-lg border-orange-500 bg-black text-white px-8 py-20 rounded-md m-4">
        <h1 className="text-xl font-bold text-center">Custom Dashboards</h1>
        <li>Developing user-friendly admin and user dashboards for website management.</li>
        <li>Providing tools for monitoring and managing website content, users, and transactions.
        </li>
        </div>
      
    </div>
        </div>
    );
};

export default Services;