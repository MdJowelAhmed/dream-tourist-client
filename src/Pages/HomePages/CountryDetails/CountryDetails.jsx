import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../../Components/ShareComponents/Navbar";
import Footer from "../../../Components/ShareComponents/Footer/Footer";


const CountryDetails = () => {
    const countryLoaded = useLoaderData()
    const { country } = useParams()
    const view = countryLoaded.find(item => item.country == country)
    console.log(countryLoaded)
    return (
        <div>
            <Navbar></Navbar>

            <div className="flex ">
                <h2 className="my-20 text-center font-bold text-4xl">{view.spotName} </h2>
                <img className="w-96 h-96 rounded-full" src={view.image} alt="" />
            </div>
            <div className="p-2 mt-3">
                <div className='flex justify-between'>
                    <h2 className="text-sm  ">Location: <span className='text-xl font-medium text-blue-600'>{location}</span> </h2>
                    <h2 className="text-sm  ">Cost: <span className='text-xl font-medium text-amber-600'>{average}</span> </h2>
                </div>
            </div>
            <Link to={`/viewDetails/${_id}`}>
                <button className="btn btn-primary  w-60 bg-slate-500">View Details</button>
            </Link>

            <Footer></Footer>
        </div>
    );
};

export default CountryDetails;