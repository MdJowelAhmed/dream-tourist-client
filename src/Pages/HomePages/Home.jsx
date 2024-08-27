import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/ShareComponents/Footer/Footer";
import Navbar from "../../Components/ShareComponents/Navbar";
import Banner from "./Banner";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Countries from "./Countries";
import MustNeed from "./MustNeed";
import Happy from "../../Components/Happy.jsx/Happy";
import Team from "./Team/Team";
import Newsletter from "./newsLetter/NewsLetter";
import Reviews from "./Reviews/Reviews";
import { Helmet } from "react-helmet-async";
import UpComing from "./upComing/UpComing";
import AllSpot from "../AllToristsSpot/AllSpot";


const Home = () => {
    const loadedSpot=useLoaderData()
    // console.log(loadedSpot)
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <Helmet>
                <title>Dream Tourist | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className=" my-20 ">
                <div>
                    <h2 className="text-5xl font-semibold text-center mb-5 text-[#339FFF]"> Our Tourists Spot</h2>
                    <p className="mb-16 text-center text-[#690B7A]">We organize travel to many countries in South Asia.  For example,<br /> we have services in many countries including Bangladesh, <br /> India, Thailand, Indonesia, Pakistan, Malaysia. </p>
                </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"  data-aos="zoom-out-up"  data-aos-duration="3000">
             {
                loadedSpot.slice(0,6).map(spot=> <AllSpot key={spot._id} spot={spot}></AllSpot>)
              }
             </div>

            </div>
            <UpComing></UpComing>
            <Team></Team>
            <Reviews></Reviews>
            <Newsletter ></Newsletter>
            <MustNeed></MustNeed>
            <Countries></Countries>
            <Happy></Happy>
           <Footer></Footer>
        </div>
    );
};

export default Home;