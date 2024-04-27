import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/ShareComponents/Navbar";
import Footer from "../../Components/ShareComponents/Footer/Footer";
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'


const ViewDetails = () => {
    const details = useLoaderData()
    const { id } = useParams()
    const view = details.find(item => item._id == id)
    const { _id, image, spotName, country, location, short, average, season, travel, total, userName, userEmail } = view
    // console.log(view)
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
                        <div>
                            <h1 className="text-4xl font-semibold" data-aos="flip-left"
                                data-aos-easing="ease-in-cubic"
                                data-aos-duration="3000">Spot Name : <span className="font-bold text-[#AC091D]">{spotName}</span></h1>
                            <div>
                                <div className='flex justify-between'>
                                    <h2 className="text-sm  ">Location: <span className='text-xl font-medium text-blue-600'>{location}</span> </h2>
                                    <h2 className="text-sm  ">season like: <span className='text-xl font-medium text-amber-600'>{season}</span> </h2>
                                </div>
                                <div className='flex justify-between'>
                                    <h2 className="text-sm  ">Country: <span className='text-xl font-medium text-blue-900'>{country}</span> </h2>
                                    <h2 className="text-sm  ">totalVisitorsPerYear: <span className='text-xl font-medium text-amber-900'>{total}</span> </h2>
                                </div>
                            </div>
                            <p className="py-6 "><span className="text-xl font-medium">Short Description : </span> <span>{short}</span></p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ViewDetails;