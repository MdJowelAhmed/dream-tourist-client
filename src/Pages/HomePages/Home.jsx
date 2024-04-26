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
            <div>
              {
                loadedSpot.map(spot=> <SpotCard key={spot._id} spot={spot}></SpotCard>)
              }
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;