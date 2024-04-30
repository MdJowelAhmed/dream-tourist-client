

import Navbar from '../../Components/ShareComponents/Navbar';
import Footer from '../../Components/ShareComponents/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import AllSpot from './AllSpot';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import Swiper from 'swiper';
import { useEffect, useState } from 'react';

const AllTouristsSpot = () => {
    const loaderSpot = useLoaderData()
    const [sortOrder, setSortOrder] = useState('ascending')
    const [sortedItems, setSortedItems] = useState([...loaderSpot]);
    console.log(sortedItems)
  
    useEffect(() => {
        const sorted = [...loaderSpot].sort((a, b) => {
          if (sortOrder === 'ascending') {
            return a.average - b.average;
          } else {
            return b.average - a.average;
          }
        });
        setSortedItems(sorted);
      }, [sortOrder,loaderSpot]);
    const handleSort =()=> {

        setSortOrder('ascending');
        
        
    }

    const sortDescending = () => {
        setSortOrder('descending');
      };

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="dropdown dropdown-bottom  mb-6">
                    <div tabIndex={0} role="button" className="btn m-1">Sort</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li > <button onClick={ handleSort} className='btn'> Ascending</button> </li>
                        <li > <button onClick={sortDescending} className='btn'>Descending</button> </li>
                    </ul>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                
                {
                    sortedItems.map(spot => <AllSpot key={spot._id} spot={spot}></AllSpot>)

                }
                 <ul>
        
      </ul>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllTouristsSpot;