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

            <div className=" ">
                <h2 className="my-16  font-bold text-4xl">{view.spotName} </h2>
                <img className="w-96 h-96 rounded-full" src={view.image} alt="" />
                
            </div>
           
          <div className="flex items-center">
          <Link to={`/viewDetails/${view._id}`}>
                <button className="btn btn-primary  w-60 mt-6 bg-slate-500">View Details</button>
            </Link>
            <h2 className="text-sm  ml-10 ">Country: <span className='text-xl font-medium text-amber-600'>{country}</span> </h2>
            {/* <h2 className="text-sm  ml-10 ">Season: <span className='text-xl font-medium text-amber-600'>{season}</span> </h2> */}
          </div>
         
            <Footer></Footer>
        </div>
    );
};

export default CountryDetails;