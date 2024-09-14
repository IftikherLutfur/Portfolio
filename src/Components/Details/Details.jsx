import image from './image.jpg'
const Details = () => {
    return (
        <div className='grid lg:grid-cols-2 mx-5 my-3'>
            <div className='lg:ml-28'> <img className='w-[350px] h-[350px] lg:ml-24 ml-10' src={image} alt="" /></div>
            <div className='mt-10 space-y-2 ml-10'>
                <h1 className='text-2xl font-semibold'>Name: <span className='font-bold'>Iftikher Lutfur Abdullah</span></h1>
                <p className='text-xl'>Profession: <span className='font-bold'>Web Developer</span></p>
                <p className='text-xl'>Contact: <span className='font-bold'>+8801966-095405</span></p>
                <p className='text-xl'>Location: <span className='font-bold'>Sylhet , Bangladesh</span></p>
                <p className='text-xl'> Date of Birth:<span className='font-bold'>10-10-2005</span></p>
                </div>
        </div>
    );
};

export default Details;