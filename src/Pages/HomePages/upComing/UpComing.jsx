import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/hash-navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Navigation, HashNavigation } from 'swiper/modules';

const UpComing = () => {
    const [packages, setPackages] = useState([]);
    const [imageSwiper, setImageSwiper] = useState(null);
    const [cardSwiper, setCardSwiper] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    const handleMouseEnter = () => {
        if (cardSwiper) cardSwiper.disable();
    };

    const handleMouseLeave = () => {
        if (cardSwiper) cardSwiper.enable();
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Upcoming European Packages</h1>

            {/* Full Card Swiper */}
            <Swiper
                hashNavigation={{ watchState: true }}
                grabCursor={true}
                pagination={{ clickable: true }}
                navigation={true}
                onSwiper={(swiper) => setCardSwiper(swiper)}
                modules={[HashNavigation, Pagination, Navigation]}
                className="mySwiper"
            >
                {packages.map((pkg, index) => (
                    <SwiperSlide key={pkg._id} data-hash={pkg.package_name.replace(/\s+/g, '-').toLowerCase()}>
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">

                            {/* Card Information Section */}
                            <div className="w-full md:w-1/2 p-4">
                                <h2 className="text-xl font-bold mb-4">{pkg.package_name}</h2>
                                <div className='flex justify-between'>
                                    <p className="text-gray-700 mb-2">Country: {pkg.country}</p>
                                    <p className="text-gray-700 mb-2">Duration: {pkg.duration}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className="text-gray-700 mb-2">Price: ${pkg.price}</p>
                                    <p className="text-gray-700 mb-2">Departure Date: {pkg.departure_date}</p>
                                </div>
                                <p className="text-gray-700 mb-4">Highlights:</p>
                                <ul className="list-disc pl-5">
                                    {pkg.highlights.map((highlight, index) => (
                                        <li key={index} className="text-gray-700 mb-1">{highlight}</li>
                                    ))}
                                </ul>
                                <p className="text-gray-700 mt-4">{pkg.description}</p>
                            </div>

                            {/* Image Slider Section */}
                            <div
                                className="w-full md:w-1/2 p-4"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Swiper
                                    effect="cube"
                                    grabCursor={true}
                                    cubeEffect={{
                                        shadow: true,
                                        slideShadows: true,
                                        shadowOffset: 20,
                                        shadowScale: 0.94,
                                    }}
                                    pagination={{ clickable: true }}
                                    modules={[EffectCube, Pagination]}
                                    className="innerSwiper"
                                    onSwiper={setImageSwiper}
                                >
                                    {pkg.images.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={image}
                                                alt={`${pkg.package_name} image ${index + 1}`}
                                                className="w-full h-auto rounded-lg cursor-pointer"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default UpComing;
