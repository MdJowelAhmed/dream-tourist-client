

import Navbar from '../../Components/ShareComponents/Navbar';
import Footer from '../../Components/ShareComponents/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import AllSpot from './AllSpot';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import Swiper from 'swiper';

const AllTouristsSpot = () => {
    const loaderSpot = useLoaderData()
    console.log(loaderSpot)

    return (
        <div>
            <Navbar></Navbar>
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
                    loaderSpot.map(spot => <AllSpot key={spot._id} spot={spot}></AllSpot>)

                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllTouristsSpot;