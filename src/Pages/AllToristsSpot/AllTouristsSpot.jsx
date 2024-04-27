
import Navbar from '../../Components/ShareComponents/Navbar';
import Footer from '../../Components/ShareComponents/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import AllSpot from './AllSpot';

const AllTouristsSpot = () => {
    const loaderSpot=useLoaderData()
    console.log(loaderSpot)
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    loaderSpot.map(spot => <AllSpot key={spot._id} spot={spot}></AllSpot>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllTouristsSpot;