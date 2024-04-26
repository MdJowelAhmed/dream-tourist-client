// import { EffectFade, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        // <div className="mx-12">
        //     <div className="gadgetContainer lg:h-[600px]  bg-gradient-to-r from-[#F9F3F0] from-10% via-[#FCE7DC] via-30% to-[#F9F3F0] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]">
        //         <Swiper
        //             effect={"fade"}
        //             fadeEffect={{ crossFade: true }}
        //             slidesPerView={1}
        //             spaceBetween={30}
        //             centeredSlides={true}
        //             autoplay={{
        //                 delay: 3000,
        //                 disableOnInteraction: false,
        //             }}
        //             modules={[Autoplay, EffectFade]}
        //             className="mySwiper"
        //         >
        //             {/* slide 1 */}
        //             <SwiperSlide>
        //                 <div className="md:h-[500px] h-auto ">
        //                     <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
        //                         <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
        //                             <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
        //                                 <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
        //                                     <i className="bx bxs-hot"></i>
        //                                 </span>
        //                                 Top Brands
        //                             </p>

        //                             <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
        //                                 Discover the Future <br />
        //                                 of Electronics
        //                             </p>
        //                             <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
        //                                 Stay ahead with the latest tech trends and innovations.
        //                             </p>

        //                             <div className="flex justify-center md:justify-start">
        //                                 <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
        //                                     <span className="mr-3">
        //                                         <i className="bx bx-hive"></i>
        //                                     </span>
        //                                     Explore Now
        //                                 </button>
        //                             </div>
        //                         </div>

        //                         {/* left */}
        //                         <div className="w-full md:max-h-[400px] h-[250px] flex-1 mb-10 md:mb-0">
        //                             <img
        //                                 className="h-full object-cover w-full"
        //                                 src="https://img.freepik.com/free-vector/polluted-earth-character_1308-27802.jpg?size=626&ext=jpg&ga=GA1.1.1575549996.1710517843&semt=ais"
        //                                 alt=""
        //                             />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </SwiperSlide>
        //             {/* slide 2 */}
        //             <SwiperSlide>
        //                 <div className="md:h-[500px] h-auto">
        //                     <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
        //                         <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
        //                             <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
        //                                 <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
        //                                     <i className="bx bxs-hot"></i>
        //                                 </span>
        //                                 Top Brands
        //                             </p>

        //                             <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
        //                                 Your Trusted Source for <br />
        //                                 Quality Gadgets
        //                             </p>
        //                             <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
        //                                 Explore a wide range of cutting-edge electronic devices
        //                             </p>

        //                             <div className="flex justify-center md:justify-start">
        //                                 <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
        //                                     <span className="mr-3">
        //                                         <i className="bx bx-hive"></i>
        //                                     </span>
        //                                     Explore Now
        //                                 </button>
        //                             </div>
        //                         </div>

        //                         {/* left */}
        //                         <div className="w-full md:max-h-[400px]  flex-1 mb-10 md:mb-0">
        //                             <img
        //                                 className="md:h-full h-[250px] object-cover w-full"
        //                                 src="https://img.freepik.com/premium-photo/earth-ice-floe_1173418-904.jpg?size=626&ext=jpg&ga=GA1.1.1575549996.1710517843&semt=ais"
        //                                 alt=""
        //                             />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </SwiperSlide>
        //             {/* slide 3 */}
        //             <SwiperSlide>
        //                 <div className="md:h-[500px] h-auto">
        //                     <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
        //                         <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
        //                             <p className="font-semibold text-[#FF497C] mb-3 text-center md:text-left">
        //                                 <span className="bg-[#FF497C] text-white mr-3 text-xl px-2 py-1 rounded-full">
        //                                     <i className="bx bxs-hot"></i>
        //                                 </span>
        //                                 Top Brands
        //                             </p>

        //                             <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
        //                                 Shop Smart, Shop <br /> TechWonders

        //                             </p>
        //                             <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
        //                                 Find the perfect tech solutions for your lifestyle.
        //                             </p>

        //                             <div className="flex justify-center md:justify-start">
        //                                 <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
        //                                     <span className="mr-3">
        //                                         <i className="bx bx-hive"></i>
        //                                     </span>
        //                                     Explore Now
        //                                 </button>
        //                             </div>
        //                         </div>

        //                         {/* left */}
        //                         <div className="w-full max-h-[400px] flex-1 mb-10 md:mb-0">
        //                             <img
        //                                 className="h-full object-cover w-full"
        //                                 src="https://img.freepik.com/free-photo/water-bottles-dry-soil-with-dry-cracked-soil-global-warming_1150-16327.jpg?size=626&ext=jpg&ga=GA1.1.1575549996.1710517843&semt=ais"
        //                                 alt=""
        //                             />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </SwiperSlide>
        //         </Swiper>

        //     </div>
        // </div>
        // style={{backgroundImage: 'url(https://img.freepik.com/free-vector/creative-waves-blue-background-dynamic-shapes-composition-vector-illustration_1142-13484.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1712880000&semt=ais)'}}
        
        <div className=' bg-[#F4F3F0] p-8 md:h-[600px] rounded-3xl' >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                 {/* <SwiperSlide>Slide 2</SwiperSlide> */}

                 <SwiperSlide>
                    <div className='flex gap-5'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>Would you like Tourist??For You</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'> Best Sea Beach Saint martin</h2>
                            <p className=''>Saint Martin, an island in the Caribbean Sea, boasts some of the most picturesque and pristine beaches in the world. Its coastline is adorned with soft white sands gently lapped by crystal-clear .</p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://www.shutterstock.com/image-photo/tropical-st-martin-beach-sand-600nw-1751509040.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

               
                 {/* <SwiperSlide>Slide 3</SwiperSlide> */}

                 <SwiperSlide>
                    <div className='flex gap-5'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>Would you like Tourist??For You</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'>A Beautyfull Natural Rangamati </h2>
                            <p className='text-sm'>Rangamati, a scenic district in southeastern Bangladesh, is dotted with captivating tourist spots that showcase the region's natural beauty and cultural heritage. Among its highlights is the breathtaking Kaptai Lake, </p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://t4.ftcdn.net/jpg/03/36/71/29/360_F_336712931_9oC9QXONCoXpnoF5Us34GfSCvy5vWZ6W.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                <SwiperSlide>
                    <div className='flex gap-5'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>Would you like Tourist??For You</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'>This is Cox's Bazar Sea Beach </h2>
                            <p className='text-sm'>Cox's Bazar, situated along the southeastern coast of Bangladesh, is home to the world's longest natural sea beach, clear blue waters, and serene ambiance. Visitors to Cox's Bazar can indulge in a range of activities, from relaxing </p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://img.freepik.com/free-photo/look-from-turquoise-water-along-golden-beach-somewhere-dominican-republic_1304-5312.jpg?t=st=1714070224~exp=1714073824~hmac=2f6bd87d49a8880ad962f695fb292ff715bf1b51a3790dc4b3a84c5b6c9378c5&w=740" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
               
                {/* <SwiperSlide>Slide 4</SwiperSlide> */}
                <SwiperSlide>
                    <div className='flex gap-5'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>Would you like Tourist?? For You</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'>This is Bangkok </h2>
                            <p className='text-sm '>Bangkok, the vibrant capital of Thailand, is a city where ancient traditions blend seamlessly with modernity. Renowned for its bustling street life, ornate shrines, and vibrant markets.is a city where ancient</p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://img.freepik.com/free-photo/wat-arun-temple-twilight-bangkok-thailand_335224-772.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;