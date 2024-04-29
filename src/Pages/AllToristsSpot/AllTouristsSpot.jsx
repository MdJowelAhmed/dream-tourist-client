

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
  
    const [sortBy, setSortBy] = useState(loaderSpot)
    console.log(sortBy)
    // useEffect(() => {
    //     fetch(`http://localhost:5000/addSpot`)
    //         .the(res => res.json())
    //         .then(data => setSortBy(data))
           
    // }, [])

    const handleSort =  (sort)=> {
            console.log(sort)
            
        if (sort === "acc") {
            const acc=loaderSpot.sort((a, b) => a.average - b.average)
            console.log(acc)
            setSortBy(acc)
            // console.log()
            // return loaderSpot.sort((a, b) => a.average - b.average);
        }
        if (sort === "des") {
            setSortBy(loaderSpot.sort((a, b) => b.average - a.average))
            // return loaderSpot.sort((a, b) => b.average - a.average);
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="dropdown dropdown-bottom  mb-6">
                    <div tabIndex={0} role="button" className="btn m-1">Sort</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li > <button onClick={() => handleSort("acc")} className='btn'> Ascending</button> </li>
                        <li > <button onClick={() => handleSort("des")} className='btn'>Descending</button> </li>
                    </ul>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    className=" mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper> */}
                {
                    sortBy.map(spot => <AllSpot key={spot._id} spot={spot}></AllSpot>)

                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllTouristsSpot;