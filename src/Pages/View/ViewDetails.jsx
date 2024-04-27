import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/ShareComponents/Navbar";
import Footer from "../../Components/ShareComponents/Footer/Footer";
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
// import { MdLocationPin } from "react-icons/md";


const ViewDetails = () => {
    const details = useLoaderData()
    const { id } = useParams()
    const view = details.find(item => item._id == id)
    const { image, spotName, country, location, short, average, season, travel, total } = view;
    console.log(view)
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen bg-amber-50 rounded-3xl">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={image} className="w-[560px] h-[500px] rounded-lg shadow-2xl" />

                        <div >
                            <h1 className="text-4xl font-semibold ml-4 mb-5" data-aos="flip-left"
                                data-aos-easing="ease-in-cubic"
                                data-aos-duration="3000">Spot Name : <span className="font-bold text-[#AC091D]">{spotName}</span></h1>
                                 <p className="py-6 mx-4"><span className="text-xl font-medium">Short Description : </span> <span>{short}</span></p>
                            <div className="space-y-2 lg:mx-12">
                                <div className='flex justify-between'>
                                    <div className="flex justify-center items-center">
                                        <p>
                                            {/* <MdLocationPin /> */}
                                        </p>
                                        <h2 className="text-sm  "> Location: <span className='text-xl font-medium text-blue-600'>{location}</span> </h2>
                                    </div>

                                    <h2 className="text-sm  ">season like: <span className='text-xl font-medium text-amber-600'>{season}</span> </h2>
                                </div>
                                <div className='flex justify-between'>
                                    <h2 className="text-sm  ">Country: <span className='text-xl font-medium text-blue-900'>{country}</span> </h2>
                                    <h2 className="text-sm  ">totalVisitorsPerYear: <span className='text-xl font-medium text-amber-900'>{total}</span> </h2>
                                </div>
                                <div className='flex justify-between'>
                                    <h2 className="text-sm  ">Average Cost: <span className='text-xl font-medium text-blue-900'>{average}</span> </h2>
                                    <h2 className="text-sm  "> Travel Time: <span className='text-xl font-medium text-amber-900'>{travel}</span> </h2>
                                </div>
                            </div>
                           
                            <button className="btn btn-primary w-full mt-8">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ViewDetails;