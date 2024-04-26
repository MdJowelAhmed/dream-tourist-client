import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/ShareComponents/Footer/Footer";
import Navbar from "../../Components/ShareComponents/Navbar";
import Banner from "./Banner";
import SpotCard from "./SpotCard";


const Home = () => {
    const loadedSpot=useLoaderData()
    console.log(loadedSpot)
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className=" my-20 ">
                <div>
                    <h2 className="text-5xl font-semibold text-center mb-5"> Our Tourists Spot</h2>
                    <p className="mb-16 text-center ">We organize travel to many countries in South Asia.  For example,<br /> we have services in many countries including Bangladesh, <br /> India, Thailand, Indonesia, Pakistan, Malaysia. </p>
                </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {
                loadedSpot.map(spot=> <SpotCard key={spot._id} spot={spot}></SpotCard>)
              }
             </div>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;