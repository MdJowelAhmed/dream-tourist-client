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
        <div className="container mx-auto mb-16">
            <style>
                {`
                @keyframes scrollDown {
                    0% {
                        transform: translateY(-100%);
                    }
                    50% {
                        transform: translateY(100%);
                    }
                    100% {
                        transform: translateY(-100%);
                    }
                }

                .scroll-card {
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.7);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    animation: scrollDown 5s linear infinite;
                    width: 170px;
                    text-align: center;
                }
                `}
            </style>

            <h1 className="text-5xl font-bold text-center mb-4">Upcoming European Packages</h1>
           
            <Swiper
                hashNavigation={{ watchState: true }}
                grabCursor={true}
                pagination={{ clickable: true }}
                navigation={true}
                onSwiper={(swiper) => setCardSwiper(swiper)}
                modules={[HashNavigation, Pagination, Navigation]}
                className="mySwiper"
            >
                {packages.map((pkg) => (
                    <SwiperSlide key={pkg._id} data-hash={pkg.package_name.replace(/\s+/g, '-').toLowerCase()}>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                                <div
                                    className="p-4 relative"
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
                                                <div className="relative">
                                                    <img
                                                        src={image}
                                                        alt={`${pkg.package_name} image ${index + 1}`}
                                                        className="w-full h-auto rounded-lg cursor-pointer"
                                                    />

                                                    <img
                                                        src="https://png.pngtree.com/png-clipart/20220616/original/pngtree-colorful-15-discount-offer-banner-png-image-png-image_8080507.png"
                                                        alt="discount"
                                                        className="absolute bottom-5 left-5 w-40 h-40"
                                                    />
                                                    <div className="scroll-card absolute top-16 right-3">
                                                        <p>Duration: {pkg.duration}</p>
                                                        <p>Price: ${pkg.price}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                                    <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">{pkg.package_name}</h2>
                                    <div className='flex justify-between bg-gray-200 py-2 px-4 lg:px-10 rounded-md'>
                                        <p className="text-gray-900 mb-2">Country: {pkg.country}</p>
                                        <p className="text-gray-900 mb-2">Duration: {pkg.duration}</p>
                                    </div>
                                    <div className='flex justify-between bg-gray-200 py-2 px-4 lg:px-10 rounded-md mt-2'>
                                        <p className="text-gray-900 mb-2">Price: ${pkg.price}</p>
                                        <p className="text-gray-900 mb-2"> Date: {pkg.departure_date}</p>
                                    </div>
                                    <p className="text-gray-800 mt-4 mb-2"><span className='text-xl font-semibold'>Highlights:</span></p>
                                    <ul className="list-disc flex flex-wrap gap-5 bg-gray-200 p-2 rounded-md">
                                        {pkg.highlights.map((highlight, index) => (
                                            <li key={index} className="text-white mb-1 bg-blue-600 p-1 px-2 rounded-md">{highlight}</li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-800 mt-4"><span className='text-xl font-semibold'>Description:</span> {pkg.description}</p>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default UpComing;
